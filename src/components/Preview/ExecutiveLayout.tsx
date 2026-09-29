import React from 'react';
import { CoverPageData } from '../../types/coverPage';
import { USTCLogo } from '../USTCLogo';
import { COLOR_THEMES } from '../../utils/sampleData';
import { formatSubmissionDate } from '../../utils/formatters';

interface Props {
  data: CoverPageData;
}

export const ExecutiveLayout: React.FC<Props> = ({ data }) => {
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
        padding: '48px 52px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        fontFamily,
        backgroundColor: data?.paperBg === 'cream' ? '#FFFDF5' : data?.paperBg === 'light-blue' ? '#F4F8FB' : '#FFFFFF',
        position: 'relative',
      }}
    >
      {/* Refined Corner Frame Accents */}
      <div style={{ position: 'absolute', top: '24px', left: '24px', width: '32px', height: '32px', borderTop: `2px solid ${primaryColor}`, borderLeft: `2px solid ${primaryColor}`, pointerEvents: 'none' }} />
      <div style={{ position: 'absolute', top: '24px', right: '24px', width: '32px', height: '32px', borderTop: `2px solid ${primaryColor}`, borderRight: `2px solid ${primaryColor}`, pointerEvents: 'none' }} />
      <div style={{ position: 'absolute', bottom: '24px', left: '24px', width: '32px', height: '32px', borderBottom: `2px solid ${primaryColor}`, borderLeft: `2px solid ${primaryColor}`, pointerEvents: 'none' }} />
      <div style={{ position: 'absolute', bottom: '24px', right: '24px', width: '32px', height: '32px', borderBottom: `2px solid ${primaryColor}`, borderRight: `2px solid ${primaryColor}`, pointerEvents: 'none' }} />

      {/* ── HEADER ── */}
      <div style={{ textAlign: 'center', position: 'relative', zIndex: 1 }}>
        {/* Top accent dual-line */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', marginBottom: '14px' }}>
          <div style={{ flex: 1, height: '1px', backgroundColor: primaryColor, opacity: 0.3 }} />
          <span style={{ fontSize: '10px', fontWeight: 800, letterSpacing: '0.2em', textTransform: 'uppercase', color: accentColor }}>
            ESTD. 1989
          </span>
          <div style={{ flex: 1, height: '1px', backgroundColor: primaryColor, opacity: 0.3 }} />
        </div>

        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '14px' }}>
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
          fontWeight: 900,
          textTransform: 'uppercase',
          letterSpacing: '0.07em',
          color: primaryColor,
          margin: '0 0 6px 0',
          lineHeight: 1.3,
        }}>
          {data?.instituteName || 'University of Science and Technology Chittagong'}
        </h1>

        <h2 style={{
          fontSize: '13px',
          fontWeight: 700,
          textTransform: 'uppercase',
          letterSpacing: '0.1em',
          color: '#374151',
          margin: '0 0 4px 0',
        }}>
          {data?.departmentName || 'Department of Computer Science & Engineering'}
        </h2>

        {data?.instituteSubtext && (
          <p style={{ fontSize: '11px', color: '#6B7280', fontStyle: 'italic', margin: 0, letterSpacing: '0.04em' }}>
            {data.instituteSubtext}
          </p>
        )}

        <div style={{ width: '40%', height: '2px', backgroundColor: accentColor, margin: '14px auto 0 auto' }} />
      </div>

      {/* ── CENTRAL SECTION ── */}
      <div style={{
        textAlign: 'center',
        position: 'relative',
        zIndex: 1,
        padding: '20px 0',
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
        {/* Document Type Badge */}
        <div style={{ marginBottom: '18px', display: 'flex', justifyContent: 'center' }}>
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '5px 22px',
            backgroundColor: primaryColor,
            color: '#FFFFFF',
            fontSize: '12px',
            fontWeight: 800,
            letterSpacing: '0.18em',
            textTransform: 'uppercase',
            borderRadius: '2px',
            lineHeight: 1.3,
            boxSizing: 'border-box',
          }}>
            {data?.docType || 'LAB REPORT'}
          </div>
        </div>

        {/* Course Title Label */}
        <p style={{
          fontSize: '10px',
          fontWeight: 700,
          textTransform: 'uppercase',
          letterSpacing: '0.2em',
          color: '#9CA3AF',
          margin: '0 0 6px 0',
        }}>
          Course Title
        </p>

        {/* Course Title */}
        <h3 style={{
          fontSize: '23px',
          fontWeight: 900,
          textTransform: 'uppercase',
          letterSpacing: '0.04em',
          color: primaryColor,
          margin: '0 0 14px 0',
          lineHeight: 1.25,
          maxWidth: '480px',
        }}>
          {data?.courseTitle || 'Course Title Here'}
        </h3>

        {/* Course Code — bold font, no rectangle */}
        {data?.courseCode && (
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', marginBottom: '18px' }}>
            <span style={{ fontSize: '11px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.12em', color: '#6B7280' }}>
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
            maxWidth: '460px',
            backgroundColor: `${primaryColor}06`,
            border: `1px solid ${primaryColor}20`,
            borderRadius: '4px',
            padding: '12px 20px',
            marginTop: '6px',
          }}>
            {data.experimentNo && (
              <p style={{ fontSize: '11px', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.12em', color: primaryColor, margin: '0 0 4px 0' }}>
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

      {/* ── FOOTER (Formal Frame) ── */}
      <div style={{ position: 'relative', zIndex: 1 }}>
        <div style={{
          border: `1px solid ${primaryColor}35`,
          borderRadius: '4px',
          overflow: 'hidden',
          backgroundColor: '#FFFFFF',
          boxShadow: '0 1px 3px rgba(0,0,0,0.03)',
        }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr' }}>
            {/* Submitted To */}
            <div style={{ padding: '16px 20px', borderRight: `1px solid ${primaryColor}20` }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '8px' }}>
                <div style={{ width: '3px', height: '12px', backgroundColor: primaryColor }} />
                <p style={{ fontSize: '10px', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.15em', color: primaryColor, margin: 0 }}>
                  Submitted To
                </p>
              </div>
              <p style={{ fontSize: '13px', fontWeight: 800, color: '#111827', margin: '0 0 3px 0' }}>{data?.instructorName || 'Instructor Name'}</p>
              <p style={{ fontSize: '11px', fontWeight: 600, color: '#374151', margin: '0 0 2px 0' }}>{data?.instructorDesignation || ''}</p>
              <p style={{ fontSize: '11px', color: '#6B7280', margin: '0 0 2px 0' }}>{data?.instructorDepartment || ''}</p>
              <p style={{ fontSize: '10px', color: '#9CA3AF', fontStyle: 'italic', margin: 0 }}>{data?.instituteName || ''}</p>
            </div>

            {/* Submitted By */}
            <div style={{ padding: '16px 20px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '8px' }}>
                <div style={{ width: '3px', height: '12px', backgroundColor: accentColor }} />
                <p style={{ fontSize: '10px', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.15em', color: primaryColor, margin: 0 }}>
                  Submitted By
                </p>
              </div>
              <p style={{ fontSize: '13px', fontWeight: 800, color: '#111827', margin: '0 0 3px 0' }}>{data?.studentName || 'Student Name'}</p>
              <p style={{ fontSize: '11px', fontWeight: 700, color: primaryColor, margin: '0 0 2px 0' }}>
                ID: <span style={{ fontFamily: 'monospace' }}>{data?.studentId || 'N/A'}</span>
              </p>
              <p style={{ fontSize: '11px', color: '#6B7280', margin: '0 0 2px 0' }}>
                {[data?.studentBatch, data?.studentSemester, data?.studentSection].filter(Boolean).join(' • ')}
              </p>
              <p style={{ fontSize: '11px', color: '#6B7280', margin: 0 }}>{data?.studentDepartment || ''}</p>
            </div>
          </div>

          {/* Date Bar */}
          <div style={{
            backgroundColor: `${primaryColor}08`,
            borderTop: `1px solid ${primaryColor}20`,
            padding: '8px 20px',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            fontSize: '11px',
          }}>
            <span style={{ color: '#6B7280', fontWeight: 600 }}>University of Science and Technology Chittagong</span>
            <span>
              <span style={{ color: '#9CA3AF', marginRight: '6px', textTransform: 'uppercase', letterSpacing: '0.08em', fontSize: '10px' }}>
                Date:
              </span>
              <strong style={{ color: primaryColor }}>{formatSubmissionDate(data?.submissionDate)}</strong>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
