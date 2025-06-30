import type { Config } from 'tailwindcss';

export default {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'bone': '#FAF9F6',
        'warm-gray': '#8B8680',
        'soft-gold': '#D4AF37',
        'bronze': '#CD7F32',
        'charcoal': '#2C2C2C',
      },
      fontFamily: {
        'futura': ['Inter', 'system-ui', 'sans-serif'],
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        glow: {
          'from': { boxShadow: '0 0 20px rgba(212, 175, 55, 0.2)' },
          'to': { boxShadow: '0 0 30px rgba(212, 175, 55, 0.4)' },
        },
      },
      backdropBlur: {
        'xs': '2px',
      },
      zIndex: {
        '9998': '9998',
        '9999': '9999',
      },
    },
  },
  plugins: [
    require('tailwind-scrollbar-hide'),
  ],
} satisfies Config;