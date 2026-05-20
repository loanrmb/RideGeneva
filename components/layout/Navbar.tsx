'use client'

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import { useTheme } from 'next-themes'
import { useLang } from '@/context/LangContext'
import { LANGS, FLAGS } from '@/lib/i18n'
import { PHONE } from '@/lib/data'

export default function Navbar() {
  const [langOpen, setLangOpen] = useState(false)
  const [mounted, setMounted]   = useState(false)
  const { theme, setTheme }     = useTheme()
  const { lang, setLang, t }    = useLang()
  const langRef = useRef<HTMLDivElement>(null)

  useEffect(() => { setMounted(true) }, [])
  useEffect(() => {
    const h = (e: MouseEvent) => {
      if (langRef.current && !langRef.current.contains(e.target as Node)) setLangOpen(false)
    }
    document.addEventListener('mousedown', h)
    return () => document.removeEventListener('mousedown', h)
  }, [])

  const isDark = mounted && theme === 'dark'

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-[200] flex items-center px-10 h-[60px]"
      style={{ borderBottom: '1px solid rgba(255,255,255,0.08)' }}
    >
      {/* Logo */}
      <Link href="/" className="flex items-center gap-[2px] font-medium tracking-[-0.5px] text-white no-underline mr-10 flex-shrink-0"
        style={{ fontSize: 15 }}>
        Ride<span style={{ color: 'var(--red)' }}>Geneva</span>
        <span className="logo-dot" />
      </Link>

      {/* Nav links */}
      <div className="flex gap-7 flex-1">
        {[
          { label: t.nav_fleet,    href: '#fleet'    },
          { label: t.nav_services, href: '#services' },
          { label: t.nav_pricing,  href: '#calc'     },
          { label: t.nav_contact,  href: '#contact'  },
        ].map(({ label, href }) => (
          <a key={href} href={href} className="nav-link">{label}</a>
        ))}
      </div>

      {/* Right */}
      <div className="flex items-center gap-3 ml-auto flex-shrink-0">
        <div className="relative" ref={langRef}>
          <button className="lang-btn" onClick={() => setLangOpen(v => !v)}>
            {FLAGS[lang]} {lang}
          </button>
          {langOpen && (
            <div className="lang-menu">
              {LANGS.map(l => (
                <button key={l} className={`lang-opt ${lang === l ? 'active' : ''}`}
                  onClick={() => { setLang(l); setLangOpen(false) }}>
                  {FLAGS[l]} {l}
                </button>
              ))}
            </div>
          )}
        </div>
        <button className="dark-btn" onClick={() => setTheme(isDark ? 'light' : 'dark')}>
          {mounted ? (isDark ? '☀️' : '🌙') : '🌙'}
        </button>
        <a href={`tel:${PHONE}`} className="cta-nav">{t.btn_book}</a>
      </div>
    </nav>
  )
}
