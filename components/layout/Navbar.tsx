'use client'

import { useEffect, useState } from 'react'
import { SITE } from '@/lib/data'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      style={{
        position:     'fixed',
        top:          0,
        left:         0,
        right:        0,
        zIndex:       100,
        height:       64,
        display:      'flex',
        alignItems:   'center',
        justifyContent: 'space-between',
        padding:      '0 40px',
        background:   scrolled ? 'rgba(0,0,0,0.9)' : 'transparent',
        backdropFilter: scrolled ? 'blur(20px) saturate(180%)' : 'none',
        borderBottom: scrolled ? '1px solid #111' : '1px solid transparent',
        transition:   'background 0.3s ease, border-color 0.3s ease, backdrop-filter 0.3s ease',
      }}
    >
      {/* Logo */}
      <a
        href="/"
        style={{
          display:      'flex',
          alignItems:   'center',
          gap:          8,
          fontWeight:   700,
          fontSize:     '1.05rem',
          letterSpacing: '-0.02em',
          color:        '#fff',
        }}
      >
        <span
          style={{
            width: 8, height: 8, borderRadius: '50%',
            background: '#fff', display: 'inline-block', flexShrink: 0,
          }}
        />
        RideGeneva
      </a>

      {/* Nav links */}
      <nav
        style={{ display: 'flex', alignItems: 'center', gap: 32 }}
        className="hidden md:flex"
      >
        {[
          ['Comment ça marche', '#how'],
          ['Notre flotte',      '#fleet'],
          ['Tarifs',            '#estimateur'],
          ['Contact',           '#contact'],
        ].map(([label, href]) => (
          <a
            key={href}
            href={href}
            style={{
              fontSize:      '0.82rem',
              fontWeight:    500,
              color:         '#666',
              letterSpacing: '0.01em',
              transition:    'color 0.2s',
            }}
            onMouseEnter={e => (e.currentTarget.style.color = '#fff')}
            onMouseLeave={e => (e.currentTarget.style.color = '#666')}
          >
            {label}
          </a>
        ))}
      </nav>

      {/* CTA */}
      <a
        href={`tel:${SITE.phoneTel}`}
        style={{
          padding:       '10px 24px',
          background:    '#fff',
          color:         '#000',
          fontSize:      '0.78rem',
          fontWeight:    700,
          letterSpacing: '0.05em',
          textTransform: 'uppercase',
          borderRadius:  980,
          transition:    'background 0.2s, transform 0.15s',
          whiteSpace:    'nowrap',
        }}
        onMouseEnter={e => {
          e.currentTarget.style.background = '#e0e0e0'
          e.currentTarget.style.transform = 'translateY(-1px)'
        }}
        onMouseLeave={e => {
          e.currentTarget.style.background = '#fff'
          e.currentTarget.style.transform = 'translateY(0)'
        }}
      >
        Réserver →
      </a>
    </header>
  )
}
