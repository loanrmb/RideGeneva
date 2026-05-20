export const SITE = {
  name:      'RideGeneva',
  phone:     '+41 79 123 45 67',
  phoneTel:  '+41791234567',
  whatsapp:  'https://wa.me/41791234567',
  email:     'hello@ridegeneva.ch',
  instagram: 'https://instagram.com/ridegeneva',
}

export const FLEET = [
  {
    id:         'tesla-model3',
    brand:      'Tesla',
    model:      'Model 3 Long Range',
    passengers: 3,
    luggage:    3,
    specs:      ['100% électrique', 'Autopilot', 'Wi-Fi à bord'],
    baseKm:     3.2,
    baseFare:   8,
  },
  {
    id:         'mercedes-e',
    brand:      'Mercedes-Benz',
    model:      'Classe E 300',
    passengers: 4,
    luggage:    4,
    specs:      ['Classe affaires', 'Cuir Nappa', 'Climatisation 4 zones'],
    baseKm:     3.5,
    baseFare:   10,
  },
  {
    id:         'mercedes-van',
    brand:      'Mercedes-Benz',
    model:      'Sprinter VIP',
    passengers: 7,
    luggage:    8,
    specs:      ['Groupes & familles', 'Sièges en cuir', 'Grand coffre'],
    baseKm:     4.2,
    baseFare:   15,
  },
]

export const FIXED_ROUTES = [
  { from: 'Centre-ville Genève', to: 'Aéroport GVA', price: 45, duration: '20–30 min' },
  { from: 'Aéroport GVA',       to: 'Centre-ville Genève', price: 45, duration: '20–30 min' },
  { from: 'Gare Cornavin',      to: 'Aéroport GVA', price: 38, duration: '15–20 min' },
  { from: 'Genève',             to: 'Lausanne', price: 120, duration: '50–60 min' },
  { from: 'Genève',             to: 'Verbier', price: 280, duration: '2h–2h30' },
  { from: 'Genève',             to: 'Annecy', price: 90, duration: '45–55 min' },
]

export const SERVICES = [
  { id: 'airport',  icon: '✈️',  title: 'Transfert aéroport', desc: 'GVA · Suivi des vols · Attente gratuite 30 min' },
  { id: 'station',  icon: '🚉',  title: 'Gare Cornavin',      desc: 'Prise en charge et dépose à toute heure' },
  { id: 'ski',      icon: '🏔️', title: 'Stations de ski',    desc: 'Verbier, Zermatt, Crans-Montana, Gstaad…' },
  { id: 'business', icon: '💼',  title: 'Affaires & séminaires', desc: 'Palexpo, CICG, WEF Davos, hôtels 5★' },
  { id: 'longdist', icon: '🛣️', title: 'Longue distance',    desc: 'Lausanne, Lyon, Annecy, Chamonix, Berne…' },
  { id: 'events',   icon: '🎪',  title: 'Événements & soirées', desc: 'Mariages, concerts, galas, privatisation' },
]

export const HOW_STEPS = [
  {
    number: 1,
    emoji:  '📱',
    title:  'Réservez',
    desc:   'Appelez, WhatsApp ou réservez en ligne. Indiquez votre départ, destination, date et heure. Confirmation immédiate.',
  },
  {
    number: 2,
    emoji:  '🚗',
    title:  'Votre chauffeur arrive',
    desc:   'Un chauffeur professionnel est dépêché. Vous recevez sa position en temps réel par SMS avec son numéro direct.',
  },
  {
    number: 3,
    emoji:  '✅',
    title:  'Arrivez sereinement',
    desc:   'Profitez d\'un trajet confortable. Paiement en espèces, carte ou virement. Reçu électronique automatique.',
  },
]

export const STATS = [
  { emoji: '✈️', value: '1200+',    label: 'Transferts aéroport' },
  { emoji: '⭐', value: '4.9',      label: 'Note Google' },
  { emoji: '⏱️', value: '< 10 min', label: 'Délai ponctualité' },
  { emoji: '🕐', value: '24/7',     label: 'Disponibilité' },
]

// Geneva map center for Mapbox
export const MAPBOX_CENTER: [number, number] = [6.1432, 46.2044]
export const MAPBOX_STYLE = 'mapbox://styles/mapbox/dark-v11'
