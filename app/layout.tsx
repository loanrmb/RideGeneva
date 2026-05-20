import type { Metadata } from 'next'
import { Onest } from 'next/font/google'
import { ThemeProvider } from 'next-themes'
import { LangProvider } from '@/context/LangContext'
import Preloader from '@/components/layout/Preloader'
import SmoothScroll from '@/components/layout/SmoothScroll'
import './globals.css'

const onest = Onest({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800', '900'],
  variable: '--font-onest',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'RideGeneva — Chauffeur Privé à Genève | VTC Genève 24h/24',
  description:
    'Chauffeur privé premium à Genève disponible 24h/24. Transfert aéroport GVA, mise à disposition, longue distance. Mercedes et Kia. Réservation immédiate.',
  keywords:
    'chauffeur privé genève, vtc genève, transfert aéroport genève, chauffeur geneva, private driver geneva, taxi luxe genève, location avec chauffeur genève',
  metadataBase: new URL('https://ridegeneva.com'),
  openGraph: {
    title: 'RideGeneva — Chauffeur Privé Genève 24h/24',
    description: 'Service de chauffeur privé premium à Genève. Mercedes et Kia.',
    url: 'https://ridegeneva.com',
    siteName: 'RideGeneva',
    locale: 'fr_CH',
    type: 'website',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" suppressHydrationWarning className={onest.variable}>
      <body>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false}>
          <LangProvider>
            <Preloader />
            <SmoothScroll>
              {children}
            </SmoothScroll>
          </LangProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
