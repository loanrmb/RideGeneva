'use client'

import { useRef } from 'react'
import Image from 'next/image'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useLang } from '@/context/LangContext'
import { PHONE } from '@/lib/data'

export default function Hero() {
  const { t } = useLang()
  const ref   = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
  const imgY = useTransform(scrollYProgress, [0, 1], ['0%', '15%'])
  const fade = useTransform(scrollYProgress, [0, 0.6], [1, 0])

  const services = [
    'Transfert Aéroport',
    'Mise à Disposition',
    'Longue Distance',
    'Événements',
    'Corporate',
  ]

  return (
    <section ref={ref} className="relative min-h-screen flex flex-col overflow-hidden">

      {/* ── Image background ── */}
      <motion.div className="absolute inset-0 z-0" style={{ y: imgY }}>
        <Image
          src="/images/mercedes-c-hotel.jpg"
          alt="RideGeneva chauffeur privé Genève"
          fill priority
          className="object-cover"
          style={{ opacity: 0.75 }}
        />
        {/* Gradient: transparent top → heavy black bottom */}
        <div className="absolute inset-0" style={{
          background: 'linear-gradient(to bottom, rgba(0,0,0,0.15) 0%, rgba(0,0,0,0.2) 30%, rgba(0,0,0,0.65) 65%, rgba(0,0,0,0.95) 100%)',
        }} />
      </motion.div>

      {/* ── Main content — full height, bottom aligned ── */}
      <motion.div
        className="relative z-10 flex flex-col justify-end flex-1 min-h-screen"
        style={{ padding: '0 40px 56px', maxWidth: 1080, margin: '0 auto', width: '100%', opacity: fade as any }}
      >
        {/* Label */}
        <motion.p
          initial={{ opacity: 0 }} animate={{ opacity: 1 }}
          transition={{ delay: 1.1, duration: 0.5 }}
          style={{
            fontSize: 11, fontWeight: 400, letterSpacing: '0.15em',
            textTransform: 'uppercase', color: 'rgba(255,255,255,0.55)',
            marginBottom: 20,
          }}>
          Genève · Switzerland · 24/7
        </motion.p>

        {/* Headline — large, uppercase, thin */}
        <div style={{ overflow: 'hidden', marginBottom: 24 }}>
          <motion.h1
            initial={{ y: '110%', opacity: 0 }}
            animate={{ y: '0%', opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="text-white"
            style={{
              fontSize: 'clamp(52px, 7.5vw, 100px)',
              fontWeight: 400,
              textTransform: 'uppercase',
              letterSpacing: '-0.03em',
              lineHeight: 0.95,
              textShadow: '0 2px 40px rgba(0,0,0,0.5)',
            }}>
            Votre<br />
            Chauffeur<br />
            <span style={{ color: 'rgba(255,255,255,0.92)' }}>Privé à Genève</span>
          </motion.h1>
        </div>

        {/* Service tags */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.7, duration: 0.5 }}
          style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginBottom: 32 }}>
          {services.map(s => (
            <span key={s} style={{
              fontSize: 10, fontWeight: 400, letterSpacing: '0.12em',
              textTransform: 'uppercase', color: 'rgba(255,255,255,0.6)',
              padding: '7px 14px',
              background: 'rgba(255,255,255,0.08)',
              backdropFilter: 'blur(12px)',
              WebkitBackdropFilter: 'blur(12px)',
              border: '1px solid rgba(255,255,255,0.15)',
              borderRadius: 3,
            }}>
              {s}
            </span>
          ))}
        </motion.div>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.9, duration: 0.5 }}
          style={{ display: 'flex', gap: 12, flexWrap: 'wrap', alignItems: 'center' }}>
          <a href={`tel:${PHONE}`}
            style={{
              display: 'inline-block', padding: '16px 40px', borderRadius: 4,
              background: '#D52B1E', color: '#fff', fontFamily: 'inherit',
              fontWeight: 400, fontSize: 11, letterSpacing: '0.12em',
              textTransform: 'uppercase', textDecoration: 'none',
              transition: 'background 0.15s',
            }}>
            Réserver
          </a>
          <button
            onClick={() => document.getElementById('calc')?.scrollIntoView({ behavior: 'smooth' })}
            style={{
              display: 'inline-block', padding: '15px 40px', borderRadius: 4,
              background: 'rgba(255,255,255,0.1)',
              backdropFilter: 'blur(12px)', WebkitBackdropFilter: 'blur(12px)',
              color: 'rgba(255,255,255,0.85)', fontFamily: 'inherit',
              fontWeight: 400, fontSize: 11, letterSpacing: '0.12em',
              textTransform: 'uppercase', border: '1px solid rgba(255,255,255,0.2)',
              cursor: 'pointer', transition: 'all 0.15s',
            }}>
            Estimer mon tarif
          </button>
          <span style={{
            fontSize: 13, fontWeight: 300, color: 'rgba(255,255,255,0.4)',
            letterSpacing: '0.03em',
          }}>
            {PHONE}
          </span>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }} animate={{ opacity: 1 }}
        transition={{ delay: 2.5 }}
        style={{
          position: 'absolute', bottom: 32, right: 40, zIndex: 10,
          display: 'flex', alignItems: 'center', gap: 10,
        }}>
        <span style={{ fontSize: 9, letterSpacing: '0.2em', color: 'rgba(255,255,255,0.3)', textTransform: 'uppercase' }}>
          Scroll
        </span>
        <motion.div
          style={{ width: 32, height: 1, background: 'rgba(255,255,255,0.25)' }}
          animate={{ scaleX: [1, 0.3, 1] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        />
      </motion.div>
    </section>
  )
}
