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
        gold: {
          DEFAULT: 'var(--gold)',
          light:   'var(--gold-lt)',
        },
      },
      fontFamily: {
        // Onest as default — loaded via next/font/google CSS variable
        sans:  ['var(--font-onest)', '"Helvetica Neue"', 'Helvetica', 'Arial', 'sans-serif'],
        onest: ['var(--font-onest)', '"Helvetica Neue"', 'Helvetica', 'Arial', 'sans-serif'],
        mono:  ['"Courier New"', 'Courier', 'monospace'],
      },
      letterSpacing: {
        tightest: '-0.05em',
        tighter:  '-0.04em',  // aircenter headline spacing
        tight:    '-0.03em',
        wide:     '0.08em',
        widest:   '0.2em',
      },
      lineHeight: {
        none:    '1',
        tightest:'0.97',      // aircenter big headline line-height
        tight:   '1.04',
      },
      borderRadius: {
        glass: '28px',
        card:  '24px',
      },
      keyframes: {
        fadeUp: {
          from: { opacity: '0', transform: 'translateY(24px)' },
          to:   { opacity: '1', transform: 'translateY(0)'    },
        },
        pulseDot: {
          '0%, 100%': { opacity: '1', transform: 'scale(1)'    },
          '50%':      { opacity: '0.4', transform: 'scale(0.75)' },
        },
        slideIn: {
          from: { opacity: '0', transform: 'translateX(-20px)' },
          to:   { opacity: '1', transform: 'translateX(0)'     },
        },
      },
      animation: {
        fadeUp:   'fadeUp 0.6s ease both',
        pulseDot: 'pulseDot 2s ease infinite',
        slideIn:  'slideIn 0.5s ease both',
      },
    },
  },
  plugins: [],
}

export default config
