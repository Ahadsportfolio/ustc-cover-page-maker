import React, { useState, useEffect } from 'react';
import { SavedProfile, CoverPageData } from '../types/coverPage';
import { BookmarkPlus, Trash2, CheckCircle2, X, Play } from 'lucide-react';

interface Props {
  isOpen: boolean;
  onClose: () => void;
  currentData: CoverPageData;
  onLoadProfile: (profileData: CoverPageData) => void;
}

const PROFILES_STORAGE_KEY = 'ustc_cover_page_saved_profiles';

export const SavedProfilesModal: React.FC<Props> = ({
  isOpen,
  onClose,
  currentData,
  onLoadProfile,
}) => {
  const [profiles, setProfiles] = useState<SavedProfile[]>([]);
  const [newProfileName, setNewProfileName] = useState<string>('');

  useEffect(() => {
    if (isOpen) {
      try {
        const saved = localStorage.getItem(PROFILES_STORAGE_KEY);
        if (saved) {
          setProfiles(JSON.parse(saved));
        }
      } catch (e) {
        console.error('Failed to load profiles', e);
      }
    }
  }, [isOpen]);

  const handleSaveCurrentProfile = () => {
    if (!newProfileName.trim()) return;

    const newProfile: SavedProfile = {
      id: Date.now().toString(),
      profileName: newProfileName.trim(),
      createdAt: new Date().toLocaleDateString(),
      data: currentData,
    };

    const updated = [newProfile, ...profiles];
    setProfiles(updated);
    localStorage.setItem(PROFILES_STORAGE_KEY, JSON.stringify(updated));
    setNewProfileName('');
  };

  const handleDeleteProfile = (id: string) => {
    const updated = profiles.filter((p) => p.id !== id);
    setProfiles(updated);
    localStorage.setItem(PROFILES_STORAGE_KEY, JSON.stringify(updated));
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm">
      <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-2xl border border-gray-200 dark:border-slate-700 w-full max-w-lg overflow-hidden flex flex-col max-h-[85vh]">
        
        {/* Header */}
        <div className="p-4 border-b border-gray-200 dark:border-slate-700 flex items-center justify-between bg-gray-50 dark:bg-slate-900">
          <div className="flex items-center space-x-2">
            <BookmarkPlus className="text-blue-600 dark:text-blue-400" size={20} />
            <h3 className="font-bold text-base text-gray-900 dark:text-white">
              Saved Profiles Manager
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-1 rounded-lg text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 hover:bg-gray-200 dark:hover:bg-slate-700 transition"
          >
            <X size={18} />
          </button>
        </div>

        {/* Save Current State Form */}
        <div className="p-4 bg-blue-50/50 dark:bg-blue-950/30 border-b border-blue-100 dark:border-blue-900">
          <label className="block text-xs font-bold text-blue-900 dark:text-blue-200 mb-1.5">
            Save Current Form Details as New Profile
          </label>
          <div className="flex space-x-2">
            <input
              type="text"
              value={newProfileName}
              onChange={(e) => setNewProfileName(e.target.value)}
              placeholder="e.g. My CSE-211 Details"
              className="flex-1 px-3 py-2 text-xs sm:text-sm rounded-lg border border-gray-300 dark:border-slate-600 bg-white dark:bg-slate-900 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500"
            />
            <button
              onClick={handleSaveCurrentProfile}
              disabled={!newProfileName.trim()}
              className="px-4 py-2 bg-blue-600 hover:bg-blue-700 disabled:opacity-50 text-white font-bold text-xs rounded-lg shadow transition"
            >
              Save Profile
            </button>
          </div>
        </div>

        {/* Profiles List */}
        <div className="p-4 overflow-y-auto flex-1 space-y-3">
          {profiles.length === 0 ? (
            <div className="text-center py-8 text-gray-400 dark:text-gray-500 text-xs">
              No saved profiles found. Save your student details above to reuse them anytime!
            </div>
          ) : (
            profiles.map((profile) => (
              <div
                key={profile.id}
                className="p-3.5 rounded-xl border border-gray-200 dark:border-slate-700 bg-gray-50 dark:bg-slate-900/60 flex items-center justify-between hover:border-blue-300 transition"
              >
                <div>
                  <h4 className="font-bold text-sm text-gray-900 dark:text-white">
                    {profile.profileName}
                  </h4>
                  <div className="text-[11px] text-gray-500 dark:text-gray-400 mt-0.5 space-x-2">
                    <span>Course: {profile.data.courseCode || 'N/A'}</span>
                    <span>•</span>
                    <span>Student ID: {profile.data.studentId || 'N/A'}</span>
                  </div>
                  <span className="text-[10px] text-gray-400 mt-1 block">
                    Saved on {profile.createdAt}
                  </span>
                </div>

                <div className="flex items-center space-x-2">
                  <button
                    onClick={() => {
                      onLoadProfile(profile.data);
                      onClose();
                    }}
                    className="px-3 py-1.5 bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs rounded-lg flex items-center space-x-1 shadow transition"
                  >
                    <Play size={12} />
                    <span>Load</span>
                  </button>

                  <button
                    onClick={() => handleDeleteProfile(profile.id)}
                    className="p-1.5 text-red-500 hover:bg-red-50 dark:hover:bg-red-950/40 rounded-lg transition"
                    title="Delete Profile"
                  >
                    <Trash2 size={16} />
                  </button>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer */}
        <div className="p-3 bg-gray-50 dark:bg-slate-900 border-t border-gray-200 dark:border-slate-700 text-right">
          <button
            onClick={onClose}
            className="px-4 py-1.5 bg-gray-200 dark:bg-slate-700 hover:bg-gray-300 text-gray-800 dark:text-white text-xs font-bold rounded-lg transition"
          >
            Close
          </button>
        </div>

      </div>
    </div>
  );
};
