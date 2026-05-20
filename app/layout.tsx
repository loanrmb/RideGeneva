import type { Metadata } from 'next'
import { ThemeProvider } from 'next-themes'
import { LangProvider } from '@/context/LangContext'
import Preloader from '@/components/layout/Preloader'
import SmoothScroll from '@/components/layout/SmoothScroll'
import './globals.css'

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
  twitter: {
    card: 'summary_large_image',
    title: 'RideGeneva — Chauffeur Privé Genève',
    description: 'Service de chauffeur privé premium à Genève. Disponible 24h/24.',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" suppressHydrationWarning>
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
