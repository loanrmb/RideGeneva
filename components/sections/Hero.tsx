'use client'

import { motion } from 'framer-motion'
import { useLang } from '@/context/LangContext'
import { PHONE } from '@/lib/data'

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1], delay },
})

export default function Hero() {
  const { t } = useLang()

  const stats = [
    { value: '500+', label: t.stat_clients   },
    { value: '3',    label: t.stat_vehicles  },
    { value: '24/7', label: t.stat_available },
    { value: '5★',   label: 'Service'        },
  ]

  return (
    <section
      className="flex flex-col items-center justify-center text-center min-h-screen"
      style={{ padding: '130px 24px 90px' }}
    >
      {/* Live badge */}
      <motion.div {...fadeUp(0.1)}>
        <div
          className="inline-flex items-center gap-2 rounded-[20px] mb-7 font-bold uppercase tracking-[1.3px]"
          style={{
            padding: '5px 14px 5px 10px',
            fontSize: 10.5,
            background: 'var(--gold-lt)',
            border: '1px solid var(--gold-bd)',
            color: 'var(--gold)',
          }}
        >
          <span
            className="w-[6px] h-[6px] rounded-full animate-pulseDot"
            style={{ background: 'var(--gold)', flexShrink: 0 }}
          />
          Genève · Switzerland · 24/7
        </div>
      </motion.div>

      {/* Headline */}
      <motion.h1
        {...fadeUp(0.2)}
        className="font-black mb-5 max-w-[820px]"
        style={{
          fontSize: 'clamp(42px, 7.5vw, 90px)',
          lineHeight: 1.04,
          letterSpacing: 'clamp(-2px, -0.04em, -4px)',
        }}
      >
        {t.hero_line1}
        <br />
        <span className="gold-text">{t.hero_line2}</span>
      </motion.h1>

      {/* Subtitle */}
      <motion.p
        {...fadeUp(0.3)}
        className="text-[var(--txt-sub)] max-w-[520px] leading-[1.7] mb-10"
        style={{ fontSize: 'clamp(14px, 1.8vw, 18px)' }}
      >
        {t.hero_sub}
      </motion.p>

      {/* CTAs */}
      <motion.div {...fadeUp(0.4)} className="flex gap-3 flex-wrap justify-center mb-[72px]">
        <a href={`tel:${PHONE}`} className="btn-primary">
          {t.btn_book} →
        </a>
        <button
          className="btn-outline"
          onClick={() => document.getElementById('calc')?.scrollIntoView({ behavior: 'smooth' })}
        >
          {t.btn_quote}
        </button>
      </motion.div>

      {/* Stats */}
      <motion.div {...fadeUp(0.5)} className="flex gap-11 flex-wrap justify-center">
        {stats.map(({ value, label }) => (
          <div key={value} className="text-center">
            <div
              className="font-extrabold"
              style={{ fontSize: 26, color: 'var(--gold)', letterSpacing: '-1px' }}
            >
              {value}
            </div>
            <div
              className="font-medium tracking-[0.3px] mt-1"
              style={{ fontSize: 11, color: 'var(--txt-sub)' }}
            >
              {label}
            </div>
          </div>
        ))}
      </motion.div>
    </section>
  )
}
