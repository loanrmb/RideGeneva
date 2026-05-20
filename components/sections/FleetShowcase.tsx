'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { useLang } from '@/context/LangContext'
import { CARS, PHONE } from '@/lib/data'
import { Translations } from '@/lib/i18n'

// Per-car editorial content (SEO + premium copy)
const FLEET_COPY = {
  niro: {
    image: null,
    imageAlt: 'Kia Niro chauffeur privé Genève',
    tagline: { FR: 'LA MOBILITÉ VERTE, SANS COMPROMIS', EN: 'GREEN MOBILITY, WITHOUT COMPROMISE', DE: 'GRÜNE MOBILITÄT OHNE KOMPROMISSE', IT: 'MOBILITÀ VERDE, SENZA COMPROMESSI', RM: 'MOBILITÀ VERD, SENZA COMPROMISS' },
    desc: {
      FR: 'Économique ne signifie pas ordinaire. Le Kia Niro hybride allie sobriété énergétique et confort premium pour vos déplacements quotidiens à Genève. Idéal pour les trajets en ville, transferts et navettes d\'entreprise.',
      EN: 'Economy doesn\'t mean ordinary. The Kia Niro hybrid combines energy efficiency with premium comfort for your daily rides in Geneva. Ideal for city trips, transfers and corporate shuttles.',
      DE: 'Economy bedeutet nicht gewöhnlich. Der Kia Niro Hybrid verbindet Energieeffizienz mit Premiumkomfort für Ihre täglichen Fahrten in Genf.',
      IT: 'Economy non significa ordinario. La Kia Niro ibrida combina efficienza energetica e comfort premium per i vostri spostamenti quotidiani a Ginevra.',
      RM: 'Economy na munta betg ordinari. La Kia Niro ibrida combinescha efficienza d\'energia e confort premium per voss viadis quotidians a Genevra.',
    },
    seoKeywords: 'vtc genève, taxi genève, chauffeur privé genève pas cher',
    bg: 'from-[#0a1a12] to-[#0d1f16]',
  },
  'c-class': {
    image: '/images/mercedes-c-hotel.jpg',
    imageAlt: 'Mercedes Classe C chauffeur privé Genève hôtel',
    tagline: { FR: 'BUSINESS CLASS. CHAQUE KILOMÈTRE.', EN: 'BUSINESS CLASS. EVERY KILOMETRE.', DE: 'BUSINESS CLASS. JEDEN KILOMETER.', IT: 'BUSINESS CLASS. OGNI CHILOMETRO.', RM: 'BUSINESS CLASS. MINTGA KILOMETER.' },
    desc: {
      FR: 'La Mercedes Classe C redéfinit le standard du transport d\'affaires à Genève. Sellerie cuir, finitions premium et silence absolu. Le véhicule des clients qui ont des exigences — et qui méritent d\'être traités en conséquence.',
      EN: 'The Mercedes C-Class redefines the standard of business travel in Geneva. Leather upholstery, premium finishes and absolute silence. The vehicle for clients with standards — who deserve to be treated accordingly.',
      DE: 'Die Mercedes C-Klasse definiert den Standard des Geschäftsreisens in Genf neu. Lederpolsterung, Premium-Ausstattung und absolute Stille. Das Fahrzeug für anspruchsvolle Kunden.',
      IT: 'La Mercedes Classe C ridefinisce lo standard del trasporto d\'affari a Ginevra. Selleria in pelle, finiture premium e silenzio assoluto.',
      RM: 'La Mercedes Classe C redefinescha il standard dal transport d\'affars a Genevra.',
    },
    seoKeywords: 'chauffeur affaires genève, vtc business genève, mercedes chauffeur genève',
    bg: 'from-[#0a0f1a] to-[#0d1220]',
  },
  'v-class': {
    image: '/images/mercedes-v-motion.jpg',
    imageAlt: 'Mercedes Classe V chauffeur privé groupe Genève',
    tagline: { FR: "L'ESPACE DE VOS AMBITIONS", EN: 'THE SPACE OF YOUR AMBITIONS', DE: 'DER RAUM IHRER AMBITIONEN', IT: 'LO SPAZIO DELLE VOSTRE AMBIZIONI', RM: 'L\'ESPACE DA VOSSAS AMBIZIUNS' },
    desc: {
      FR: 'Jusqu\'à 7 passagers, 6 bagages. Pour les groupes, familles et équipes exécutives qui refusent de compromettre leur confort. La Mercedes Classe V combine l\'espace d\'une navette avec le raffinement d\'une berline de prestige.',
      EN: 'Up to 7 passengers, 6 bags. For groups, families and executive teams who refuse to compromise on comfort. The Mercedes V-Class combines the space of a shuttle with the refinement of a prestige sedan.',
      DE: 'Bis zu 7 Passagiere, 6 Gepäckstücke. Für Gruppen, Familien und Führungsteams, die keinen Kompromiss beim Komfort eingehen.',
      IT: 'Fino a 7 passeggeri, 6 bagagli. Per gruppi, famiglie e team dirigenziali che non vogliono compromessi sul comfort.',
      RM: 'Fin a 7 passagiers, 6 bagaglias. Per grupps, famiglias ed equips executives.',
    },
    seoKeywords: 'chauffeur groupe genève, navette privée genève, minivan luxe genève',
    bg: 'from-[#100a1a] to-[#140d20]',
  },
}

