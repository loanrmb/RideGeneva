'use client'

import { motion } from 'framer-motion'
import { useLang } from '@/context/LangContext'
import { PHONE, PHONE_DISPLAY, WHATSAPP_URL } from '@/lib/data'
import GlassCard from '@/components/ui/GlassCard'

export default function Contact() {
  const { t } = useLang()

  return (
    <section id="contact" className="py-[90px] px-6">
      <div className="wrap-sm">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
        >
          <GlassCard radius={32} className="p-[52px_40px] text-center">

            <div style={{ fontSize: 40, marginBottom: 16 }}>📞</div>

            <h2
              className="font-extrabold mb-2.5"
              style={{
                fontSize: 'clamp(24px, 4vw, 40px)',
                letterSpacing: 'clamp(-1px, -0.03em, -2px)',
              }}
            >
              {t.cta_title}
            </h2>

            <p
              className="mb-7 leading-[1.6]"
              style={{ fontSize: 14.5, color: 'var(--txt-sub)' }}
            >
              {t.cta_sub}
            </p>

            <div className="flex gap-3 justify-center flex-wrap">
              <a
                href={`tel:${PHONE}`}
                className="btn-primary"
                style={{ fontSize: 14, padding: '13px 24px' }}
              >
                📞 {t.btn_call_now} · {PHONE_DISPLAY}
              </a>

              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="font-bold no-underline transition-all duration-200 hover:opacity-90 hover:-translate-y-0.5"
                style={{
                  padding: '13px 24px',
                  borderRadius: 50,
                  background: '#25D366',
                  color: '#fff',
                  fontSize: 14,
                  display: 'inline-block',
                }}
              >
                💬 WhatsApp
              </a>
            </div>

          </GlassCard>
        </motion.div>
      </div>
    </section>
  )
}
