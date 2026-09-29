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
        padding: '40px 48px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        fontFamily,
        backgroundColor: data?.paperBg === 'cream' ? '#FFFDF5' : data?.paperBg === 'light-blue' ? '#F4F8FB' : '#FFFFFF',
        position: 'relative',
      }}
    >
      {/* Double Border Frame */}
      <div style={{
        position: 'absolute',
        inset: '20px',
        border: `4px double ${primaryColor}`,
        pointerEvents: 'none',
      }} />
      <div style={{
        position: 'absolute',
        inset: '26px',
        border: `1px solid ${primaryColor}`,
        opacity: 0.4,
        pointerEvents: 'none',
      }} />

      {/* ── HEADER ── */}
      <div style={{ textAlign: 'center', position: 'relative', zIndex: 1 }}>
        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '12px' }}>
          <USTCLogo
            logoType={data?.logoType || 'ustc_default'}
            logoUrl={data?.logoUrl}
            logoSize={data?.logoSize || 95}
            primaryColor={primaryColor}
            accentColor={accentColor}
          />
        </div>

        <h1 style={{
          fontSize: '18px',
          fontWeight: 800,
          textTransform: 'uppercase',
          letterSpacing: '0.06em',
          color: primaryColor,
          margin: '0 0 4px 0',
          lineHeight: 1.3,
        }}>
          {data?.instituteName || 'University of Science and Technology Chittagong'}
        </h1>

        {data?.instituteSubtext && (
          <p style={{ fontSize: '11px', color: '#4B5563', fontStyle: 'italic', margin: '0 0 8px 0', letterSpacing: '0.04em' }}>
            {data.instituteSubtext}
          </p>
        )}

        <div style={{ width: '75%', height: '4px', backgroundColor: primaryColor, margin: '10px auto' }} />

        <h2 style={{
          fontSize: '14px',
          fontWeight: 600,
          textTransform: 'uppercase',
          letterSpacing: '0.08em',
          color: '#1F2937',
          margin: 0,
        }}>
          {data?.departmentName || 'Department of Computer Science & Engineering'}
        </h2>
      </div>

      {/* ── CENTRAL SECTION ── */}
      <div style={{ textAlign: 'center', position: 'relative', zIndex: 1, padding: '24px 0', flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>

        {/* Document Type Badge */}
        <div style={{ marginBottom: '20px', display: 'flex', justifyContent: 'center' }}>
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '6px 24px',
            border: `2px solid ${primaryColor}`,
            color: primaryColor,
            backgroundColor: '#F8FAFC',
            fontSize: '13px',
            fontWeight: 800,
            letterSpacing: '0.15em',
            textTransform: 'uppercase',
            borderRadius: '2px',
            lineHeight: 1.3,
            boxSizing: 'border-box',
          }}>
            {data?.docType || 'LAB REPORT'}
          </div>
        </div>

        {/* Course Title Label */}
        <p style={{ fontSize: '10px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.15em', color: '#9CA3AF', margin: '0 0 6px 0' }}>
          Course Title
        </p>

        {/* Course Title */}
        <h3 style={{
          fontSize: '22px',
          fontWeight: 900,
          textTransform: 'uppercase',
          letterSpacing: '0.04em',
          color: primaryColor,
          margin: '0 0 16px 0',
          lineHeight: 1.25,
          maxWidth: '480px',
        }}>
          {data?.courseTitle || 'Course Title Here'}
        </h3>

        {/* Course Code — plain bold text, no border */}
        {data?.courseCode && (
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', marginBottom: '20px' }}>
            <span style={{ fontSize: '10px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.12em', color: '#9CA3AF' }}>
              Course Code:
            </span>
            <span style={{ fontSize: '15px', fontWeight: 900, letterSpacing: '0.08em', color: primaryColor }}>
              {data.courseCode}
            </span>
          </div>
        )}

        {/* Experiment / Topic */}
        {(data?.experimentNo || data?.topicTitle) && (
          <div style={{
            maxWidth: '440px',
            borderTop: `1px dashed #D1D5DB`,
            paddingTop: '14px',
            marginTop: '8px',
          }}>
            {data.experimentNo && (
              <p style={{ fontSize: '11px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', color: primaryColor, margin: '0 0 4px 0' }}>
                {data.experimentNo}
              </p>
            )}
            {data.topicTitle && (
              <p style={{ fontSize: '13px', fontStyle: 'italic', color: '#374151', margin: 0, lineHeight: 1.5 }}>
                &ldquo;{data.topicTitle}&rdquo;
              </p>
            )}
          </div>
        )}
      </div>

      {/* ── FOOTER ── */}
      <div style={{ position: 'relative', zIndex: 1 }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px', borderTop: `2px solid ${primaryColor}`, paddingTop: '20px' }}>

          {/* Submitted To */}
          <div>
            <p style={{ fontSize: '10px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.15em', color: primaryColor, borderBottom: `1px solid ${accentColor}`, paddingBottom: '6px', marginBottom: '8px', margin: '0 0 8px 0' }}>
              Submitted To
            </p>
            <p style={{ fontSize: '13px', fontWeight: 700, color: '#111827', margin: '0 0 3px 0' }}>{data?.instructorName || 'Instructor Name'}</p>
            <p style={{ fontSize: '11px', fontWeight: 500, color: '#374151', margin: '0 0 2px 0' }}>{data?.instructorDesignation || ''}</p>
            <p style={{ fontSize: '11px', color: '#6B7280', margin: '0 0 2px 0' }}>{data?.instructorDepartment || ''}</p>
            <p style={{ fontSize: '10px', color: '#9CA3AF', fontStyle: 'italic', margin: 0 }}>{data?.instituteName || ''}</p>
          </div>

          {/* Submitted By */}
          <div style={{ borderLeft: '1px solid #E5E7EB', paddingLeft: '20px' }}>
            <p style={{ fontSize: '10px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.15em', color: primaryColor, borderBottom: `1px solid ${accentColor}`, paddingBottom: '6px', marginBottom: '8px', margin: '0 0 8px 0' }}>
              Submitted By
            </p>
            <p style={{ fontSize: '13px', fontWeight: 700, color: '#111827', margin: '0 0 3px 0' }}>{data?.studentName || 'Student Name'}</p>
            <p style={{ fontSize: '11px', fontWeight: 600, color: '#374151', margin: '0 0 2px 0' }}>
              ID: <span style={{ fontFamily: 'monospace' }}>{data?.studentId || 'N/A'}</span>
            </p>
            <p style={{ fontSize: '11px', color: '#6B7280', margin: '0 0 2px 0' }}>
              {[data?.studentBatch, data?.studentSemester, data?.studentSection].filter(Boolean).join(' • ')}
            </p>
            <p style={{ fontSize: '11px', color: '#6B7280', margin: 0 }}>{data?.studentDepartment || ''}</p>
          </div>
        </div>

        {/* Date */}
        <p style={{ textAlign: 'center', fontSize: '11px', color: '#6B7280', marginTop: '14px', paddingTop: '10px' }}>
          <span style={{ textTransform: 'uppercase', letterSpacing: '0.1em', marginRight: '6px' }}>Date of Submission:</span>
          <strong style={{ color: '#1F2937' }}>{formatSubmissionDate(data?.submissionDate)}</strong>
        </p>
      </div>
    </div>
  );
};
