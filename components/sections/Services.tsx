'use client'

import { motion } from 'framer-motion'
import { useLang } from '@/context/LangContext'
import { SERVICES } from '@/lib/data'

// Fix TypeScript - typed accessor
function getT(t: Record<string, unknown>, key: string): string {
  return typeof t[key] === 'string' ? (t[key] as string) : ''
}

export default function Services() {
  const { t } = useLang()
  const tRecord = t as unknown as Record<string, unknown>

  return (
    <section id="services"
      style={{ background:'var(--bg)', borderTop:'1px solid var(--border)', padding:'100px 0' }}>
      <div className="wrap">

        {/* Header */}
        <motion.div
          initial={{ opacity:0, y:20 }} whileInView={{ opacity:1, y:0 }}
          viewport={{ once:true }} className="mb-16">
          <span className="label">{t.svc_title}</span>
          <h2 style={{ fontSize:'clamp(40px,5vw,72px)', color:'var(--txt)', maxWidth:700 }}>
            {t.svc_sub}
          </h2>
        </motion.div>

        {/* Services — Apple "specs" style: icon + title + desc, 3 col grid */}
        <div className="grid gap-x-12 gap-y-14"
          style={{ gridTemplateColumns:'repeat(auto-fill,minmax(260px,1fr))' }}>
          {SERVICES.map((svc, i) => (
            <motion.div key={svc.id}
              initial={{ opacity:0, y:20 }} whileInView={{ opacity:1, y:0 }}
              viewport={{ once:true }} transition={{ delay:i*0.07, duration:0.5 }}>

              {/* Icon line */}
              <div style={{ fontSize:22, marginBottom:16, display:'block',
                width:40, height:40, display:'flex', alignItems:'center', justifyContent:'center',
                background:'var(--bg-2)', borderRadius:4, border:'1px solid var(--border)' }}>
                {svc.icon}
              </div>

              {/* Title */}
              <h4 style={{ fontSize:13, fontWeight:400, letterSpacing:'0.04em', textTransform:'uppercase',
                color:'var(--txt)', marginBottom:8 }}>
                {getT(tRecord, svc.nameKey)}
              </h4>

              {/* Separator */}
              <div style={{ width:24, height:1, background:'var(--border)', marginBottom:12 }} />

              {/* Description */}
              <p style={{ fontSize:13, color:'var(--txt-2)', lineHeight:1.6 }}>
                {getT(tRecord, svc.descKey)}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Airport highlight — full width card */}
        <motion.div
          initial={{ opacity:0, y:20 }} whileInView={{ opacity:1, y:0 }}
          viewport={{ once:true }} transition={{ delay:0.3, duration:0.5 }}
          className="card mt-16 overflow-hidden"
          style={{ display:'grid', gridTemplateColumns:'1fr 1fr' }}>

          {/* Text side */}
          <div style={{ padding:'48px 48px' }}>
            <span className="label">Service Signature</span>
            <h3 style={{ fontSize:'clamp(28px,3.5vw,44px)', color:'var(--txt)', marginBottom:16 }}>
              Votre vol.<br />Notre mission.
            </h3>
            <p style={{ fontSize:14, marginBottom:24 }}>
              Suivi de vol en temps réel. Présence garantie même en cas de retard.
              Votre chauffeur vous attend dans le hall des arrivées.
            </p>
            {['GVA · Genève-Cointrin', 'BSL · Bâle-Mulhouse', 'LYS · Lyon Saint-Exupéry'].map(a => (
              <div key={a} style={{ fontSize:12, letterSpacing:'0.08em', textTransform:'uppercase',
                color:'var(--txt-2)', padding:'10px 0', borderBottom:'1px solid var(--border)' }}>
                {a}
              </div>
            ))}
          </div>

          {/* Image side */}
          <div style={{ position:'relative', minHeight:360 }}>
            <motion.div
              whileHover={{ scale:1.03 }}
              transition={{ duration:0.6 }}
              style={{ position:'absolute', inset:0, overflow:'hidden' }}>
              <img src="/images/airport.jpg" alt="Transfert aéroport Genève"
                style={{ width:'100%', height:'100%', objectFit:'cover', opacity:0.7 }} />
              <div style={{ position:'absolute', inset:0, background:'linear-gradient(to right, rgba(0,0,0,0.6), transparent)' }} />
            </motion.div>
          </div>
        </motion.div>

      </div>
    </section>
  )
}
