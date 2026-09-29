import React from 'react';
import { CoverPageData } from '../../types/coverPage';
import { USTC_DEPARTMENTS } from '../../utils/sampleData';
import { Building2, Upload, Trash2, Sliders } from 'lucide-react';

interface Props {
  data: CoverPageData;
  onChange: (field: keyof CoverPageData, value: any) => void;
}

export const HeaderSection: React.FC<Props> = ({ data, onChange }) => {
  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        onChange('logoUrl', reader.result as string);
        onChange('logoType', 'custom');
      };
      reader.readAsDataURL(file);
    }
  };

  const handleRemoveCustomLogo = () => {
    onChange('logoUrl', null);
    onChange('logoType', 'ustc_default');
  };

  return (
    <div className="space-y-4 bg-white dark:bg-slate-800 p-5 rounded-xl border border-gray-200 dark:border-slate-700 shadow-sm">
      <div className="flex items-center space-x-2 border-b border-gray-100 dark:border-slate-700 pb-3">
        <Building2 className="text-blue-600 dark:text-blue-400" size={18} />
        <h3 className="font-bold text-sm text-gray-800 dark:text-gray-100">1. Institute &amp; Logo Settings</h3>
      </div>

      {/* Institute Name */}
      <div>
        <label className="block text-xs font-semibold text-gray-700 dark:text-gray-300 mb-1">
          Institute / University Name
        </label>
        <input
          type="text"
          value={data.instituteName}
          onChange={(e) => onChange('instituteName', e.target.value)}
          className="w-full px-3 py-2 text-xs sm:text-sm rounded-lg border border-gray-300 dark:border-slate-600 bg-gray-50 dark:bg-slate-900 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
          placeholder="University of Science and Technology Chittagong"
        />
      </div>

      {/* Subtext / Campus Address */}
      <div>
        <label className="block text-xs font-semibold text-gray-700 dark:text-gray-300 mb-1">
          Campus Address / Subtext
        </label>
        <input
          type="text"
          value={data.instituteSubtext}
          onChange={(e) => onChange('instituteSubtext', e.target.value)}
          className="w-full px-3 py-2 text-xs rounded-lg border border-gray-300 dark:border-slate-600 bg-gray-50 dark:bg-slate-900 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
          placeholder="Foy's Lake, Khulshi, Chattogram-4202, Bangladesh"
        />
      </div>

      {/* Department Dropdown / Input */}
      <div>
        <label className="block text-xs font-semibold text-gray-700 dark:text-gray-300 mb-1">
          Department Name
        </label>
        <div className="space-y-2">
          <select
            value={USTC_DEPARTMENTS.includes(data.departmentName) ? data.departmentName : 'custom'}
            onChange={(e) => {
              if (e.target.value === 'custom') {
                onChange('departmentName', '');
              } else {
                onChange('departmentName', e.target.value);
              }
            }}
            className="w-full px-3 py-2 text-xs sm:text-sm rounded-lg border border-gray-300 dark:border-slate-600 bg-gray-50 dark:bg-slate-900 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 transition"
          >
            {USTC_DEPARTMENTS.map((dept) => (
              <option key={dept} value={dept}>
                {dept}
              </option>
            ))}
            <option value="custom">-- Enter Custom Department --</option>
          </select>

          {!USTC_DEPARTMENTS.includes(data.departmentName) && (
            <input
              type="text"
              autoFocus
              value={data.departmentName}
              onChange={(e) => onChange('departmentName', e.target.value)}
              className="w-full px-3 py-2 text-xs rounded-lg border border-blue-400 dark:border-blue-500 bg-white dark:bg-slate-900 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 transition"
              placeholder="e.g. Department of Biomedical Engineering"
            />
          )}
        </div>
      </div>

      {/* Logo Preset & Upload */}
      <div>
        <label className="block text-xs font-semibold text-gray-700 dark:text-gray-300 mb-2">
          University / Department Logo
        </label>
        
        <div className="grid grid-cols-3 gap-2 mb-3">
          <button
            type="button"
            onClick={() => onChange('logoType', 'ustc_default')}
            className={`p-2 rounded-lg text-xs font-semibold border text-center transition ${
              data.logoType === 'ustc_default'
                ? 'bg-blue-50 dark:bg-blue-900/40 border-blue-500 text-blue-700 dark:text-blue-300'
                : 'bg-gray-50 dark:bg-slate-900 border-gray-200 dark:border-slate-700 text-gray-600 dark:text-gray-400'
            }`}
          >
            Official USTC Crest
          </button>
          <button
            type="button"
            onClick={() => onChange('logoType', 'cse_crest')}
            className={`p-2 rounded-lg text-xs font-semibold border text-center transition ${
              data.logoType === 'cse_crest'
                ? 'bg-blue-50 dark:bg-blue-900/40 border-blue-500 text-blue-700 dark:text-blue-300'
                : 'bg-gray-50 dark:bg-slate-900 border-gray-200 dark:border-slate-700 text-gray-600 dark:text-gray-400'
            }`}
          >
            CSE Tech Crest
          </button>
          <button
            type="button"
            onClick={() => onChange('logoType', 'eee_crest')}
            className={`p-2 rounded-lg text-xs font-semibold border text-center transition ${
              data.logoType === 'eee_crest'
                ? 'bg-blue-50 dark:bg-blue-900/40 border-blue-500 text-blue-700 dark:text-blue-300'
                : 'bg-gray-50 dark:bg-slate-900 border-gray-200 dark:border-slate-700 text-gray-600 dark:text-gray-400'
            }`}
          >
            EEE Circuit Crest
          </button>
          <button
            type="button"
            onClick={() => onChange('logoType', 'pharm_crest')}
            className={`p-2 rounded-lg text-xs font-semibold border text-center transition ${
              data.logoType === 'pharm_crest'
                ? 'bg-blue-50 dark:bg-blue-900/40 border-blue-500 text-blue-700 dark:text-blue-300'
                : 'bg-gray-50 dark:bg-slate-900 border-gray-200 dark:border-slate-700 text-gray-600 dark:text-gray-400'
            }`}
          >
            Pharmacy Crest
          </button>
          <button
            type="button"
            onClick={() => onChange('logoType', 'none')}
            className={`p-2 rounded-lg text-xs font-semibold border text-center transition ${
              data.logoType === 'none'
                ? 'bg-blue-50 dark:bg-blue-900/40 border-blue-500 text-blue-700 dark:text-blue-300'
                : 'bg-gray-50 dark:bg-slate-900 border-gray-200 dark:border-slate-700 text-gray-600 dark:text-gray-400'
            }`}
          >
            No Logo
          </button>
          <label
            className={`p-2 rounded-lg text-xs font-semibold border text-center cursor-pointer transition flex items-center justify-center space-x-1 ${
              data.logoType === 'custom'
                ? 'bg-blue-50 dark:bg-blue-900/40 border-blue-500 text-blue-700 dark:text-blue-300'
                : 'bg-gray-50 dark:bg-slate-900 border-gray-200 dark:border-slate-700 text-gray-600 dark:text-gray-400'
            }`}
          >
            <Upload size={12} />
            <span>Upload Image</span>
            <input type="file" accept="image/*" onChange={handleFileUpload} className="hidden" />
          </label>
        </div>

        {data.logoType === 'custom' && data.logoUrl && (
          <div className="flex items-center justify-between p-2 bg-blue-50 dark:bg-blue-950/30 rounded-lg border border-blue-200 dark:border-blue-900">
            <span className="text-xs text-blue-800 dark:text-blue-300 font-medium truncate">
              Custom Logo Uploaded
            </span>
            <button
              onClick={handleRemoveCustomLogo}
              className="text-red-500 hover:text-red-700 p-1"
              title="Remove custom logo"
            >
              <Trash2 size={14} />
            </button>
          </div>
        )}

        {/* Logo Size Slider */}
        {data.logoType !== 'none' && (
          <div className="mt-3 pt-2 border-t border-gray-100 dark:border-slate-700 flex items-center space-x-3">
            <Sliders size={14} className="text-gray-400" />
            <label className="text-[11px] font-medium text-gray-600 dark:text-gray-400 whitespace-nowrap">
              Logo Size: {data.logoSize}px
            </label>
            <input
              type="range"
              min="50"
              max="150"
              step="5"
              value={data.logoSize}
              onChange={(e) => onChange('logoSize', parseInt(e.target.value))}
              className="w-full h-1.5 bg-gray-200 dark:bg-slate-700 rounded-lg appearance-none cursor-pointer accent-blue-600"
            />
          </div>
        )}
      </div>
    </div>
  );
};
