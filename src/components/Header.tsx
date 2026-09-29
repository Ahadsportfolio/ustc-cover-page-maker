import React, { useState, useEffect, useRef } from 'react';
import { SAMPLE_PROFILES } from '../utils/sampleData';
import { CoverPageData } from '../types/coverPage';
import { USTCLogo } from './USTCLogo';
import { Sparkles, RotateCcw, Moon, Sun, BookmarkPlus, Code2 } from 'lucide-react';

interface Props {
  data: CoverPageData;
  onLoadSample: (sampleData: Partial<CoverPageData>) => void;
  onReset: () => void;
  onOpenProfiles: () => void;
  onOpenDeveloper: () => void;
  isSaved: boolean;
  darkMode: boolean;
  onToggleDarkMode: () => void;
}

export const Header: React.FC<Props> = ({
  data,
  onLoadSample,
  onReset,
  onOpenProfiles,
  onOpenDeveloper,
  isSaved,
  darkMode,
  onToggleDarkMode
}) => {
  const [isPresetsOpen, setIsPresetsOpen] = useState(false);
  const presetsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (presetsRef.current && !presetsRef.current.contains(e.target as Node)) {
        setIsPresetsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <header className="bg-white/90 dark:bg-slate-900/90 backdrop-blur-md border-b border-gray-200 dark:border-slate-800 sticky top-0 z-30 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex items-center justify-between">
        
        {/* Branding Logo & Title */}
        <div className="flex items-center space-x-3">
          <div className="bg-blue-900 dark:bg-slate-800 p-1.5 rounded-xl shadow-md border border-blue-800 dark:border-slate-700">
            <USTCLogo
              logoType="ustc_default"
              logoSize={36}
              primaryColor="#FFFFFF"
              accentColor="#D4AF37"
            />
          </div>
          <div>
            <div className="flex items-center space-x-2">
              <h1 className="text-base sm:text-lg font-extrabold tracking-tight text-gray-900 dark:text-white">
                USTC Cover Page Generator
              </h1>
              <span className="hidden sm:inline-block px-2 py-0.5 text-[10px] font-bold uppercase tracking-widest bg-blue-100 text-blue-800 dark:bg-blue-950 dark:text-blue-300 rounded-full border border-blue-200 dark:border-blue-800">
                Official Standard
              </span>
            </div>
            <p className="text-[11px] text-gray-500 dark:text-gray-400 font-medium">
              University of Science and Technology Chittagong
            </p>
          </div>
        </div>

        {/* Header Actions */}
        <div className="flex items-center space-x-2 sm:space-x-3">
          
          {/* Draft Auto-Saved Indicator */}
          <div
            className={`hidden md:flex items-center space-x-1 px-2.5 py-1 rounded-full text-xs font-semibold border transition ${
              isSaved
                ? 'bg-emerald-50 text-emerald-700 border-emerald-200 dark:bg-emerald-950/40 dark:text-emerald-300 dark:border-emerald-900'
                : 'bg-amber-50 text-amber-700 border-amber-200 dark:bg-amber-950/40 dark:text-amber-300 dark:border-amber-900'
            }`}
          >
            <span className={`w-2 h-2 rounded-full ${isSaved ? 'bg-emerald-500 animate-pulse' : 'bg-amber-500'}`} />
            <span>{isSaved ? 'Saved to Draft' : 'Unsaved Changes'}</span>
          </div>

          {/* Preset Sample Selector Dropdown */}
          <div className="relative" ref={presetsRef}>
            <button
              onClick={() => setIsPresetsOpen((prev) => !prev)}
              className="px-3 py-1.5 rounded-lg bg-blue-50 dark:bg-blue-950/60 hover:bg-blue-100 dark:hover:bg-blue-900/60 text-blue-700 dark:text-blue-300 text-xs font-bold flex items-center space-x-1.5 border border-blue-200 dark:border-blue-900 transition"
            >
              <Sparkles size={14} className="text-blue-600 dark:text-blue-400" />
              <span className="hidden sm:inline">Sample Presets</span>
            </button>
            {isPresetsOpen && (
              <div className="absolute right-0 top-full mt-1 w-64 bg-white dark:bg-slate-800 rounded-xl shadow-xl border border-gray-200 dark:border-slate-700 p-2 z-50 animate-in fade-in-50 zoom-in-95 duration-100">
                <div className="text-[11px] font-bold uppercase tracking-wider text-gray-400 px-2 py-1 mb-1">
                  Fill Sample Data
                </div>
                {SAMPLE_PROFILES.map((profile, i) => (
                  <button
                    key={i}
                    onClick={() => {
                      onLoadSample(profile.data);
                      setIsPresetsOpen(false);
                    }}
                    className="w-full text-left px-2.5 py-2 text-xs font-medium text-gray-700 dark:text-gray-200 hover:bg-blue-50 dark:hover:bg-slate-700 rounded-lg transition"
                  >
                    {profile.name}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Profiles Manager */}
          <button
            onClick={onOpenProfiles}
            className="px-3 py-1.5 rounded-lg bg-gray-100 dark:bg-slate-800 hover:bg-gray-200 dark:hover:bg-slate-700 text-gray-700 dark:text-gray-200 text-xs font-semibold flex items-center space-x-1.5 border border-gray-200 dark:border-slate-700 transition"
            title="Saved Profiles"
          >
            <BookmarkPlus size={14} />
            <span className="hidden sm:inline">Saved Profiles</span>
          </button>

          {/* Meet Developer Button */}
          <button
            onClick={onOpenDeveloper}
            className="px-3 py-1.5 rounded-lg bg-indigo-50 dark:bg-indigo-950/60 hover:bg-indigo-100 text-indigo-700 dark:text-indigo-300 text-xs font-bold flex items-center space-x-1.5 border border-indigo-200 dark:border-indigo-800 transition shadow-sm"
            title="Meet the Developer"
          >
            <Code2 size={14} className="text-indigo-600 dark:text-indigo-400" />
            <span className="hidden sm:inline">Meet Developer</span>
          </button>

          {/* Reset Form */}
          <button
            onClick={onReset}
            className="px-2.5 py-1.5 rounded-lg bg-red-50 dark:bg-red-950/40 hover:bg-red-100 text-red-700 dark:text-red-300 text-xs font-semibold flex items-center space-x-1 border border-red-200 dark:border-red-900 transition"
            title="Reset Form"
          >
            <RotateCcw size={14} />
            <span className="hidden md:inline">Reset</span>
          </button>

          {/* Dark / Light Mode Toggle */}
          <button
            onClick={onToggleDarkMode}
            className="p-2 rounded-lg bg-gray-100 dark:bg-slate-800 hover:bg-gray-200 dark:hover:bg-slate-700 text-gray-700 dark:text-gray-200 transition border border-gray-200 dark:border-slate-700"
            title={darkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
          >
            {darkMode ? <Sun size={16} className="text-amber-400" /> : <Moon size={16} />}
          </button>

        </div>

      </div>
    </header>
  );
};
