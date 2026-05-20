export default function SeoBlock() {
  return (
    <section
      style={{ background:'var(--bg)', borderTop:'1px solid var(--border)', padding:'80px 0' }}
      aria-label="Informations SEO">
      <div className="wrap">

        <div className="grid gap-12" style={{ gridTemplateColumns:'1fr 1fr' }}>
          <div>
            <span className="label">Chauffeur privé Genève</span>
            <h3 style={{ fontSize:'clamp(22px,2.5vw,32px)', color:'var(--txt)', marginBottom:16 }}>
              Votre partenaire de transport premium à Genève
            </h3>
            <p style={{ fontSize:13, lineHeight:1.8 }}>
              RideGeneva est votre service de chauffeur privé VTC à Genève, disponible 24h/24 et 7j/7.
              Spécialisés dans les transferts aéroport GVA et Euroairport, la mise à disposition
              de chauffeur et les longues distances, nous desservons Genève, Lausanne, Zurich,
              Lyon, Milan et Paris avec une flotte de véhicules premium Mercedes et Kia.
            </p>
          </div>

          <div>
            <span className="label">Mots-clés</span>
            <div style={{ display:'flex', flexWrap:'wrap', gap:6 }}>
              {[
                'Chauffeur privé Genève',
                'VTC Genève',
                'Transfert aéroport GVA',
                'Taxi luxe Genève',
                'Private driver Geneva',
                'Chauffeur Geneva airport',
                'Location avec chauffeur Genève',
                'Navette entreprise Genève',
                'Chauffeur longue distance Suisse',
                'Mercedes chauffeur Genève',
              ].map(kw => (
                <span key={kw} style={{
                  fontSize:10, fontWeight:400, letterSpacing:'0.06em', textTransform:'uppercase',
                  color:'var(--txt-2)', padding:'5px 10px',
                  border:'1px solid var(--border)', borderRadius:3,
                }}>
                  {kw}
                </span>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}
