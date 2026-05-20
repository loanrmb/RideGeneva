// ─── Cars ─────────────────────────────────────────────────────────────────────

export type CarType = 'suv' | 'sedan' | 'van'
export type CarCategory = 'economy' | 'business' | 'firstClass'

export interface Car {
  id: string
  name: string
  type: CarType
  categoryKey: CarCategory
  ratePerKm: number
  minFare: number
  passengers: number
  luggage: number
  accentColor: string
}

export const CARS: Car[] = [
  {
    id: 'niro',
    name: 'Kia Niro',
    type: 'suv',
    categoryKey: 'economy',
    ratePerKm: 2,
    minFare: 15,
    passengers: 4,
    luggage: 3,
    accentColor: '#3a9a6e',
  },
  {
    id: 'c-class',
    name: 'Mercedes C-Class',
    type: 'sedan',
    categoryKey: 'business',
    ratePerKm: 3.5,
    minFare: 20,
    passengers: 3,
    luggage: 2,
    accentColor: '#2a5fa0',
  },
  {
    id: 'v-class',
    name: 'Mercedes V-Class',
    type: 'van',
    categoryKey: 'firstClass',
    ratePerKm: 3.5,
    minFare: 30,
    passengers: 7,
    luggage: 6,
    accentColor: '#5a3a8a',
  },
]

// ─── Routes ───────────────────────────────────────────────────────────────────

export interface Route {
  label: string
  km: number
}

export const ROUTES: Route[] = [
  { label: 'GVA → Centre',   km: 7   },
  { label: 'GVA → Lausanne', km: 62  },
  { label: 'GVA → Berne',    km: 155 },
  { label: 'GVA → Zurich',   km: 290 },
  { label: 'GVA → Lyon',     km: 150 },
  { label: 'GVA → Milan',    km: 220 },
]

// ─── Services ─────────────────────────────────────────────────────────────────

export interface Service {
  id: string
  icon: string
  slug: string
  nameKey: string
  descKey: string
}

export const SERVICES: Service[] = [
  { id: 'airport',      icon: '✈️', slug: 'transfert-aeroport',  nameKey: 'svc_airport',      descKey: 'svc_airport_d'      },
  { id: 'disposal',     icon: '⏱️', slug: 'mise-a-disposition',  nameKey: 'svc_disposal',     descKey: 'svc_disposal_d'     },
  { id: 'longDistance', icon: '🗺️', slug: 'longue-distance',     nameKey: 'svc_longDistance', descKey: 'svc_longDistance_d' },
  { id: 'events',       icon: '🥂', slug: 'evenements',          nameKey: 'svc_events',       descKey: 'svc_events_d'       },
  { id: 'shuttle',      icon: '🔄', slug: 'navette',             nameKey: 'svc_shuttle',      descKey: 'svc_shuttle_d'      },
  { id: 'corporate',    icon: '💼', slug: 'corporate',           nameKey: 'svc_corporate',    descKey: 'svc_corporate_d'    },
]

// ─── Contact ──────────────────────────────────────────────────────────────────

export const PHONE = '+41764550173'
export const PHONE_DISPLAY = '+41 76 455 01 73'
export const WHATSAPP_URL = `https://wa.me/${PHONE}`
