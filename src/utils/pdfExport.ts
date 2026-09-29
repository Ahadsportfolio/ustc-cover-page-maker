import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import confetti from 'canvas-confetti';
import { CoverPageData } from '../types/coverPage';

export const exportCoverPageToPDF = async (
  elementId: string,
  data: CoverPageData,
  onProgress?: (progress: number) => void
): Promise<boolean> => {
  try {
    const element = document.getElementById(elementId);
    if (!element) {
      console.error(`Element with id ${elementId} not found.`);
      return false;
    }

    if (onProgress) onProgress(20);

    // Hide print guides if visible during capture
    const marginGuide = element.querySelector('.print-margin-guide');
    if (marginGuide) {
      (marginGuide as HTMLElement).style.display = 'none';
    }

    // Capture HTML element with high scale (3x) for crisp text & graphics
    const canvas = await html2canvas(element, {
      scale: 3,
      useCORS: true,
      allowTaint: true,
      backgroundColor: '#FFFFFF',
      logging: false,
      onclone: (clonedDoc) => {
        const clonedElement = clonedDoc.getElementById(elementId);
        if (clonedElement) {
          clonedElement.style.transform = 'none';
          clonedElement.style.width = '210mm';
          clonedElement.style.height = '297mm';
          clonedElement.style.boxShadow = 'none';
        }
      }
    });

    if (marginGuide) {
      (marginGuide as HTMLElement).style.display = 'block';
    }

    if (onProgress) onProgress(60);

    const imgData = canvas.toDataURL('image/jpeg', 1.0);

    // Create jsPDF instance (A4 size: 210mm x 297mm)
    const pdf = new jsPDF({
      orientation: 'portrait',
      unit: 'mm',
      format: 'a4',
      compress: true
    });

    pdf.addImage(imgData, 'JPEG', 0, 0, 210, 297, undefined, 'FAST');

    if (onProgress) onProgress(90);

    // Construct custom filename
    const sanitizedCourse = (data.courseCode || 'USTC').replace(/[^a-zA-Z0-9]/g, '_');
    const sanitizedDocType = (data.docType || 'CoverPage').replace(/[^a-zA-Z0-9]/g, '_');
    const sanitizedId = (data.studentId || 'Student').replace(/[^a-zA-Z0-9]/g, '_');
    const filename = `USTC_${sanitizedCourse}_${sanitizedDocType}_${sanitizedId}.pdf`;

    pdf.save(filename);

    if (onProgress) onProgress(100);

    // Trigger celebratory confetti burst!
    try {
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 }
      });
    } catch {
      // ignore if confetti fails
    }

    return true;
  } catch (error) {
    console.error('Error generating PDF:', error);
    return false;
  }
};
