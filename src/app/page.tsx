'use client';

import React, { useState, useEffect, Component, ErrorInfo, ReactNode } from 'react';
import { CoverPageData } from '../types/coverPage';
import { DEFAULT_COVER_DATA } from '../utils/sampleData';
import { Header } from '../components/Header';
import { HeaderSection } from '../components/FormSections/HeaderSection';
import { DocInfoSection } from '../components/FormSections/DocInfoSection';
import { TeacherSection } from '../components/FormSections/TeacherSection';
import { StudentSection } from '../components/FormSections/StudentSection';
import { AppearanceSection } from '../components/FormSections/AppearanceSection';
import { CoverPagePreview } from '../components/Preview/CoverPagePreview';
import { SavedProfilesModal } from '../components/SavedProfilesModal';
import { DeveloperModal } from '../components/DeveloperModal';
import { DeveloperSection } from '../components/DeveloperSection';
import { Edit3, Eye, RotateCcw, AlertTriangle } from 'lucide-react';

const DRAFT_STORAGE_KEY = 'ustc_cover_page_draft_v1';

interface ErrorBoundaryProps {
  children: ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
  error?: Error;
}

class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  public state: ErrorBoundaryState = {
    hasError: false,
  };

  public static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return { hasError: true, error };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Uncaught error caught by boundary:', error, errorInfo);
  }

  private handleResetState = () => {
    try {
      localStorage.clear();
    } catch {}
    window.location.reload();
  };

  public render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-slate-900 text-white flex flex-col items-center justify-center p-6 text-center">
          <div className="bg-slate-800 p-8 rounded-2xl border border-slate-700 max-w-md shadow-2xl flex flex-col items-center">
            <AlertTriangle size={48} className="text-amber-400 mb-4" />
            <h2 className="text-xl font-bold mb-2">Something went wrong</h2>
            <p className="text-xs text-slate-400 mb-6">
              A temporary client-side error occurred. Clicking below will reset your draft and restore default settings cleanly.
            </p>
            <button
              onClick={this.handleResetState}
              className="px-6 py-2.5 bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs rounded-xl shadow-lg flex items-center space-x-2 transition"
            >
              <RotateCcw size={16} />
              <span>Reset &amp; Reload App</span>
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

