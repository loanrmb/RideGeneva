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
      fontFamily: {
        sans: ['var(--font-geist)', '"Helvetica Neue"', 'Helvetica', 'Arial', 'sans-serif'],
      },
      colors: {
        // BordeauxRide dark palette
        brand: {
          black:   '#000000',
          card:    '#0d0d0d',
          cardalt: '#0a0a0a',
          border:  '#1a1a1a',
          alt:     '#2a2a2a',
          hover:   '#111111',
        },
      },
      letterSpacing: {
        tight:   '-0.03em',
        tighter: '-0.04em',
        label:   '0.16em',
        btn:     '0.06em',
      },
      borderRadius: {
        pill: '980px',
        card: '20px',
        map:  '16px',
      },
      keyframes: {
        heroIn: {
          from: { opacity: '0', transform: 'translateY(20px)' },
          to:   { opacity: '1', transform: 'translateY(0)' },
        },
        scrollDot: {
          '0%, 100%': { opacity: '0.3', transform: 'translateY(0)' },
          '50%':      { opacity: '1',   transform: 'translateY(4px)' },
        },
        statIn: {
          from: { opacity: '0', transform: 'translateY(12px)' },
          to:   { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        'hero-in':    'heroIn 0.8s cubic-bezier(0.22,1,0.36,1) both',
        'scroll-dot': 'scrollDot 1.8s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}

export default config
