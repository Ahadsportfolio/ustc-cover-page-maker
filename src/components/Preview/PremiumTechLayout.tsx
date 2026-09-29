import React from 'react';
import { CoverPageData } from '../../types/coverPage';
import { USTCLogo } from '../USTCLogo';
import { COLOR_THEMES } from '../../utils/sampleData';
import { formatSubmissionDate } from '../../utils/formatters';

interface Props {
  data: CoverPageData;
}

export const PremiumTechLayout: React.FC<Props> = ({ data }) => {
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
      className={`w-full h-full flex flex-col justify-between select-none relative box-border bg-white ${fontClass}`}
      style={{ minHeight: '100%' }}
    >
      {/* Top Banner Header */}
      <div
        className="w-full px-8 py-8 text-white relative overflow-hidden flex flex-col items-center justify-center text-center shadow-md"
        style={{
          background: `linear-gradient(135deg, ${primaryColor} 0%, ${primaryColor}EE 70%, ${primaryColor}CC 100%)`
        }}
      >
        {/* Subtle decorative gold line */}
        <div
          className="absolute bottom-0 left-0 right-0 h-1.5"
          style={{ backgroundColor: accentColor }}
        />
        
        {/* Crest Logo */}
        <div className="mb-3 relative z-10">
          <USTCLogo
            logoType={data?.logoType || 'ustc_default'}
            logoUrl={data?.logoUrl}
            logoSize={(data?.logoSize || 95) * 0.9}
            primaryColor="#FFFFFF"
            accentColor={accentColor}
          />
        </div>

        <h1 className="text-xl sm:text-2xl font-black uppercase tracking-wider text-white">
          {data?.instituteName || 'University of Science and Technology Chittagong'}
        </h1>
        <p
          className="text-xs font-semibold tracking-widest uppercase mt-1 opacity-90"
          style={{ color: accentColor }}
        >
          {data?.departmentName || 'Department of Computer Science & Engineering'}
        </p>
      </div>

      {/* Main Body */}
      <div className="px-10 sm:px-14 py-8 flex-1 flex flex-col justify-between">
        
        {/* Document Header Badges & Title */}
        <div className="my-auto py-4 text-center">
          
          {/* Badge Row */}
          <div className="flex items-center justify-center space-x-3 mb-6">
            <span
              className="px-4 py-1.5 text-xs font-black uppercase tracking-widest text-white rounded-full shadow-sm"
              style={{ backgroundColor: primaryColor }}
            >
              {data?.docType || 'PROJECT REPORT'}
            </span>
            {data?.courseCode && (
              <span
                className="px-4 py-1.5 text-xs font-bold uppercase tracking-widest rounded-full border-2"
                style={{ borderColor: accentColor, color: primaryColor, backgroundColor: '#FFFDF5' }}
              >
                {data.courseCode}
              </span>
            )}
          </div>

          {/* Course Title */}
          <div className="mb-6">
            <span className="text-[11px] font-bold uppercase tracking-widest text-gray-400 block mb-1">
              Course Title
            </span>
            <h2
              className="text-2xl sm:text-3xl font-black uppercase tracking-tight leading-tight max-w-xl mx-auto"
              style={{ color: primaryColor }}
            >
              {data?.courseTitle || 'Course Title Here'}
            </h2>
          </div>

          {/* Experiment / Topic Shaded Card */}
          {(data?.experimentNo || data?.topicTitle) && (
            <div
              className="max-w-lg mx-auto p-4 rounded-xl border-l-4 shadow-sm text-left bg-slate-50"
              style={{ borderColor: primaryColor }}
            >
              {data.experimentNo && (
                <span
                  className="text-xs font-bold uppercase tracking-wider block mb-1"
                  style={{ color: primaryColor }}
                >
                  {data.experimentNo}
                </span>
              )}
              {data.topicTitle && (
                <p className="text-sm font-semibold text-gray-800 leading-relaxed">
                  {data.topicTitle}
                </p>
              )}
            </div>
          )}
        </div>

        {/* Shaded Detail Cards: Submitted To & Submitted By */}
        <div className="space-y-4">
          <div className="grid grid-cols-2 gap-5">
            
            {/* Instructor Card */}
            <div
              className="p-5 rounded-xl bg-gray-50 border-t-4 shadow-sm"
              style={{ borderColor: primaryColor }}
            >
              <div className="flex items-center justify-between mb-2">
                <span
                  className="text-[10px] font-bold uppercase tracking-widest px-2 py-0.5 rounded text-white"
                  style={{ backgroundColor: primaryColor }}
                >
                  Submitted To
                </span>
              </div>
              <p className="text-sm font-extrabold text-gray-900">{data?.instructorName || 'Instructor Name'}</p>
              <p className="text-xs font-semibold text-gray-700 mt-1">{data?.instructorDesignation || ''}</p>
              <p className="text-[11px] text-gray-500 mt-0.5">{data?.instructorDepartment || ''}</p>
            </div>

            {/* Student Card */}
            <div
              className="p-5 rounded-xl bg-gray-50 border-t-4 shadow-sm"
              style={{ borderColor: accentColor }}
            >
              <div className="flex items-center justify-between mb-2">
                <span
                  className="text-[10px] font-bold uppercase tracking-widest px-2 py-0.5 rounded"
                  style={{ backgroundColor: accentColor, color: primaryColor }}
                >
                  Submitted By
                </span>
              </div>
              <p className="text-sm font-extrabold text-gray-900">{data?.studentName || 'Student Name'}</p>
              <p className="text-xs font-bold text-gray-800 mt-1">
                ID: <span className="font-mono text-gray-900">{data?.studentId || 'N/A'}</span>
              </p>
              <p className="text-[11px] text-gray-600 mt-0.5">
                {[data?.studentBatch, data?.studentSemester, data?.studentSection].filter(Boolean).join(' • ')}
              </p>
              <p className="text-[11px] text-gray-500 mt-0.5">{data?.studentDepartment || ''}</p>
            </div>

          </div>

          {/* Submission Date Pill Footer */}
          <div className="flex items-center justify-between pt-3 text-xs text-gray-500">
            <span className="font-semibold text-gray-600">USTC • Academic Cover Page</span>
            <div className="flex items-center space-x-1">
              <span className="font-medium text-gray-400">Date:</span>
              <span className="font-bold text-gray-800">
                {formatSubmissionDate(data?.submissionDate)}
              </span>
            </div>
          </div>
        </div>

      </div>

      {/* Bottom Color Accent Strip */}
      <div
        className="w-full h-2"
        style={{ backgroundColor: primaryColor }}
      />
    </div>
  );
};
