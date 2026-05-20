'use client'

import { motion } from 'framer-motion'
import { STATS } from '@/lib/data'

export default function Stats() {
  return (
    <section
      style={{
        background:   '#000',
        borderTop:    '1px solid #111',
        borderBottom: '1px solid #111',
        padding:      '0 24px',
      }}
    >
      <div
        style={{
          maxWidth:            1100,
          margin:              '0 auto',
          display:             'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
        }}
        className="stats-grid"
      >
        {STATS.map((s, i) => (
          <motion.div
            key={s.label}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.6, delay: i * 0.1, ease: 'easeOut' }}
            style={{
              padding:        '40px 32px',
              display:        'flex',
              flexDirection:  'column',
              alignItems:     'center',
              textAlign:      'center',
              position:       'relative',
            }}
          >
            {/* Vertical separator */}
            {i > 0 && (
              <span
                style={{
                  position:   'absolute',
                  left:       0,
                  top:        '20%',
                  bottom:     '20%',
                  width:      1,
                  background: 'linear-gradient(to bottom, transparent, #1e1e1e 30%, #1e1e1e 70%, transparent)',
                }}
              />
            )}
            <span style={{ fontSize: '1.2rem', marginBottom: 12, opacity: 0.7 }}>{s.emoji}</span>
            <span
              style={{
                fontSize:      'clamp(2.4rem, 4vw, 3.8rem)',
                fontWeight:    800,
                color:         '#fff',
                letterSpacing: '-0.04em',
                lineHeight:    1,
                marginBottom:  8,
              }}
            >
              {s.value}
            </span>
            <span
              style={{
                fontSize:      '0.78rem',
                fontWeight:    500,
                color:         '#555',
                letterSpacing: '0.06em',
                textTransform: 'uppercase',
                lineHeight:    1.4,
              }}
            >
              {s.label}
            </span>
          </motion.div>
        ))}
      </div>

      <style>{`
        @media (max-width: 749px) {
          .stats-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
      `}</style>
    </section>
  )
}
