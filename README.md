# RideGeneva 🚗

Premium private chauffeur service website for Geneva, Switzerland.

**Live:** [ridegeneva.com](https://ridegeneva.com)

## Stack

- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS + custom CSS variables
- **Animations:** Framer Motion
- **Theme:** next-themes (dark / light)
- **Deploy:** Vercel via GitHub

## Design

Liquid glass Apple aesthetic — `backdrop-filter: blur` + CSS variables for instant dark/light mode switching. Gold accent `#B8963E` / `#D4AF70`.

## Features

- 🌐 5 languages: FR · EN · DE · IT · Romansh
- 🚗 Fleet section (Kia Niro, Mercedes C & V) with pricing
- 🛎️ 6 service cards
- 🧮 Interactive fare calculator (preset routes + km slider)
- ☀️🌙 Dark / light mode
- 📱 Fully responsive

## Project structure

```
app/
  layout.tsx         # Root layout (ThemeProvider + LangProvider)
  page.tsx           # Homepage — assembles all sections
  globals.css        # CSS variables, glass utilities, base styles

components/
  layout/
    Navbar.tsx       # Fixed glass navbar
    Footer.tsx
  sections/
    Hero.tsx
    Fleet.tsx
    Services.tsx
    Calculator.tsx   # Interactive fare calculator
    Contact.tsx
  ui/
    GlassCard.tsx    # Reusable glass card wrapper
    CarSVG.tsx       # Top-down SVG car illustrations
    SectionHeader.tsx

context/
  LangContext.tsx    # Language context + useLang() hook

lib/
  i18n.ts            # All translations (FR/EN/DE/IT/RM)
  data.ts            # Cars, services, routes, contact data
```

## Getting started

```bash
git clone https://github.com/YOUR_USERNAME/ridegeneva.git
cd ridegeneva
npm install
cp .env.example .env.local
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

## Deploy on Vercel

1. Push to GitHub
2. Import the repo on [vercel.com](https://vercel.com)
3. Add environment variables from `.env.example`
4. Connect your domain `ridegeneva.com` in Vercel → Domains

## Roadmap

- [ ] Google Maps integration in Calculator
- [ ] Service detail pages (`/services/[slug]`)
- [ ] Contact / booking form with email (Resend)
- [ ] SEO: sitemap, structured data (LocalBusiness)
- [ ] Blog / news section
