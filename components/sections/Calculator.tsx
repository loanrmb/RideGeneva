'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { useLang } from '@/context/LangContext'
import { CARS, PHONE } from '@/lib/data'

const FIXED_PRICES = [
  { from:'Gare Cornavin', to:'Aéroport GVA', km:5,  price:15 },
  { from:'Centre-ville',  to:'Aéroport GVA', km:7,  price:15 },
  { from:'Hôtel Beau-Rivage', to:'Aéroport GVA', km:8, price:18 },
  { from:'Genève',        to:'Lausanne',     km:62, price:124 },
  { from:'Genève',        to:'Zurich',       km:290, price:580 },
  { from:'Genève',        to:'Lyon',         km:150, price:300 },
]

export default function Calculator() {
  const { t } = useLang()
  const [from, setFrom]   = useState('')
  const [to, setTo]       = useState('')
  const [carIdx, setCarIdx] = useState(0)
  const [km, setKm]       = useState(7)
  const [result, setResult] = useState<number|null>(null)

  const car = CARS[carIdx]

  function calculate() {
    const price = Math.max(km * car.ratePerKm, car.minFare)
    setResult(price)
  }

  return (
    <section id="calc" style={{ background:'var(--bg)', paddingTop:120, paddingBottom:120 }}>
      <div className="wrap">

        {/* ── Header ── */}
        <motion.div
          initial={{ opacity:0, y:24 }} whileInView={{ opacity:1, y:0 }}
          viewport={{ once:true }} transition={{ duration:0.6 }}
          className="mb-14">
          <span className="label">Tarification transparente</span>
          <h2 style={{ fontSize:'clamp(40px,5vw,72px)', color:'var(--txt)', marginBottom:12 }}>
            Estimez votre trajet.
          </h2>
          <p style={{ fontSize:14, maxWidth:520 }}>
            Saisissez votre point de départ et votre destination — votre tarif s&apos;affiche instantanément.
          </p>
        </motion.div>

        {/* ── Split: form + map ── */}
        <motion.div
          initial={{ opacity:0, y:20 }} whileInView={{ opacity:1, y:0 }}
          viewport={{ once:true }} transition={{ delay:0.1, duration:0.6 }}
          className="grid gap-6 mb-20"
          style={{ gridTemplateColumns:'1fr 1fr' }}>

          {/* Form */}
          <div className="flex flex-col gap-4">
            <div>
              <span className="label">Adresse de départ</span>
              <input className="input" placeholder="Ex : Gare Cornavin, Genève"
                value={from} onChange={e => setFrom(e.target.value)} />
            </div>
            <div>
              <span className="label">Adresse d&apos;arrivée</span>
              <input className="input" placeholder="Ex : Aéroport de Genève-Cointrin"
                value={to} onChange={e => setTo(e.target.value)} />
            </div>

            {/* Vehicle */}
            <div>
              <span className="label">Véhicule</span>
              <div className="flex gap-2">
                {CARS.map((c,i) => (
                  <button key={c.id} onClick={() => setCarIdx(i)}
                    style={{
                      flex:1, padding:'12px 8px',
                      border:`1px solid ${carIdx===i ? 'var(--txt)' : 'var(--border)'}`,
                      borderRadius:4, background:'transparent', cursor:'pointer',
                      fontSize:11, fontWeight:400, letterSpacing:'0.08em', textTransform:'uppercase',
                      color: carIdx===i ? 'var(--txt)' : 'var(--txt-2)',
                      fontFamily:'inherit', transition:'all 0.15s',
                    }}>
                    {c.name.split(' ').slice(-1)}<br />
                    <span style={{ fontSize:10, opacity:0.6 }}>{c.ratePerKm} CHF/km</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Distance */}
            <div>
              <div className="flex justify-between mb-2">
                <span className="label" style={{ marginBottom:0 }}>Distance estimée</span>
                <span style={{ fontSize:13, fontWeight:400, color:'var(--txt)' }}>{km} km</span>
              </div>
              <input type="range" min={1} max={600} step={1} value={km}
                onChange={e => setKm(Number(e.target.value))} />
            </div>

            {/* Result or button */}
            {result !== null ? (
              <div className="card p-6 text-center" style={{ marginTop:4 }}>
                <p className="label" style={{ marginBottom:8, textAlign:'center' }}>Prix estimé</p>
                <div style={{ fontSize:56, fontWeight:400, color:'var(--txt)', letterSpacing:'-2px', lineHeight:1 }}>
                  {Math.round(result)}<span style={{ fontSize:22 }}> CHF</span>
                </div>
                <p style={{ fontSize:11, marginTop:8, textAlign:'center' }}>
                  {km} km × {car.ratePerKm} CHF/km
                </p>
                <a href={`tel:${PHONE}`} className="btn-primary"
                  style={{ marginTop:16, display:'inline-block' }}>
                  Réserver
                </a>
              </div>
            ) : (
              <button className="btn-ghost" onClick={calculate} style={{ marginTop:4 }}>
                Calculer mon tarif →
              </button>
            )}
          </div>

          {/* Map — OpenStreetMap dark */}
          <div className="card overflow-hidden" style={{ minHeight:420, borderRadius:4 }}>
            <iframe
              src="https://www.openstreetmap.org/export/embed.html?bbox=6.0,46.15,6.35,46.28&layer=mapnik&marker=46.2044,6.1432"
              style={{
                width:'100%', height:'100%', border:'none', minHeight:420,
                filter:'invert(1) hue-rotate(180deg) brightness(0.75) contrast(1.1) saturate(0.3)',
              }}
              title="Carte Genève"
            />
          </div>
        </motion.div>

        {/* ── Fixed Prices ── */}
        <motion.div
          initial={{ opacity:0, y:20 }} whileInView={{ opacity:1, y:0 }}
          viewport={{ once:true }} transition={{ delay:0.2, duration:0.6 }}>

          <div className="line mb-12" />
          <span className="label">Tarifs fixes</span>
          <h2 style={{ fontSize:'clamp(32px,4vw,56px)', color:'var(--txt)', marginBottom:40 }}>
            Des tarifs clairs pour chaque besoin.
          </h2>

          <div className="grid gap-3" style={{ gridTemplateColumns:'repeat(auto-fill,minmax(320px,1fr))' }}>
            {FIXED_PRICES.map((r,i) => (
              <motion.div key={i}
                initial={{ opacity:0, y:12 }} whileInView={{ opacity:1, y:0 }}
                viewport={{ once:true }} transition={{ delay:i*0.05, duration:0.4 }}
                className="card" style={{ padding:'20px 24px' }}>
                <div className="flex items-center gap-3 mb-3">
                  <span style={{ fontSize:12, fontWeight:400, letterSpacing:'0.06em', textTransform:'uppercase', color:'var(--txt)' }}>{r.from}</span>
                  <span style={{ fontSize:10, color:'var(--txt-2)' }}>→</span>
                  <span style={{ fontSize:12, fontWeight:400, letterSpacing:'0.06em', textTransform:'uppercase', color:'var(--txt)' }}>{r.to}</span>
                </div>
                <div className="line mb-3" />
                <div className="flex justify-between items-end">
                  <div>
                    {['Suivi de vol/train', 'Retard offert', 'Pancarte nominative'].map(f => (
                      <div key={f} style={{ fontSize:11, color:'var(--txt-2)', display:'flex', alignItems:'center', gap:6, marginBottom:3 }}>
                        <span style={{ width:12, height:1, background:'var(--border)', display:'inline-block' }}/>
                        {f}
                      </div>
                    ))}
                  </div>
                  <div style={{ textAlign:'right' }}>
                    <div style={{ fontSize:36, fontWeight:400, letterSpacing:'-1.5px', color:'var(--txt)', lineHeight:1 }}>
                      {r.price}€
                    </div>
                    <div style={{ fontSize:10, color:'var(--txt-2)', letterSpacing:'0.06em', textTransform:'uppercase' }}>/ trajet</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Quote CTA */}
          <div className="mt-8 text-center">
            <a href={`tel:${PHONE}`} className="btn-ghost" style={{ display:'inline-block', width:'auto', padding:'16px 48px' }}>
              Demander un devis →
            </a>
            <p style={{ fontSize:11, marginTop:12 }}>Réponse sous 24h · Sans engagement</p>
          </div>
        </motion.div>

      </div>
    </section>
  )
}
