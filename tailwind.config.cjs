/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        'design-black': {
          90: '#202020',
          80: '#323232B2',
          60: '#959595',
          50: '#9D9D9D',
        },
        'design-white': {
          80: '#DEDEDE',
        },
      },
    },
  },
  plugins: [],
};
