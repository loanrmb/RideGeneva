import { PHONE_DISPLAY } from '@/lib/data'

export default function Footer() {
  return (
    <footer style={{ background:'var(--bg)', borderTop:'1px solid var(--border)', padding:'40px 0' }}>
      <div className="wrap flex justify-between items-center flex-wrap gap-4">
        <div style={{ fontSize:14, fontWeight:400, color:'var(--txt)' }}>
          Ride<span style={{ color:'var(--red)' }}>Geneva</span>
          <span className="logo-dot" />
        </div>
        <p style={{ fontSize:11, color:'var(--txt-2)', letterSpacing:'0.06em', textTransform:'uppercase', margin:0 }}>
          © {new Date().getFullYear()} RideGeneva · Genève · {PHONE_DISPLAY}
        </p>
        <div style={{ display:'flex', gap:16 }}>
          {['CGU','Confidentialité','Mentions'].map(l => (
            <a key={l} href="#" style={{ fontSize:10, color:'var(--txt-2)', textDecoration:'none',
              letterSpacing:'0.08em', textTransform:'uppercase', transition:'color 0.15s' }}
              onMouseEnter={e=>(e.currentTarget.style.color='var(--txt)')}
              onMouseLeave={e=>(e.currentTarget.style.color='var(--txt-2)')}>
              {l}
            </a>
          ))}
        </div>
      </div>
    </footer>
  )
}
