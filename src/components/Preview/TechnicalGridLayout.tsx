import React from 'react';
import { CoverPageData } from '../../types/coverPage';
import { USTCLogo } from '../USTCLogo';
import { COLOR_THEMES } from '../../utils/sampleData';
import { formatSubmissionDate } from '../../utils/formatters';

interface Props {
  data: CoverPageData;
}

export const TechnicalGridLayout: React.FC<Props> = ({ data }) => {
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
        flexDirection: 'column',
        justifyContent: 'space-between',
        fontFamily,
        backgroundColor: data?.paperBg === 'cream' ? '#FFFDF5' : data?.paperBg === 'light-blue' ? '#F4F8FB' : '#FFFFFF',
        position: 'relative',
        padding: '36px 44px',
      }}
    >
      {/* Top Tech Bars */}
      <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '6px', backgroundColor: primaryColor }} />
      <div style={{ position: 'absolute', top: '6px', left: 0, right: 0, height: '3px', backgroundColor: accentColor }} />

      {/* Bottom Tech Bars */}
      <div style={{ position: 'absolute', bottom: '6px', left: 0, right: 0, height: '3px', backgroundColor: accentColor }} />
      <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: '6px', backgroundColor: primaryColor }} />

      {/* ── HEADER ── */}
      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderBottom: `2px solid ${primaryColor}20`,
        paddingBottom: '20px',
      }}>
        <div style={{ flex: 1 }}>
          <h1 style={{
            fontSize: '17px',
            fontWeight: 900,
            textTransform: 'uppercase',
            letterSpacing: '0.05em',
            color: primaryColor,
            margin: '0 0 4px 0',
            lineHeight: 1.25,
          }}>
            {data?.instituteName || 'University of Science and Technology Chittagong'}
          </h1>
          <p style={{
            fontSize: '12px',
            fontWeight: 700,
            textTransform: 'uppercase',
            letterSpacing: '0.08em',
            color: '#4B5563',
            margin: '0 0 2px 0',
          }}>
            {data?.departmentName || 'Department of Computer Science & Engineering'}
          </p>
          {data?.instituteSubtext && (
            <p style={{ fontSize: '10px', color: '#9CA3AF', margin: 0, fontStyle: 'italic' }}>
              {data.instituteSubtext}
            </p>
          )}
        </div>

        <div style={{ marginLeft: '20px', flexShrink: 0 }}>
          <USTCLogo
            logoType={data?.logoType || 'ustc_default'}
            logoUrl={data?.logoUrl}
            logoSize={(data?.logoSize || 95) * 0.9}
            primaryColor={primaryColor}
            accentColor={accentColor}
          />
        </div>
      </div>

      {/* ── CENTRAL SECTION ── */}
      <div style={{
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        padding: '24px 0',
      }}>
        {/* Document Type Badge */}
        <div style={{ marginBottom: '18px', display: 'flex', justifyContent: 'center' }}>
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '6px 26px',
            border: `2px solid ${primaryColor}`,
            backgroundColor: `${primaryColor}08`,
            color: primaryColor,
            fontSize: '12px',
            fontWeight: 900,
            letterSpacing: '0.2em',
            textTransform: 'uppercase',
            borderRadius: '4px',
            lineHeight: 1.3,
            boxSizing: 'border-box',
          }}>
            {data?.docType || 'LAB REPORT'}
          </div>
        </div>

        {/* Course Title Label */}
        <p style={{
          fontSize: '10px',
          fontWeight: 800,
          textTransform: 'uppercase',
          letterSpacing: '0.18em',
          color: '#9CA3AF',
          margin: '0 0 6px 0',
        }}>
          Course Title
        </p>

        {/* Course Title */}
        <h2 style={{
          fontSize: '24px',
          fontWeight: 900,
          textTransform: 'uppercase',
          letterSpacing: '0.04em',
          color: primaryColor,
          margin: '0 0 16px 0',
          lineHeight: 1.25,
          maxWidth: '480px',
        }}>
          {data?.courseTitle || 'Course Title Here'}
        </h2>

        {/* Course Code — bold font, no rectangle */}
        {data?.courseCode && (
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', marginBottom: '18px' }}>
            <span style={{ fontSize: '11px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.12em', color: '#6B7280' }}>
              Course Code:
            </span>
            <span style={{ fontSize: '16px', fontWeight: 900, letterSpacing: '0.08em', color: primaryColor }}>
              {data.courseCode}
            </span>
          </div>
        )}

        {/* Experiment / Topic */}
        {(data?.experimentNo || data?.topicTitle) && (
          <div style={{
            maxWidth: '460px',
            width: '100%',
            backgroundColor: '#F8FAFC',
            border: `1px solid #E2E8F0`,
            borderLeft: `4px solid ${primaryColor}`,
            borderRadius: '0 6px 6px 0',
            padding: '12px 18px',
            textAlign: 'left',
          }}>
            {data.experimentNo && (
              <p style={{ fontSize: '11px', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.1em', color: primaryColor, margin: '0 0 4px 0' }}>
                {data.experimentNo}
              </p>
            )}
            {data.topicTitle && (
              <p style={{ fontSize: '13px', fontWeight: 600, color: '#334155', margin: 0, lineHeight: 1.5 }}>
                {data.topicTitle}
              </p>
            )}
          </div>
        )}
      </div>

      {/* ── FOOTER GRID ── */}
      <div>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
          {/* Submitted To Card */}
          <div style={{
            padding: '16px',
            backgroundColor: '#F8FAFC',
            borderRadius: '6px',
            border: '1px solid #E2E8F0',
            position: 'relative',
          }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '8px', borderBottom: '1px solid #E2E8F0', paddingBottom: '6px' }}>
              <span style={{ fontSize: '9px', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.15em', color: primaryColor }}>
                Submitted To
              </span>
              <span style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: primaryColor }} />
            </div>
            <p style={{ fontSize: '13px', fontWeight: 800, color: '#111827', margin: '0 0 3px 0' }}>{data?.instructorName || 'Instructor Name'}</p>
            <p style={{ fontSize: '11px', fontWeight: 600, color: '#475569', margin: '0 0 2px 0' }}>{data?.instructorDesignation || ''}</p>
            <p style={{ fontSize: '10px', color: '#64748B', margin: 0 }}>{data?.instructorDepartment || ''}</p>
          </div>

          {/* Submitted By Card */}
          <div style={{
            padding: '16px',
            backgroundColor: '#F8FAFC',
            borderRadius: '6px',
            border: '1px solid #E2E8F0',
            position: 'relative',
          }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '8px', borderBottom: '1px solid #E2E8F0', paddingBottom: '6px' }}>
              <span style={{ fontSize: '9px', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.15em', color: primaryColor }}>
                Submitted By
              </span>
              <span style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: accentColor }} />
            </div>
            <p style={{ fontSize: '13px', fontWeight: 800, color: '#111827', margin: '0 0 3px 0' }}>{data?.studentName || 'Student Name'}</p>
            <p style={{ fontSize: '11px', fontWeight: 700, color: primaryColor, margin: '0 0 2px 0' }}>
              ID: <span style={{ fontFamily: 'monospace' }}>{data?.studentId || 'N/A'}</span>
            </p>
            <p style={{ fontSize: '10px', color: '#64748B', margin: '0 0 2px 0' }}>
              {[data?.studentBatch, data?.studentSemester, data?.studentSection].filter(Boolean).join(' • ')}
            </p>
            <p style={{ fontSize: '10px', color: '#94A3B8', margin: 0 }}>{data?.studentDepartment || ''}</p>
          </div>
        </div>

        {/* Meta Bar */}
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginTop: '14px',
          paddingTop: '10px',
          borderTop: `1px solid #E2E8F0`,
          fontSize: '11px',
          color: '#64748B',
        }}>
          <span style={{ fontWeight: 600 }}>University of Science and Technology Chittagong</span>
          <span>
            <span style={{ color: '#94A3B8', marginRight: '6px', textTransform: 'uppercase', letterSpacing: '0.08em', fontSize: '10px' }}>
              Submission Date:
            </span>
            <strong style={{ color: primaryColor }}>{formatSubmissionDate(data?.submissionDate)}</strong>
          </span>
        </div>
      </div>
    </div>
  );
};
