import React from 'react';
import { CoverPageData } from '../../types/coverPage';
import { USTCLogo } from '../USTCLogo';
import { COLOR_THEMES } from '../../utils/sampleData';
import { formatSubmissionDate } from '../../utils/formatters';

interface Props {
  data: CoverPageData;
}

export const ModernMinimalistLayout: React.FC<Props> = ({ data }) => {
  const theme = COLOR_THEMES[data?.colorTheme] || COLOR_THEMES.navy;
  const primaryColor = data?.colorTheme === 'custom' ? (data?.customPrimaryColor || '#002B49') : (theme?.primary || '#002B49');
  const accentColor = data?.colorTheme === 'custom' ? (data?.customAccentColor || '#D4AF37') : (theme?.accent || '#D4AF37');

  const fontClass =
    data?.fontFamily === 'times'
      ? 'font-serif'
      : data?.fontFamily === 'georgia'
      ? 'font-serif'
      : 'font-sans';

  return (
    <div
      className={`w-full h-full p-10 sm:p-14 flex flex-col justify-between select-none relative box-border bg-white ${fontClass}`}
      style={{ minHeight: '100%' }}
    >
      {/* Left Structural Accent Bar */}
      <div
        className="absolute left-0 top-0 bottom-0 w-3.5"
        style={{ backgroundColor: primaryColor }}
      />
      <div
        className="absolute left-3.5 top-0 bottom-0 w-1"
        style={{ backgroundColor: accentColor }}
      />

      {/* Main Content Area */}
      <div className="pl-6 flex flex-col h-full justify-between py-2">
        
        {/* Header Bar - Centered Logo & University Title */}
        <div>
          <div className="flex flex-col items-center justify-center text-center pb-6 border-b border-gray-200">
            <USTCLogo
              logoType={data?.logoType || 'ustc_default'}
              logoUrl={data?.logoUrl}
              logoSize={(data?.logoSize || 95) * 0.9}
              primaryColor={primaryColor}
              accentColor={accentColor}
              className="mb-3"
            />
            
            <h1
              className="text-lg sm:text-xl font-black tracking-tight uppercase leading-tight text-center"
              style={{ color: primaryColor }}
            >
              {data?.instituteName || 'University of Science and Technology Chittagong'}
            </h1>
            <p className="text-xs font-semibold uppercase tracking-wider text-gray-500 mt-1 text-center">
              {data?.departmentName || 'Department of Computer Science & Engineering'}
            </p>
            {data?.instituteSubtext && (
              <p className="text-[10px] text-gray-400 mt-0.5 text-center">
                {data.instituteSubtext}
              </p>
            )}
          </div>
        </div>

        {/* Central Title Section */}
        <div className="my-auto py-8 text-center flex flex-col items-center">
          <div className="flex items-center justify-center space-x-3 mb-4">
            <span
              className="px-3 py-1 text-xs font-bold uppercase tracking-widest text-white rounded"
              style={{ backgroundColor: primaryColor }}
            >
              {data?.docType || 'LAB REPORT'}
            </span>
            {data?.courseCode && (
              <span
                className="px-3 py-1 text-xs font-bold uppercase tracking-widest border rounded"
                style={{ borderColor: primaryColor, color: primaryColor }}
              >
                {data.courseCode}
              </span>
            )}
          </div>

          <h2
            className="text-2xl sm:text-3xl font-extrabold tracking-tight leading-tight uppercase mb-4 text-center max-w-xl"
            style={{ color: primaryColor }}
          >
            {data?.courseTitle || 'Course Title Here'}
          </h2>

          {(data?.experimentNo || data?.topicTitle) && (
            <div className="w-full max-w-lg mx-auto pl-4 border-l-4 my-4 text-left" style={{ borderColor: accentColor }}>
              {data.experimentNo && (
                <span className="text-xs font-bold uppercase tracking-wider block text-gray-500 mb-1">
                  {data.experimentNo}
                </span>
              )}
              {data.topicTitle && (
                <h3 className="text-base sm:text-lg font-semibold text-gray-800 leading-snug">
                  {data.topicTitle}
                </h3>
              )}
            </div>
          )}
        </div>

        {/* Footer Details: Modern Cards */}
        <div>
          <div className="grid grid-cols-2 gap-4">
            
            {/* Teacher Card */}
            <div className="p-4 rounded-lg bg-gray-50 border border-gray-100 relative overflow-hidden text-left">
              <div
                className="absolute top-0 left-0 right-0 h-1"
                style={{ backgroundColor: primaryColor }}
              />
              <span className="text-[10px] font-bold uppercase tracking-widest text-gray-400 block mb-2">
                Submitted To
              </span>
              <p className="text-sm font-bold text-gray-900">{data?.instructorName || 'Instructor Name'}</p>
              <p className="text-xs font-medium text-gray-700 mt-0.5">{data?.instructorDesignation || 'Designation'}</p>
              <p className="text-[11px] text-gray-500 mt-1">{data?.instructorDepartment || ''}</p>
            </div>

            {/* Student Card */}
            <div className="p-4 rounded-lg bg-gray-50 border border-gray-100 relative overflow-hidden text-left">
              <div
                className="absolute top-0 left-0 right-0 h-1"
                style={{ backgroundColor: accentColor }}
              />
              <span className="text-[10px] font-bold uppercase tracking-widest text-gray-400 block mb-2">
                Submitted By
              </span>
              <p className="text-sm font-bold text-gray-900">{data?.studentName || 'Student Name'}</p>
              <p className="text-xs font-semibold text-gray-700 mt-0.5">
                ID: <span className="font-mono text-gray-900">{data?.studentId || 'N/A'}</span>
              </p>
              <p className="text-[11px] text-gray-600 mt-0.5">
                {[data?.studentBatch, data?.studentSemester, data?.studentSection].filter(Boolean).join(' • ')}
              </p>
              <p className="text-[11px] text-gray-500 mt-0.5">{data?.studentDepartment || ''}</p>
            </div>

          </div>

          {/* Submission Date Footer */}
          <div className="flex items-center justify-between mt-6 pt-4 border-t border-gray-200 text-xs text-gray-500">
            <span className="font-medium">University of Science &amp; Technology Chittagong</span>
            <div>
              <span className="font-medium mr-1">Date:</span>
              <span className="font-bold text-gray-800">
                {formatSubmissionDate(data?.submissionDate)}
              </span>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};
