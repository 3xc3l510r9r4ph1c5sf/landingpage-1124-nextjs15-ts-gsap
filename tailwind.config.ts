// tailwind.config.ts

import type { Config } from 'tailwindcss';

export default {
  // 1) Content Paths
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],

  theme: {
    // 2) Responsive Breakpoints
    screens: {
      md: { min: '520px' },
      lg: { min: '800px' },
    },

    // 3) Core Color Palette
    colors: {
      'mainbody-weg': '#F8F7F3',
      'details-red': '#E44021',
      'hero-dark': '#0C0C0C',
      'details-white': '#FFFFFF',
      gray: '#637381',
      white: '#ffffff',
      error: '#FF5630',
      green: '#00A76F',
      primary: '#212B36',
    },

    // 5) Extend for Additional Utilities
    extend: {
      // c) Filters & Shadows
      filter: {
        'custom-drop-shadow':
          'drop-shadow(-20px 20px 40px rgba(0, 0, 0, 0.24)) drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))',
        'shadow-green': '2px 2px 4px 0px rgba(0, 167, 111, 0.24)',
      },
    },
  },

  // 6) Plugins
  plugins: [
    require('tailwind-scrollbar-hide'),
    function ({
      addUtilities,
    }: {
      addUtilities: (utilities: Record<string, any>) => void;
    }) {
      addUtilities({
        '.filter-custom-drop-shadow': {
          filter:
            'drop-shadow(-20px 20px 40px rgba(0, 0, 0, 0.24)) drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))',
        },
      });
    },
  ],
} satisfies Config;
