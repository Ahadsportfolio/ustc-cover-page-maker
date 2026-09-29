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

  const fontFamily =
    data?.fontFamily === 'times' ? '"Times New Roman", Times, serif'
    : data?.fontFamily === 'arial' ? 'Arial, Helvetica, sans-serif'
    : data?.fontFamily === 'georgia' ? 'Georgia, serif'
    : '"Inter", "Segoe UI", Arial, sans-serif';

  return (
    <div style={{
      width: '100%', height: '100%', boxSizing: 'border-box',
      display: 'flex', flexDirection: 'column', justifyContent: 'space-between',
      fontFamily, position: 'relative',
      backgroundColor: data?.paperBg === 'cream' ? '#FFFDF5' : data?.paperBg === 'light-blue' ? '#F4F8FB' : '#FFFFFF',
    }}>

      {/* Left accent bar */}
      <div style={{ position: 'absolute', top: 0, left: 0, bottom: 0, width: '14px', backgroundColor: primaryColor }} />
      <div style={{ position: 'absolute', top: 0, left: '14px', bottom: 0, width: '4px', backgroundColor: accentColor }} />

      {/* Content offset from left bar */}
      <div style={{ paddingLeft: '40px', paddingRight: '40px', display: 'flex', flexDirection: 'column', height: '100%', justifyContent: 'space-between', paddingTop: '32px', paddingBottom: '32px' }}>

        {/* HEADER */}
        <div style={{ textAlign: 'center', borderBottom: '1px solid #E5E7EB', paddingBottom: '20px' }}>
          <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '10px' }}>
            <USTCLogo
              logoType={data?.logoType || 'ustc_default'}
              logoUrl={data?.logoUrl}
              logoSize={(data?.logoSize || 95) * 0.9}
              primaryColor={primaryColor}
              accentColor={accentColor}
            />
          </div>
          <h1 style={{ fontSize: '17px', fontWeight: 900, textTransform: 'uppercase', letterSpacing: '0.04em', color: primaryColor, margin: '0 0 4px 0' }}>
            {data?.instituteName || 'University of Science and Technology Chittagong'}
          </h1>
          <p style={{ fontSize: '11px', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.1em', color: '#6B7280', margin: '0 0 2px 0' }}>
            {data?.departmentName || 'Department of Computer Science & Engineering'}
          </p>
          {data?.instituteSubtext && (
            <p style={{ fontSize: '10px', color: '#9CA3AF', margin: 0 }}>{data.instituteSubtext}</p>
          )}
        </div>

        {/* CENTRAL */}
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', textAlign: 'center', padding: '24px 0' }}>

          {/* Badges row */}
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '12px', marginBottom: '16px' }}>
            <span style={{
              display: 'inline-block', padding: '5px 16px',
              backgroundColor: primaryColor, color: '#FFFFFF',
              fontSize: '11px', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.12em',
              borderRadius: '4px', whiteSpace: 'nowrap',
            }}>
              {data?.docType || 'LAB REPORT'}
            </span>
            {data?.courseCode && (
              <span style={{
                fontSize: '14px', fontWeight: 900, letterSpacing: '0.08em', color: primaryColor,
              }}>
                {data.courseCode}
              </span>
            )}
          </div>

          {/* Course Title */}
          <h2 style={{
            fontSize: '24px', fontWeight: 900, textTransform: 'uppercase',
            letterSpacing: '0.03em', color: primaryColor,
            margin: '0 0 16px 0', lineHeight: 1.2, maxWidth: '440px',
          }}>
            {data?.courseTitle || 'Course Title Here'}
          </h2>

          {/* Experiment block */}
          {(data?.experimentNo || data?.topicTitle) && (
            <div style={{
              maxWidth: '420px', width: '100%',
              borderLeft: `4px solid ${accentColor}`,
              paddingLeft: '14px', textAlign: 'left', marginTop: '8px',
            }}>
              {data.experimentNo && (
                <p style={{ fontSize: '11px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', color: '#6B7280', margin: '0 0 4px 0' }}>
                  {data.experimentNo}
                </p>
              )}
              {data.topicTitle && (
                <p style={{ fontSize: '13px', fontWeight: 600, color: '#1F2937', margin: 0, lineHeight: 1.5 }}>
                  {data.topicTitle}
                </p>
              )}
            </div>
          )}
        </div>

        {/* FOOTER */}
        <div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
            {/* Teacher */}
            <div style={{ padding: '14px', backgroundColor: '#F9FAFB', borderRadius: '8px', border: '1px solid #F3F4F6', position: 'relative', overflow: 'hidden' }}>
              <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '3px', backgroundColor: primaryColor }} />
              <p style={{ fontSize: '9px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.15em', color: '#9CA3AF', margin: '0 0 6px 0' }}>Submitted To</p>
              <p style={{ fontSize: '13px', fontWeight: 700, color: '#111827', margin: '0 0 3px 0' }}>{data?.instructorName || 'Instructor Name'}</p>
              <p style={{ fontSize: '11px', color: '#374151', margin: '0 0 2px 0' }}>{data?.instructorDesignation || ''}</p>
              <p style={{ fontSize: '10px', color: '#6B7280', margin: 0 }}>{data?.instructorDepartment || ''}</p>
            </div>

            {/* Student */}
            <div style={{ padding: '14px', backgroundColor: '#F9FAFB', borderRadius: '8px', border: '1px solid #F3F4F6', position: 'relative', overflow: 'hidden' }}>
              <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '3px', backgroundColor: accentColor }} />
              <p style={{ fontSize: '9px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.15em', color: '#9CA3AF', margin: '0 0 6px 0' }}>Submitted By</p>
              <p style={{ fontSize: '13px', fontWeight: 700, color: '#111827', margin: '0 0 3px 0' }}>{data?.studentName || 'Student Name'}</p>
              <p style={{ fontSize: '11px', fontWeight: 600, color: '#374151', margin: '0 0 2px 0' }}>
                ID: <span style={{ fontFamily: 'monospace' }}>{data?.studentId || 'N/A'}</span>
              </p>
              <p style={{ fontSize: '10px', color: '#6B7280', margin: '0 0 2px 0' }}>
                {[data?.studentBatch, data?.studentSemester, data?.studentSection].filter(Boolean).join(' • ')}
              </p>
              <p style={{ fontSize: '10px', color: '#9CA3AF', margin: 0 }}>{data?.studentDepartment || ''}</p>
            </div>
          </div>

          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderTop: '1px solid #E5E7EB', paddingTop: '12px', marginTop: '14px', fontSize: '11px', color: '#9CA3AF' }}>
            <span style={{ fontWeight: 500 }}>University of Science &amp; Technology Chittagong</span>
            <span>
              <span style={{ fontWeight: 500, marginRight: '4px' }}>Date:</span>
              <strong style={{ color: '#1F2937' }}>{formatSubmissionDate(data?.submissionDate)}</strong>
            </span>
          </div>
        </div>

      </div>
    </div>
  );
};
