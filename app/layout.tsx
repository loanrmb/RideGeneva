import type { Metadata } from 'next'
import { ThemeProvider } from 'next-themes'
import { LangProvider } from '@/context/LangContext'
import './globals.css'

export const metadata: Metadata = {
  title: 'RideGeneva — Chauffeur Privé à Genève',
  description:
    'Service de chauffeur privé premium à Genève. Transfert aéroport GVA, mise à disposition, longue distance, événements. Disponible 24h/24.',
  keywords:
    'chauffeur privé genève, vtc genève, chauffeur geneva, transfert aéroport genève, private driver geneva, taxi genève',
  metadataBase: new URL('https://ridegeneva.com'),
  openGraph: {
    title: 'RideGeneva — Chauffeur Privé à Genève',
    description: 'Service de chauffeur privé premium à Genève. Disponible 24h/24.',
    url: 'https://ridegeneva.com',
    siteName: 'RideGeneva',
    locale: 'fr_CH',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'RideGeneva — Chauffeur Privé à Genève',
    description: 'Service de chauffeur privé premium à Genève.',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <body>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false}>
          <LangProvider>
            {children}
          </LangProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
