# 📄 Instant Cover Page Maker

A lightweight, client-side web application designed for university and college students to generate, customize, and export professional assignment and lab report cover pages as high-quality PDFs.

---

## ✨ Key Features

* **Live A4 Interactive Preview:** Pixel-perfect A4 proportional canvas updating in real time.
* **5+ Layout Templates:**
  * **USTC / Academic Standard:** Centered academic layout tailored for traditional university submissions.
  * **Classic Formal:** Double-bordered frame style with serif typography.
  * **Modern Minimalist:** Clean left-aligned hierarchy with accent tags.
  * **Left Accent Bar:** Modern split layout with a full-height vertical side color block.
  * **Boxed Grid:** Sectioned cards for student and evaluator details.
  * **Corporate Header:** Solid colored top header banner style.
* **1-Click Sample Data Preset:** Pre-fills realistic academic details (e.g., Computer Network Lab) with a single click for testing.
* **Complete Customization:**
  * Primary color theme picker + quick color presets.
  * Multiple font families (Serif, Sans-Serif, Academic Cinzel, Technical Mono).
  * Custom university logo upload & size adjustment slider.
  * Adjustable page border styles.
* **Zero-Loss Exporting:** High-resolution PDF generation using `html2pdf.js` alongside native `@media print` support for direct printing.

---

## 🛠️ Built With

* **HTML5 & Vanilla JavaScript** (No complex build pipeline required)
* **Tailwind CSS** (via CDN for responsive layout and styling)
* **FontAwesome 6** (UI Icons)
* **Google Fonts** (Academic typography)
* **html2pdf.js** (Client-side HTML to PDF conversion)

---

## 🚀 How to Run

1. Clone or download this repository.
2. Open `index.html` directly in any web browser (Chrome, Firefox, Edge, Safari).
3. Fill out the details in the left control panel, customize the theme, and click **Download PDF**.

---

## 📁 File Structure

```text
├── index.html       # Main application file (HTML, CSS, JavaScript bundled)
└── README.md        # Project documentation
```

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).