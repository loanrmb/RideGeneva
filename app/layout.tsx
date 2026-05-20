import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'RideGeneva — Chauffeur Privé Genève · Aéroport GVA · 24h/7j',
  description: 'Service de chauffeur privé premium à Genève. Transferts aéroport GVA, Gare Cornavin, Lausanne, Verbier et stations de ski. Disponible 24h/24, 7j/7.',
  keywords: ['chauffeur privé genève', 'vtc genève', 'transfert aéroport genève', 'taxi genève', 'private driver geneva'],
  openGraph: {
    title: 'RideGeneva — Chauffeur Privé à Genève',
    description: 'Transferts aéroport GVA, Gare Cornavin, Lausanne. Disponible 24h/24.',
    url: 'https://ridegeneva.com',
    siteName: 'RideGeneva',
    locale: 'fr_CH',
    type: 'website',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <head>
        <link href="https://api.mapbox.com/mapbox-gl-js/v3.0.0/mapbox-gl.css" rel="stylesheet" />
      </head>
      <body>{children}</body>
    </html>
  )
}
