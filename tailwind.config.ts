// tailwind.config.ts
import type { Config } from 'tailwindcss';

export default {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens: {
      md: { min: '520px' },
      lg: { min: '800px' },
    },
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
    extend: {
      // Ejemplo de escala de z-index centralizada:
      zIndex: {
        '-10': '-10', // para fondos que deben quedar detrás
        '0': '0', // capa base
        '10': '10', // contenido principal o secciones
        '20': '20', // otro contenido (por ejemplo, imágenes o bloques intermedios)
        '50': '50', // navegación
        '70': '70', // overlays o transiciones
        '80': '80', // preloader
        '999': '999', // indicador de Tailwind u otros elementos de debug
      },
      // Otras extensiones...
    },
  },
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
