'use client'

import { motion } from 'framer-motion'
import { useLang } from '@/context/LangContext'
import { SERVICES } from '@/lib/data'
import { Translations } from '@/lib/i18n'
import GlassCard from '@/components/ui/GlassCard'
import SectionHeader from '@/components/ui/SectionHeader'

function getServiceText(t: Translations, key: string): string {
  return (t as unknown as Record<string, string>)[key] ?? ''
}

export default function Services() {
  const { t } = useLang()

  return (
    <section id="services" className="py-[90px] px-6">
      <div className="wrap">
        <SectionHeader title={t.svc_title} subtitle={t.svc_sub} />

        <div
          className="grid gap-[14px]"
          style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(185px, 1fr))' }}
        >
          {SERVICES.map((svc, i) => (
            <motion.div
              key={svc.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: i * 0.07, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -6 }}
            >
              <GlassCard
                radius={20}
                className="p-[26px_18px] text-center cursor-pointer transition-all duration-300
                           hover:border-[var(--gold-bd)]"
              >
                <motion.span
                  className="block text-[28px] mb-3"
                  whileHover={{ scale: 1.2 }}
                  transition={{ type: 'spring', stiffness: 400 }}
                >
                  {svc.icon}
                </motion.span>

                <h4
                  className="font-bold tracking-[-0.2px] mb-1.5"
                  style={{ fontSize: 13.5 }}
                >
                  {getServiceText(t, svc.nameKey)}
                </h4>

                <p
                  className="leading-[1.55] m-0"
                  style={{ fontSize: 11, color: 'var(--txt-sub)' }}
                >
                  {getServiceText(t, svc.descKey)}
                </p>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
