/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    fontFamily: {sans: ["var(--font-poppins)", "sans-serif"]},
    extend: {
      colors: {
        'gr-blue-primary': '#3b3c86',
        'gr-blue-dark': '#313272',
        'gr-yellow-primary': '#F2B24C',
        'gr-yellow-dark': '#E9AC4B',
        'gr-blue-card': '#322A68',
        'gr-text-base': '#303030'
      },
      backgroundImage: {
        'hero-image': "url('/images/hero_bg.png')"
      },
      fontFamily: {mono: ["var(--font-nunito)", "monospace"]},
    },
  },
  plugins: [],
}
