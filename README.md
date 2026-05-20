# RideGeneva 🚗

Chauffeur privé premium à Genève — site redesigné sur la base de bordeauxride.com

**Live:** [ridegeneva.com](https://ridegeneva.com)

## Stack

- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS + CSS variables (design system BordeauxRide)
- **Animations:** Framer Motion
- **Maps:** Mapbox GL JS (dark-v11, centré Genève)
- **Deploy:** Vercel via GitHub

## Design

Tesla / Apple dark — fond noir `#000000`, cartes `#0d0d0d`, boutons pill `border-radius: 980px`,
typographie serrée `letter-spacing: -0.03em`. Port exact de bordeauxride.com.

## Sections

| Section | Composant | Source bordeauxride |
|---------|-----------|---------------------|
| Hero cinématique | `Hero.tsx` | `hero-banner.liquid` |
| Stats 4 colonnes | `Stats.tsx` | `chiffres-cles.liquid` |
| Comment ça marche | `HowItWorks.tsx` | `comment-ca-marche.liquid` |
| Notre flotte | `Fleet.tsx` | `fleet-cards.liquid` |
| Estimateur Mapbox | `Estimateur.tsx` | `estimateur-carte.liquid` |
| Tarifs fixes toggle | `TarifsFixes.tsx` | `tarifs-fixes.liquid` |
| CTA Banner | `CtaBanner.tsx` | `banner-cta.liquid` |

## Getting started

```bash
git clone https://github.com/YOUR_USERNAME/ridegeneva.git
cd ridegeneva
npm install
cp .env.local.example .env.local
# Ajouter NEXT_PUBLIC_MAPBOX_TOKEN dans .env.local
npm run dev
```

## Variables d'environnement

```env
NEXT_PUBLIC_MAPBOX_TOKEN=pk.ey...   # Mapbox token pour la carte
```

## Deploy

1. Push sur GitHub
2. Import sur [vercel.com](https://vercel.com)
3. Ajouter `NEXT_PUBLIC_MAPBOX_TOKEN` dans les variables Vercel
4. Connecter le domaine `ridegeneva.com`
