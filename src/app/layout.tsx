import type { Metadata } from 'next';
import { Analytics } from '@vercel/analytics/next';
import './globals.css';

export const metadata: Metadata = {
  title: 'USTC Cover Page Generator | Instant A4 Printable PDF',
  description: 'Instant Cover Page Generator for students at University of Science and Technology Chittagong (USTC). Real-time preview, professional presets, crisp A4 PDF export.',
  keywords: ['USTC', 'University of Science and Technology Chittagong', 'Cover Page Maker', 'Lab Report', 'Assignment', 'A4 PDF'],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-full" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        {/* eslint-disable-next-line @next/next/no-page-custom-font */}
        <link
          href="https://fonts.googleapis.com/css2?family=Georgia&family=Inter:wght@400;500;600;700;800;900&family=Times+New+Roman&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="h-full flex flex-col font-sans antialiased" suppressHydrationWarning>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
