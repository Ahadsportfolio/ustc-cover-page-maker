import React, { useState } from 'react';
import { CoverPageData } from '../../types/coverPage';
import { ClassicAcademicLayout } from './ClassicAcademicLayout';
import { ModernMinimalistLayout } from './ModernMinimalistLayout';
import { PremiumTechLayout } from './PremiumTechLayout';
import { ExecutiveLayout } from './ExecutiveLayout';
import { SidebarLayout } from './SidebarLayout';
import { TechnicalGridLayout } from './TechnicalGridLayout';
import { exportCoverPageToPDF } from '../../utils/pdfExport';
import { Download, ZoomIn, ZoomOut, Maximize2, ShieldAlert } from 'lucide-react';

interface Props {
  data: CoverPageData;
  onUpdate: (updater: (prev: CoverPageData) => CoverPageData) => void;
}

export const CoverPagePreview: React.FC<Props> = ({ data, onUpdate }) => {
  const [zoomLevel, setZoomLevel] = useState<number>(0.8);
  const [isExporting, setIsExporting] = useState<boolean>(false);
  const [exportProgress, setExportProgress] = useState<number>(0);

  const handleDownloadPDF = async () => {
    setIsExporting(true);
    setExportProgress(10);
    await exportCoverPageToPDF('ustc-cover-page-canvas', data, (progress) => {
      setExportProgress(progress);
    });
    setTimeout(() => {
      setIsExporting(false);
      setExportProgress(0);
    }, 500);
  };

  const handleZoomIn = () => setZoomLevel((prev) => Math.min(prev + 0.1, 1.2));
  const handleZoomOut = () => setZoomLevel((prev) => Math.max(prev - 0.1, 0.4));
  const handleResetZoom = () => setZoomLevel(0.8);

  const toggleMarginGuide = () => {
    onUpdate((prev) => ({ ...prev, showMarginGuide: !prev.showMarginGuide }));
  };

  return (
    <div className="flex flex-col h-full w-full">
      {/* Action Toolbar Header */}
      <div className="bg-white/80 dark:bg-slate-800/80 backdrop-blur border-b border-gray-200 dark:border-slate-700 px-4 py-3 flex flex-wrap items-center justify-between gap-3 sticky top-0 z-20 shadow-sm rounded-t-xl">
        <div className="flex items-center space-x-2">
          <span className="text-xs font-bold uppercase tracking-wider text-gray-500 dark:text-gray-400">
            Preview Zoom:
          </span>
          <div className="flex items-center bg-gray-100 dark:bg-slate-700 rounded-lg p-1 border border-gray-200 dark:border-slate-600">
            <button
              onClick={handleZoomOut}
              title="Zoom Out"
              className="p-1.5 hover:bg-white dark:hover:bg-slate-600 rounded text-gray-700 dark:text-gray-200 transition"
            >
              <ZoomOut size={16} />
            </button>
            <span className="text-xs font-bold text-gray-800 dark:text-gray-200 w-12 text-center">
              {Math.round(zoomLevel * 100)}%
            </span>
            <button
              onClick={handleZoomIn}
              title="Zoom In"
              className="p-1.5 hover:bg-white dark:hover:bg-slate-600 rounded text-gray-700 dark:text-gray-200 transition"
            >
              <ZoomIn size={16} />
            </button>
            <button
              onClick={handleResetZoom}
              title="Reset Zoom"
              className="p-1.5 hover:bg-white dark:hover:bg-slate-600 rounded text-gray-700 dark:text-gray-200 transition ml-1 border-l border-gray-300 dark:border-slate-500"
            >
              <Maximize2 size={14} />
            </button>
          </div>

          {/* Margin Guide Toggle */}
          <button
            onClick={toggleMarginGuide}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold flex items-center space-x-1.5 border transition ${
              data.showMarginGuide
                ? 'bg-amber-50 text-amber-800 border-amber-300 dark:bg-amber-950/40 dark:text-amber-300 dark:border-amber-800'
                : 'bg-gray-100 text-gray-700 border-gray-200 dark:bg-slate-700 dark:text-gray-300 dark:border-slate-600'
            }`}
          >
            <ShieldAlert size={14} />
            <span>{data.showMarginGuide ? 'Margin Guides ON' : 'Margin Guides OFF'}</span>
          </button>
        </div>

        {/* Primary Download Button */}
        <div className="flex items-center space-x-3">
          <button
            onClick={handleDownloadPDF}
            disabled={isExporting}
            className="px-6 py-2.5 rounded-lg bg-gradient-to-r from-blue-700 to-indigo-800 hover:from-blue-800 hover:to-indigo-900 text-white text-xs sm:text-sm font-bold flex items-center space-x-2 shadow-md hover:shadow-lg transition transform active:scale-95 disabled:opacity-50"
          >
            <Download size={16} className={isExporting ? 'animate-bounce' : ''} />
            <span>{isExporting ? `Exporting PDF (${exportProgress}%)...` : 'Download PDF (A4)'}</span>
          </button>
        </div>
      </div>

      {/* Canvas Viewport */}
      <div className="flex-1 overflow-auto p-4 sm:p-8 flex justify-center items-start bg-slate-200 dark:bg-slate-900 min-h-[600px] relative">
        
        {/* Progress overlay */}
        {isExporting && (
          <div className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm z-30 flex flex-col items-center justify-center text-white">
            <div className="bg-slate-800 p-6 rounded-2xl border border-slate-700 shadow-2xl flex flex-col items-center max-w-sm w-full mx-4">
              <div className="w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin mb-4" />
              <h3 className="font-bold text-base mb-1">Generating Crisp A4 PDF</h3>
              <p className="text-xs text-slate-400 mb-4 text-center">Formatting margins and rendering graphics...</p>
              <div className="w-full bg-slate-700 h-2 rounded-full overflow-hidden">
                <div
                  className="bg-blue-500 h-full transition-all duration-300"
                  style={{ width: `${exportProgress}%` }}
                />
              </div>
            </div>
          </div>
        )}

        {/* Scaled Canvas wrapper */}
        <div
          style={{
            transform: `scale(${zoomLevel})`,
            transformOrigin: 'top center',
            transition: 'transform 0.15s ease-out'
          }}
          className="shadow-2xl rounded-sm transition-shadow duration-300 print:shadow-none print:transform-none"
        >
          {/* Exact A4 Dimensions: 210mm x 297mm (Approx 794px x 1123px at standard 96DPI) */}
          <div
            id="ustc-cover-page-canvas"
            className="w-[210mm] h-[297mm] bg-white relative overflow-hidden text-slate-900 print:w-full print:h-full"
            style={{
              backgroundColor:
                data.paperBg === 'cream' ? '#FFFDF5' : data.paperBg === 'light-blue' ? '#F4F8FB' : '#FFFFFF'
            }}
          >
            {/* Optional Print Margin Guides (25mm / 1 inch print boundary) */}
            {data.showMarginGuide && (
              <div className="print-margin-guide absolute inset-[25mm] border-2 border-dashed border-red-400 pointer-events-none z-50 flex items-start justify-end p-2 opacity-75">
                <span className="text-[10px] font-mono bg-red-100 text-red-700 px-1.5 py-0.5 rounded border border-red-300">
                  Print Margin Guide (25mm)
                </span>
              </div>
            )}

            {/* Layout Render */}
            {data.layoutPreset === 'classic' && <ClassicAcademicLayout data={data} />}
            {data.layoutPreset === 'modern' && <ModernMinimalistLayout data={data} />}
            {data.layoutPreset === 'premium' && <PremiumTechLayout data={data} />}
            {data.layoutPreset === 'executive' && <ExecutiveLayout data={data} />}
            {data.layoutPreset === 'sidebar' && <SidebarLayout data={data} />}
            {data.layoutPreset === 'technical' && <TechnicalGridLayout data={data} />}
            {!['classic', 'modern', 'premium', 'executive', 'sidebar', 'technical'].includes(data.layoutPreset) && (
              <ClassicAcademicLayout data={data} />
            )}
          </div>
        </div>

      </div>
    </div>
  );
};
