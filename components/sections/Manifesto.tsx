'use client'

import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import AnimatedText from '@/components/ui/AnimatedText'

const FR_LINES = [
  'À CE NIVEAU,',
  'CHAQUE MINUTE',
  'COMPTE.',
]

export default function Manifesto() {
  const ref = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })
  const bgY = useTransform(scrollYProgress, [0, 1], ['-8%', '8%'])

  return (
    <section
      ref={ref}
      className="relative py-40 px-6 overflow-hidden"
      style={{ background: '#07070e' }}
    >
      {/* Subtle gold orb */}
      <motion.div
        className="absolute rounded-full pointer-events-none"
        style={{
          top: '20%', left: '50%', x: '-50%',
          width: 800, height: 800,
          background: 'radial-gradient(circle, rgba(184,150,62,0.06) 0%, transparent 70%)',
          y: bgY,
        }}
      />

      <div className="wrap relative z-10 text-center">
        {/* Label */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="font-semibold tracking-[3px] uppercase mb-10"
          style={{ fontSize: 10.5, color: 'rgba(212,175,112,0.6)' }}
        >
          RideGeneva — Chauffeur Privé Genève
        </motion.p>

        {/* Big headline */}
        <h2
          className="font-black text-white leading-[1.0] mb-12 max-w-[900px] mx-auto"
          style={{
            fontSize: 'clamp(48px, 8vw, 110px)',
            letterSpacing: 'clamp(-2px, -0.04em, -5px)',
          }}
        >
          {FR_LINES.map((line, i) => (
            <span key={i} style={{ display: 'block' }}>
              <AnimatedText
                text={line}
                delay={i * 0.15}
                className={i === 2 ? 'gold-text' : ''}
              />
            </span>
          ))}
        </h2>

        {/* Body text */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="max-w-[600px] mx-auto leading-[1.8] text-white/50"
          style={{ fontSize: 'clamp(14px, 1.5vw, 16px)' }}
        >
          RideGeneva impose un nouveau standard du transport privé à Genève.
          Ponctualité absolue, discrétion garantie, confort inégalé —
          pour les clients qui refusent de faire des compromis.
        </motion.p>

        {/* Divider line */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="mx-auto mt-14"
          style={{
            width: 60, height: 1,
            background: 'linear-gradient(90deg, transparent, #D4AF70, transparent)',
            originX: 0.5,
          }}
        />

        {/* Three pillars */}
        <div className="grid grid-cols-3 gap-8 mt-14 max-w-[680px] mx-auto">
          {[
            { num: '01', label: 'Ponctualité suisse' },
            { num: '02', label: 'Discrétion absolue' },
            { num: '03', label: 'Confort premium' },
          ].map(({ num, label }, i) => (
            <motion.div
              key={num}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.8 + i * 0.1 }}
              className="text-center"
            >
              <div style={{ fontSize: 10, color: '#D4AF70', fontWeight: 700, letterSpacing: '2px', marginBottom: 8 }}>
                {num}
              </div>
              <div style={{ fontSize: 13, color: 'rgba(255,255,255,0.5)', fontWeight: 500 }}>
                {label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
