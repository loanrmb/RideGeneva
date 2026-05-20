'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { useLang } from '@/context/LangContext'
import { SERVICES, PHONE } from '@/lib/data'
import { Translations } from '@/lib/i18n'
import AnimatedText from '@/components/ui/AnimatedText'

function getT(t: Translations, key: string) {
  return (t as unknown as Record<string, string>)[key] ?? ''
}

export default function ServiceShowcase() {
  const { t } = useLang()

  return (
    <section id="services">

      {/* ── Airport hero ── */}
      <div className="relative min-h-[70vh] flex items-end overflow-hidden">
        <Image
          src="/images/airport.jpg"
          alt="Transfert aéroport Genève GVA chauffeur privé"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/10" />

        <div className="relative z-10 wrap px-6 pb-16 pt-32">
          <motion.p
            initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
            className="font-semibold tracking-[3px] uppercase mb-4"
            style={{ fontSize: 10, color: 'rgba(212,175,112,0.7)' }}
          >
            ✈️ &nbsp; Service Signature
          </motion.p>

          <h2
            className="font-black text-white mb-4 max-w-[700px]"
            style={{ fontSize: 'clamp(36px,5.5vw,72px)', letterSpacing: 'clamp(-1.5px,-0.03em,-3.5px)', lineHeight: 1.04 }}
          >
            <AnimatedText text="VOTRE VOL." delay={0} />
            <br />
            <AnimatedText text="NOTRE MISSION." delay={0.2} className="gold-text" />
          </h2>

          <motion.p
            initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ delay: 0.4 }}
            className="text-white/55 max-w-[560px] leading-[1.75] mb-8"
            style={{ fontSize: 'clamp(13px,1.4vw,16px)' }}
          >
            Suivi de vol en temps réel. Présence garantie, même en cas de retard.
            Votre chauffeur vous attend dans le hall des arrivées avec une pancarte nominative.
            Genève-Cointrin · Genève-Euroairport · Bâle-Mulhouse.
          </motion.p>

          {/* Airport stats */}
          <motion.div
            initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ delay: 0.5 }}
            className="flex gap-8 flex-wrap"
          >
            {[
              { v: 'GVA', l: 'Genève-Cointrin' },
              { v: 'BSL', l: 'Bâle-Mulhouse'   },
              { v: '24/7', l: 'Disponible'      },
              { v: '∞', l: 'Suivi de retard'   },
            ].map(({ v, l }) => (
              <div key={v}>
                <div className="font-black text-white" style={{ fontSize: 20, letterSpacing: '-0.8px' }}>{v}</div>
                <div style={{ fontSize: 10.5, color: 'rgba(255,255,255,0.4)', marginTop: 2 }}>{l}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* ── All services title ── */}
      <div className="py-20 px-6 text-center">
        <motion.p
          initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
          className="font-semibold tracking-[3px] uppercase mb-3"
          style={{ fontSize: 10.5, color: 'var(--gold)' }}
        >
          {t.svc_title}
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ delay: 0.1 }}
          className="font-black max-w-[700px] mx-auto"
          style={{ fontSize: 'clamp(28px,4vw,50px)', letterSpacing: 'clamp(-1px,-0.025em,-2.5px)' }}
        >
          {t.svc_sub}
        </motion.h2>
      </div>

      {/* ── Services grid ── */}
      <div className="px-6 pb-24">
        <div
          className="wrap grid gap-4"
          style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))' }}
        >
          {SERVICES.map((svc, i) => (
            <motion.div
              key={svc.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.07, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -6 }}
              className="glass rounded-[20px] cursor-pointer hover:border-[var(--gold-bd)] transition-all duration-300"
              style={{ padding: '28px 20px', textAlign: 'center' }}
            >
              <motion.span
                className="block mb-3"
                style={{ fontSize: 28 }}
                whileHover={{ scale: 1.2 }}
                transition={{ type: 'spring', stiffness: 400 }}
              >
                {svc.icon}
              </motion.span>
              <h4 className="font-bold mb-1.5" style={{ fontSize: 13.5, letterSpacing: '-0.2px' }}>
                {getT(t, svc.nameKey)}
              </h4>
              <p style={{ fontSize: 11, color: 'var(--txt-sub)', lineHeight: 1.55 }}>
                {getT(t, svc.descKey)}
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* ── SEO text block ── */}
      <div className="px-6 pb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.6 }}
          className="glass rounded-[24px] wrap p-10 grid md:grid-cols-2 gap-10 items-center"
        >
          <div>
            <h3
              className="font-black mb-4"
              style={{ fontSize: 'clamp(24px,3vw,36px)', letterSpacing: '-1px' }}
            >
              Votre chauffeur privé à Genève,{' '}
              <span className="gold-text">disponible immédiatement</span>
            </h3>
            <p className="leading-[1.8] text-[var(--txt-sub)]" style={{ fontSize: 14 }}>
              RideGeneva est votre partenaire de confiance pour tous vos déplacements
              à Genève et en Suisse. Chauffeur privé VTC, transferts aéroport GVA,
              mise à disposition, longue distance vers Lyon, Zurich, Paris et Milan.
              Service premium 24h/24, 7j/7, avec suivi de vol et accueil personnalisé.
            </p>
          </div>
          <div className="flex flex-col gap-3">
            {[
              '✓ Chauffeur privé Genève 24h/24',
              '✓ Transfert aéroport GVA & BSL',
              '✓ Location avec chauffeur Genève',
              '✓ VTC Genève — réservation immédiate',
              '✓ Navette entreprise Genève',
              '✓ Private driver Geneva airport',
            ].map(item => (
              <div key={item} style={{ fontSize: 13, color: 'var(--txt-sub)', display: 'flex', alignItems: 'center', gap: 8 }}>
                <span style={{ color: 'var(--gold)', fontWeight: 700, flexShrink: 0 }}>
                  {item.slice(0, 1)}
                </span>
                {item.slice(1)}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
