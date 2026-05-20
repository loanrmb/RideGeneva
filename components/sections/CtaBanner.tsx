'use client'

import { motion } from 'framer-motion'
import { SITE } from '@/lib/data'

export default function CtaBanner() {
  return (
    <section id="contact" style={{ background: '#000', padding: '80px 24px', fontFamily: 'var(--font)' }}>
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        style={{
          maxWidth:       1100,
          margin:         '0 auto',
          background:     '#0d0d0d',
          border:         '1px solid #1e1e1e',
          borderRadius:   24,
          padding:        '72px 80px',
          display:        'flex',
          alignItems:     'center',
          justifyContent: 'space-between',
          gap:            48,
          flexWrap:       'wrap',
          position:       'relative',
          overflow:       'hidden',
        }}
        className="cta-inner"
      >
        {/* Decorative circles */}
        <span style={{ position: 'absolute', right: -80, top: -80, width: 300, height: 300, borderRadius: '50%', border: '1px solid #1a1a1a', pointerEvents: 'none' }} />
        <span style={{ position: 'absolute', right: -40, top: -40, width: 200, height: 200, borderRadius: '50%', border: '1px solid #161616', pointerEvents: 'none' }} />

        <div style={{ flex: 1, minWidth: 260, position: 'relative', zIndex: 1 }}>
          <span className="section-label">Disponible 24h/24</span>
          <h2 style={{ color: '#fff', fontSize: 'clamp(1.8rem, 3vw, 3rem)', fontWeight: 700, letterSpacing: '-0.03em', lineHeight: 1.05, margin: '0 0 12px' }}>
            Prêt à partir ?
          </h2>
          <p style={{ color: '#555', fontSize: '0.9rem', lineHeight: 1.5, maxWidth: '40ch', margin: 0 }}>
            Réservez en quelques secondes. Votre chauffeur arrive. Flotte premium Tesla & Mercedes.
          </p>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: 12, flexShrink: 0, position: 'relative', zIndex: 1 }} className="cta-actions">
          <motion.a
            href={`tel:${SITE.phoneTel}`}
            whileHover={{ scale: 1.02, y: -1 }}
            whileTap={{ scale: 0.98 }}
            style={{
              display:       'inline-flex',
              alignItems:    'center',
              gap:           10,
              padding:       '16px 40px',
              background:    '#fff',
              color:         '#000',
              fontSize:      '0.85rem',
              fontWeight:    700,
              letterSpacing: '0.05em',
              textTransform: 'uppercase',
              borderRadius:  980,
              whiteSpace:    'nowrap',
            }}
          >
            Réserver maintenant →
          </motion.a>
          <span style={{ color: '#444', fontSize: '0.75rem', textAlign: 'right' }}>
            Sans inscription · Paiement à bord
          </span>
        </div>
      </motion.div>

      <style>{`
        @media (max-width: 749px) {
          .cta-inner { padding: 48px 32px !important; flex-direction: column !important; align-items: flex-start !important; }
          .cta-actions { align-items: flex-start !important; width: 100% !important; }
          .cta-actions a { width: 100% !important; justify-content: center !important; }
          .cta-actions span { text-align: left !important; }
        }
      `}</style>
    </section>
  )
}
