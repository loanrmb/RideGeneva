'use client'

import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { MAPBOX_CENTER, MAPBOX_STYLE } from '@/lib/data'

const TOKEN = process.env.NEXT_PUBLIC_MAPBOX_TOKEN ?? ''
const BASE_CHF = 8
const PER_KM   = 3.2

interface Suggestion { place_name: string; center: [number, number] }

export default function Estimateur() {
  const mapRef    = useRef<HTMLDivElement>(null)
  const mapboxRef = useRef<any>(null)

  const [departVal,     setDepartVal]     = useState('')
  const [arriveeVal,    setArriveeVal]    = useState('')
  const [departSugg,    setDepartSugg]    = useState<Suggestion[]>([])
  const [arriveeSugg,   setArriveeSugg]   = useState<Suggestion[]>([])
  const [departCoords,  setDepartCoords]  = useState<[number,number]|null>(null)
  const [arriveeCoords, setArriveeCoords] = useState<[number,number]|null>(null)
  const [result,  setResult]  = useState<{ price: string; detail: string; from: string; to: string }|null>(null)
  const [loading, setLoading] = useState(false)

  // Init Mapbox — client-side only
  useEffect(() => {
    if (!TOKEN || !mapRef.current) return
    let map: any
    const load = async () => {
      const mapboxgl = (await import('mapbox-gl')).default
      mapboxgl.accessToken = TOKEN
      map = new mapboxgl.Map({
        container: mapRef.current!,
        style:     MAPBOX_STYLE,
        center:    MAPBOX_CENTER,
        zoom:      12,
        scrollZoom: false,
      })
      map.addControl(new mapboxgl.NavigationControl({ showCompass: false }), 'top-right')
      mapboxRef.current = map
    }
    load()
    return () => { map?.remove() }
  }, [])

  const fetchSugg = async (q: string): Promise<Suggestion[]> => {
    if (!TOKEN || q.length < 3) return []
    const url =
      `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(q)}.json` +
      `?access_token=${TOKEN}&country=ch,fr&proximity=${MAPBOX_CENTER[0]},${MAPBOX_CENTER[1]}&language=fr&limit=6`
    const res  = await fetch(url)
    const data = await res.json()
    return (data.features ?? []).map((f: any) => ({ place_name: f.place_name, center: f.center }))
  }

  const calculate = async () => {
    if (!departCoords || !arriveeCoords || !TOKEN) return
    setLoading(true)
    try {
      const url =
        `https://api.mapbox.com/directions/v5/mapbox/driving/` +
        `${departCoords[0]},${departCoords[1]};${arriveeCoords[0]},${arriveeCoords[1]}` +
        `?geometries=geojson&access_token=${TOKEN}`
      const data  = await (await fetch(url)).json()
      const route = data.routes[0]
      const distKm = (route.distance / 1000).toFixed(1)
      const durMin = Math.round(route.duration / 60)
      const prix   = Math.round(BASE_CHF + parseFloat(distKm) * PER_KM)

      setResult({ price: `CHF ${prix}`, detail: `${distKm} km · ${durMin} min`, from: departVal, to: arriveeVal })

      const map = mapboxRef.current
      if (map) {
        const draw = async () => {
          const mapboxgl = (await import('mapbox-gl')).default
          if (map.getSource('route')) {
            map.getSource('route').setData({ type: 'Feature', geometry: route.geometry })
          } else {
            map.addSource('route', { type: 'geojson', data: { type: 'Feature', geometry: route.geometry } })
            map.addLayer({ id: 'route', type: 'line', source: 'route', layout: { 'line-join': 'round', 'line-cap': 'round' }, paint: { 'line-color': '#fff', 'line-width': 3, 'line-opacity': 0.9 } })
          }
          const bounds = new mapboxgl.LngLatBounds()
          route.geometry.coordinates.forEach((c: any) => bounds.extend(c))
          map.fitBounds(bounds, { padding: { top: 60, bottom: 60, left: 60, right: 60 }, maxZoom: 15 })
        }
        if (map.loaded()) draw(); else map.on('load', draw)
      }
    } finally {
      setLoading(false)
    }
  }

  return (
    <section id="estimateur" style={{ background: '#000', padding: '80px 24px', fontFamily: 'var(--font)' }}>
      <div style={{ maxWidth: 1100, margin: '0 auto' }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.6 }}
          style={{ marginBottom: 48 }}
        >
          <span className="section-label">Tarification transparente</span>
          <h2 className="section-title">Estimez votre trajet.</h2>
          <p className="section-sub">Saisissez votre départ et destination — votre tarif s'affiche instantanément.</p>
        </motion.div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 32, alignItems: 'start' }} className="est-grid">
          <div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
              <AutoField
                label="Adresse de départ"
                value={departVal}
                placeholder="Ex: Gare de Cornavin, Genève"
                suggestions={departSugg}
                onChange={async v => { setDepartVal(v); setDepartCoords(null); setDepartSugg(await fetchSugg(v)) }}
                onSelect={s => { setDepartVal(s.place_name); setDepartCoords(s.center); setDepartSugg([]) }}
                onBlur={() => setTimeout(() => setDepartSugg([]), 200)}
              />
              <AutoField
                label="Adresse d'arrivée"
                value={arriveeVal}
                placeholder="Ex: Aéroport de Genève-Cointrin"
                suggestions={arriveeSugg}
                onChange={async v => { setArriveeVal(v); setArriveeCoords(null); setArriveeSugg(await fetchSugg(v)) }}
                onSelect={s => { setArriveeVal(s.place_name); setArriveeCoords(s.center); setArriveeSugg([]) }}
                onBlur={() => setTimeout(() => setArriveeSugg([]), 200)}
              />
              <button
                onClick={calculate}
                disabled={!(departCoords && arriveeCoords) || loading}
                className="btn-primary"
                style={{ width: '100%', justifyContent: 'center', marginTop: 8 }}
              >
                {loading ? 'Calcul en cours…' : 'Calculer mon tarif →'}
              </button>
            </div>

            {result && (
              <motion.div
                initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }}
                style={{ background: '#0d0d0d', border: '1px solid #1a1a1a', borderRadius: 16, padding: 32, marginTop: 16 }}
              >
                <p style={{ fontSize: '0.72rem', fontWeight: 600, letterSpacing: '0.14em', textTransform: 'uppercase', color: '#555', marginBottom: 8 }}>Prix estimé</p>
                <div style={{ fontSize: '3.5rem', fontWeight: 800, letterSpacing: '-0.04em', color: '#fff', lineHeight: 1, marginBottom: 4 }}>{result.price}</div>
                <p style={{ color: '#555', fontSize: '0.82rem', marginBottom: 24 }}>{result.detail}</p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 6, padding: 16, background: '#111', borderRadius: 10, marginBottom: 16 }}>
                  <span style={{ color: '#888', fontSize: '0.82rem' }}>🟢 {result.from}</span>
                  <span style={{ color: '#888', fontSize: '0.82rem' }}>🔴 {result.to}</span>
                </div>
                <a
                  href="tel:+41791234567"
                  style={{ display: 'block', textAlign: 'center', padding: 14, background: '#fff', color: '#000', fontSize: '0.82rem', fontWeight: 700, letterSpacing: '0.06em', textTransform: 'uppercase', borderRadius: 980 }}
                >
                  Réserver ce trajet →
                </a>
              </motion.div>
            )}

            {!TOKEN && (
              <div style={{ marginTop: 12, padding: '12px 16px', background: '#0d0d0d', border: '1px solid #1a1a1a', borderRadius: 10, color: '#555', fontSize: '0.75rem', lineHeight: 1.5 }}>
                ⚙️ Ajoutez <code style={{ background: '#111', padding: '2px 6px', borderRadius: 4, color: '#888' }}>NEXT_PUBLIC_MAPBOX_TOKEN=pk.ey...</code> dans Vercel → Environment Variables.
              </div>
            )}
          </div>

          <div style={{ borderRadius: 16, overflow: 'hidden', height: 480, background: '#0d0d0d', border: '1px solid #1a1a1a', position: 'relative' }}>
            <div ref={mapRef} style={{ width: '100%', height: '100%' }} />
            {!result && (
              <div style={{ position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 12, color: '#333', fontSize: '0.85rem', pointerEvents: 'none' }}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" style={{ width: 48, height: 48, opacity: 0.3 }}>
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                </svg>
                Saisissez vos adresses pour afficher l'itinéraire
              </div>
            )}
          </div>
        </div>
      </div>
      <style>{`@media (max-width: 860px) { .est-grid { grid-template-columns: 1fr !important; } }`}</style>
    </section>
  )
}

function AutoField({ label, value, placeholder, suggestions, onChange, onSelect, onBlur }: {
  label: string; value: string; placeholder: string; suggestions: Suggestion[]
  onChange: (v: string) => void; onSelect: (s: Suggestion) => void; onBlur: () => void
}) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 8, position: 'relative' }}>
      <label style={{ color: '#888', fontSize: '0.72rem', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase' }}>{label}</label>
      <input
        type="text" value={value} placeholder={placeholder} autoComplete="off"
        onChange={e => onChange(e.target.value)} onBlur={onBlur}
        style={{ background: '#0a0a0a', border: '1.5px solid #1a1a1a', borderRadius: 10, color: '#fff', fontSize: '0.9rem', fontFamily: 'var(--font)', padding: '14px 16px', width: '100%', outline: 'none', transition: 'border-color 0.2s' }}
        onFocus={e => (e.target.style.borderColor = '#fff')}
      />
      {suggestions.length > 0 && (
        <div className="est-suggestions active">
          {suggestions.map((s, i) => (
            <div key={i} className="est-sugg-item" onMouseDown={() => onSelect(s)}>{s.place_name}</div>
          ))}
        </div>
      )}
    </div>
  )
}