function MainApp() {
  const [data, setData] = useState<CoverPageData>(DEFAULT_COVER_DATA);
  const [isSaved, setIsSaved] = useState<boolean>(true);
  const [activeMobileTab, setActiveMobileTab] = useState<'form' | 'preview'>('form');
  const [activeFormTab, setActiveFormTab] = useState<'all' | 'header' | 'doc' | 'teacher' | 'student' | 'appearance' | 'dev'>('all');
  const [isProfilesOpen, setIsProfilesOpen] = useState<boolean>(false);
  const [isDeveloperOpen, setIsDeveloperOpen] = useState<boolean>(false);
  const [darkMode, setDarkMode] = useState<boolean>(false);
  const [isMounted, setIsMounted] = useState<boolean>(false);

  // Load saved draft from localStorage safely on mount
  useEffect(() => {
    setIsMounted(true);
    try {
      const savedDraft = localStorage.getItem(DRAFT_STORAGE_KEY);
      if (savedDraft) {
        const parsed = JSON.parse(savedDraft);
        if (parsed && typeof parsed === 'object' && !Array.isArray(parsed)) {
          setData({
            ...DEFAULT_COVER_DATA,
            ...parsed,
          });
        }
      }

      if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        setDarkMode(true);
      }
    } catch (e) {
      console.error('Failed to restore saved draft from localStorage:', e);
      try {
        localStorage.removeItem(DRAFT_STORAGE_KEY);
      } catch {}
    }
  }, []);

  // Save to localStorage on change with debounce
  useEffect(() => {
    if (!isMounted) return;

    setIsSaved(false);
    const timeout = setTimeout(() => {
      try {
        localStorage.setItem(DRAFT_STORAGE_KEY, JSON.stringify(data));
        setIsSaved(true);
      } catch (e) {
        console.error('Failed to save draft:', e);
      }
    }, 500);

    return () => clearTimeout(timeout);
  }, [data, isMounted]);

  // Sync dark mode class to html element
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  const handleFieldChange = (field: keyof CoverPageData, value: any) => {
    setData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleLoadSample = (sample: Partial<CoverPageData>) => {
    setData((prev) => ({
      ...prev,
      ...sample,
    }));
  };

  const handleResetForm = () => {
    if (window.confirm('Are you sure you want to reset all form inputs to default values?')) {
      setData(DEFAULT_COVER_DATA);
      try {
        localStorage.removeItem(DRAFT_STORAGE_KEY);
      } catch {}
    }
  };

  const handleLoadProfile = (profileData: CoverPageData) => {
    setData(profileData);
  };

  if (!isMounted) {
    return (
      <div className="h-screen w-full flex items-center justify-center bg-slate-900 text-white">
        <div className="flex flex-col items-center space-y-3">
          <div className="w-10 h-10 border-4 border-blue-500 border-t-transparent rounded-full animate-spin" />
          <p className="text-xs font-semibold tracking-widest text-slate-300">
            LOADING USTC COVER PAGE GENERATOR...
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className={`min-h-screen flex flex-col ${darkMode ? 'dark' : ''}`}>
      
      {/* App Top Header */}
      <Header
        data={data}
        onLoadSample={handleLoadSample}
        onReset={handleResetForm}
        onOpenProfiles={() => setIsProfilesOpen(true)}
        onOpenDeveloper={() => setIsDeveloperOpen(true)}
        isSaved={isSaved}
        darkMode={darkMode}
        onToggleDarkMode={() => setDarkMode(!darkMode)}
      />

      {/* Mobile Screen Navigation Tabs (Edit vs Live Preview) */}
      <div className="lg:hidden bg-white dark:bg-slate-900 border-b border-gray-200 dark:border-slate-800 p-2 flex space-x-2 sticky top-[57px] z-20 print:hidden">
        <button
          onClick={() => setActiveMobileTab('form')}
          className={`flex-1 py-2.5 rounded-lg text-xs font-bold flex items-center justify-center space-x-2 transition ${
            activeMobileTab === 'form'
              ? 'bg-blue-600 text-white shadow-sm'
              : 'bg-gray-100 dark:bg-slate-800 text-gray-700 dark:text-gray-300'
          }`}
        >
          <Edit3 size={16} />
          <span>1. Edit Details</span>
        </button>
        <button
          onClick={() => setActiveMobileTab('preview')}
          className={`flex-1 py-2.5 rounded-lg text-xs font-bold flex items-center justify-center space-x-2 transition ${
            activeMobileTab === 'preview'
              ? 'bg-blue-600 text-white shadow-sm'
              : 'bg-gray-100 dark:bg-slate-800 text-gray-700 dark:text-gray-300'
          }`}
        >
          <Eye size={16} />
          <span>2. Live Preview &amp; Export</span>
        </button>
      </div>

      {/* Main Split Layout: Left Form / Right Preview */}
      <main className="flex-1 flex flex-col lg:flex-row overflow-hidden max-w-[1920px] w-full mx-auto">
        
        {/* Left Form Panel */}
        <div
          className={`w-full lg:w-[480px] xl:w-[540px] 2xl:w-[600px] border-r border-gray-200 dark:border-slate-800 flex flex-col bg-slate-50 dark:bg-slate-900 print:hidden ${
            activeMobileTab === 'form' ? 'block' : 'hidden lg:flex'
          }`}
        >
          {/* Quick Section Filter Bar */}
          <div className="bg-white dark:bg-slate-800/80 px-4 py-2 border-b border-gray-200 dark:border-slate-800 flex items-center space-x-1 overflow-x-auto text-xs font-medium no-scrollbar">
            <button
              onClick={() => setActiveFormTab('all')}
              className={`px-3 py-1 rounded-full whitespace-nowrap transition ${
                activeFormTab === 'all'
                  ? 'bg-blue-600 text-white font-bold'
                  : 'bg-gray-100 dark:bg-slate-700 text-gray-600 dark:text-gray-300 hover:bg-gray-200'
              }`}
            >
              All Sections
            </button>
            <button
              onClick={() => setActiveFormTab('header')}
              className={`px-3 py-1 rounded-full whitespace-nowrap transition ${
                activeFormTab === 'header'
                  ? 'bg-blue-600 text-white font-bold'
                  : 'bg-gray-100 dark:bg-slate-700 text-gray-600 dark:text-gray-300 hover:bg-gray-200'
              }`}
            >
              Institute &amp; Logo
            </button>
            <button
              onClick={() => setActiveFormTab('doc')}
              className={`px-3 py-1 rounded-full whitespace-nowrap transition ${
                activeFormTab === 'doc'
                  ? 'bg-blue-600 text-white font-bold'
                  : 'bg-gray-100 dark:bg-slate-700 text-gray-600 dark:text-gray-300 hover:bg-gray-200'
              }`}
            >
              Course Info
            </button>
            <button
              onClick={() => setActiveFormTab('teacher')}
              className={`px-3 py-1 rounded-full whitespace-nowrap transition ${
                activeFormTab === 'teacher'
                  ? 'bg-blue-600 text-white font-bold'
                  : 'bg-gray-100 dark:bg-slate-700 text-gray-600 dark:text-gray-300 hover:bg-gray-200'
              }`}
            >
              Teacher
            </button>
            <button
              onClick={() => setActiveFormTab('student')}
              className={`px-3 py-1 rounded-full whitespace-nowrap transition ${
                activeFormTab === 'student'
                  ? 'bg-blue-600 text-white font-bold'
                  : 'bg-gray-100 dark:bg-slate-700 text-gray-600 dark:text-gray-300 hover:bg-gray-200'
              }`}
            >
              Student
            </button>
            <button
              onClick={() => setActiveFormTab('appearance')}
              className={`px-3 py-1 rounded-full whitespace-nowrap transition ${
                activeFormTab === 'appearance'
                  ? 'bg-blue-600 text-white font-bold'
                  : 'bg-gray-100 dark:bg-slate-700 text-gray-600 dark:text-gray-300 hover:bg-gray-200'
              }`}
            >
              Style &amp; Theme
            </button>
            <button
              onClick={() => setActiveFormTab('dev')}
              className={`px-3 py-1 rounded-full whitespace-nowrap transition ${
                activeFormTab === 'dev'
                  ? 'bg-indigo-600 text-white font-bold'
                  : 'bg-indigo-50 dark:bg-indigo-950/60 text-indigo-700 dark:text-indigo-300 hover:bg-indigo-100'
              }`}
            >
              Developer Info
            </button>
          </div>

          {/* Form Scrollable Area */}
          <div className="flex-1 overflow-y-auto p-4 sm:p-5 space-y-5">
            {(activeFormTab === 'all' || activeFormTab === 'header') && (
              <HeaderSection data={data} onChange={handleFieldChange} />
            )}

            {(activeFormTab === 'all' || activeFormTab === 'doc') && (
              <DocInfoSection data={data} onChange={handleFieldChange} />
            )}

            {(activeFormTab === 'all' || activeFormTab === 'teacher') && (
              <TeacherSection data={data} onChange={handleFieldChange} />
            )}

            {(activeFormTab === 'all' || activeFormTab === 'student') && (
              <StudentSection data={data} onChange={handleFieldChange} />
            )}

            {(activeFormTab === 'all' || activeFormTab === 'appearance') && (
              <AppearanceSection data={data} onChange={handleFieldChange} />
            )}

            {(activeFormTab === 'all' || activeFormTab === 'dev') && (
              <DeveloperSection />
            )}
          </div>
        </div>

        {/* Right Preview Panel */}
        <div
          className={`flex-1 flex flex-col bg-slate-200 dark:bg-slate-950 overflow-hidden ${
            activeMobileTab === 'preview' ? 'block' : 'hidden lg:flex'
          }`}
        >
          <CoverPagePreview data={data} onUpdate={setData} />
        </div>

      </main>

      {/* Saved Profiles Modal */}
      <SavedProfilesModal
        isOpen={isProfilesOpen}
        onClose={() => setIsProfilesOpen(false)}
        currentData={data}
        onLoadProfile={handleLoadProfile}
      />

      {/* Meet Developer Modal */}
      <DeveloperModal
        isOpen={isDeveloperOpen}
        onClose={() => setIsDeveloperOpen(false)}
      />
    </div>
  );
}

export default function Home() {
  return (
    <ErrorBoundary>
      <MainApp />
    </ErrorBoundary>
  );
}
