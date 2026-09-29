import React from 'react';
import { CoverPageData } from '../../types/coverPage';
import { DESIGNATIONS, USTC_DEPARTMENTS } from '../../utils/sampleData';
import { UserCheck, GraduationCap } from 'lucide-react';

interface Props {
  data: CoverPageData;
  onChange: (field: keyof CoverPageData, value: any) => void;
}

export const TeacherSection: React.FC<Props> = ({ data, onChange }) => {
  return (
    <div className="space-y-4 bg-white dark:bg-slate-800 p-5 rounded-xl border border-gray-200 dark:border-slate-700 shadow-sm">
      <div className="flex items-center space-x-2 border-b border-gray-100 dark:border-slate-700 pb-3">
        <UserCheck className="text-blue-600 dark:text-blue-400" size={18} />
        <h3 className="font-bold text-sm text-gray-800 dark:text-gray-100">3. Submitted To (Instructor Info)</h3>
      </div>

      <div>
        <label className="block text-xs font-semibold text-gray-700 dark:text-gray-300 mb-1">
          Instructor / Teacher Name
        </label>
        <input
          type="text"
          value={data.instructorName}
          onChange={(e) => onChange('instructorName', e.target.value)}
          className="w-full px-3 py-2 text-xs sm:text-sm rounded-lg border border-gray-300 dark:border-slate-600 bg-gray-50 dark:bg-slate-900 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 transition"
          placeholder="e.g. Dr. Md. Ahsan Kabir"
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        <div>
          <label className="block text-xs font-semibold text-gray-700 dark:text-gray-300 mb-1">
            Designation
          </label>
          <select
            value={DESIGNATIONS.includes(data.instructorDesignation) ? data.instructorDesignation : 'custom'}
            onChange={(e) => {
              if (e.target.value !== 'custom') {
                onChange('instructorDesignation', e.target.value);
              }
            }}
            className="w-full px-3 py-2 text-xs sm:text-sm rounded-lg border border-gray-300 dark:border-slate-600 bg-gray-50 dark:bg-slate-900 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 transition"
          >
            {DESIGNATIONS.map((desig) => (
              <option key={desig} value={desig}>
                {desig}
              </option>
            ))}
            <option value="custom">-- Custom Designation --</option>
          </select>
          {(!DESIGNATIONS.includes(data.instructorDesignation) || data.instructorDesignation === 'custom') && (
            <input
              type="text"
              value={data.instructorDesignation === 'custom' ? '' : data.instructorDesignation}
              onChange={(e) => onChange('instructorDesignation', e.target.value)}
              className="w-full mt-2 px-3 py-2 text-xs rounded-lg border border-gray-300 dark:border-slate-600 bg-white dark:bg-slate-900 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 transition"
              placeholder="e.g. Guest Faculty"
            />
          )}
        </div>

        <div>
          <label className="block text-xs font-semibold text-gray-700 dark:text-gray-300 mb-1">
            Instructor&apos;s Department
          </label>
          <input
            type="text"
            value={data.instructorDepartment}
            onChange={(e) => onChange('instructorDepartment', e.target.value)}
            className="w-full px-3 py-2 text-xs sm:text-sm rounded-lg border border-gray-300 dark:border-slate-600 bg-gray-50 dark:bg-slate-900 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 transition"
            placeholder="Department of Computer Science & Engineering"
          />
        </div>
      </div>
    </div>
  );
};
