import React from 'react';
import { CoverPageData } from '../../types/coverPage';
import { DOC_TYPES } from '../../utils/sampleData';
import { FileText, Tag, BookOpen, Layers } from 'lucide-react';

interface Props {
  data: CoverPageData;
  onChange: (field: keyof CoverPageData, value: any) => void;
}

export const DocInfoSection: React.FC<Props> = ({ data, onChange }) => {
  return (
    <div className="space-y-4 bg-white dark:bg-slate-800 p-5 rounded-xl border border-gray-200 dark:border-slate-700 shadow-sm">
      <div className="flex items-center space-x-2 border-b border-gray-100 dark:border-slate-700 pb-3">
        <FileText className="text-blue-600 dark:text-blue-400" size={18} />
        <h3 className="font-bold text-sm text-gray-800 dark:text-gray-100">2. Document &amp; Course Info</h3>
      </div>

      {/* Document Type Selection */}
      <div>
        <label className="block text-xs font-semibold text-gray-700 dark:text-gray-300 mb-1">
          Document Type
        </label>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
          {DOC_TYPES.map((type) => (
            <button
              key={type}
              type="button"
              onClick={() => onChange('docType', type)}
              className={`p-2 rounded-lg text-xs font-semibold border text-center transition ${
                data.docType === type
                  ? 'bg-blue-600 text-white border-blue-600 shadow-sm'
                  : 'bg-gray-50 dark:bg-slate-900 border-gray-200 dark:border-slate-700 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-slate-800'
              }`}
            >
              {type}
            </button>
          ))}
        </div>
        <input
          type="text"
          value={data.docType}
          onChange={(e) => onChange('docType', e.target.value)}
          placeholder="Or type custom document type (e.g. Internship Report)"
          className="mt-2 w-full px-3 py-1.5 text-xs rounded-lg border border-gray-300 dark:border-slate-600 bg-white dark:bg-slate-900 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 transition"
        />
      </div>

      {/* Course Title & Code */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
        <div className="sm:col-span-2">
          <label className="block text-xs font-semibold text-gray-700 dark:text-gray-300 mb-1">
            Course Title
          </label>
          <div className="relative">
            <input
              type="text"
              value={data.courseTitle}
              onChange={(e) => onChange('courseTitle', e.target.value)}
              className="w-full px-3 py-2 text-xs sm:text-sm rounded-lg border border-gray-300 dark:border-slate-600 bg-gray-50 dark:bg-slate-900 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 transition"
              placeholder="e.g. Data Structures & Algorithms"
            />
          </div>
        </div>

        <div>
          <label className="block text-xs font-semibold text-gray-700 dark:text-gray-300 mb-1">
            Course Code
          </label>
          <input
            type="text"
            value={data.courseCode}
            onChange={(e) => onChange('courseCode', e.target.value)}
            className="w-full px-3 py-2 text-xs sm:text-sm rounded-lg border border-gray-300 dark:border-slate-600 bg-gray-50 dark:bg-slate-900 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 uppercase transition"
            placeholder="e.g. CSE-211"
          />
        </div>
      </div>

      {/* Experiment / Assignment Number */}
      <div>
        <label className="block text-xs font-semibold text-gray-700 dark:text-gray-300 mb-1">
          Experiment / Assignment / Report No.
        </label>
        <input
          type="text"
          value={data.experimentNo}
          onChange={(e) => onChange('experimentNo', e.target.value)}
          className="w-full px-3 py-2 text-xs sm:text-sm rounded-lg border border-gray-300 dark:border-slate-600 bg-gray-50 dark:bg-slate-900 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 transition"
          placeholder="e.g. Experiment No: 04 or Assignment #2"
        />
      </div>

      {/* Experiment / Topic Title */}
      <div>
        <label className="block text-xs font-semibold text-gray-700 dark:text-gray-300 mb-1">
          Topic / Experiment Title
        </label>
        <textarea
          rows={2}
          value={data.topicTitle}
          onChange={(e) => onChange('topicTitle', e.target.value)}
          className="w-full px-3 py-2 text-xs sm:text-sm rounded-lg border border-gray-300 dark:border-slate-600 bg-gray-50 dark:bg-slate-900 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 transition"
          placeholder="e.g. Implementation and Performance Analysis of Binary Search Trees in C++"
        />
      </div>
    </div>
  );
};
