import type { Config } from 'tailwindcss';

const config: Config = {
  mode: 'jit',
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './sections/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    // MEDIA QUERIES
    screens: {
      sm: '480px',
      md: '768px',
      xl: '1280px',

      smOnly: { max: '767.98px' },
      mdOnly: { min: '768px', max: '1279.98px' },
      notXl: { max: '1279.98px' },
      mediaHover: { raw: '(hover: hover)' },
    },

    // THEME
    extend: {
      // CONTAINER
      container: {
        center: true,
        padding: {
          DEFAULT: '20px',
          sm: '20px',
          md: '32px',
          xl: '20px',
        },
      },

      // COLORS

      colors: {
        primary: {
          DEFAULT: '#2C1F4A',
          dark: '#37265D',
          darker: '#381D74',
          even: '#7966EA',
          mid: '#7F56D9',
          lighter: '#B0B0D1',
          light: '#BEA0FF',
          extra: '#CBC2FF',
        },

        secondary: {
          DEFAULT: '#FFFFFF',
          dark: '#98A2B3',
          darker: '#777E90',
          mid: '#BEDDFA',
          lighter: '#D9ECFF',
          light: '#DADAF7',
          extra: '#DADEEB',
        },

        error: {
          DEFAULT: '#FF5156',
          dark: '#FF2633',
          mid: '#F580AF',
          lighter: '#F3ABAA',
        },

        accent: {
          DEFAULT: '#FFD550',
          dark: '#FAB437',
        },

        success: {
          DEFAULT: '#23BDEE',
          dark: '#22319E',
          darker: '#1A52B9',
        },
      },

      // BACKGROUND IMAGE - GRADIENT

      backgroundImage: {
        grad_180: 'linear-gradient(180deg, #A582F7 0%, #7747EC 100%)',
      },

      // BORDER RADIUS

      borderRadius: {
        card: '30px',
      },

      //BOX SHADOW

      boxShadow: {
        logo: '0px 18.360000610351562px 38.25px 0px #0D0C3826',
        button: '0px 1px 2px 0px #1018280D',
      },

      // FONT FAMILY

      fontFamily: {
        inter: ['var(--font-inter)'],
        noto: ['var(--font-noto-serif)'],
      },

      // LINE HEIGHT

      lineHeight: {
        100: '0.83',
        200: '0.96',
        300: '1',
        400: '1.1',
        500: '1.26',
        600: '1.33',
        700: '1.4',
        800: '1.56',
        900: '1.8',
      },

      // KEYFRAMES

      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
      },

      // ANIMATION

      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
      },
    },
    plugins: [require('tailwindcss-animate')],
  },
};
export default config;
