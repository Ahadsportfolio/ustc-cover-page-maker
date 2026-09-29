import React from 'react';
import { CoverPageData, LayoutPreset, FontFamily, PresetColor } from '../../types/coverPage';
import { COLOR_THEMES } from '../../utils/sampleData';
import { Palette, Layout, Type, Sparkles } from 'lucide-react';

interface Props {
  data: CoverPageData;
  onChange: (field: keyof CoverPageData, value: any) => void;
}

export const AppearanceSection: React.FC<Props> = ({ data, onChange }) => {
  return (
    <div className="space-y-5 bg-white dark:bg-slate-800 p-5 rounded-xl border border-gray-200 dark:border-slate-700 shadow-sm">
      <div className="flex items-center space-x-2 border-b border-gray-100 dark:border-slate-700 pb-3">
        <Palette className="text-blue-600 dark:text-blue-400" size={18} />
        <h3 className="font-bold text-sm text-gray-800 dark:text-gray-100">5. Layout, Color &amp; Typography</h3>
      </div>

      {/* 6 Layout Presets Selector */}
      <div>
        <div className="flex items-center justify-between mb-2">
          <label className="block text-xs font-semibold text-gray-700 dark:text-gray-300">
            Design &amp; Layout Preset (6 Formats)
          </label>
          <span className="text-[10px] font-bold text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-950/60 px-2 py-0.5 rounded-full border border-blue-200 dark:border-blue-900">
            {data.layoutPreset === 'classic' ? 'Classic Academic' :
             data.layoutPreset === 'modern' ? 'Modern Minimalist' :
             data.layoutPreset === 'premium' ? 'Premium Tech' :
             data.layoutPreset === 'executive' ? 'Executive Formal' :
             data.layoutPreset === 'sidebar' ? 'Split Sidebar' : 'Technical Grid'}
          </span>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
          
          {/* 1. Classic Academic */}
          <button
            type="button"
            onClick={() => onChange('layoutPreset', 'classic' as LayoutPreset)}
            className={`p-3 rounded-xl border-2 text-left transition flex flex-col justify-between ${
              data.layoutPreset === 'classic'
                ? 'border-blue-600 bg-blue-50/50 dark:bg-blue-900/30 text-blue-900 dark:text-blue-200 shadow-sm'
                : 'border-gray-200 dark:border-slate-700 hover:border-gray-300 dark:hover:border-slate-600 text-gray-700 dark:text-gray-300'
            }`}
          >
            <div>
              <div className="w-full h-12 bg-white dark:bg-slate-900 border-2 border-double border-blue-900 dark:border-blue-400 rounded p-1 mb-2 flex flex-col items-center justify-around">
                <div className="w-6 h-1 bg-blue-900 dark:bg-blue-400 rounded-full" />
                <div className="w-10 h-0.5 bg-gray-400 rounded-full" />
                <div className="w-8 h-1 bg-amber-500 rounded-full" />
              </div>
              <span className="font-bold text-xs block">Classic Academic</span>
            </div>
            <span className="text-[10px] text-gray-500 dark:text-gray-400 mt-1">Double frame &amp; centered</span>
          </button>

          {/* 2. Modern Minimalist */}
          <button
            type="button"
            onClick={() => onChange('layoutPreset', 'modern' as LayoutPreset)}
            className={`p-3 rounded-xl border-2 text-left transition flex flex-col justify-between ${
              data.layoutPreset === 'modern'
                ? 'border-blue-600 bg-blue-50/50 dark:bg-blue-900/30 text-blue-900 dark:text-blue-200 shadow-sm'
                : 'border-gray-200 dark:border-slate-700 hover:border-gray-300 dark:hover:border-slate-600 text-gray-700 dark:text-gray-300'
            }`}
          >
            <div>
              <div className="w-full h-12 bg-white dark:bg-slate-900 border border-gray-200 dark:border-slate-700 rounded p-1 mb-2 flex items-stretch">
                <div className="w-1 bg-blue-600 rounded-full mr-1.5" />
                <div className="flex-1 flex flex-col justify-around">
                  <div className="w-8 h-1 bg-blue-900 dark:bg-blue-400 rounded-full" />
                  <div className="w-12 h-1 bg-gray-400 rounded-full" />
                  <div className="w-10 h-0.5 bg-gray-300 rounded-full" />
                </div>
              </div>
              <span className="font-bold text-xs block">Modern Minimalist</span>
            </div>
            <span className="text-[10px] text-gray-500 dark:text-gray-400 mt-1">Left accent bar &amp; sleek</span>
          </button>

          {/* 3. Premium Tech */}
          <button
            type="button"
            onClick={() => onChange('layoutPreset', 'premium' as LayoutPreset)}
            className={`p-3 rounded-xl border-2 text-left transition flex flex-col justify-between ${
              data.layoutPreset === 'premium'
                ? 'border-blue-600 bg-blue-50/50 dark:bg-blue-900/30 text-blue-900 dark:text-blue-200 shadow-sm'
                : 'border-gray-200 dark:border-slate-700 hover:border-gray-300 dark:hover:border-slate-600 text-gray-700 dark:text-gray-300'
            }`}
          >
            <div>
              <div className="w-full h-12 bg-white dark:bg-slate-900 border border-gray-200 dark:border-slate-700 rounded overflow-hidden mb-2 flex flex-col justify-between">
                <div className="w-full h-4 bg-gradient-to-r from-blue-900 to-indigo-900 flex items-center justify-center">
                  <div className="w-3 h-0.5 bg-amber-400 rounded-full" />
                </div>
                <div className="p-1 flex flex-col items-center justify-around">
                  <div className="w-10 h-1 bg-blue-900 dark:bg-blue-400 rounded-full" />
                </div>
              </div>
              <span className="font-bold text-xs block">Premium Tech</span>
            </div>
            <span className="text-[10px] text-gray-500 dark:text-gray-400 mt-1">Header banner &amp; cards</span>
          </button>

          {/* 4. Executive Formal */}
          <button
            type="button"
            onClick={() => onChange('layoutPreset', 'executive' as LayoutPreset)}
            className={`p-3 rounded-xl border-2 text-left transition flex flex-col justify-between ${
              data.layoutPreset === 'executive'
                ? 'border-blue-600 bg-blue-50/50 dark:bg-blue-900/30 text-blue-900 dark:text-blue-200 shadow-sm'
                : 'border-gray-200 dark:border-slate-700 hover:border-gray-300 dark:hover:border-slate-600 text-gray-700 dark:text-gray-300'
            }`}
          >
            <div>
              <div className="w-full h-12 bg-white dark:bg-slate-900 border border-gray-200 dark:border-slate-700 rounded p-1 mb-2 relative flex flex-col justify-between items-center">
                <div className="absolute top-0.5 left-0.5 w-1.5 h-1.5 border-t border-l border-blue-900 dark:border-blue-400" />
                <div className="absolute top-0.5 right-0.5 w-1.5 h-1.5 border-t border-r border-blue-900 dark:border-blue-400" />
                <div className="w-8 h-1 bg-blue-900 dark:bg-blue-400 rounded-full mt-1" />
                <div className="w-12 h-1 bg-gray-400 rounded-full" />
                <div className="w-full h-2 bg-gray-100 dark:bg-slate-800 border-t border-gray-200 dark:border-slate-700" />
              </div>
              <span className="font-bold text-xs block">Executive Formal</span>
            </div>
            <span className="text-[10px] text-gray-500 dark:text-gray-400 mt-1">Thesis &amp; formal frame</span>
          </button>

          {/* 5. Split Sidebar */}
          <button
            type="button"
            onClick={() => onChange('layoutPreset', 'sidebar' as LayoutPreset)}
            className={`p-3 rounded-xl border-2 text-left transition flex flex-col justify-between ${
              data.layoutPreset === 'sidebar'
                ? 'border-blue-600 bg-blue-50/50 dark:bg-blue-900/30 text-blue-900 dark:text-blue-200 shadow-sm'
                : 'border-gray-200 dark:border-slate-700 hover:border-gray-300 dark:hover:border-slate-600 text-gray-700 dark:text-gray-300'
            }`}
          >
            <div>
              <div className="w-full h-12 bg-white dark:bg-slate-900 border border-gray-200 dark:border-slate-700 rounded overflow-hidden mb-2 flex">
                <div className="w-1/3 bg-blue-900 dark:bg-blue-700 flex flex-col items-center justify-around p-0.5">
                  <div className="w-2 h-2 rounded-full bg-white/60" />
                  <div className="w-1 h-3 bg-amber-400/80 rounded" />
                </div>
                <div className="w-2/3 p-1 flex flex-col justify-around">
                  <div className="w-8 h-1 bg-blue-900 dark:bg-blue-400 rounded-full" />
                  <div className="w-10 h-0.5 bg-gray-400 rounded-full" />
                  <div className="w-6 h-0.5 bg-gray-300 rounded-full" />
                </div>
              </div>
              <span className="font-bold text-xs block">Split Sidebar</span>
            </div>
            <span className="text-[10px] text-gray-500 dark:text-gray-400 mt-1">Vibrant left accent bar</span>
          </button>

          {/* 6. Technical Grid */}
          <button
            type="button"
            onClick={() => onChange('layoutPreset', 'technical' as LayoutPreset)}
            className={`p-3 rounded-xl border-2 text-left transition flex flex-col justify-between ${
              data.layoutPreset === 'technical'
                ? 'border-blue-600 bg-blue-50/50 dark:bg-blue-900/30 text-blue-900 dark:text-blue-200 shadow-sm'
                : 'border-gray-200 dark:border-slate-700 hover:border-gray-300 dark:hover:border-slate-600 text-gray-700 dark:text-gray-300'
            }`}
          >
            <div>
              <div className="w-full h-12 bg-white dark:bg-slate-900 border border-gray-200 dark:border-slate-700 rounded overflow-hidden mb-2 flex flex-col justify-between">
                <div className="w-full h-1 bg-blue-900 dark:bg-blue-400" />
                <div className="p-1 flex flex-col items-center justify-around">
                  <div className="w-8 h-1 bg-blue-900 dark:bg-blue-400 rounded-full" />
                  <div className="w-12 h-1 bg-gray-400 rounded-full" />
                </div>
                <div className="w-full h-1 bg-amber-500" />
              </div>
              <span className="font-bold text-xs block">Technical Grid</span>
            </div>
            <span className="text-[10px] text-gray-500 dark:text-gray-400 mt-1">Dual tech bands &amp; grid</span>
          </button>

        </div>
      </div>

      {/* Color Theme Selector */}
      <div>
        <label className="block text-xs font-semibold text-gray-700 dark:text-gray-300 mb-2">
          Color Theme
        </label>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 mb-3">
          {Object.values(COLOR_THEMES).map((theme) => (
            <button
              key={theme.id}
              type="button"
              onClick={() => onChange('colorTheme', theme.id as PresetColor)}
              className={`p-2 rounded-lg text-xs font-medium border flex items-center space-x-2 transition ${
                data.colorTheme === theme.id
                  ? 'bg-blue-50 dark:bg-blue-950/60 border-blue-600 text-blue-900 dark:text-blue-200 font-bold'
                  : 'bg-gray-50 dark:bg-slate-900 border-gray-200 dark:border-slate-700 text-gray-700 dark:text-gray-300'
              }`}
            >
              <div
                className="w-4 h-4 rounded-full border border-white/50 flex-shrink-0"
                style={{ backgroundColor: theme.primary }}
              />
              <span className="truncate">{theme.name}</span>
            </button>
          ))}
        </div>

        {/* Custom Color Pickers if 'custom' theme selected */}
        {data.colorTheme === 'custom' && (
          <div className="p-3 bg-slate-100 dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-700 grid grid-cols-2 gap-3">
            <div>
              <label className="block text-[11px] font-semibold text-gray-700 dark:text-gray-300 mb-1">
                Primary Accent Color
              </label>
              <div className="flex items-center space-x-2">
                <input
                  type="color"
                  value={data.customPrimaryColor}
                  onChange={(e) => onChange('customPrimaryColor', e.target.value)}
                  className="w-8 h-8 rounded cursor-pointer border border-gray-300"
                />
                <input
                  type="text"
                  value={data.customPrimaryColor}
                  onChange={(e) => onChange('customPrimaryColor', e.target.value)}
                  className="w-full px-2 py-1 text-xs rounded border border-gray-300 dark:border-slate-700 uppercase font-mono"
                />
              </div>
            </div>

            <div>
              <label className="block text-[11px] font-semibold text-gray-700 dark:text-gray-300 mb-1">
                Secondary / Highlight Color
              </label>
              <div className="flex items-center space-x-2">
                <input
                  type="color"
                  value={data.customAccentColor}
                  onChange={(e) => onChange('customAccentColor', e.target.value)}
                  className="w-8 h-8 rounded cursor-pointer border border-gray-300"
                />
                <input
                  type="text"
                  value={data.customAccentColor}
                  onChange={(e) => onChange('customAccentColor', e.target.value)}
                  className="w-full px-2 py-1 text-xs rounded border border-gray-300 dark:border-slate-700 uppercase font-mono"
                />
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Font Switcher */}
      <div>
        <label className="block text-xs font-semibold text-gray-700 dark:text-gray-300 mb-2">
          Font Family Switcher
        </label>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
          <button
            type="button"
            onClick={() => onChange('fontFamily', 'times' as FontFamily)}
            className={`p-2 rounded-lg text-xs font-serif border text-center transition ${
              data.fontFamily === 'times'
                ? 'bg-blue-600 text-white border-blue-600 font-bold'
                : 'bg-gray-50 dark:bg-slate-900 border-gray-200 dark:border-slate-700 text-gray-700 dark:text-gray-300'
            }`}
          >
            Times New Roman
          </button>
          <button
            type="button"
            onClick={() => onChange('fontFamily', 'arial' as FontFamily)}
            className={`p-2 rounded-lg text-xs font-sans border text-center transition ${
              data.fontFamily === 'arial'
                ? 'bg-blue-600 text-white border-blue-600 font-bold'
                : 'bg-gray-50 dark:bg-slate-900 border-gray-200 dark:border-slate-700 text-gray-700 dark:text-gray-300'
            }`}
          >
            Arial (Clean)
          </button>
          <button
            type="button"
            onClick={() => onChange('fontFamily', 'georgia' as FontFamily)}
            className={`p-2 rounded-lg text-xs font-serif border text-center transition ${
              data.fontFamily === 'georgia'
                ? 'bg-blue-600 text-white border-blue-600 font-bold'
                : 'bg-gray-50 dark:bg-slate-900 border-gray-200 dark:border-slate-700 text-gray-700 dark:text-gray-300'
            }`}
          >
            Georgia
          </button>
          <button
            type="button"
            onClick={() => onChange('fontFamily', 'inter' as FontFamily)}
            className={`p-2 rounded-lg text-xs font-sans border text-center transition ${
              data.fontFamily === 'inter'
                ? 'bg-blue-600 text-white border-blue-600 font-bold'
                : 'bg-gray-50 dark:bg-slate-900 border-gray-200 dark:border-slate-700 text-gray-700 dark:text-gray-300'
            }`}
          >
            Roboto / Inter
          </button>
        </div>
      </div>

      {/* Paper Color Tint */}
      <div>
        <label className="block text-xs font-semibold text-gray-700 dark:text-gray-300 mb-2">
          Paper Background Tint
        </label>
        <div className="flex space-x-3">
          <button
            type="button"
            onClick={() => onChange('paperBg', 'white')}
            className={`flex-1 py-1.5 px-3 rounded-lg text-xs font-semibold border flex items-center justify-center space-x-2 ${
              data.paperBg === 'white'
                ? 'border-blue-600 bg-white text-gray-900 shadow-sm'
                : 'border-gray-200 dark:border-slate-700 bg-gray-50 dark:bg-slate-900 text-gray-600 dark:text-gray-400'
            }`}
          >
            <div className="w-3 h-3 rounded-full bg-white border border-gray-300" />
            <span>Crisp White</span>
          </button>
          <button
            type="button"
            onClick={() => onChange('paperBg', 'cream')}
            className={`flex-1 py-1.5 px-3 rounded-lg text-xs font-semibold border flex items-center justify-center space-x-2 ${
              data.paperBg === 'cream'
                ? 'border-blue-600 bg-amber-50 text-amber-900 shadow-sm'
                : 'border-gray-200 dark:border-slate-700 bg-gray-50 dark:bg-slate-900 text-gray-600 dark:text-gray-400'
            }`}
          >
            <div className="w-3 h-3 rounded-full bg-[#FFFDF5] border border-amber-200" />
            <span>Classic Ivory</span>
          </button>
          <button
            type="button"
            onClick={() => onChange('paperBg', 'light-blue')}
            className={`flex-1 py-1.5 px-3 rounded-lg text-xs font-semibold border flex items-center justify-center space-x-2 ${
              data.paperBg === 'light-blue'
                ? 'border-blue-600 bg-blue-50 text-blue-900 shadow-sm'
                : 'border-gray-200 dark:border-slate-700 bg-gray-50 dark:bg-slate-900 text-gray-600 dark:text-gray-400'
            }`}
          >
            <div className="w-3 h-3 rounded-full bg-[#F4F8FB] border border-blue-200" />
            <span>Ice Blue</span>
          </button>
        </div>
      </div>

    </div>
  );
};
