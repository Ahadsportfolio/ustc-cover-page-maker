import React from 'react';
import { Code2, Github, Linkedin, Facebook } from 'lucide-react';
import { DEV_PHOTO_BASE64 } from '../utils/devPhotoBase64';

export const DeveloperSection: React.FC = () => {
  return (
    <div className="bg-gradient-to-br from-slate-900 to-blue-950 text-white p-5 rounded-xl border border-blue-800/60 shadow-md relative overflow-hidden">
      
      {/* Background Accent */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 rounded-full blur-2xl pointer-events-none" />

      <div className="flex items-center space-x-2 border-b border-slate-800 pb-3 mb-4">
        <Code2 className="text-blue-400" size={18} />
        <h3 className="font-bold text-sm text-slate-100">Meet the Developer</h3>
      </div>

      <div className="flex items-center space-x-4">
        {/* Photo Avatar */}
        <div className="relative flex-shrink-0">
          <div className="w-16 h-16 rounded-full border-2 border-blue-400 p-0.5 overflow-hidden shadow-md bg-slate-800">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={DEV_PHOTO_BASE64}
              alt="Ataullah Ahad"
              className="w-full h-full object-cover object-top rounded-full"
            />
          </div>
          <span className="absolute bottom-0 right-0 w-4 h-4 bg-emerald-500 border-2 border-slate-900 rounded-full" title="Active Developer" />
        </div>

        {/* Developer Brief Info */}
        <div className="flex-1 min-w-0">
          <div className="flex items-center space-x-1.5">
            <h4 className="font-extrabold text-sm text-white truncate">Ataullah Ahad</h4>
            <span className="px-1.5 py-0.5 text-[9px] font-bold uppercase tracking-wider bg-blue-500/20 text-blue-300 rounded border border-blue-500/40">
              Batch 41
            </span>
          </div>
          
          <p className="text-xs font-semibold text-blue-300 mt-0.5">
            Full Stack Developer
          </p>

          <p className="text-[11px] text-slate-400 mt-1 truncate">
            Computer Science &amp; Engineering, USTC
          </p>
        </div>
      </div>

      {/* Social Media Connect Buttons */}
      <div className="grid grid-cols-3 gap-2 mt-4 pt-3 border-t border-slate-800/80 text-center">
        <a
          href="https://www.facebook.com/ataullahAhadl"
          target="_blank"
          rel="noopener noreferrer"
          className="p-1.5 rounded-lg bg-blue-600/30 hover:bg-blue-600/50 text-blue-200 border border-blue-500/30 flex items-center justify-center space-x-1 text-[11px] font-semibold transition"
        >
          <Facebook size={12} />
          <span>Facebook</span>
        </a>

        <a
          href="https://www.linkedin.com/in/ataullah-ahad-76393a2a9"
          target="_blank"
          rel="noopener noreferrer"
          className="p-1.5 rounded-lg bg-indigo-600/30 hover:bg-indigo-600/50 text-indigo-200 border border-indigo-500/30 flex items-center justify-center space-x-1 text-[11px] font-semibold transition"
        >
          <Linkedin size={12} />
          <span>LinkedIn</span>
        </a>

        <a
          href="https://github.com/Ahadsportfolio"
          target="_blank"
          rel="noopener noreferrer"
          className="p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 flex items-center justify-center space-x-1 text-[11px] font-semibold transition"
        >
          <Github size={12} />
          <span>GitHub</span>
        </a>
      </div>
    </div>
  );
};
