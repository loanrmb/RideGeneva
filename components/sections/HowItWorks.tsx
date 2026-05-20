'use client'

import { motion } from 'framer-motion'
import { HOW_STEPS, SITE } from '@/lib/data'

export default function HowItWorks() {
  return (
    <section id="how" style={{ background: '#000', padding: '80px 24px', fontFamily: 'var(--font)' }}>
      <div style={{ maxWidth: 1100, margin: '0 auto' }}>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{ marginBottom: 64 }}
        >
          <span className="section-label">Simple & rapide</span>
          <h2 className="section-title">Réservez en 3 étapes.</h2>
        </motion.div>

        {/* Steps */}
        <div
          className="how-steps-connector"
          style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', position: 'relative' }}
        >
          {HOW_STEPS.map((step, i) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.15, ease: [0.22, 1, 0.36, 1] }}
              style={{ padding: '0 32px 0 0', position: 'relative', zIndex: 1 }}
              className="how-step"
            >
              {/* Number badge */}
              <div
                style={{
                  width:        52, height: 52, borderRadius: '50%',
                  background:   '#fff', color: '#000',
                  fontSize:     '1rem', fontWeight: 800,
                  display:      'flex', alignItems: 'center', justifyContent: 'center',
                  marginBottom: 28, flexShrink: 0, letterSpacing: '-0.02em',
                }}
              >
                {step.number}
              </div>
              <span style={{ fontSize: '1.8rem', display: 'block', marginBottom: 16 }}>{step.emoji}</span>
              <h3 style={{ color: '#fff', fontSize: '1.1rem', fontWeight: 700, margin: '0 0 10px', lineHeight: 1.3 }}>
                {step.title}
              </h3>
              <p style={{ color: '#666', fontSize: '0.88rem', lineHeight: 1.65, margin: 0 }}>
                {step.desc}
              </p>
            </motion.div>
          ))}
        </div>

        {/* CTA bar */}
        <div
          style={{
            marginTop:      64, paddingTop: 48,
            borderTop:      '1px solid #1a1a1a',
            display:        'flex',
            alignItems:     'center',
            justifyContent: 'space-between',
            flexWrap:       'wrap',
            gap:            24,
          }}
        >
          <p style={{ color: '#666', fontSize: '0.9rem', maxWidth: '40ch', lineHeight: 1.5, margin: 0 }}>
            Disponible 24h/24, 7j/7. Confirmation immédiate par SMS. Flotte premium Tesla & Mercedes.
          </p>
          <motion.a
            href={`tel:${SITE.phoneTel}`}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="btn-primary"
          >
            Réserver maintenant →
          </motion.a>
        </div>
      </div>

      <style>{`
        @media (max-width: 749px) {
          .how-step {
            padding: 0 0 48px 64px !important;
            border-left: 1px solid #1a1a1a;
          }
          .how-step:last-child { padding-bottom: 0 !important; border-left-color: transparent !important; }
          .how-steps-connector { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  )
}
