'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { useLang } from '@/context/LangContext'
import { CARS, ROUTES, PHONE } from '@/lib/data'
import GlassCard from '@/components/ui/GlassCard'
import SectionHeader from '@/components/ui/SectionHeader'
import CarSVG from '@/components/ui/CarSVG'

export default function Calculator() {
  const { t } = useLang()

  const [km,      setKm]      = useState(7)
  const [carIdx,  setCarIdx]  = useState(0)

  const car      = CARS[carIdx]
  const rawPrice = km * car.ratePerKm
  const price    = Math.max(rawPrice, car.minFare)
  const isMin    = rawPrice < car.minFare

  return (
    <section id="calc" className="py-[90px] px-6">
      <div className="wrap-sm">
        <SectionHeader title={t.calc_title} subtitle={t.calc_sub} />

        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
        >
          <GlassCard radius={28} className="p-8">

            {/* ── Popular routes ── */}
            <label className="block text-[10.5px] font-bold uppercase tracking-[1px] mb-2.5"
                   style={{ color: 'var(--txt-sub)' }}>
              {t.routes_label}
            </label>
            <div className="flex flex-wrap gap-[7px] mb-7">
              {ROUTES.map(route => (
                <button
                  key={route.km}
                  onClick={() => setKm(route.km)}
                  className="transition-all duration-200 font-[inherit]"
                  style={{
                    padding: '6px 12px',
                    borderRadius: 20,
                    border: `1px solid ${km === route.km ? 'var(--gold)' : 'var(--btn-bd)'}`,
                    background: km === route.km ? 'var(--gold-lt)' : 'transparent',
                    color: km === route.km ? 'var(--gold)' : 'var(--txt-sub)',
                    fontWeight: km === route.km ? 700 : 400,
                    fontSize: 11.5,
                    cursor: 'pointer',
                  }}
                >
                  {route.label} <span style={{ opacity: .6 }}>· {route.km}km</span>
                </button>
              ))}
            </div>

            {/* ── KM slider ── */}
            <div className="mb-7">
              <div className="flex justify-between items-center mb-2.5">
                <label className="text-[10.5px] font-bold uppercase tracking-[1px]"
                       style={{ color: 'var(--txt-sub)' }}>
                  {t.km_label}
                </label>
                <span className="font-extrabold tracking-[-0.8px]"
                      style={{ fontSize: 20, color: 'var(--gold)' }}>
                  {km} km
                </span>
              </div>
              <input
                type="range" min={1} max={600} step={1} value={km}
                onChange={e => {
                  setKm(Number(e.target.value))
                }}
              />
              <div className="flex justify-between mt-1" style={{ fontSize: 10, color: 'var(--txt-sub)' }}>
                <span>1 km</span><span>600 km</span>
              </div>
            </div>

            {/* ── Vehicle selector ── */}
            <div className="mb-7">
              <label className="block text-[10.5px] font-bold uppercase tracking-[1px] mb-3"
                     style={{ color: 'var(--txt-sub)' }}>
                {t.vehicle_label}
              </label>
              <div className="grid gap-2.5" style={{ gridTemplateColumns: 'repeat(3,1fr)' }}>
                {CARS.map((c, idx) => (
                  <button
                    key={c.id}
                    onClick={() => setCarIdx(idx)}
                    className="rounded-[16px] text-center transition-all duration-200 font-[inherit] cursor-pointer"
                    style={{
                      padding: '14px 8px',
                      border: `1.5px solid ${carIdx === idx ? 'var(--gold)' : 'var(--btn-bd)'}`,
                      background: carIdx === idx ? 'var(--gold-lt)' : 'transparent',
                      color: carIdx === idx ? 'var(--gold)' : 'var(--txt-sub)',
                      fontWeight: carIdx === idx ? 700 : 400,
                    }}
                  >
                    <div className="flex justify-center mb-2">
                      <CarSVG
                        type={c.type}
                        color={carIdx === idx ? 'var(--gold)' : 'currentColor'}
                        width={c.type === 'van' ? 40 : c.type === 'suv' ? 36 : 32}
                      />
                    </div>
                    <div style={{ fontSize: 11, fontWeight: 700, lineHeight: 1.3 }}>{c.name}</div>
                    <div style={{ fontSize: 10.5, marginTop: 3, opacity: .8 }}>{c.ratePerKm} CHF/km</div>
                  </button>
                ))}
              </div>
            </div>

            {/* ── Result ── */}
            <GlassCard gold radius={20} className="p-6 text-center">
              <div
                className="font-bold uppercase tracking-[1.2px] mb-2"
                style={{ fontSize: 10.5, color: 'var(--gold)' }}
              >
                {t.price_label}
              </div>

              <div className="flex items-baseline justify-center gap-1.5">
                <span style={{ fontSize: 58, fontWeight: 900, color: 'var(--gold)', letterSpacing: '-3px', lineHeight: 1 }}>
                  {Math.round(price)}
                </span>
                <span style={{ fontSize: 20, fontWeight: 700, color: 'var(--gold)' }}>CHF</span>
              </div>

              <div style={{ fontSize: 11, color: 'var(--txt-sub)', marginTop: 4 }}>
                {km} km × {car.ratePerKm} CHF/km
              </div>

              {isMin && (
                <div style={{ fontSize: 10.5, color: 'var(--txt-sub)', marginTop: 6 }}>
                  {t.min_note} ({car.minFare} CHF)
                </div>
              )}

              <a
                href={`tel:${PHONE}`}
                className="btn-primary inline-block mt-4"
                style={{ fontSize: 14, padding: '11px 26px' }}
              >
                {t.btn_book} · +41 76 455 01 73
              </a>
            </GlassCard>

          </GlassCard>
        </motion.div>
      </div>
    </section>
  )
}
