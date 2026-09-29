/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        ustc: {
          navy: "#002B49",
          "navy-dark": "#001A2D",
          gold: "#D4AF37",
          "gold-light": "#F3E5AB",
          blue: "#005691",
        }
      },
      fontFamily: {
        serif: ["Times New Roman", "Georgia", "serif"],
        sans: ["Inter", "Arial", "sans-serif"],
        mono: ["Courier New", "monospace"],
      },
      aspectRatio: {
        'a4': '1 / 1.4142',
      }
    },
  },
  plugins: [],
};
