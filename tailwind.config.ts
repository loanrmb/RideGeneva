import type { Config } from 'tailwindcss'

const config: Config = {
  darkMode: 'class',
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        red: {
          swiss:  '#D52B1E',
          dark:   '#B82318',
          light:  'rgba(213,43,30,0.07)',
        },
        // Keep gold aliases → Swiss red
        gold: {
          DEFAULT: 'var(--red)',
          light:   'var(--red-lt)',
        },
      },
      fontFamily: {
        sans:  ['var(--font-onest)', '"Helvetica Neue"', 'Helvetica', 'Arial', 'sans-serif'],
        onest: ['var(--font-onest)', '"Helvetica Neue"', 'Helvetica', 'Arial', 'sans-serif'],
      },
      letterSpacing: {
        tightest: '-0.05em',
        tighter:  '-0.04em',
        tight:    '-0.03em',
        wide:     '0.08em',
        wider:    '0.12em',
        widest:   '0.20em',
      },
      lineHeight: {
        tightest: '0.97',
        tight:    '1.04',
      },
      borderRadius: {
        card: '8px',
        sm:   '4px',
      },
      keyframes: {
        fadeUp: {
          from: { opacity: '0', transform: 'translateY(24px)' },
          to:   { opacity: '1', transform: 'translateY(0)'    },
        },
        pulseDot: {
          '0%, 100%': { opacity: '1',   transform: 'scale(1)'    },
          '50%':      { opacity: '0.4', transform: 'scale(0.75)' },
        },
      },
      animation: {
        fadeUp:   'fadeUp 0.6s ease both',
        pulseDot: 'pulseDot 2s ease infinite',
      },
    },
  },
  plugins: [],
}

export default config
