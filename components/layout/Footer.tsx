import { SITE } from '@/lib/data'

export default function Footer() {
  const cols = [
    {
      title: 'Services',
      links: [
        ['Transfert aéroport', '#'],
        ['Gare Cornavin', '#'],
        ['Longue distance', '#'],
        ['Événements VIP', '#'],
      ],
    },
    {
      title: 'Destinations',
      links: [
        ['Lausanne', '#'],
        ['Verbier', '#'],
        ['Annecy', '#'],
        ['Chamonix', '#'],
      ],
    },
    {
      title: 'Contact',
      links: [
        [SITE.phone, `tel:${SITE.phoneTel}`],
        [SITE.email, `mailto:${SITE.email}`],
        ['WhatsApp', SITE.whatsapp],
      ],
    },
  ]

  return (
    <footer
      style={{
        background:   '#000',
        borderTop:    '1px solid #111',
        padding:      '64px 40px 40px',
        fontFamily:   'var(--font)',
      }}
    >
      <div style={{ maxWidth: 1100, margin: '0 auto' }}>
        {/* Top grid */}
        <div
          style={{
            display:             'grid',
            gridTemplateColumns: '2fr 1fr 1fr 1fr',
            gap:                 40,
            marginBottom:        56,
          }}
          className="footer-grid"
        >
          <div>
            <p style={{ fontSize: '1.1rem', fontWeight: 700, letterSpacing: '-0.02em', color: '#fff', marginBottom: 12 }}>
              RideGeneva
            </p>
            <p style={{ color: '#555', fontSize: '0.82rem', lineHeight: 1.6, maxWidth: '28ch' }}>
              Chauffeur privé premium à Genève. Disponible 24h/24, 7j/7.
            </p>
          </div>

          {cols.map(col => (
            <div key={col.title}>
              <h4
                style={{
                  fontSize:      '0.68rem',
                  fontWeight:    700,
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  color:         '#444',
                  marginBottom:  16,
                }}
              >
                {col.title}
              </h4>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 10 }}>
                {col.links.map(([label, href]) => (
                  <li key={label}>
                    <a
                      href={href}
                      style={{ color: '#666', fontSize: '0.85rem', transition: 'color 0.2s' }}
                      onMouseEnter={e => (e.currentTarget.style.color = '#fff')}
                      onMouseLeave={e => (e.currentTarget.style.color = '#666')}
                    >
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div
          style={{
            paddingTop:     32,
            borderTop:      '1px solid #111',
            display:        'flex',
            alignItems:     'center',
            justifyContent: 'space-between',
            flexWrap:       'wrap',
            gap:            16,
          }}
        >
          <p style={{ color: '#444', fontSize: '0.78rem' }}>
            © 2026 RideGeneva. Tous droits réservés.
          </p>
          <div style={{ display: 'flex', gap: 24 }}>
            {['Mentions légales', 'Confidentialité', 'CGV'].map(l => (
              <a
                key={l}
                href="#"
                style={{ color: '#444', fontSize: '0.78rem', transition: 'color 0.2s' }}
                onMouseEnter={e => (e.currentTarget.style.color = '#666')}
                onMouseLeave={e => (e.currentTarget.style.color = '#444')}
              >
                {l}
              </a>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 749px) {
          .footer-grid { grid-template-columns: 1fr 1fr !important; }
        }
      `}</style>
    </footer>
  )
}
