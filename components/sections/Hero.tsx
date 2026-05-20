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
  const imgY  = useTransform(scrollYProgress, [0, 1], ['0%', '18%'])
  const fade  = useTransform(scrollYProgress, [0, 0.5], [1, 0])

  return (
    <section ref={ref} className="relative min-h-screen flex flex-col justify-end overflow-hidden">
      {/* Parallax image */}
      <motion.div className="absolute inset-0 z-0" style={{ y: imgY }}>
        <Image
          src="/images/mercedes-c-hotel.jpg"
          alt="RideGeneva chauffeur privé Genève"
          fill priority
          className="object-cover"
        />
        {/* Gradient overlay — bottom to top, keep image visible */}
        <div className="absolute inset-0"
          style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.92) 0%, rgba(0,0,0,0.3) 50%, rgba(0,0,0,0.1) 100%)' }} />
      </motion.div>

      {/* Content — pinned at bottom */}
      <motion.div style={{ opacity: fade }}
        className="relative z-10 wrap pb-20 pt-32">

        {/* Label */}
        <motion.p
          initial={{ opacity:0 }} animate={{ opacity:1 }} transition={{ delay:1.2, duration:0.6 }}
          className="label" style={{ color:'rgba(255,255,255,0.5)', marginBottom:24 }}>
          Genève · Switzerland · 24/7
        </motion.p>

        {/* Headline */}
        <div className="overflow-hidden mb-6">
          <motion.h1
            initial={{ y:'100%' }} animate={{ y:'0%' }}
            transition={{ delay:1.3, duration:0.8, ease:[0.22,1,0.36,1] }}
            className="text-white"
            style={{ fontSize:'clamp(52px,7vw,96px)', maxWidth:800 }}>
            {t.hero_line1}<br />
            <span style={{ color:'var(--txt)', WebkitTextStroke:'1px rgba(255,255,255,0.3)' }}>
              {t.hero_line2}
            </span>
          </motion.h1>
        </div>

        {/* Services list */}
        <motion.div
          initial={{ opacity:0, y:16 }} animate={{ opacity:1, y:0 }}
          transition={{ delay:1.7, duration:0.6 }}
          className="flex flex-wrap gap-3 mb-10">
          {['Transfert aéroport', 'Mise à disposition', 'Longue distance', 'Événements', 'Corporate'].map(s => (
            <span key={s} style={{
              fontSize:11, fontWeight:400, letterSpacing:'0.1em', textTransform:'uppercase',
              color:'rgba(255,255,255,0.5)', padding:'6px 12px',
              border:'1px solid rgba(255,255,255,0.15)', borderRadius:3,
            }}>
              {s}
            </span>
          ))}
        </motion.div>

        {/* CTAs */}
        <motion.div
          initial={{ opacity:0, y:12 }} animate={{ opacity:1, y:0 }}
          transition={{ delay:1.9, duration:0.6 }}
          className="flex gap-3 flex-wrap items-center">
          <a href={`tel:${PHONE}`} className="btn-primary">{t.btn_book}</a>
          <button className="btn-outline" style={{ color:'rgba(255,255,255,0.7)', borderColor:'rgba(255,255,255,0.2)' }}
            onClick={() => document.getElementById('calc')?.scrollIntoView({ behavior:'smooth' })}>
            {t.btn_quote}
          </button>
          <span style={{ fontSize:13, color:'rgba(255,255,255,0.35)', fontWeight:300, letterSpacing:'0.02em' }}>
            +41 76 455 01 73
          </span>
        </motion.div>
      </motion.div>

      {/* Scroll hint */}
      <motion.div
        className="absolute bottom-8 right-10 z-10 flex items-center gap-2"
        initial={{ opacity:0 }} animate={{ opacity:1 }} transition={{ delay:2.5 }}>
        <span style={{ fontSize:9, letterSpacing:'2px', color:'rgba(255,255,255,0.25)', textTransform:'uppercase' }}>Scroll</span>
        <motion.div
          style={{ width:24, height:1, background:'rgba(255,255,255,0.25)' }}
          animate={{ scaleX:[1,0.3,1] }}
          transition={{ duration:2, repeat:Infinity, ease:'easeInOut' }} />
      </motion.div>
    </section>
  )
}
