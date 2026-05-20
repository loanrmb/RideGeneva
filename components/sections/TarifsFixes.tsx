'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'

const AIRPORT_ROUTES = [
  { dir: 'a', from: 'Centre-ville', to: 'Aéroport GVA', price: 45, desc: 'Prise en charge depuis votre adresse jusqu\'aux terminaux T1 ou T2 de l\'Aéroport de Genève-Cointrin.' },
  { dir: 'b', from: 'Aéroport GVA', to: 'Centre-ville', price: 45, desc: 'Prise en charge à l\'Aéroport GVA et transfert vers votre adresse en ville, hôtel ou résidence.' },
]

const DEVIS_SERVICES = [
  { icon: '🏔️', name: 'Stations de ski',      desc: 'Verbier, Zermatt, Crans-Montana, Gstaad…' },
  { icon: '🏙️', name: 'Villes voisines',      desc: 'Lausanne, Annecy, Chamonix, Lyon, Berne…' },
  { icon: '🎪', name: 'Événements & séminaires', desc: 'Palexpo, CICG, WEF Davos, mariages…' },
]

export default function TarifsFixes() {
  const [dir, setDir] = useState<'a'|'b'>('a')
  const route = AIRPORT_ROUTES.find(r => r.dir === dir)!

  return (
    <section style={{ background: '#000', padding: '64px 24px', fontFamily: 'var(--font)' }}>
      <div style={{ maxWidth: 1100, margin: '0 auto' }}>

        <motion.div
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.6 }}
          style={{ marginBottom: 40 }}
        >
          <span className="section-label">Forfaits garantis</span>
          <h2 className="section-title">Tarifs fixes.</h2>
        </motion.div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }} className="tarifs-grid">

          {/* Airport toggle card */}
          <motion.div
            initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.1 }}
            style={{ background: '#0d0d0d', border: '1px solid #1a1a1a', borderRadius: 20, padding: 32 }}
          >
            <span style={{ fontSize: '0.65rem', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#444', marginBottom: 20, display: 'block' }}>
              Transfert aéroport
            </span>

            {/* Direction toggle */}
            <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 16, flexWrap: 'wrap' }}>
              <button
                onClick={() => setDir('a')}
                style={{
                  display: 'flex', alignItems: 'center', gap: 8,
                  padding: '10px 18px',
                  background: dir === 'a' ? '#fff' : '#111',
                  border: `1.5px solid ${dir === 'a' ? '#fff' : '#2a2a2a'}`,
                  borderRadius: 980, color: dir === 'a' ? '#000' : '#666',
                  fontSize: '0.82rem', fontWeight: 600, fontFamily: 'var(--font)', cursor: 'pointer',
                  whiteSpace: 'nowrap', transition: 'all 0.2s',
                }}
              >
                Centre-ville
              </button>
              <span style={{ color: '#444', fontSize: '1.1rem', transition: 'all 0.3s', transform: dir === 'b' ? 'scaleX(-1)' : 'none' }}>→</span>
              <button
                onClick={() => setDir('b')}
                style={{
                  display: 'flex', alignItems: 'center', gap: 8,
                  padding: '10px 18px',
                  background: dir === 'b' ? '#fff' : '#111',
                  border: `1.5px solid ${dir === 'b' ? '#fff' : '#2a2a2a'}`,
                  borderRadius: 980, color: dir === 'b' ? '#000' : '#666',
                  fontSize: '0.82rem', fontWeight: 600, fontFamily: 'var(--font)', cursor: 'pointer',
                  whiteSpace: 'nowrap', transition: 'all 0.2s',
                }}
              >
                Aéroport GVA
              </button>
              <button
                onClick={() => setDir(dir === 'a' ? 'b' : 'a')}
                style={{
                  background: 'transparent', border: '1.5px solid #1e1e1e',
                  borderRadius: '50%', width: 36, height: 36,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  color: '#666', fontSize: '1rem', cursor: 'pointer',
                  fontFamily: 'var(--font)', transition: 'all 0.2s', flexShrink: 0,
                }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = '#fff'; e.currentTarget.style.color = '#fff' }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = '#1e1e1e'; e.currentTarget.style.color = '#666' }}
                title="Inverser"
              >
                ⇄
              </button>
            </div>

            <p style={{ color: '#555', fontSize: '0.82rem', lineHeight: 1.5, marginBottom: 20 }}>{route.desc}</p>

            <div style={{ color: '#fff', fontSize: '2.8rem', fontWeight: 800, letterSpacing: '-0.04em', lineHeight: 1 }}>
              CHF {route.price} <span style={{ color: '#555', fontSize: '0.8rem', fontWeight: 500, letterSpacing: 0 }}>/ trajet</span>
            </div>

            <div style={{ marginTop: 20, paddingTop: 20, borderTop: '1px solid #1a1a1a', display: 'flex', flexDirection: 'column', gap: 8 }}>
              {['Suivi des vols, attente gratuite 30 min', 'Bagages inclus sans supplément', 'Reçu électronique automatique'].map(item => (
                <span key={item} style={{ color: '#888', fontSize: '0.82rem', display: 'flex', alignItems: 'center', gap: 8 }}>
                  <span style={{ color: '#333' }}>—</span> {item}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Devis card */}
          <motion.div
            initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.2 }}
            style={{
              background: '#0a0a0a', border: '1px solid #1a1a1a', borderRadius: 20, padding: 32,
              display: 'flex', flexDirection: 'column', justifyContent: 'space-between',
            }}
          >
            <div>
              <span style={{ fontSize: '0.65rem', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#444', marginBottom: 20, display: 'block' }}>
                Longues distances & événements
              </span>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 12, marginBottom: 32 }}>
                {DEVIS_SERVICES.map(s => (
                  <div
                    key={s.name}
                    style={{
                      display: 'flex', alignItems: 'center', gap: 14,
                      padding: 16, background: '#111', border: '1px solid #1a1a1a', borderRadius: 12,
                      transition: 'border-color 0.2s',
                    }}
                    onMouseEnter={e => (e.currentTarget.style.borderColor = '#333')}
                    onMouseLeave={e => (e.currentTarget.style.borderColor = '#1a1a1a')}
                  >
                    <div style={{ width: 40, height: 40, background: '#222', borderRadius: 10, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, fontSize: '1.1rem' }}>
                      {s.icon}
                    </div>
                    <div>
                      <p style={{ color: '#fff', fontSize: '0.9rem', fontWeight: 600, marginBottom: 2 }}>{s.name}</p>
                      <p style={{ color: '#555', fontSize: '0.78rem' }}>{s.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <a
              href="tel:+41791234567"
              style={{
                display: 'block', textAlign: 'center', padding: 16,
                background: '#fff', color: '#000',
                fontSize: '0.82rem', fontWeight: 700, letterSpacing: '0.06em', textTransform: 'uppercase',
                borderRadius: 980, transition: 'background 0.2s',
              }}
              onMouseEnter={e => (e.currentTarget.style.background = '#e0e0e0')}
              onMouseLeave={e => (e.currentTarget.style.background = '#fff')}
            >
              Demander un devis →
            </a>
          </motion.div>
        </div>
      </div>

      <style>{`
        @media (max-width: 700px) { .tarifs-grid { grid-template-columns: 1fr !important; } }
      `}</style>
    </section>
  )
}
