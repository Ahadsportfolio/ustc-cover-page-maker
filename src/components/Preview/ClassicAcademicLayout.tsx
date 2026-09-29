import React from 'react';
import { CoverPageData } from '../../types/coverPage';
import { USTCLogo } from '../USTCLogo';
import { COLOR_THEMES } from '../../utils/sampleData';
import { formatSubmissionDate } from '../../utils/formatters';

interface Props {
  data: CoverPageData;
}

export const ClassicAcademicLayout: React.FC<Props> = ({ data }) => {
  const theme = COLOR_THEMES[data?.colorTheme] || COLOR_THEMES.navy;
  const primaryColor = data?.colorTheme === 'custom' ? (data?.customPrimaryColor || '#002B49') : (theme?.primary || '#002B49');
  const accentColor = data?.colorTheme === 'custom' ? (data?.customAccentColor || '#D4AF37') : (theme?.accent || '#D4AF37');

  const fontClass =
    data?.fontFamily === 'times'
      ? 'font-serif'
      : data?.fontFamily === 'arial'
      ? 'font-sans'
      : data?.fontFamily === 'georgia'
      ? 'font-serif font-georgia'
      : 'font-sans';

  return (
    <div
      className={`w-full h-full p-10 sm:p-14 flex flex-col justify-between select-none relative box-border bg-white ${fontClass}`}
      style={{ minHeight: '100%' }}
    >
      {/* Classic Outer Double Border Frame */}
      <div
        className="absolute inset-4 sm:inset-6 border-4 pointer-events-none"
        style={{ borderColor: primaryColor, borderStyle: 'double' }}
      />
      <div
        className="absolute inset-5 sm:inset-7 border pointer-events-none opacity-40"
        style={{ borderColor: primaryColor }}
      />

      {/* Content Container */}
      <div className="relative z-10 flex flex-col h-full justify-between py-6 px-4">
        
        {/* Header Section */}
        <div className="text-center flex flex-col items-center">
          <USTCLogo
            logoType={data?.logoType || 'ustc_default'}
            logoUrl={data?.logoUrl}
            logoSize={data?.logoSize || 95}
            primaryColor={primaryColor}
            accentColor={accentColor}
            className="mb-4"
          />

          <h1
            className="text-xl sm:text-2xl font-bold tracking-wide uppercase leading-tight text-center"
            style={{ color: primaryColor }}
          >
            {data?.instituteName || 'University of Science and Technology Chittagong'}
          </h1>
          {data?.instituteSubtext && (
            <p className="text-xs text-gray-600 mt-1 italic tracking-wider">
              {data.instituteSubtext}
            </p>
          )}

          <div
            className="w-3/4 h-1 my-3"
            style={{ backgroundColor: primaryColor }}
          />

          <h2
            className="text-base sm:text-lg font-semibold uppercase tracking-wider text-gray-800"
          >
            {data?.departmentName || 'Department of Computer Science & Engineering'}
          </h2>
        </div>

        {/* Central Document Title Section */}
        <div className="my-auto py-8 text-center flex flex-col items-center">
          {/* Document Type Badge */}
          <div
            className="inline-block px-6 py-1.5 mb-6 text-sm font-bold tracking-widest uppercase border-2 rounded-sm"
            style={{
              borderColor: primaryColor,
              color: primaryColor,
              backgroundColor: '#F8FAFC'
            }}
          >
            {data?.docType || 'LAB REPORT'}
          </div>

          {/* Course Title */}
          <div className="mb-4">
            <span className="text-xs uppercase tracking-widest text-gray-500 font-bold block mb-1">
              Course Title
            </span>
            <h3
              className="text-xl sm:text-2xl font-extrabold uppercase leading-snug max-w-xl mx-auto"
              style={{ color: primaryColor }}
            >
              {data?.courseTitle || 'Course Title Here'}
            </h3>
          </div>

          {/* Course Code */}
          {data?.courseCode && (
            <div className="mb-6">
              <span className="text-xs uppercase tracking-widest text-gray-500 font-semibold inline-block mr-2">
                Course Code:
              </span>
              <span
                className="text-base font-bold tracking-wider px-3 py-0.5 rounded border"
                style={{ borderColor: primaryColor, color: primaryColor }}
              >
                {data.courseCode}
              </span>
            </div>
          )}

          {/* Experiment / Topic Title */}
          {(data?.experimentNo || data?.topicTitle) && (
            <div className="w-full max-w-lg mt-2 pt-4 border-t border-dashed border-gray-300">
              {data.experimentNo && (
                <span
                  className="text-xs sm:text-sm font-bold block tracking-wider uppercase mb-1"
                  style={{ color: primaryColor }}
                >
                  {data.experimentNo}
                </span>
              )}
              {data.topicTitle && (
                <p className="text-sm sm:text-base font-medium text-gray-800 italic leading-relaxed">
                  &ldquo;{data.topicTitle}&rdquo;
                </p>
              )}
            </div>
          )}
        </div>

        {/* Bottom Section: Submitted To & Submitted By Layout */}
        <div>
          <div className="grid grid-cols-2 gap-6 pt-6 border-t-2" style={{ borderColor: primaryColor }}>
            
            {/* Submitted To (Teacher) */}
            <div className="text-left pr-3">
              <h4
                className="text-xs font-bold uppercase tracking-widest mb-3 pb-1 border-b"
                style={{ color: primaryColor, borderColor: accentColor }}
              >
                Submitted To
              </h4>
              <p className="text-sm font-bold text-gray-900">{data?.instructorName || 'Instructor Name'}</p>
              <p className="text-xs font-medium text-gray-700 mt-0.5">{data?.instructorDesignation || 'Designation'}</p>
              <p className="text-xs text-gray-600 mt-0.5">{data?.instructorDepartment || ''}</p>
              <p className="text-xs text-gray-500 font-serif italic mt-1">{data?.instituteName || ''}</p>
            </div>

            {/* Submitted By (Student) */}
            <div className="text-left pl-3 border-l border-gray-200">
              <h4
                className="text-xs font-bold uppercase tracking-widest mb-3 pb-1 border-b"
                style={{ color: primaryColor, borderColor: accentColor }}
              >
                Submitted By
              </h4>
              <p className="text-sm font-bold text-gray-900">{data?.studentName || 'Student Name'}</p>
              <p className="text-xs font-semibold text-gray-700 mt-0.5">
                ID: <span className="font-mono text-gray-900">{data?.studentId || 'N/A'}</span>
              </p>
              <p className="text-xs text-gray-600 mt-0.5">
                {[data?.studentBatch, data?.studentSemester, data?.studentSection].filter(Boolean).join(' • ')}
              </p>
              <p className="text-xs text-gray-600 mt-0.5">{data?.studentDepartment || ''}</p>
            </div>

          </div>

          {/* Submission Date */}
          <div className="text-center mt-6 pt-3">
            <span className="text-xs uppercase tracking-widest text-gray-500 mr-2">
              Date of Submission:
            </span>
            <span className="text-xs font-bold text-gray-800">
              {formatSubmissionDate(data?.submissionDate)}
            </span>
          </div>

        </div>

      </div>
    </div>
  );
};
