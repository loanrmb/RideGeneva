'use client'

import { useEffect, useRef } from 'react'

export default function MapGeneva() {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!ref.current || (ref.current as any)._leaflet_id) return

    // Load Leaflet CSS
    const css = document.createElement('link')
    css.rel = 'stylesheet'
    css.href = 'https://unpkg.com/leaflet@1.9.4/dist/leaflet.css'
    document.head.appendChild(css)

    // Load Leaflet JS
    const script = document.createElement('script')
    script.src = 'https://unpkg.com/leaflet@1.9.4/dist/leaflet.js'
    script.onload = () => {
      const L = (window as any).L
      if (!ref.current || (ref.current as any)._leaflet_id) return

      const map = L.map(ref.current, {
        center: [46.2044, 6.1432],
        zoom: 12,
        zoomControl: false,
        scrollWheelZoom: false,
        attributionControl: false,
      })

      // CartoDB Dark — minimal, Apple Maps-like
      L.tileLayer(
        'https://{s}.basemaps.cartocdn.com/dark_nolabels/{z}/{x}/{y}{r}.png',
        { subdomains: 'abcd', maxZoom: 19 }
      ).addTo(map)

      // Subtle labels layer on top
      L.tileLayer(
        'https://{s}.basemaps.cartocdn.com/dark_only_labels/{z}/{x}/{y}{r}.png',
        { subdomains: 'abcd', maxZoom: 19, opacity: 0.5 }
      ).addTo(map)

      // Genève marker — minimal red dot
      const icon = L.divIcon({
        className: '',
        html: `<div style="width:10px;height:10px;border-radius:50%;background:#D52B1E;box-shadow:0 0 0 3px rgba(213,43,30,0.25);"></div>`,
        iconAnchor: [5, 5],
      })
      L.marker([46.2044, 6.1432], { icon }).addTo(map)

      // Zoom controls — custom position
      L.control.zoom({ position: 'topright' }).addTo(map)
    }
    document.head.appendChild(script)

    return () => { css.remove(); script.remove() }
  }, [])

  return (
    <div
      ref={ref}
      style={{
        width: '100%',
        height: '100%',
        minHeight: 420,
        background: '#111111',
        borderRadius: 4,
      }}
    />
  )
}
