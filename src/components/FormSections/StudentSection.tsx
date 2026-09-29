import React from 'react';
import { CoverPageData } from '../../types/coverPage';
import { User, Calendar, Hash, Bookmark } from 'lucide-react';

interface Props {
  data: CoverPageData;
  onChange: (field: keyof CoverPageData, value: any) => void;
}

export const StudentSection: React.FC<Props> = ({ data, onChange }) => {
  return (
    <div className="space-y-4 bg-white dark:bg-slate-800 p-5 rounded-xl border border-gray-200 dark:border-slate-700 shadow-sm">
      <div className="flex items-center space-x-2 border-b border-gray-100 dark:border-slate-700 pb-3">
        <User className="text-blue-600 dark:text-blue-400" size={18} />
        <h3 className="font-bold text-sm text-gray-800 dark:text-gray-100">4. Submitted By (Student Info)</h3>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        <div>
          <label className="block text-xs font-semibold text-gray-700 dark:text-gray-300 mb-1">
            Student Full Name
          </label>
          <input
            type="text"
            value={data.studentName}
            onChange={(e) => onChange('studentName', e.target.value)}
            className="w-full px-3 py-2 text-xs sm:text-sm rounded-lg border border-gray-300 dark:border-slate-600 bg-gray-50 dark:bg-slate-900 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 transition"
            placeholder="e.g. Tariqul Islam"
          />
        </div>

        <div>
          <label className="block text-xs font-semibold text-gray-700 dark:text-gray-300 mb-1">
            Student ID / Roll No.
          </label>
          <input
            type="text"
            value={data.studentId}
            onChange={(e) => onChange('studentId', e.target.value)}
            className="w-full px-3 py-2 text-xs sm:text-sm rounded-lg border border-gray-300 dark:border-slate-600 bg-gray-50 dark:bg-slate-900 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 transition font-mono"
            placeholder="e.g. 190302001"
          />
        </div>
      </div>

      {/* Batch / Semester / Section */}
      <div className="grid grid-cols-3 gap-2">
        <div>
          <label className="block text-xs font-semibold text-gray-700 dark:text-gray-300 mb-1">
            Batch
          </label>
          <input
            type="text"
            value={data.studentBatch}
            onChange={(e) => onChange('studentBatch', e.target.value)}
            className="w-full px-3 py-2 text-xs rounded-lg border border-gray-300 dark:border-slate-600 bg-gray-50 dark:bg-slate-900 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 transition"
            placeholder="e.g. 40th Batch"
          />
        </div>

        <div>
          <label className="block text-xs font-semibold text-gray-700 dark:text-gray-300 mb-1">
            Semester
          </label>
          <input
            type="text"
            value={data.studentSemester}
            onChange={(e) => onChange('studentSemester', e.target.value)}
            className="w-full px-3 py-2 text-xs rounded-lg border border-gray-300 dark:border-slate-600 bg-gray-50 dark:bg-slate-900 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 transition"
            placeholder="e.g. 5th Semester"
          />
        </div>

        <div>
          <label className="block text-xs font-semibold text-gray-700 dark:text-gray-300 mb-1">
            Section
          </label>
          <input
            type="text"
            value={data.studentSection}
            onChange={(e) => onChange('studentSection', e.target.value)}
            className="w-full px-3 py-2 text-xs rounded-lg border border-gray-300 dark:border-slate-600 bg-gray-50 dark:bg-slate-900 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 transition"
            placeholder="e.g. Sec A"
          />
        </div>
      </div>

      {/* Student Department */}
      <div>
        <label className="block text-xs font-semibold text-gray-700 dark:text-gray-300 mb-1">
          Student&apos;s Department
        </label>
        <input
          type="text"
          value={data.studentDepartment}
          onChange={(e) => onChange('studentDepartment', e.target.value)}
          className="w-full px-3 py-2 text-xs sm:text-sm rounded-lg border border-gray-300 dark:border-slate-600 bg-gray-50 dark:bg-slate-900 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 transition"
          placeholder="Department of Computer Science & Engineering"
        />
      </div>

      {/* Date of Submission */}
      <div>
        <label className="block text-xs font-semibold text-gray-700 dark:text-gray-300 mb-1">
          Date of Submission
        </label>
        <input
          type="date"
          value={data.submissionDate}
          onChange={(e) => onChange('submissionDate', e.target.value)}
          className="w-full px-3 py-2 text-xs sm:text-sm rounded-lg border border-gray-300 dark:border-slate-600 bg-gray-50 dark:bg-slate-900 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 transition"
        />
      </div>
    </div>
  );
};
