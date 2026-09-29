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

  const fontFamily =
    data?.fontFamily === 'times' ? '"Times New Roman", Times, serif'
    : data?.fontFamily === 'arial' ? 'Arial, Helvetica, sans-serif'
    : data?.fontFamily === 'georgia' ? 'Georgia, serif'
    : '"Inter", "Segoe UI", Arial, sans-serif';

  return (
    <div style={{
      width: '100%', height: '100%', boxSizing: 'border-box',
      display: 'flex', flexDirection: 'column',
      fontFamily, position: 'relative',
      backgroundColor: data?.paperBg === 'cream' ? '#FFFDF5' : data?.paperBg === 'light-blue' ? '#F4F8FB' : '#FFFFFF',
    }}>

      {/* Gradient Header Banner */}
      <div style={{
        background: `linear-gradient(135deg, ${primaryColor} 0%, ${primaryColor}CC 60%, ${accentColor}88 100%)`,
        padding: '28px 40px 24px 40px',
        display: 'flex', flexDirection: 'column', alignItems: 'center',
        position: 'relative', overflow: 'hidden',
      }}>
        {/* Decorative circles */}
        <div style={{ position: 'absolute', top: '-30px', right: '-30px', width: '100px', height: '100px', borderRadius: '50%', backgroundColor: 'rgba(255,255,255,0.08)' }} />
        <div style={{ position: 'absolute', bottom: '-20px', left: '-20px', width: '80px', height: '80px', borderRadius: '50%', backgroundColor: 'rgba(255,255,255,0.05)' }} />

        {/* Gold top accent line */}
        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '4px', backgroundColor: accentColor }} />

        <div style={{ position: 'relative', zIndex: 1, display: 'flex', justifyContent: 'center', marginBottom: '12px' }}>
          <USTCLogo
            logoType={data?.logoType || 'ustc_default'}
            logoUrl={data?.logoUrl}
            logoSize={(data?.logoSize || 95) * 1.0}
            primaryColor="#FFFFFF"
            accentColor={accentColor}
          />
        </div>
        <h1 style={{
          fontSize: '17px', fontWeight: 900, textTransform: 'uppercase',
          letterSpacing: '0.06em', color: '#FFFFFF', margin: '0 0 4px 0',
          textAlign: 'center', position: 'relative', zIndex: 1,
        }}>
          {data?.instituteName || 'University of Science and Technology Chittagong'}
        </h1>
        <p style={{
          fontSize: '11px', fontWeight: 600, textTransform: 'uppercase',
          letterSpacing: '0.1em', color: `${accentColor}`, margin: '0 0 4px 0',
          textAlign: 'center', position: 'relative', zIndex: 1,
        }}>
          {data?.departmentName || 'Department of Computer Science & Engineering'}
        </p>
        {data?.instituteSubtext && (
          <p style={{ fontSize: '10px', color: 'rgba(255,255,255,0.7)', margin: 0, textAlign: 'center', position: 'relative', zIndex: 1 }}>
            {data.instituteSubtext}
          </p>
        )}
      </div>

      {/* Accent divider strip */}
      <div style={{ height: '4px', background: `linear-gradient(to right, ${accentColor}, ${primaryColor}88)` }} />

      {/* BODY */}
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', padding: '24px 40px', textAlign: 'center' }}>

        {/* Doc type badge */}
        <div style={{ marginBottom: '16px', display: 'flex', justifyContent: 'center' }}>
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '6px 24px',
            background: `linear-gradient(135deg, ${primaryColor}, ${primaryColor}BB)`,
            color: '#FFFFFF',
            fontSize: '13px', fontWeight: 800,
            textTransform: 'uppercase', letterSpacing: '0.15em',
            borderRadius: '6px',
            lineHeight: 1.3,
            boxSizing: 'border-box',
          }}>
            {data?.docType || 'LAB REPORT'}
          </div>
        </div>

        {/* Course title */}
        <h2 style={{
          fontSize: '24px', fontWeight: 900, textTransform: 'uppercase',
          letterSpacing: '0.04em', color: primaryColor,
          margin: '0 0 16px 0', lineHeight: 1.2, maxWidth: '460px',
        }}>
          {data?.courseTitle || 'Course Title Here'}
        </h2>

        {/* Course code — bold font, no rectangle */}
        {data?.courseCode && (
          <div style={{ textAlign: 'center', marginBottom: '16px' }}>
            <span style={{
              fontSize: '15px',
              fontWeight: 900,
              letterSpacing: '0.08em',
              color: primaryColor,
            }}>
              {data.courseCode}
            </span>
          </div>
        )}

        {/* Experiment info */}
        {(data?.experimentNo || data?.topicTitle) && (
          <div style={{
            maxWidth: '420px', width: '100%',
            backgroundColor: `${primaryColor}08`,
            border: `1px solid ${primaryColor}22`,
            borderRadius: '8px', padding: '12px 16px',
            marginTop: '8px',
          }}>
            {data.experimentNo && (
              <p style={{ fontSize: '11px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', color: primaryColor, margin: '0 0 4px 0' }}>
                {data.experimentNo}
              </p>
            )}
            {data.topicTitle && (
              <p style={{ fontSize: '13px', color: '#374151', margin: 0, lineHeight: 1.5 }}>
                {data.topicTitle}
              </p>
            )}
          </div>
        )}
      </div>

      {/* FOOTER CARDS */}
      <div style={{ padding: '0 32px 28px 32px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>

          {/* Teacher card */}
          <div style={{
            padding: '16px',
            background: `linear-gradient(135deg, ${primaryColor}12, ${primaryColor}05)`,
            border: `1px solid ${primaryColor}30`,
            borderRadius: '10px',
            borderTop: `3px solid ${primaryColor}`,
          }}>
            <p style={{ fontSize: '9px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.15em', color: primaryColor, margin: '0 0 8px 0' }}>
              ✦ Submitted To
            </p>
            <p style={{ fontSize: '13px', fontWeight: 800, color: '#111827', margin: '0 0 3px 0' }}>{data?.instructorName || 'Instructor Name'}</p>
            <p style={{ fontSize: '11px', color: '#374151', margin: '0 0 2px 0' }}>{data?.instructorDesignation || ''}</p>
            <p style={{ fontSize: '10px', color: '#6B7280', margin: 0 }}>{data?.instructorDepartment || ''}</p>
          </div>

          {/* Student card */}
          <div style={{
            padding: '16px',
            background: `linear-gradient(135deg, ${accentColor}12, ${accentColor}05)`,
            border: `1px solid ${accentColor}40`,
            borderRadius: '10px',
            borderTop: `3px solid ${accentColor}`,
          }}>
            <p style={{ fontSize: '9px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.15em', color: primaryColor, margin: '0 0 8px 0' }}>
              ✦ Submitted By
            </p>
            <p style={{ fontSize: '13px', fontWeight: 800, color: '#111827', margin: '0 0 3px 0' }}>{data?.studentName || 'Student Name'}</p>
            <p style={{ fontSize: '11px', fontWeight: 600, color: '#374151', margin: '0 0 2px 0' }}>
              ID: <span style={{ fontFamily: 'monospace' }}>{data?.studentId || 'N/A'}</span>
            </p>
            <p style={{ fontSize: '10px', color: '#6B7280', margin: '0 0 2px 0' }}>
              {[data?.studentBatch, data?.studentSemester, data?.studentSection].filter(Boolean).join(' • ')}
            </p>
            <p style={{ fontSize: '10px', color: '#9CA3AF', margin: 0 }}>{data?.studentDepartment || ''}</p>
          </div>
        </div>

        {/* Bottom strip */}
        <div style={{
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          marginTop: '14px', paddingTop: '12px',
          borderTop: `2px solid ${primaryColor}`,
          fontSize: '11px', color: '#6B7280',
        }}>
          <span style={{
            display: 'inline-block',
            padding: '3px 12px',
            backgroundColor: primaryColor,
            color: accentColor,
            borderRadius: '4px',
            fontWeight: 700, fontSize: '10px', letterSpacing: '0.08em',
            textTransform: 'uppercase', whiteSpace: 'nowrap',
          }}>
            USTC — Est. 1989
          </span>
          <span>
            <span style={{ color: '#9CA3AF', marginRight: '4px' }}>Submission Date:</span>
            <strong style={{ color: primaryColor }}>{formatSubmissionDate(data?.submissionDate)}</strong>
          </span>
        </div>
      </div>

    </div>
  );
};
