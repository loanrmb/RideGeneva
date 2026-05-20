'use client'

import { useRef } from 'react'
import Image from 'next/image'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useLang } from '@/context/LangContext'
import { PHONE } from '@/lib/data'
import AnimatedText from '@/components/ui/AnimatedText'

export default function Hero() {
  const { t } = useLang()
  const ref    = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
  const imgY    = useTransform(scrollYProgress, [0, 1], ['0%', '20%'])
  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0])

  const stats = [
    { value: '500+', label: t.stat_clients   },
    { value: '3',    label: t.stat_vehicles  },
    { value: '24/7', label: t.stat_available },
    { value: '5★',   label: 'Service'        },
  ]

  return (
    <section ref={ref} className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">
      {/* Parallax bg */}
      <motion.div className="absolute inset-0 z-0" style={{ y: imgY }}>
        <Image src="/images/hero-bg.jpg" alt="Chauffeur privé Genève RideGeneva" fill priority className="object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/80" />
      </motion.div>

      <motion.div className="relative z-10 text-center px-6 flex flex-col items-center" style={{ opacity }}>
        {/* Badge */}
        <motion.div initial={{ opacity:0,y:16 }} animate={{ opacity:1,y:0 }} transition={{ delay:1.2, duration:0.6 }}
          className="inline-flex items-center gap-2 rounded-full mb-8"
          style={{ padding:'5px 16px 5px 12px', background:'rgba(212,175,112,0.12)', border:'1px solid rgba(212,175,112,0.3)', fontSize:10.5, fontWeight:700, letterSpacing:'1.3px', textTransform:'uppercase', color:'#D4AF70' }}>
          <span style={{ width:6,height:6,borderRadius:'50%',background:'#D4AF70',flexShrink:0,animation:'pulseDot 2s ease infinite' }} />
          Genève · Switzerland · 24/7
        </motion.div>

        {/* Headline */}
        <h1 className="font-black text-white text-center max-w-[860px] mb-6"
          style={{ fontSize:'clamp(44px,7vw,92px)', lineHeight:1.03, letterSpacing:'clamp(-2px,-0.04em,-4.5px)' }}>
          <AnimatedText text={t.hero_line1} delay={1.3} />
          <br />
          <AnimatedText text={t.hero_line2} delay={1.5} className="gold-text" />
        </h1>

        {/* Subtitle */}
        <motion.p initial={{ opacity:0 }} animate={{ opacity:1 }} transition={{ delay:1.9, duration:0.8 }}
          className="text-white/60 max-w-[520px] leading-[1.7] mb-10"
          style={{ fontSize:'clamp(14px,1.6vw,17px)' }}>
          {t.hero_sub}
        </motion.p>

        {/* CTAs */}
        <motion.div initial={{ opacity:0,y:16 }} animate={{ opacity:1,y:0 }} transition={{ delay:2.1, duration:0.6 }}
          className="flex gap-3 flex-wrap justify-center mb-16">
          <a href={`tel:${PHONE}`} className="btn-primary" style={{ fontSize:15 }}>{t.btn_book} →</a>
          <button className="btn-outline"
            style={{ color:'rgba(255,255,255,0.85)', borderColor:'rgba(255,255,255,0.2)', fontSize:15 }}
            onClick={() => document.getElementById('calc')?.scrollIntoView({ behavior:'smooth' })}>
            {t.btn_quote}
          </button>
        </motion.div>

        {/* Stats */}
        <motion.div initial={{ opacity:0 }} animate={{ opacity:1 }} transition={{ delay:2.3, duration:0.8 }}
          className="flex gap-10 flex-wrap justify-center">
          {stats.map(({ value, label }, i) => (
            <motion.div key={value} initial={{ opacity:0,y:10 }} animate={{ opacity:1,y:0 }}
              transition={{ delay:2.3+i*0.1, duration:0.5 }} className="text-center">
              <div className="font-extrabold" style={{ fontSize:24, color:'#D4AF70', letterSpacing:'-0.8px' }}>{value}</div>
              <div style={{ fontSize:11, color:'rgba(255,255,255,0.45)', marginTop:4, fontWeight:500 }}>{label}</div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        initial={{ opacity:0 }} animate={{ opacity:1 }} transition={{ delay:2.8 }}>
        <span style={{ fontSize:9, letterSpacing:'2px', color:'rgba(255,255,255,0.3)', textTransform:'uppercase' }}>Scroll</span>
        <motion.div style={{ width:1, height:40, background:'linear-gradient(to bottom, rgba(212,175,112,0.6), transparent)' }}
          animate={{ scaleY:[1,0.4,1] }} transition={{ duration:1.6, repeat:Infinity, ease:'easeInOut' }} />
      </motion.div>
    </section>
  )
}
