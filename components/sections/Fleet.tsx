'use client'

import { useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { FLEET } from '@/lib/data'

function CarSilhouette({ id }: { id: string }) {
  if (id === 'mercedes-van') {
    return (
      <svg viewBox="0 0 340 180" fill="none" style={{ width: '85%', height: 'auto', opacity: 0.75 }}>
        <path d="M 45 120 L 45 85 Q 50 65 75 60 L 115 55 Q 180 48 240 52 L 275 60 Q 295 70 295 90 L 295 120 Z" fill="#2a2a2a" stroke="#3a3a3a" strokeWidth="1.5"/>
        <path d="M 75 60 L 80 50 Q 95 44 130 43 Q 165 43 175 50 L 180 60 Z" fill="#1e1e1e" stroke="#333" strokeWidth="1"/>
        <rect x="182" y="55" width="100" height="12" rx="2" fill="#111" stroke="#2a2a2a" strokeWidth="0.5"/>
        <rect x="48" y="108" width="245" height="20" rx="4" fill="#222"/>
        <rect x="45" y="88" width="250" height="20" rx="2" fill="#252525"/>
        <circle cx="90" cy="133" r="14" fill="#1a1a1a" stroke="#444" strokeWidth="2"/>
        <circle cx="90" cy="133" r="7" fill="#111" stroke="#555" strokeWidth="1.5"/>
        <circle cx="255" cy="133" r="14" fill="#1a1a1a" stroke="#444" strokeWidth="2"/>
        <circle cx="255" cy="133" r="7" fill="#111" stroke="#555" strokeWidth="1.5"/>
        <rect x="292" y="85" width="5" height="14" rx="2" fill="#ee4444" opacity="0.8"/>
        <rect x="43" y="85" width="5" height="14" rx="2" fill="#ee4444" opacity="0.8"/>
      </svg>
    )
  }
  if (id === 'mercedes-e') {
    return (
      <svg viewBox="0 0 340 180" fill="none" style={{ width: '85%', height: 'auto', opacity: 0.75 }}>
        <path d="M 55 120 L 55 96 Q 60 72 88 65 L 128 57 Q 158 50 170 49 Q 182 50 212 57 L 252 65 Q 280 72 285 96 L 285 120 Z" fill="#2a2a2a" stroke="#3a3a3a" strokeWidth="1.5"/>
        <path d="M 88 65 L 100 50 Q 130 41 170 40 Q 210 41 240 50 L 252 65 Z" fill="#1e1e1e" stroke="#333" strokeWidth="1"/>
        <path d="M 100 50 L 108 65 L 232 65 L 240 50 Z" fill="#111" stroke="#2a2a2a" strokeWidth="0.5"/>
        <rect x="60" y="110" width="220" height="18" rx="3" fill="#222"/>
        <rect x="55" y="96" width="230" height="14" rx="2" fill="#252525"/>
        <circle cx="96" cy="132" r="14" fill="#1a1a1a" stroke="#444" strokeWidth="2"/>
        <circle cx="96" cy="132" r="7" fill="#111" stroke="#555" strokeWidth="1.5"/>
        <circle cx="244" cy="132" r="14" fill="#1a1a1a" stroke="#444" strokeWidth="2"/>
        <circle cx="244" cy="132" r="7" fill="#111" stroke="#555" strokeWidth="1.5"/>
        <circle cx="170" cy="72" r="5" fill="#888" stroke="#666" strokeWidth="0.5"/>
        <path d="M 258 78 L 275 80 L 277 90 L 258 90 Z" fill="#1a1a1a" stroke="#333" strokeWidth="0.5"/>
        <path d="M 82 78 L 65 80 L 63 90 L 82 90 Z" fill="#1a1a1a" stroke="#333" strokeWidth="0.5"/>
      </svg>
    )
  }
  // Tesla Model 3
  return (
    <svg viewBox="0 0 340 180" fill="none" style={{ width: '85%', height: 'auto', opacity: 0.75 }}>
      <path d="M 60 120 L 60 100 Q 65 75 90 68 L 120 60 Q 145 52 170 50 Q 195 52 220 60 L 250 68 Q 275 75 280 100 L 280 120 Z" fill="#2a2a2a" stroke="#3a3a3a" strokeWidth="1.5"/>
      <path d="M 90 68 L 115 52 Q 140 44 170 43 Q 200 44 225 52 L 250 68 Z" fill="#1e1e1e" stroke="#333" strokeWidth="1"/>
      <path d="M 115 52 L 120 68 L 220 68 L 225 52 Z" fill="#111" stroke="#2a2a2a" strokeWidth="0.5"/>
      <line x1="170" y1="44" x2="170" y2="68" stroke="#222" strokeWidth="0.5"/>
      <rect x="60" y="108" width="220" height="20" rx="4" fill="#222"/>
      <circle cx="100" cy="132" r="14" fill="#1a1a1a" stroke="#444" strokeWidth="2"/>
      <circle cx="100" cy="132" r="7" fill="#111" stroke="#555" strokeWidth="1.5"/>
      <circle cx="240" cy="132" r="14" fill="#1a1a1a" stroke="#444" strokeWidth="2"/>
      <circle cx="240" cy="132" r="7" fill="#111" stroke="#555" strokeWidth="1.5"/>
      <rect x="278" y="95" width="6" height="14" rx="2" fill="#cc3333" opacity="0.7"/>
      <rect x="56" y="95" width="6" height="14" rx="2" fill="#cc3333" opacity="0.7"/>
      <path d="M 255 80 L 270 82 L 272 90 L 255 90 Z" fill="#1a1a1a" stroke="#333" strokeWidth="0.5"/>
      <path d="M 85 80 L 70 82 L 68 90 L 85 90 Z" fill="#1a1a1a" stroke="#333" strokeWidth="0.5"/>
    </svg>
  )
}

const specIcons = {
  persons: (
    <svg viewBox="0 0 24 24" fill="#aaa" width={16} height={16}>
      <path d="M12 12c2.7 0 4.8-2.1 4.8-4.8S14.7 2.4 12 2.4 7.2 4.5 7.2 7.2 9.3 12 12 12zm0 2.4c-3.2 0-9.6 1.6-9.6 4.8v2.4h19.2v-2.4c0-3.2-6.4-4.8-9.6-4.8z"/>
    </svg>
  ),
  luggage: (
    <svg viewBox="0 0 24 24" fill="#aaa" width={16} height={16}>
      <path d="M20 8h-3V6c0-1.1-.9-2-2-2H9C7.9 4 7 4.9 7 6v2H4c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zM9 6h6v2H9V6z"/>
    </svg>
  ),
}

export default function Fleet() {
  const gridRef = useRef<HTMLDivElement>(null)
  const [activeIdx, setActiveIdx] = useState(0)

  const onScroll = () => {
    const grid = gridRef.current
    if (!grid) return
    const cards = grid.querySelectorAll<HTMLElement>('[data-card]')
    if (!cards[0]) return
    const cardW = cards[0].offsetWidth + 12
    setActiveIdx(Math.round(grid.scrollLeft / cardW))
  }

  return (
    <section id="fleet" style={{ background: '#000', padding: '60px 24px 80px' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }} className="fleet-inner">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{ color: '#fff', fontSize: '2.4rem', fontWeight: 700, margin: '0 0 40px', letterSpacing: '-0.02em' }}
          className="fleet-heading"
        >
          Notre flotte.
        </motion.h2>

        {/* Grid */}
        <div
          ref={gridRef}
          onScroll={onScroll}
          style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 16 }}
          className="fleet-grid fleet-scroll"
        >
          {FLEET.map((car, i) => (
            <motion.div
              key={car.id}
              data-card
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -2, borderColor: '#444' }}
              style={{
                background:   '#1a1a1a',
                border:       '1px solid #2a2a2a',
                borderRadius: 16,
                padding:      24,
                display:      'flex',
                flexDirection:'column',
                cursor:       'default',
                transition:   'border-color 0.2s',
              }}
            >
              <h3 style={{ color: '#fff', fontSize: '1.15rem', fontWeight: 700, margin: '0 0 4px', lineHeight: 1.3 }}>
                {car.brand}
              </h3>
              <p style={{ color: '#888', fontSize: '0.85rem', margin: '0 0 20px' }}>{car.model}</p>

              {/* Car illustration */}
              <div style={{ width: '100%', aspectRatio: '4/3', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 24 }}>
                <CarSilhouette id={car.id} />
              </div>

              <hr style={{ border: 'none', borderTop: '1px solid #2a2a2a', margin: '0 0 16px' }} />

              {/* Specs */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 10, color: '#ccc', fontSize: '0.875rem' }}>
                  <span style={{ width: 32, height: 32, background: '#222', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    {specIcons.persons}
                  </span>
                  {car.passengers} passagers
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: 10, color: '#ccc', fontSize: '0.875rem' }}>
                  <span style={{ width: 32, height: 32, background: '#222', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    {specIcons.luggage}
                  </span>
                  {car.luggage} bagages
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: 10, color: '#ccc', fontSize: '0.875rem' }}>
                  <span style={{ width: 32, height: 32, background: '#222', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, fontSize: '0.85rem' }}>
                    ✦
                  </span>
                  {car.specs[0]}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Dots — mobile only */}
        <div style={{ display: 'flex', justifyContent: 'center', gap: 6, marginTop: 16 }} className="fleet-dots">
          {FLEET.map((_, i) => (
            <span
              key={i}
              style={{
                width: 6, height: 6, borderRadius: '50%',
                background: i === activeIdx ? '#fff' : '#333',
                transform: i === activeIdx ? 'scale(1.3)' : 'scale(1)',
                transition: 'background 0.2s, transform 0.2s',
                display: 'block',
              }}
            />
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 749px) {
          .fleet-inner { padding: 0 !important; max-width: 100% !important; }
          .fleet-heading { padding: 0 20px !important; font-size: 1.8rem !important; }
          .fleet-grid {
            display: flex !important;
            flex-direction: row !important;
            overflow-x: auto !important;
            scroll-snap-type: x mandatory !important;
            -webkit-overflow-scrolling: touch !important;
            gap: 12px !important;
            padding: 0 20px 20px !important;
            scrollbar-width: none !important;
            -ms-overflow-style: none !important;
          }
          .fleet-grid > * { flex: 0 0 75vw !important; max-width: 300px !important; scroll-snap-align: start !important; }
          .fleet-dots { display: flex !important; }
        }
        .fleet-dots { display: none; }
      `}</style>
    </section>
  )
}
