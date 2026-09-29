import React from 'react';
import { Code2, Github, Linkedin, Facebook, GraduationCap, X, Heart } from 'lucide-react';
import { DEV_PHOTO_BASE64 } from '../utils/devPhotoBase64';

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

export const DeveloperModal: React.FC<Props> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/70 backdrop-blur-md transition-opacity">
      <div className="bg-white dark:bg-slate-900 rounded-2xl shadow-2xl border border-gray-200 dark:border-slate-800 w-full max-w-md overflow-hidden relative animate-in fade-in zoom-in-95 duration-200">
        
        {/* Top Header Background Pattern */}
        <div className="h-32 bg-gradient-to-r from-blue-900 via-indigo-900 to-slate-900 relative flex items-start justify-end p-4">
          <div className="absolute inset-0 bg-[radial-gradient(#3b82f6_1px,transparent_1px)] [background-size:16px_16px] opacity-20" />
          <button
            onClick={onClose}
            className="p-1.5 rounded-full bg-slate-900/50 hover:bg-slate-900 text-slate-300 hover:text-white transition z-10"
            title="Close"
          >
            <X size={18} />
          </button>
        </div>

        {/* Developer Profile Card */}
        <div className="px-6 pb-6 pt-0 relative flex flex-col items-center text-center">
          
          {/* Avatar Photo with Frame */}
          <div className="relative -mt-16 mb-3">
            <div className="w-28 h-28 sm:w-32 sm:h-32 rounded-full border-4 border-white dark:border-slate-900 shadow-xl overflow-hidden bg-slate-800 flex items-center justify-center ring-4 ring-blue-500/30">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={DEV_PHOTO_BASE64}
                alt="Ataullah Ahad"
                className="w-full h-full object-cover object-top"
              />
            </div>
            <span className="absolute bottom-1 right-1 w-7 h-7 bg-blue-600 text-white rounded-full flex items-center justify-center shadow border-2 border-white dark:border-slate-900">
              <Code2 size={14} />
            </span>
          </div>

          {/* Developer Name & Title */}
          <h3 className="text-xl font-black text-gray-900 dark:text-white tracking-tight">
            Ataullah Ahad
          </h3>
          <span className="px-3 py-1 mt-1 text-xs font-bold uppercase tracking-widest bg-blue-50 text-blue-700 dark:bg-blue-950/80 dark:text-blue-300 rounded-full border border-blue-200 dark:border-blue-800">
            Full Stack Developer
          </span>

          {/* Education Info */}
          <div className="mt-4 p-3 bg-gray-50 dark:bg-slate-800/60 rounded-xl border border-gray-100 dark:border-slate-800 w-full text-left space-y-1.5">
            <div className="flex items-start space-x-2 text-xs text-gray-700 dark:text-slate-300">
              <GraduationCap size={16} className="text-blue-600 dark:text-blue-400 mt-0.5 flex-shrink-0" />
              <div>
                <p className="font-bold text-gray-900 dark:text-white">
                  Computer Science &amp; Engineering (CSE)
                </p>
                <p className="text-[11px] text-gray-500 dark:text-slate-400">
                  University of Science and Technology Chittagong (USTC) • <span className="font-semibold text-blue-600 dark:text-blue-400">Batch 41</span>
                </p>
              </div>
            </div>
          </div>

          {/* Short Bio */}
          <p className="text-xs text-gray-600 dark:text-slate-400 mt-3 italic leading-relaxed">
            &ldquo;Crafted with passion to help fellow USTC students generate perfectly formatted, high-resolution printable cover pages instantly.&rdquo;
          </p>

          {/* Social Links */}
          <div className="w-full mt-5 pt-4 border-t border-gray-100 dark:border-slate-800">
            <span className="text-[11px] font-bold uppercase tracking-widest text-gray-400 block mb-3">
              Connect with Developer
            </span>

            <div className="grid grid-cols-3 gap-2">
              {/* Facebook */}
              <a
                href="https://www.facebook.com/ataullahAhadl"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-blue-50 dark:bg-blue-950/50 hover:bg-blue-100 dark:hover:bg-blue-900/60 text-blue-700 dark:text-blue-300 border border-blue-200 dark:border-blue-900 flex items-center justify-center space-x-1.5 text-xs font-bold transition shadow-sm"
              >
                <Facebook size={16} />
                <span>Facebook</span>
              </a>

              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/in/ataullah-ahad-76393a2a9"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-indigo-50 dark:bg-indigo-950/50 hover:bg-indigo-100 dark:hover:bg-indigo-900/60 text-indigo-700 dark:text-indigo-300 border border-indigo-200 dark:border-indigo-900 flex items-center justify-center space-x-1.5 text-xs font-bold transition shadow-sm"
              >
                <Linkedin size={16} />
                <span>LinkedIn</span>
              </a>

              {/* GitHub */}
              <a
                href="https://github.com/Ahadsportfolio"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-900 dark:text-white border border-slate-200 dark:border-slate-700 flex items-center justify-center space-x-1.5 text-xs font-bold transition shadow-sm"
              >
                <Github size={16} />
                <span>GitHub</span>
              </a>
            </div>
          </div>

          {/* Footer Note */}
          <div className="mt-4 flex items-center justify-center space-x-1 text-[11px] text-gray-400">
            <span>Made with</span>
            <Heart size={12} className="text-red-500 fill-red-500 inline" />
            <span>for USTC Students</span>
          </div>

        </div>

      </div>
    </div>
  );
};
