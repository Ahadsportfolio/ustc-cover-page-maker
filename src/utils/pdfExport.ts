import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import confetti from 'canvas-confetti';
import { CoverPageData } from '../types/coverPage';

// A4 at 96 DPI
const A4_W = 794;
const A4_H = 1123;

/** Fetch any URL → base64 data URI. Returns null on failure. */
async function urlToBase64(url: string): Promise<string | null> {
  try {
    const abs = url.startsWith('data:') ? null
      : url.startsWith('http') ? url
      : `${window.location.origin}${url.startsWith('/') ? url : '/' + url}`;
    if (!abs) return null;
    const res = await fetch(abs, { cache: 'force-cache' });
    if (!res.ok) return null;
    const blob = await res.blob();
    return new Promise<string>((resolve, reject) => {
      const reader = new FileReader();
      reader.onloadend = () => resolve(reader.result as string);
      reader.onerror = reject;
      reader.readAsDataURL(blob);
    });
  } catch {
    return null;
  }
}

/** Replace every img[src] that isn't already base64 with a fetched base64 URI. */
async function inlineImages(root: HTMLElement): Promise<void> {
  const imgs = Array.from(root.querySelectorAll('img')) as HTMLImageElement[];
  await Promise.all(
    imgs.map(async (img) => {
      const src = img.getAttribute('src') || '';
      if (!src || src.startsWith('data:')) return;
      const b64 = await urlToBase64(src);
      if (b64) img.setAttribute('src', b64);
    })
  );
}

export const exportCoverPageToPDF = async (
  elementId: string,
  data: CoverPageData,
  onProgress?: (p: number) => void
): Promise<boolean> => {
  const report = (p: number) => onProgress?.(p);

  let clone: HTMLElement | null = null;
  try {
    const source = document.getElementById(elementId);
    if (!source) {
      console.error('Cover page element not found:', elementId);
      return false;
    }

    report(10);

    const paperBgColor =
      data.paperBg === 'cream' ? '#FFFDF5' : data.paperBg === 'light-blue' ? '#F4F8FB' : '#FFFFFF';

    // ── 1. Deep-clone the element ────────────────────────────────────────────
    clone = source.cloneNode(true) as HTMLElement;

    // ── 2. Force exact A4 pixel size with inline styles ──────────────────────
    //    We use setAttribute to bypass Tailwind class specificity entirely.
    clone.setAttribute(
      'style',
      [
        `width:${A4_W}px`,
        `min-width:${A4_W}px`,
        `max-width:${A4_W}px`,
        `height:${A4_H}px`,
        `min-height:${A4_H}px`,
        `max-height:${A4_H}px`,
        `background-color:${paperBgColor}`,
        'overflow:hidden',
        'position:relative',
        'transform:none',
        'box-shadow:none',
        'border:none',
        'border-radius:0',
        'margin:0',
        'padding:0',
      ].join(';')
    );

    // Hide margin guide in clone
    const guide = clone.querySelector('.print-margin-guide') as HTMLElement | null;
    if (guide) guide.style.display = 'none';

    // ── 3. Attach clone behind viewport (zIndex: -99999) at (0,0) so coordinates remain clean ──
    clone.style.position = 'fixed';
    clone.style.top = '0px';
    clone.style.left = '0px';
    clone.style.zIndex = '-99999';
    clone.style.pointerEvents = 'none';
    document.body.appendChild(clone);

    // Wait for fonts to be ready so text metrics are exact
    if (typeof document !== 'undefined' && 'fonts' in document) {
      try {
        await document.fonts.ready;
      } catch {
        // ignore
      }
    }

    // Allow layout to settle
    await new Promise(r => requestAnimationFrame(() => requestAnimationFrame(r)));
    await new Promise(r => setTimeout(r, 60));

    report(25);

    // ── 4. Inline all images as base64 in the clone ──────────────────────────
    await inlineImages(clone);

    report(45);

    // ── 5. Capture clone with html2canvas ────────────────────────────────────
    const canvas = await html2canvas(clone, {
      scale: 2.5,          // high-res — 794*2.5=1985 wide px
      useCORS: true,
      allowTaint: true,
      backgroundColor: paperBgColor,
      logging: false,
      width: A4_W,
      height: A4_H,
      windowWidth: A4_W,
      windowHeight: A4_H,
      scrollX: 0,
      scrollY: 0,
      x: 0,
      y: 0,
    });

    report(75);

    // ── 6. Build PDF ─────────────────────────────────────────────────────────
    const imgData = canvas.toDataURL('image/png');

    if (!imgData || imgData.length < 1000) {
      console.error('Canvas was empty — capture failed silently');
      return false;
    }

    const pdf = new jsPDF({
      orientation: 'portrait',
      unit: 'mm',
      format: 'a4',
      compress: true,
    });

    pdf.addImage(imgData, 'PNG', 0, 0, 210, 297);

    report(90);

    // ── 7. Download ──────────────────────────────────────────────────────────
    const s = (v: string) => (v || '').replace(/[^a-zA-Z0-9]/g, '_');
    pdf.save(`USTC_${s(data.courseCode)}_${s(data.docType)}_${s(data.studentId)}.pdf`);

    report(100);

    try { confetti({ particleCount: 100, spread: 70, origin: { y: 0.6 } }); } catch {}

    return true;

  } catch (err) {
    console.error('PDF export failed:', err);
    return false;
  } finally {
    if (clone && clone.parentNode) {
      clone.parentNode.removeChild(clone);
    }
  }
};
