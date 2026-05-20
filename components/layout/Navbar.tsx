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
  const [scrolled, setScrolled] = useState(false)
  const { theme, setTheme }     = useTheme()
  const { lang, setLang, t }    = useLang()
  const langRef = useRef<HTMLDivElement>(null)

  useEffect(() => { setMounted(true) }, [])

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

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
      className="fixed top-0 left-0 right-0 z-[200] flex items-center px-10 h-[60px] transition-all duration-300"
      style={{
        // iOS 26 Liquid Glass — becomes opaque on scroll
        backdropFilter: 'blur(40px) saturate(180%)',
        WebkitBackdropFilter: 'blur(40px) saturate(180%)',
        background: scrolled
          ? 'rgba(0,0,0,0.85)'
          : 'rgba(0,0,0,0.25)',
        borderBottom: scrolled
          ? '1px solid rgba(255,255,255,0.08)'
          : '1px solid rgba(255,255,255,0.06)',
      }}
    >
      {/* Logo */}
      <Link
        href="/"
        className="flex items-center gap-[2px] no-underline mr-10 flex-shrink-0"
        style={{ fontSize: 15, fontWeight: 500, color: '#ffffff', letterSpacing: '-0.3px' }}
      >
        Ride<span style={{ color: '#D52B1E' }}>Geneva</span>
        <span style={{
          width: 5, height: 5, borderRadius: '50%',
          background: '#D52B1E', display: 'inline-block',
          marginLeft: 3, verticalAlign: 'middle',
        }} />
      </Link>

      {/* Nav links */}
      <div className="flex gap-7 flex-1">
        {[
          { label: t.nav_fleet,    href: '#fleet'    },
          { label: t.nav_services, href: '#services' },
          { label: t.nav_pricing,  href: '#calc'     },
          { label: t.nav_contact,  href: '#contact'  },
        ].map(({ label, href }) => (
          <a key={href} href={href}
            style={{
              fontSize: 11, fontWeight: 400, letterSpacing: '0.10em',
              textTransform: 'uppercase', color: 'rgba(255,255,255,0.70)',
              textDecoration: 'none', transition: 'color 0.15s', padding: '4px 0',
            }}
            onMouseEnter={e => (e.currentTarget.style.color = '#fff')}
            onMouseLeave={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.70)')}
          >
            {label}
          </a>
        ))}
      </div>

      {/* Right controls */}
      <div className="flex items-center gap-3 ml-auto flex-shrink-0">
        {/* Language */}
        <div className="relative" ref={langRef}>
          <button
            onClick={() => setLangOpen(v => !v)}
            style={{
              padding: '5px 10px', borderRadius: 3,
              border: '1px solid rgba(255,255,255,0.18)',
              background: 'transparent', color: 'rgba(255,255,255,0.7)',
              fontFamily: 'inherit', fontWeight: 400, fontSize: 10,
              letterSpacing: '0.10em', textTransform: 'uppercase', cursor: 'pointer',
              transition: 'all 0.15s',
            }}
          >
            {FLAGS[lang]} {lang}
          </button>
          {langOpen && (
            <div style={{
              position: 'absolute', top: 'calc(100% + 8px)', right: 0,
              background: 'rgba(15,15,15,0.95)',
              backdropFilter: 'blur(20px)', WebkitBackdropFilter: 'blur(20px)',
              border: '1px solid rgba(255,255,255,0.1)',
              borderRadius: 4, padding: 4,
              display: 'flex', flexDirection: 'column', gap: 1,
              minWidth: 80, zIndex: 300,
            }}>
              {LANGS.map(l => (
                <button key={l}
                  onClick={() => { setLang(l); setLangOpen(false) }}
                  style={{
                    padding: '7px 12px', borderRadius: 3, border: 'none',
                    background: lang === l ? 'rgba(255,255,255,0.08)' : 'transparent',
                    color: lang === l ? '#fff' : 'rgba(255,255,255,0.55)',
                    cursor: 'pointer', fontSize: 11, textAlign: 'left',
                    fontFamily: 'inherit', fontWeight: lang === l ? 400 : 300,
                    letterSpacing: '0.08em', textTransform: 'uppercase',
                    transition: 'all 0.12s',
                  }}
                >
                  {FLAGS[l]} {l}
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Dark/light */}
        <button
          onClick={() => setTheme(isDark ? 'light' : 'dark')}
          style={{
            width: 32, height: 32, borderRadius: 3,
            border: '1px solid rgba(255,255,255,0.15)',
            background: 'transparent', color: 'rgba(255,255,255,0.65)',
            cursor: 'pointer', fontSize: 14, display: 'flex',
            alignItems: 'center', justifyContent: 'center',
            transition: 'all 0.15s', flexShrink: 0,
          }}
          aria-label="Toggle theme"
        >
          {mounted ? (isDark ? '☀️' : '🌙') : '🌙'}
        </button>

        {/* Book CTA */}
        <a
          href={`tel:${PHONE}`}
          style={{
            padding: '9px 20px', borderRadius: 4,
            background: '#D52B1E', color: '#fff',
            fontFamily: 'inherit', fontWeight: 400,
            fontSize: 10, letterSpacing: '0.12em',
            textTransform: 'uppercase', textDecoration: 'none',
            transition: 'background 0.15s', whiteSpace: 'nowrap',
          }}
          onMouseEnter={e => (e.currentTarget.style.background = '#b82318')}
          onMouseLeave={e => (e.currentTarget.style.background = '#D52B1E')}
        >
          {t.btn_book}
        </a>
      </div>
    </nav>
  )
}
