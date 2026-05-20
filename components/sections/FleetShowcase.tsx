'use client'

import { useState } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { useLang } from '@/context/LangContext'
import { CARS, PHONE } from '@/lib/data'

const CAR_IMAGES: Record<string, string | null> = {
  'niro':    null,
  'c-class': '/images/mercedes-c-hotel.jpg',
  'v-class': '/images/mercedes-v-motion.jpg',
}

const CAR_COPY: Record<string, { FR: string; EN: string }> = {
  'niro': {
    FR: 'Économique et responsable. Le Kia Niro hybride assure vos déplacements quotidiens à Genève avec un confort optimal.',
    EN: 'Economical and responsible. The Kia Niro hybrid handles your daily Geneva rides in comfort.',
  },
  'c-class': {
    FR: 'Confort allemand, discrétion absolue. La Mercedes Classe C s\'impose comme la référence du transport d\'affaires premium à Genève.',
    EN: 'German comfort, absolute discretion. The Mercedes C-Class is the reference for premium business transport in Geneva.',
  },
  'v-class': {
    FR: 'Jusqu\'à 7 passagers et 6 bagages. Pour les groupes, familles et équipes dirigeantes qui ne font pas de compromis.',
    EN: 'Up to 7 passengers and 6 bags. For groups, families and executive teams who refuse to compromise.',
  },
}

export default function FleetShowcase() {
  const { t, lang } = useLang()
  const [active, setActive] = useState(0)
  const car = CARS[active]
  const desc = CAR_COPY[car.id][lang === 'EN' ? 'EN' : 'FR']
  const img  = CAR_IMAGES[car.id]

  return (
    <section id="fleet" style={{ background:'var(--bg)', borderTop:'1px solid var(--border)' }}>

      {/* Header */}
      <div className="wrap" style={{ paddingTop:100, paddingBottom:64 }}>
        <span className="label">{t.fleet_title}</span>
        <h2 style={{ fontSize:'clamp(40px,5vw,72px)', color:'var(--txt)' }}>
          {t.fleet_sub}
        </h2>
      </div>

      {/* Tabs */}
      <div style={{ borderTop:'1px solid var(--border)', borderBottom:'1px solid var(--border)' }}>
        <div className="wrap" style={{ display:'flex' }}>
          {CARS.map((c,i) => (
            <button key={c.id} onClick={() => setActive(i)}
              style={{
                flex:1, padding:'20px 0', background:'transparent', border:'none',
                borderRight: i < CARS.length-1 ? '1px solid var(--border)' : 'none',
                cursor:'pointer', fontFamily:'inherit',
                transition:'all 0.15s',
              }}>
              <div style={{
                fontSize:10, fontWeight:400, letterSpacing:'0.12em', textTransform:'uppercase',
                color: active===i ? 'var(--txt)' : 'var(--txt-2)',
                marginBottom:4, transition:'color 0.15s',
              }}>
                {c.name}
              </div>
              <div style={{
                fontSize:18, fontWeight:400, letterSpacing:'-0.5px',
                color: active===i ? 'var(--txt)' : 'var(--txt-2)',
                transition:'color 0.15s',
              }}>
                {c.ratePerKm} CHF<span style={{ fontSize:11, opacity:0.5 }}>/km</span>
              </div>
              {/* Active indicator */}
              <motion.div
                style={{
                  height:1, background:'var(--txt)',
                  marginTop:16, marginLeft:-40, marginRight:-40,
                }}
                initial={{ scaleX: active===i ? 1 : 0 }}
                animate={{ scaleX: active===i ? 1 : 0 }}
                transition={{ duration:0.3 }}
              />
            </button>
          ))}
        </div>
      </div>

      {/* Car detail */}
      <AnimatePresence mode="wait">
        <motion.div key={car.id}
          initial={{ opacity:0, y:16 }} animate={{ opacity:1, y:0 }} exit={{ opacity:0, y:-8 }}
          transition={{ duration:0.4, ease:[0.22,1,0.36,1] }}
          style={{ borderBottom:'1px solid var(--border)' }}>

          <div className="wrap" style={{ paddingTop:64, paddingBottom:64 }}>
            <div className="grid gap-16 items-start" style={{ gridTemplateColumns:'1fr 1fr' }}>

              {/* Text */}
              <div>
                <span className="label">
                  {car.categoryKey === 'economy' ? 'Économique'
                    : car.categoryKey === 'business' ? 'Business'
                    : 'Première Classe'}
                </span>
                <h3 style={{ fontSize:'clamp(36px,5vw,64px)', color:'var(--txt)', marginBottom:16 }}>
                  {car.name}
                </h3>
                <p style={{ fontSize:15, marginBottom:40, color:'var(--txt-2)' }}>{desc}</p>

                {/* Specs — clean table */}
                <div style={{ marginBottom:40 }}>
                  {[
                    { l:'Tarif',          v:`${car.ratePerKm} CHF / km` },
                    { l:'Minimum',        v:`${car.minFare} CHF`        },
                    { l:'Passagers',      v:`${car.passengers}`         },
                    { l:'Bagages',        v:`${car.luggage}`            },
                  ].map(({ l, v }) => (
                    <div key={l} className="flex justify-between py-4"
                      style={{ borderBottom:'1px solid var(--border)' }}>
                      <span style={{ fontSize:12, fontWeight:400, letterSpacing:'0.08em', textTransform:'uppercase', color:'var(--txt-2)' }}>{l}</span>
                      <span style={{ fontSize:13, fontWeight:400, color:'var(--txt)' }}>{v}</span>
                    </div>
                  ))}
                </div>

                <a href={`tel:${PHONE}`} className="btn-primary">{t.btn_book}</a>
              </div>

              {/* Image or placeholder */}
              <div style={{ position:'relative', height:420, borderRadius:4, overflow:'hidden', background:'var(--bg-2)', border:'1px solid var(--border)' }}>
                {img ? (
                  <Image src={img} alt={car.name} fill className="object-cover" style={{ opacity:0.85 }} />
                ) : (
                  <div className="flex items-center justify-center h-full">
                    <div style={{ textAlign:'center' }}>
                      <div style={{ fontSize:80, fontWeight:300, letterSpacing:'-4px', color:'var(--txt-2)', lineHeight:1 }}>
                        {car.ratePerKm}
                      </div>
                      <div style={{ fontSize:14, color:'var(--txt-2)', letterSpacing:'0.1em', textTransform:'uppercase', marginTop:8 }}>
                        CHF / km
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Navigation dots */}
      <div className="flex justify-center gap-2" style={{ padding:'24px 0' }}>
        {CARS.map((_,i) => (
          <button key={i} onClick={() => setActive(i)}
            style={{
              width: active===i ? 24 : 6, height:6,
              borderRadius:3, border:'none', cursor:'pointer',
              background: active===i ? 'var(--txt)' : 'var(--border)',
              transition:'all 0.3s',
            }} />
        ))}
      </div>
    </section>
  )
}
