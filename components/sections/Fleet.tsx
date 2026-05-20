'use client'

import { motion } from 'framer-motion'
import { useLang } from '@/context/LangContext'
import { CARS, PHONE } from '@/lib/data'
import { Translations } from '@/lib/i18n'
import GlassCard from '@/components/ui/GlassCard'
import SectionHeader from '@/components/ui/SectionHeader'
import CarSVG from '@/components/ui/CarSVG'

function getCategoryLabel(t: Translations, key: string): string {
  return (t as Record<string, string>)[`cat_${key}`] ?? key
}

export default function Fleet() {
  const { t } = useLang()

  return (
    <section id="fleet" className="py-[90px] px-6">
      <div className="wrap">
        <SectionHeader title={t.fleet_title} subtitle={t.fleet_sub} />

        <div className="grid gap-[18px]" style={{ gridTemplateColumns: 'repeat(auto-fit,minmax(270px,1fr))' }}>
          {CARS.map((car, i) => (
            <motion.div
              key={car.id}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -10, scale: 1.01 }}
            >
              <GlassCard
                radius={24}
                hover
                className="p-7 flex flex-col h-full cursor-pointer transition-all duration-300"
              >
                {/* Header */}
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <div
                      className="font-bold uppercase tracking-[1.5px] mb-1"
                      style={{ fontSize: 10, color: 'var(--gold)' }}
                    >
                      {getCategoryLabel(t, car.categoryKey)}
                    </div>
                    <h3
                      className="font-bold tracking-[-0.5px]"
                      style={{ fontSize: 20 }}
                    >
                      {car.name}
                    </h3>
                  </div>
                  <CarSVG type={car.type} color={car.accentColor} width={52} />
                </div>

                {/* Rate */}
                <div
                  className="rounded-[14px] mb-4 flex items-baseline gap-1"
                  style={{
                    padding: '12px 16px',
                    background: 'var(--gold-lt)',
                    border: '1px solid var(--gold-bd)',
                  }}
                >
                  <span style={{ fontSize: 38, fontWeight: 900, color: 'var(--gold)', letterSpacing: '-2px' }}>
                    {car.ratePerKm}
                  </span>
                  <span style={{ fontSize: 14, fontWeight: 700, color: 'var(--gold)' }}>CHF</span>
                  <span style={{ fontSize: 13, color: 'var(--txt-sub)' }}>/km</span>
                </div>

                {/* Specs */}
                <div className="flex mb-4">
                  {[
                    { icon: '👥', value: car.passengers, label: t.spec_pax },
                    { icon: '🧳', value: car.luggage,    label: t.spec_lug },
                    { icon: '💰', value: car.minFare,    label: 'CHF min.' },
                  ].map(({ icon, value, label }, idx) => (
                    <div
                      key={label}
                      className="flex-1 text-center py-2"
                      style={{
                        borderRight: idx < 2 ? '1px solid var(--sep)' : undefined,
                      }}
                    >
                      <div style={{ fontSize: 17 }}>{icon}</div>
                      <div className="font-bold mt-0.5" style={{ fontSize: 14 }}>{value}</div>
                      <div style={{ fontSize: 10, color: 'var(--txt-sub)' }}>{label}</div>
                    </div>
                  ))}
                </div>

                {/* Book button */}
                <a
                  href={`tel:${PHONE}`}
                  className="block text-center rounded-[14px] font-bold transition-all duration-300
                             hover:text-white mt-auto"
                  style={{
                    padding: 11,
                    fontSize: 13.5,
                    border: '1.5px solid var(--gold)',
                    color: 'var(--gold)',
                  }}
                  onMouseEnter={e => {
                    const el = e.currentTarget as HTMLElement
                    el.style.background = 'linear-gradient(135deg,var(--gold),var(--gold-mid))'
                    el.style.color = '#fff'
                  }}
                  onMouseLeave={e => {
                    const el = e.currentTarget as HTMLElement
                    el.style.background = 'transparent'
                    el.style.color = 'var(--gold)'
                  }}
                >
                  {t.btn_book}
                </a>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