function getCopy(t: Translations, key: string) {
  return (t as unknown as Record<string, string>)[key] ?? ''
}

export default function FleetShowcase() {
  const { t, lang } = useLang()

  return (
    <section id="fleet" className="relative">
      {/* Section header */}
      <div className="py-24 px-6 text-center">
        <motion.p
          initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
          className="font-semibold tracking-[3px] uppercase mb-4"
          style={{ fontSize: 10.5, color: 'var(--gold)' }}
        >
          {t.fleet_title}
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="font-black max-w-[700px] mx-auto"
          style={{ fontSize: 'clamp(32px,5vw,60px)', letterSpacing: 'clamp(-1.5px,-0.03em,-3px)' }}
        >
          {t.fleet_sub}
        </motion.h2>
      </div>

      {/* One card per car */}
      {CARS.map((car, i) => {
        const copy    = FLEET_COPY[car.id as keyof typeof FLEET_COPY]
        const tagline = copy.tagline[lang] ?? copy.tagline.FR
        const desc    = copy.desc[lang] ?? copy.desc.FR
        const isEven  = i % 2 === 0

        return (
          <motion.article
            key={car.id}
            id={`fleet-${car.id}`}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
            className={`relative min-h-[80vh] flex items-center overflow-hidden bg-gradient-to-br ${copy.bg}`}
          >
            {/* Background image */}
            {copy.image && (
              <div className={`absolute inset-0 z-0 ${isEven ? '' : ''}`}>
                <Image
                  src={copy.image}
                  alt={copy.imageAlt}
                  fill
                  className="object-cover opacity-35"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent" />
              </div>
            )}

            {/* Content */}
            <div className={`relative z-10 wrap py-20 px-6 grid md:grid-cols-2 gap-16 items-center ${isEven ? '' : 'md:[&>*:first-child]:order-2'}`}>

              {/* Text side */}
              <div>
                {/* Category */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }} transition={{ delay: 0.1, duration: 0.5 }}
                  className="inline-flex items-center gap-2 rounded-full mb-6"
                  style={{ padding:'4px 12px', background:'var(--gold-lt)', border:'1px solid var(--gold-bd)', fontSize:10, fontWeight:700, letterSpacing:'1.5px', textTransform:'uppercase', color:'var(--gold)' }}
                >
                  {getCopy(t, `cat_${car.categoryKey}`)}
                </motion.div>

                {/* Car name */}
                <motion.h3
                  initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }} transition={{ delay: 0.15, duration: 0.6 }}
                  className="font-black text-white mb-3"
                  style={{ fontSize: 'clamp(36px,5vw,64px)', letterSpacing: 'clamp(-1px,-0.03em,-2.5px)', lineHeight: 1.0 }}
                >
                  {car.name}
                </motion.h3>

                {/* Tagline */}
                <motion.p
                  initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }} transition={{ delay: 0.22, duration: 0.5 }}
                  className="font-bold uppercase tracking-[1.5px] mb-6"
                  style={{ fontSize: 'clamp(11px,1.2vw,13px)', color: 'var(--gold)' }}
                >
                  {tagline}
                </motion.p>

                {/* Description — SEO text */}
                <motion.p
                  initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}
                  viewport={{ once: true }} transition={{ delay: 0.3, duration: 0.6 }}
                  className="leading-[1.75] mb-8 text-white/60"
                  style={{ fontSize: 'clamp(13px,1.3vw,15px)' }}
                >
                  {desc}
                </motion.p>

                {/* Rate + specs */}
                <motion.div
                  initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }} transition={{ delay: 0.35, duration: 0.5 }}
                  className="flex items-center gap-6 mb-8 flex-wrap"
                >
                  {/* Rate */}
                  <div className="flex items-baseline gap-1">
                    <span className="font-black text-white" style={{ fontSize: 44, letterSpacing: '-2px', lineHeight: 1 }}>
                      {car.ratePerKm}
                    </span>
                    <span style={{ fontSize: 16, fontWeight: 600, color: 'var(--gold)' }}>CHF/km</span>
                  </div>
                  <div className="sep-line" style={{ width: 1, height: 36 }} />
                  {/* Specs */}
                  <div className="flex gap-5">
                    <div className="text-center">
                      <div className="font-bold text-white" style={{ fontSize: 18 }}>{car.passengers}</div>
                      <div style={{ fontSize: 10, color: 'rgba(255,255,255,0.4)' }}>{t.spec_pax}</div>
                    </div>
                    <div className="text-center">
                      <div className="font-bold text-white" style={{ fontSize: 18 }}>{car.luggage}</div>
                      <div style={{ fontSize: 10, color: 'rgba(255,255,255,0.4)' }}>{t.spec_lug}</div>
                    </div>
                    <div className="text-center">
                      <div className="font-bold text-white" style={{ fontSize: 18 }}>{car.minFare}</div>
                      <div style={{ fontSize: 10, color: 'rgba(255,255,255,0.4)' }}>CHF min.</div>
                    </div>
                  </div>
                </motion.div>

                {/* CTA */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }} transition={{ delay: 0.4, duration: 0.5 }}
                >
                  <a href={`tel:${PHONE}`} className="btn-primary" style={{ fontSize: 14, padding: '12px 28px' }}>
                    {t.btn_book}
                  </a>
                </motion.div>

                {/* Hidden SEO text */}
                <p className="sr-only">{copy.seoKeywords}</p>
              </div>

              {/* Image side — if no background image show a glass card */}
              {!copy.image && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }} transition={{ delay: 0.2, duration: 0.6 }}
                  className="glass rounded-[24px] p-10 text-center hidden md:block"
                >
                  <div
                    className="font-black gold-text mb-2"
                    style={{ fontSize: 72, letterSpacing: '-3px', lineHeight: 1 }}
                  >
                    {car.ratePerKm}
                  </div>
                  <div style={{ fontSize: 20, color: 'var(--gold)', fontWeight: 600 }}>CHF / km</div>
                  <div className="sep-line mt-6 mb-6" />
                  <div className="text-white/50" style={{ fontSize: 13, lineHeight: 1.7 }}>
                    Hybride · Écologique<br />
                    Confort premium<br />
                    Parfait pour la ville
                  </div>
                </motion.div>
              )}
            </div>

            {/* Section number */}
            <div
              className="absolute right-8 bottom-8 font-mono text-white/10"
              style={{ fontSize: 80, fontWeight: 900, letterSpacing: '-4px', lineHeight: 1 }}
            >
              0{i + 1}
            </div>
          </motion.article>
        )
      })}
    </section>
  )
}
