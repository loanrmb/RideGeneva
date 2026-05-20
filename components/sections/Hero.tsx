'use client'

import { motion } from 'framer-motion'
import { SITE } from '@/lib/data'

const fadeUp = (delay: number) => ({
  initial:   { opacity: 0, y: 20 },
  animate:   { opacity: 1, y: 0 },
  transition: { duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] },
})

export default function Hero() {
  return (
    <section
      style={{
        position:  'relative',
        width:     '100%',
        height:    '100vh',
        minHeight: 600,
        overflow:  'hidden',
        background: '#000',
      }}
    >
      {/* Animated background — abstract city lights */}
      <div style={{ position: 'absolute', inset: 0, zIndex: 0 }}>
        <div
          style={{
            width: '100%', height: '100%',
            background: `
              radial-gradient(ellipse 60% 50% at 70% 40%, #0a0a14 0%, transparent 70%),
              radial-gradient(ellipse 80% 60% at 30% 60%, #050508 0%, transparent 80%),
              linear-gradient(135deg, #000 0%, #050510 50%, #000 100%)
            `,
          }}
        />
      </div>

      {/* Gradient overlay */}
      <div
        style={{
          position: 'absolute', inset: 0, zIndex: 1,
          background: 'linear-gradient(to bottom, rgba(0,0,0,0.12) 0%, transparent 30%, rgba(0,0,0,0.55) 65%, rgba(0,0,0,0.92) 100%)',
          pointerEvents: 'none',
        }}
      />

      {/* City lights particles */}
      <CityLights />

      {/* Content */}
      <div
        style={{
          position:       'absolute',
          bottom:         0, left: 0, right: 0,
          zIndex:         3,
          padding:        '0 72px 80px',
          display:        'flex',
          flexDirection:  'column',
          alignItems:     'center',
          textAlign:      'center',
        }}
        className="hero-content"
      >
        <motion.span
          {...fadeUp(0.2)}
          style={{
            fontSize:      '0.72rem',
            fontWeight:    600,
            letterSpacing: '0.18em',
            textTransform: 'uppercase',
            color:         'rgba(255,255,255,0.45)',
            marginBottom:  20,
          }}
        >
          Genève · Aéroport GVA · 24h/7j
        </motion.span>

        <motion.h1
          {...fadeUp(0.4)}
          style={{
            fontSize:      'clamp(2.8rem, 6.5vw, 8.5rem)',
            fontWeight:    700,
            lineHeight:    0.95,
            letterSpacing: '-0.03em',
            color:         '#fff',
            margin:        '0 0 24px 0',
            maxWidth:      '18ch',
          }}
        >
          Votre chauffeur privé à Genève.
        </motion.h1>

        <motion.p
          {...fadeUp(0.6)}
          style={{
            fontSize:     'clamp(0.9rem, 1.2vw, 1.05rem)',
            lineHeight:   1.65,
            color:        'rgba(255,255,255,0.55)',
            maxWidth:     '52ch',
            margin:       '0 0 44px 0',
          }}
        >
          Transferts aéroport, gare Cornavin, Lausanne et au-delà.
          Véhicules premium, ponctualité garantie, disponible jour et nuit.
        </motion.p>

        <motion.div {...fadeUp(0.75)} style={{ display: 'flex', gap: 16, flexWrap: 'wrap', justifyContent: 'center' }}>
          <motion.a
            href={`tel:${SITE.phoneTel}`}
            whileHover={{ scale: 1.02, y: -2 }}
            whileTap={{ scale: 0.98 }}
            style={{
              padding:       '16px 40px',
              background:    '#fff',
              color:         '#000',
              fontSize:      '0.82rem',
              fontWeight:    700,
              letterSpacing: '0.05em',
              textTransform: 'uppercase',
              borderRadius:  980,
              display:       'inline-flex',
              alignItems:    'center',
              gap:           10,
            }}
          >
            Réserver maintenant <span>→</span>
          </motion.a>
          <motion.a
            href="#estimateur"
            whileHover={{ scale: 1.02, y: -2 }}
            style={{
              padding:       '16px 32px',
              background:    'rgba(255,255,255,0.08)',
              color:         '#fff',
              fontSize:      '0.82rem',
              fontWeight:    600,
              letterSpacing: '0.03em',
              textTransform: 'uppercase',
              borderRadius:  980,
              border:        '1px solid rgba(255,255,255,0.15)',
            }}
          >
            Estimer mon tarif
          </motion.a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <div
        style={{
          position:       'absolute',
          bottom:         28,
          left:           '50%',
          transform:      'translateX(-50%)',
          zIndex:         3,
          display:        'flex',
          flexDirection:  'column',
          alignItems:     'center',
          gap:            5,
        }}
      >
        {[0, 0.15, 0.3].map((delay, i) => (
          <motion.div
            key={i}
            animate={{ opacity: [0.3, 1, 0.3], y: [0, 4, 0] }}
            transition={{ duration: 1.8, delay, repeat: Infinity, ease: 'easeInOut' }}
            style={{ width: 4, height: 4, borderRadius: '50%', background: 'rgba(255,255,255,0.35)' }}
          />
        ))}
      </div>

      <style>{`
        @media (max-width: 749px) {
          .hero-content { padding: 0 24px 72px !important; }
        }
      `}</style>
    </section>
  )
}

function CityLights() {
  const lights = [
    { top: '38%', left: '55%', size: 3, delay: 0 },
    { top: '42%', left: '62%', size: 2, delay: 0.3 },
    { top: '48%', left: '45%', size: 4, delay: 0.6 },
    { top: '36%', left: '70%', size: 2, delay: 0.9 },
    { top: '52%', left: '58%', size: 3, delay: 1.2 },
    { top: '44%', left: '50%', size: 2, delay: 1.5 },
    { top: '55%', left: '65%', size: 3, delay: 0.4 },
    { top: '40%', left: '78%', size: 2, delay: 1.8 },
    { top: '60%', left: '40%', size: 4, delay: 0.7 },
    { top: '35%', left: '85%', size: 2, delay: 2.1 },
    { top: '32%', left: '42%', size: 2, delay: 0.2 },
    { top: '65%', left: '72%', size: 3, delay: 1.1 },
  ]

  return (
    <div style={{ position: 'absolute', inset: 0, zIndex: 1, overflow: 'hidden' }}>
      {lights.map((l, i) => (
        <motion.span
          key={i}
          animate={{ opacity: [0.3, 1, 0.3], scale: [1, 1.5, 1] }}
          transition={{ duration: 3, delay: l.delay, repeat: Infinity, ease: 'easeInOut' }}
          style={{
            position:     'absolute',
            top:          l.top,
            left:         l.left,
            width:        l.size,
            height:       l.size,
            borderRadius: '50%',
            background:   '#fff',
          }}
        />
      ))}
    </div>
  )
}
