import { PHONE_DISPLAY } from '@/lib/data'

const links = [
  { label: 'CGU',              href: '/cgu'           },
  { label: 'Confidentialité',  href: '/privacy'       },
  { label: 'Mentions légales', href: '/legal'         },
]

export default function Footer() {
  return (
    <footer className="relative z-10 px-6 py-9 text-center sep-line border-t border-[var(--sep)]">

      {/* Logo */}
      <div className="font-extrabold text-[17px] tracking-[-0.5px] mb-2">
        Ride<span className="text-[var(--gold)]">Geneva</span>
        <span className="logo-dot" />
      </div>

      {/* Info */}
      <p className="text-xs leading-[1.8] text-[var(--txt-sub)]">
        © {new Date().getFullYear()} RideGeneva · Chauffeur Privé · Genève, Suisse
        <br />
        {PHONE_DISPLAY} · ridegeneva.com
      </p>

      {/* Links */}
      <div className="flex gap-4 justify-center mt-3 flex-wrap">
        {links.map(({ label, href }) => (
          <a
            key={href}
            href={href}
            className="text-[11px] text-[var(--txt-sub)] no-underline
                       hover:text-[var(--gold)] transition-colors duration-200"
          >
            {label}
          </a>
        ))}
      </div>
    </footer>
  )
}
