'use client'

import { useState, lazy, Suspense } from 'react'
import { motion } from 'framer-motion'
import { useLang } from '@/context/LangContext'
import { CARS, PHONE } from '@/lib/data'

// Lazy load map to avoid SSR issues
const MapGeneva = lazy(() => import('@/components/ui/MapGeneva'))

const FIXED_PRICES = [
  { from:'Gare Cornavin',     to:'Aéroport GVA',   km:5,   price:15  },
  { from:'Centre-ville',      to:'Aéroport GVA',   km:7,   price:15  },
  { from:'Beau-Rivage Hotel', to:'Aéroport GVA',   km:8,   price:18  },
  { from:'Genève',            to:'Lausanne',        km:62,  price:124 },
  { from:'Genève',            to:'Zurich',          km:290, price:580 },
  { from:'Genève',            to:'Lyon',            km:150, price:300 },
]

export default function Calculator() {
  const { t } = useLang()
  const [from,    setFrom]    = useState('')
  const [to,      setTo]      = useState('')
  const [carIdx,  setCarIdx]  = useState(0)
  const [km,      setKm]      = useState(7)
  const [result,  setResult]  = useState<number | null>(null)

  const car = CARS[carIdx]

  function calculate() {
    setResult(Math.max(km * car.ratePerKm, car.minFare))
  }

  return (
    <section id="calc" style={{ background: 'var(--bg)', paddingTop: 120, paddingBottom: 120 }}>
      <div className="wrap">

        {/* Header */}
        <motion.div
          initial={{ opacity:0, y:24 }} whileInView={{ opacity:1, y:0 }}
          viewport={{ once:true }} transition={{ duration:0.6 }}
          style={{ marginBottom: 56 }}>
          <span className="label">Tarification transparente</span>
          <h2 style={{ fontSize:'clamp(40px,5vw,72px)', color:'var(--txt)', marginBottom:12, fontWeight:400 }}>
            Estimez votre trajet.
          </h2>
          <p style={{ fontSize:15, maxWidth:520, margin:0 }}>
            Saisissez votre point de départ et votre destination — votre tarif s&apos;affiche instantanément.
          </p>
        </motion.div>

        {/* Split: form + map */}
        <motion.div
          initial={{ opacity:0, y:20 }} whileInView={{ opacity:1, y:0 }}
          viewport={{ once:true }} transition={{ delay:0.1, duration:0.6 }}
          style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:24, marginBottom:80 }}>

          {/* Form column */}
          <div style={{ display:'flex', flexDirection:'column', gap:20 }}>

            {/* Departure */}
            <div>
              <span className="label">Adresse de départ</span>
              <input className="input"
                placeholder="Ex : Gare Cornavin, Genève"
                value={from} onChange={e => setFrom(e.target.value)} />
            </div>

            {/* Arrival */}
            <div>
              <span className="label">Adresse d&apos;arrivée</span>
              <input className="input"
                placeholder="Ex : Aéroport de Genève-Cointrin"
                value={to} onChange={e => setTo(e.target.value)} />
            </div>

            {/* Vehicle */}
            <div>
              <span className="label">Véhicule</span>
              <div style={{ display:'flex', gap:8 }}>
                {CARS.map((c, i) => (
                  <button key={c.id} onClick={() => setCarIdx(i)}
                    style={{
                      flex:1, padding:'14px 8px',
                      border:`1px solid ${carIdx===i ? 'rgba(255,255,255,0.6)' : 'var(--border)'}`,
                      borderRadius:4, background: carIdx===i ? 'rgba(255,255,255,0.06)' : 'transparent',
                      cursor:'pointer', fontFamily:'inherit', transition:'all 0.15s',
                      textAlign:'center',
                    }}>
                    <div style={{ fontSize:10, fontWeight:400, letterSpacing:'0.1em', textTransform:'uppercase', color: carIdx===i ? 'var(--txt)' : 'var(--txt-2)', marginBottom:4 }}>
                      {c.name.split(' ').slice(-1)}
                    </div>
                    <div style={{ fontSize:11, color: carIdx===i ? 'var(--txt-2)' : 'var(--txt-3)', fontWeight:300 }}>
                      {c.ratePerKm} CHF/km
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Distance slider */}
            <div>
              <div style={{ display:'flex', justifyContent:'space-between', alignItems:'center', marginBottom:10 }}>
                <span className="label" style={{ marginBottom:0 }}>Distance estimée</span>
                <span style={{ fontSize:14, fontWeight:400, color:'var(--txt)', letterSpacing:'-0.5px' }}>{km} km</span>
              </div>
              <input type="range" min={1} max={600} step={1} value={km}
                onChange={e => setKm(Number(e.target.value))} />
            </div>

            {/* Result or CTA */}
            {result !== null ? (
              <motion.div
                initial={{ opacity:0, scale:0.97 }} animate={{ opacity:1, scale:1 }}
                className="card" style={{ padding:'28px 24px', textAlign:'center', marginTop:4 }}>
                <span className="label" style={{ textAlign:'center', marginBottom:10 }}>Prix estimé</span>
                <div style={{ fontSize:60, fontWeight:400, color:'var(--txt)', letterSpacing:'-3px', lineHeight:1, marginBottom:6 }}>
                  {Math.round(result)}<span style={{ fontSize:22, letterSpacing:0 }}> CHF</span>
                </div>
                <p style={{ fontSize:11, margin:'0 0 20px' }}>{km} km × {car.ratePerKm} CHF/km</p>
                <a href={`tel:${PHONE}`} className="btn-primary">Réserver</a>
                <button onClick={() => setResult(null)}
                  style={{ background:'none', border:'none', color:'var(--txt-2)', fontSize:11, cursor:'pointer', marginLeft:16, fontFamily:'inherit', letterSpacing:'0.06em', textTransform:'uppercase' }}>
                  Modifier
                </button>
              </motion.div>
            ) : (
              <button className="btn-ghost" onClick={calculate} style={{ marginTop:4 }}>
                Calculer mon tarif →
              </button>
            )}
          </div>

          {/* Map column */}
          <div className="card" style={{ overflow:'hidden', minHeight:460, padding:0, borderRadius:4 }}>
            <Suspense fallback={
              <div style={{ width:'100%', height:'100%', minHeight:460, background:'var(--bg-2)', display:'flex', alignItems:'center', justifyContent:'center' }}>
                <span style={{ fontSize:11, color:'var(--txt-2)', letterSpacing:'0.1em', textTransform:'uppercase' }}>Chargement de la carte...</span>
              </div>
            }>
              <MapGeneva />
            </Suspense>
          </div>
        </motion.div>

        {/* Fixed prices */}
        <motion.div
          initial={{ opacity:0, y:20 }} whileInView={{ opacity:1, y:0 }}
          viewport={{ once:true }} transition={{ delay:0.2, duration:0.6 }}>

          <div className="line" style={{ marginBottom:56 }} />
          <span className="label">Tarifs fixes</span>
          <h2 style={{ fontSize:'clamp(32px,4vw,56px)', color:'var(--txt)', marginBottom:40, fontWeight:400 }}>
            Des tarifs clairs pour chaque besoin.
          </h2>

          <div style={{ display:'grid', gap:12, gridTemplateColumns:'repeat(auto-fill,minmax(300px,1fr))' }}>
            {FIXED_PRICES.map((r, i) => (
              <motion.div key={i}
                initial={{ opacity:0, y:10 }} whileInView={{ opacity:1, y:0 }}
                viewport={{ once:true }} transition={{ delay:i*0.04, duration:0.4 }}
                className="card" style={{ padding:'20px 24px' }}>

                {/* Route */}
                <div style={{ display:'flex', alignItems:'center', gap:8, marginBottom:16 }}>
                  <span style={{ fontSize:11, fontWeight:400, letterSpacing:'0.08em', textTransform:'uppercase', color:'var(--txt)' }}>{r.from}</span>
                  <span style={{ fontSize:9, color:'var(--txt-3)' }}>→</span>
                  <span style={{ fontSize:11, fontWeight:400, letterSpacing:'0.08em', textTransform:'uppercase', color:'var(--txt)' }}>{r.to}</span>
                </div>

                <div className="line" style={{ marginBottom:14 }} />

                <div style={{ display:'flex', justifyContent:'space-between', alignItems:'flex-end' }}>
                  <div>
                    {['Suivi de vol/train', 'Retard offert', 'Pancarte nominative'].map(f => (
                      <div key={f} style={{ fontSize:10, color:'var(--txt-2)', display:'flex', alignItems:'center', gap:7, marginBottom:4 }}>
                        <span style={{ width:14, height:1, background:'var(--border)', flexShrink:0 }} />
                        {f}
                      </div>
                    ))}
                  </div>
                  <div style={{ textAlign:'right', flexShrink:0, marginLeft:12 }}>
                    <div style={{ fontSize:38, fontWeight:400, letterSpacing:'-1.5px', color:'var(--txt)', lineHeight:1 }}>
                      {r.price}€
                    </div>
                    <div style={{ fontSize:9, color:'var(--txt-2)', letterSpacing:'0.08em', textTransform:'uppercase', marginTop:2 }}>/ trajet</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div style={{ marginTop:32, textAlign:'center' }}>
            <a href={`tel:${PHONE}`} className="btn-ghost"
              style={{ display:'inline-block', width:'auto', padding:'16px 48px' }}>
              Demander un devis →
            </a>
            <p style={{ fontSize:11, marginTop:10 }}>Réponse sous 24h · Sans engagement</p>
          </div>
        </motion.div>

      </div>
    </section>
  )
}
