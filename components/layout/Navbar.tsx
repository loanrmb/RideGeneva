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

  // Avoid hydration mismatch for theme icon
  useEffect(() => { setMounted(true) }, [])

  // Close lang menu on outside click
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (langRef.current && !langRef.current.contains(e.target as Node)) {
        setLangOpen(false)
      }
    }
    document.addEventListener('mousedown', handler)
    return () => document.removeEventListener('mousedown', handler)
  }, [])

  const isDark = mounted && theme === 'dark'

  const navLinks = [
    { label: t.nav_fleet,    href: '#fleet'    },
    { label: t.nav_services, href: '#services' },
    { label: t.nav_pricing,  href: '#calc'     },
    { label: t.nav_contact,  href: '#contact'  },
  ]

  return (
    <nav
      className="glass fixed top-[14px] left-1/2 -translate-x-1/2 z-[200] rounded-[28px]
                 flex items-center gap-2.5 px-[22px] py-[11px]"
      style={{ width: 'min(calc(100% - 28px), 1100px)' }}
    >
      {/* ── Logo ── */}
      <Link
        href="/"
        className="flex items-center gap-[2px] font-extrabold text-[17px] tracking-[-0.6px]
                   no-underline text-[var(--txt)] mr-3 flex-shrink-0"
      >
        Ride<span className="text-[var(--gold)]">Geneva</span>
        <span className="logo-dot" />
      </Link>

      {/* ── Nav links ── */}
      <ul className="flex gap-0.5 flex-1 list-none m-0 p-0">
        {navLinks.map(({ label, href }) => (
          <li key={href}>
            <a href={href} className="nav-link">{label}</a>
          </li>
        ))}
      </ul>

      {/* ── Right controls ── */}
      <div className="flex items-center gap-2 ml-auto flex-shrink-0">

        {/* Language selector */}
        <div className="relative" ref={langRef}>
          <button className="lang-btn" onClick={() => setLangOpen(v => !v)}>
            {FLAGS[lang]} {lang}
          </button>

          {langOpen && (
            <div className="lang-menu glass">
              {LANGS.map(l => (
                <button
                  key={l}
                  className={`lang-opt ${lang === l ? 'active' : ''}`}
                  onClick={() => { setLang(l); setLangOpen(false) }}
                >
                  {FLAGS[l]} {l}
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Dark / light toggle */}
        <button
          className="dark-btn"
          onClick={() => setTheme(isDark ? 'light' : 'dark')}
          aria-label="Toggle theme"
        >
          {mounted ? (isDark ? '☀️' : '🌙') : '🌙'}
        </button>

        {/* Book CTA */}
        <a href={`tel:${PHONE}`} className="cta-nav">
          {t.btn_book}
        </a>
      </div>
    </nav>
  )
}
