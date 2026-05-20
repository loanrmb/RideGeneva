'use client'

import { motion } from 'framer-motion'
import { useLang } from '@/context/LangContext'
import { PHONE, PHONE_DISPLAY, WHATSAPP_URL } from '@/lib/data'

export default function Contact() {
  const { t } = useLang()

  return (
    <section id="contact"
      style={{ background:'var(--bg)', borderTop:'1px solid var(--border)', padding:'120px 0' }}>
      <div className="wrap">
        <motion.div
          initial={{ opacity:0, y:24 }} whileInView={{ opacity:1, y:0 }}
          viewport={{ once:true }} transition={{ duration:0.6 }}>

          <span className="label">{t.cta_title}</span>

          <h2 style={{ fontSize:'clamp(48px,6.5vw,96px)', color:'var(--txt)',
            marginBottom:24, maxWidth:800, lineHeight:0.97 }}>
            Prêt à partir ?
          </h2>

          <p style={{ fontSize:15, maxWidth:480, marginBottom:48 }}>
            {t.cta_sub}
          </p>

          <div className="flex gap-4 flex-wrap items-center">
            <a href={`tel:${PHONE}`} className="btn-primary"
              style={{ fontSize:12, padding:'16px 40px' }}>
              {t.btn_call_now} · {PHONE_DISPLAY}
            </a>
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer"
              style={{
                display:'inline-block', padding:'15px 40px', borderRadius:4,
                background:'#25D366', color:'#fff', fontFamily:'inherit',
                fontWeight:400, fontSize:12, letterSpacing:'0.12em',
                textTransform:'uppercase', textDecoration:'none',
              }}>
              WhatsApp
            </a>
          </div>

          {/* Divider */}
          <div className="line mt-20 mb-16" />

          {/* Info grid */}
          <div className="grid gap-8" style={{ gridTemplateColumns:'repeat(4,1fr)' }}>
            {[
              { l:'Disponibilité',  v:'24h/24 · 7j/7'    },
              { l:'Zone',           v:'Genève & Suisse'   },
              { l:'Réponse',        v:'Sous 2 minutes'    },
              { l:'Paiement',       v:'CB · Espèces · Virement' },
            ].map(({ l, v }) => (
              <div key={l}>
                <div style={{ fontSize:10, fontWeight:400, letterSpacing:'0.12em',
                  textTransform:'uppercase', color:'var(--txt-2)', marginBottom:6 }}>
                  {l}
                </div>
                <div style={{ fontSize:13, fontWeight:400, color:'var(--txt)' }}>{v}</div>
              </div>
            ))}
          </div>

        </motion.div>
      </div>
    </section>
  )
}
