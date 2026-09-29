import React from 'react';

interface USTCLogoProps {
  logoType: 'ustc_default' | 'cse_crest' | 'eee_crest' | 'pharm_crest' | 'custom' | 'none';
  logoUrl?: string | null;
  logoSize?: number;
  primaryColor?: string;
  accentColor?: string;
  className?: string;
}

export const USTCLogo: React.FC<USTCLogoProps> = ({
  logoType,
  logoUrl,
  logoSize = 95,
  primaryColor = '#002B49',
  accentColor = '#D4AF37',
  className = '',
}) => {
  if (logoType === 'none') {
    return null;
  }

  // Custom uploaded logo
  if (logoType === 'custom' && logoUrl) {
    return (
      <div className={`flex justify-center items-center text-center w-full ${className}`}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={logoUrl}
          alt="Custom Logo"
          style={{ width: `${logoSize}px`, height: 'auto', maxHeight: `${logoSize * 1.3}px` }}
          className="object-contain mx-auto"
        />
      </div>
    );
  }

  // CSE Crest Vector
  if (logoType === 'cse_crest') {
    return (
      <div className={`flex justify-center items-center text-center w-full ${className}`}>
        <svg
          width={logoSize}
          height={logoSize}
          viewBox="0 0 120 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="mx-auto"
        >
          <circle cx="60" cy="60" r="56" fill={primaryColor} stroke={accentColor} strokeWidth="4" />
          <circle cx="60" cy="60" r="48" fill="none" stroke="#FFFFFF" strokeWidth="1.5" strokeDasharray="3 3" />
          
          <path d="M42 42L32 60L42 78" stroke={accentColor} strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M78 42L88 60L78 78" stroke={accentColor} strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M66 38L54 82" stroke="#FFFFFF" strokeWidth="3.5" strokeLinecap="round"/>
          
          <text x="60" y="24" fill="#FFFFFF" fontSize="9" fontWeight="bold" textAnchor="middle">USTC</text>
          <text x="60" y="100" fill={accentColor} fontSize="8" fontWeight="bold" textAnchor="middle">DEPT OF CSE</text>
        </svg>
      </div>
    );
  }

  // EEE Crest Vector
  if (logoType === 'eee_crest') {
    return (
      <div className={`flex justify-center items-center text-center w-full ${className}`}>
        <svg
          width={logoSize}
          height={logoSize}
          viewBox="0 0 120 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="mx-auto"
        >
          <circle cx="60" cy="60" r="56" fill={primaryColor} stroke={accentColor} strokeWidth="4" />
          <ellipse cx="60" cy="60" rx="35" ry="14" stroke={accentColor} strokeWidth="2" transform="rotate(30 60 60)"/>
          <ellipse cx="60" cy="60" rx="35" ry="14" stroke={accentColor} strokeWidth="2" transform="rotate(-30 60 60)"/>
          <path d="M62 36L50 62H64L58 84" stroke="#FFFFFF" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>

          <text x="60" y="24" fill="#FFFFFF" fontSize="9" fontWeight="bold" textAnchor="middle">USTC</text>
          <text x="60" y="102" fill={accentColor} fontSize="8" fontWeight="bold" textAnchor="middle">DEPT OF EEE</text>
        </svg>
      </div>
    );
  }

  // Pharmacy Crest Vector
  if (logoType === 'pharm_crest') {
    return (
      <div className={`flex justify-center items-center text-center w-full ${className}`}>
        <svg
          width={logoSize}
          height={logoSize}
          viewBox="0 0 120 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="mx-auto"
        >
          <circle cx="60" cy="60" r="56" fill={primaryColor} stroke={accentColor} strokeWidth="4" />
          
          <path d="M40 60C40 75 50 82 60 82C70 82 80 75 80 60H40Z" fill={accentColor} />
          <path d="M35 56H85V60H35V56Z" fill="#FFFFFF" />
          <path d="M50 82H70V86H50V82Z" fill={accentColor} />
          <path d="M68 40L55 64" stroke="#FFFFFF" strokeWidth="4" strokeLinecap="round" />

          <text x="60" y="24" fill="#FFFFFF" fontSize="9" fontWeight="bold" textAnchor="middle">USTC</text>
          <text x="60" y="102" fill={accentColor} fontSize="8" fontWeight="bold" textAnchor="middle">DEPT OF PHARMACY</text>
        </svg>
      </div>
    );
  }

  // Official USTC Emblem Logo (Preset Image aligned to middle)
  return (
    <div className={`flex justify-center items-center text-center w-full ${className}`}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/ustc_logo.png"
        alt="Official USTC Logo"
        style={{ width: `${logoSize}px`, height: 'auto', maxHeight: `${logoSize * 1.3}px` }}
        className="object-contain mx-auto transition-all"
      />
    </div>
  );
};
