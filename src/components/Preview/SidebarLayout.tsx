import React from 'react';
import { CoverPageData } from '../../types/coverPage';
import { USTCLogo } from '../USTCLogo';
import { COLOR_THEMES } from '../../utils/sampleData';
import { formatSubmissionDate } from '../../utils/formatters';

interface Props {
  data: CoverPageData;
}

export const SidebarLayout: React.FC<Props> = ({ data }) => {
  const theme = COLOR_THEMES[data?.colorTheme] || COLOR_THEMES.navy;
  const primaryColor = data?.colorTheme === 'custom' ? (data?.customPrimaryColor || '#002B49') : (theme?.primary || '#002B49');
  const accentColor = data?.colorTheme === 'custom' ? (data?.customAccentColor || '#D4AF37') : (theme?.accent || '#D4AF37');

  const fontFamily =
    data?.fontFamily === 'times' ? '"Times New Roman", Times, serif'
    : data?.fontFamily === 'arial' ? 'Arial, Helvetica, sans-serif'
    : data?.fontFamily === 'georgia' ? 'Georgia, serif'
    : '"Inter", "Segoe UI", Arial, sans-serif';

  return (
    <div
      style={{
        width: '100%',
        height: '100%',
        boxSizing: 'border-box',
        display: 'flex',
        fontFamily,
        backgroundColor: data?.paperBg === 'cream' ? '#FFFDF5' : data?.paperBg === 'light-blue' ? '#F4F8FB' : '#FFFFFF',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* ── LEFT SIDEBAR (28% width) ── */}
      <div
        style={{
          width: '28%',
          backgroundColor: primaryColor,
          color: '#FFFFFF',
          padding: '40px 24px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* Subtle decorative circles in sidebar */}
        <div style={{ position: 'absolute', top: '-40px', left: '-40px', width: '120px', height: '120px', borderRadius: '50%', backgroundColor: 'rgba(255,255,255,0.06)' }} />
        <div style={{ position: 'absolute', bottom: '60px', right: '-40px', width: '140px', height: '140px', borderRadius: '50%', backgroundColor: 'rgba(255,255,255,0.04)' }} />
        <div style={{ position: 'absolute', top: 0, bottom: 0, right: 0, width: '4px', backgroundColor: accentColor }} />

        {/* Top: Logo & University Info */}
        <div style={{ position: 'relative', zIndex: 1, textAlign: 'center' }}>
          <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '16px' }}>
            <USTCLogo
              logoType={data?.logoType || 'ustc_default'}
              logoUrl={data?.logoUrl}
              logoSize={(data?.logoSize || 95) * 0.95}
              primaryColor="#FFFFFF"
              accentColor={accentColor}
            />
          </div>
          <h2 style={{
            fontSize: '13px',
            fontWeight: 900,
            textTransform: 'uppercase',
            letterSpacing: '0.06em',
            color: '#FFFFFF',
            lineHeight: 1.3,
            margin: '0 0 8px 0',
          }}>
            {data?.instituteName || 'University of Science and Technology Chittagong'}
          </h2>
          <div style={{ width: '40px', height: '2px', backgroundColor: accentColor, margin: '8px auto' }} />
          <p style={{
            fontSize: '10px',
            fontWeight: 700,
            textTransform: 'uppercase',
            letterSpacing: '0.08em',
            color: accentColor,
            margin: 0,
            lineHeight: 1.3,
          }}>
            {data?.departmentName || 'Department of CSE'}
          </p>
        </div>

        {/* Middle decorative text */}
        <div style={{ position: 'relative', zIndex: 1, textAlign: 'center', margin: 'auto 0' }}>
          <div style={{
            writingMode: 'vertical-rl',
            transform: 'rotate(180deg)',
            margin: '0 auto',
            fontSize: '10px',
            fontWeight: 800,
            letterSpacing: '0.3em',
            textTransform: 'uppercase',
            color: 'rgba(255,255,255,0.3)',
          }}>
            Academic Report
          </div>
        </div>

        {/* Bottom: Date & USTC tag */}
        <div style={{ position: 'relative', zIndex: 1, textAlign: 'center', borderTop: '1px solid rgba(255,255,255,0.15)', paddingTop: '16px' }}>
          <p style={{ fontSize: '9px', textTransform: 'uppercase', letterSpacing: '0.12em', color: 'rgba(255,255,255,0.6)', margin: '0 0 3px 0' }}>
            Date of Submission
          </p>
          <p style={{ fontSize: '11px', fontWeight: 800, color: '#FFFFFF', margin: '0 0 8px 0' }}>
            {formatSubmissionDate(data?.submissionDate)}
          </p>
          <span style={{
            display: 'inline-block',
            fontSize: '8px',
            fontWeight: 800,
            letterSpacing: '0.1em',
            textTransform: 'uppercase',
            padding: '2px 8px',
            backgroundColor: 'rgba(255,255,255,0.1)',
            borderRadius: '10px',
            color: accentColor,
          }}>
            USTC • Chittagong
          </span>
        </div>
      </div>

      {/* ── RIGHT MAIN PANEL (72% width) ── */}
      <div
        style={{
          width: '72%',
          padding: '44px 40px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
        }}
      >
        {/* Document Type Badge (Top Right) */}
        <div>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderBottom: '1px solid #E5E7EB', paddingBottom: '14px' }}>
            <span style={{
              display: 'inline-block',
              padding: '5px 18px',
              backgroundColor: `${primaryColor}12`,
              border: `1.5px solid ${primaryColor}40`,
              color: primaryColor,
              fontSize: '11px',
              fontWeight: 800,
              textTransform: 'uppercase',
              letterSpacing: '0.15em',
              borderRadius: '4px',
              whiteSpace: 'nowrap',
            }}>
              {data?.docType || 'LAB REPORT'}
            </span>

            {data?.instituteSubtext && (
              <span style={{ fontSize: '10px', color: '#9CA3AF', fontStyle: 'italic' }}>
                {data.instituteSubtext}
              </span>
            )}
          </div>
        </div>

        {/* Center: Title & Course Information */}
        <div style={{ margin: 'auto 0', padding: '20px 0' }}>
          <p style={{
            fontSize: '10px',
            fontWeight: 800,
            textTransform: 'uppercase',
            letterSpacing: '0.2em',
            color: accentColor,
            margin: '0 0 6px 0',
          }}>
            Course Title
          </p>
          <h1 style={{
            fontSize: '26px',
            fontWeight: 900,
            textTransform: 'uppercase',
            letterSpacing: '0.03em',
            color: primaryColor,
            lineHeight: 1.2,
            margin: '0 0 16px 0',
          }}>
            {data?.courseTitle || 'Course Title Here'}
          </h1>

          {/* Course Code — bold font, no rectangle */}
          {data?.courseCode && (
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '20px' }}>
              <span style={{ fontSize: '11px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', color: '#6B7280' }}>
                Course Code:
              </span>
              <span style={{ fontSize: '16px', fontWeight: 900, letterSpacing: '0.06em', color: primaryColor }}>
                {data.courseCode}
              </span>
            </div>
          )}

          {/* Experiment details */}
          {(data?.experimentNo || data?.topicTitle) && (
            <div style={{
              borderLeft: `4px solid ${accentColor}`,
              paddingLeft: '16px',
              backgroundColor: '#F9FAFB',
              padding: '12px 16px',
              borderRadius: '0 6px 6px 0',
            }}>
              {data.experimentNo && (
                <p style={{ fontSize: '11px', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.1em', color: primaryColor, margin: '0 0 4px 0' }}>
                  {data.experimentNo}
                </p>
              )}
              {data.topicTitle && (
                <p style={{ fontSize: '13px', fontWeight: 600, color: '#374151', margin: 0, lineHeight: 1.5 }}>
                  {data.topicTitle}
                </p>
              )}
            </div>
          )}
        </div>

        {/* Bottom: Submitted To & By Cards */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '14px' }}>
            {/* Submitted To */}
            <div style={{
              padding: '14px',
              backgroundColor: '#F8FAFC',
              borderRadius: '6px',
              border: '1px solid #E2E8F0',
              borderTop: `3px solid ${primaryColor}`,
            }}>
              <p style={{ fontSize: '9px', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.15em', color: primaryColor, margin: '0 0 6px 0' }}>
                Submitted To
              </p>
              <p style={{ fontSize: '13px', fontWeight: 800, color: '#111827', margin: '0 0 2px 0' }}>{data?.instructorName || 'Instructor Name'}</p>
              <p style={{ fontSize: '11px', fontWeight: 500, color: '#4B5563', margin: '0 0 1px 0' }}>{data?.instructorDesignation || ''}</p>
              <p style={{ fontSize: '10px', color: '#6B7280', margin: 0 }}>{data?.instructorDepartment || ''}</p>
            </div>

            {/* Submitted By */}
            <div style={{
              padding: '14px',
              backgroundColor: '#F8FAFC',
              borderRadius: '6px',
              border: '1px solid #E2E8F0',
              borderTop: `3px solid ${accentColor}`,
            }}>
              <p style={{ fontSize: '9px', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.15em', color: primaryColor, margin: '0 0 6px 0' }}>
                Submitted By
              </p>
              <p style={{ fontSize: '13px', fontWeight: 800, color: '#111827', margin: '0 0 2px 0' }}>{data?.studentName || 'Student Name'}</p>
              <p style={{ fontSize: '11px', fontWeight: 700, color: primaryColor, margin: '0 0 1px 0' }}>
                ID: <span style={{ fontFamily: 'monospace' }}>{data?.studentId || 'N/A'}</span>
              </p>
              <p style={{ fontSize: '10px', color: '#6B7280', margin: '0 0 1px 0' }}>
                {[data?.studentBatch, data?.studentSemester, data?.studentSection].filter(Boolean).join(' • ')}
              </p>
              <p style={{ fontSize: '10px', color: '#9CA3AF', margin: 0 }}>{data?.studentDepartment || ''}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
