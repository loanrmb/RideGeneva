export type Lang = 'FR' | 'EN' | 'DE' | 'IT' | 'RM'

export const LANGS: Lang[] = ['FR', 'EN', 'DE', 'IT', 'RM']

export const FLAGS: Record<Lang, string> = {
  FR: '🇫🇷', EN: '🇬🇧', DE: '🇩🇪', IT: '🇮🇹', RM: '🇨🇭',
}

export interface Translations {
  nav_fleet: string; nav_services: string; nav_pricing: string; nav_contact: string
  btn_book: string; btn_quote: string; btn_call: string
  hero_line1: string; hero_line2: string; hero_sub: string
  stat_clients: string; stat_vehicles: string; stat_available: string
  fleet_title: string; fleet_sub: string
  cat_economy: string; cat_business: string; cat_firstClass: string
  spec_pax: string; spec_lug: string
  svc_title: string; svc_sub: string
  svc_airport: string; svc_airport_d: string
  svc_disposal: string; svc_disposal_d: string
  svc_longDistance: string; svc_longDistance_d: string
  svc_events: string; svc_events_d: string
  svc_shuttle: string; svc_shuttle_d: string
  svc_corporate: string; svc_corporate_d: string
  calc_title: string; calc_sub: string
  routes_label: string; km_label: string; vehicle_label: string
  price_label: string; min_note: string
  cta_title: string; cta_sub: string; btn_call_now: string
}

export const translations: Record<Lang, Translations> = {
  FR: {
    nav_fleet:'Flotte', nav_services:'Services', nav_pricing:'Tarifs', nav_contact:'Contact',
    btn_book:'Réserver', btn_quote:'Estimer mon tarif', btn_call:'📞 Appeler · +41 76 455 01 73',
    hero_line1:'Votre chauffeur', hero_line2:'privé à Genève',
    hero_sub:"Élégance, ponctualité et confort pour tous vos déplacements en Suisse et au-delà.",
    stat_clients:'Clients', stat_vehicles:'Véhicules', stat_available:'Disponible',
    fleet_title:'Notre Flotte', fleet_sub:'Des véhicules premium pour chaque occasion',
    cat_economy:'Économique', cat_business:'Business', cat_firstClass:'Première Classe',
    spec_pax:'pass.', spec_lug:'bag.',
    svc_title:'Nos Services', svc_sub:'Une gamme complète de prestations sur mesure',
    svc_airport:'Transfert Aéroport', svc_airport_d:'Ponctuel pour tous vos vols GVA & Euroairport',
    svc_disposal:'Mise à Disposition', svc_disposal_d:'Votre chauffeur dédié à la demande',
    svc_longDistance:'Longue Distance', svc_longDistance_d:'Genève → Zurich, Lyon, Paris et plus',
    svc_events:'Événements', svc_events_d:'Mariages, galas, soirées privées',
    svc_shuttle:'Navette', svc_shuttle_d:'Transferts réguliers & abonnements',
    svc_corporate:'Corporate', svc_corporate_d:'Solutions entreprise personnalisées',
    calc_title:'Calculateur de Tarif', calc_sub:'Estimez votre course en quelques secondes',
    routes_label:'Trajets populaires', km_label:'Distance', vehicle_label:'Véhicule',
    price_label:'Prix estimé', min_note:'* Tarif minimum appliqué',
    cta_title:'Prêt à partir ?', cta_sub:'Disponible 24h/24 · 7j/7 · Genève et toute la Suisse',
    btn_call_now:'📞 Appeler maintenant',
  },
  EN: {
    nav_fleet:'Fleet', nav_services:'Services', nav_pricing:'Pricing', nav_contact:'Contact',
    btn_book:'Book Now', btn_quote:'Get a Quote', btn_call:'📞 Call Now · +41 76 455 01 73',
    hero_line1:'Your private', hero_line2:'chauffeur in Geneva',
    hero_sub:'Elegance, punctuality and comfort for all your rides across Switzerland and beyond.',
    stat_clients:'Clients', stat_vehicles:'Vehicles', stat_available:'Available',
    fleet_title:'Our Fleet', fleet_sub:'Premium vehicles for every occasion',
    cat_economy:'Economy', cat_business:'Business', cat_firstClass:'First Class',
    spec_pax:'pax', spec_lug:'bags',
    svc_title:'Our Services', svc_sub:'A complete range of tailored transportation services',
    svc_airport:'Airport Transfer', svc_airport_d:'Punctual for all your GVA & Euroairport flights',
    svc_disposal:'As-Directed', svc_disposal_d:'Your dedicated chauffeur on demand',
    svc_longDistance:'Long Distance', svc_longDistance_d:'Geneva → Zurich, Lyon, Paris and more',
    svc_events:'Events', svc_events_d:'Weddings, galas, private evenings',
    svc_shuttle:'Shuttle', svc_shuttle_d:'Regular transfers & subscriptions',
    svc_corporate:'Corporate', svc_corporate_d:'Custom business travel solutions',
    calc_title:'Fare Calculator', calc_sub:'Get an instant estimate for your ride',
    routes_label:'Popular Routes', km_label:'Distance', vehicle_label:'Vehicle',
    price_label:'Estimated Price', min_note:'* Minimum fare applied',
    cta_title:'Ready to go?', cta_sub:'Available 24/7 · Geneva and all of Switzerland',
    btn_call_now:'📞 Call Now',
  },
  DE: {
    nav_fleet:'Flotte', nav_services:'Dienste', nav_pricing:'Preise', nav_contact:'Kontakt',
    btn_book:'Buchen', btn_quote:'Preis berechnen', btn_call:'📞 Anrufen · +41 76 455 01 73',
    hero_line1:'Ihr Privatfahrer', hero_line2:'in Genf',
    hero_sub:'Eleganz, Pünktlichkeit und Komfort für alle Ihre Fahrten in der Schweiz.',
    stat_clients:'Kunden', stat_vehicles:'Fahrzeuge', stat_available:'Verfügbar',
    fleet_title:'Unsere Flotte', fleet_sub:'Premium-Fahrzeuge für jeden Anlass',
    cat_economy:'Economy', cat_business:'Business', cat_firstClass:'Erste Klasse',
    spec_pax:'Pass.', spec_lug:'Gep.',
    svc_title:'Unsere Dienste', svc_sub:'Umfassendes Angebot maßgeschneiderter Leistungen',
    svc_airport:'Flughafentransfer', svc_airport_d:'Pünktlich für alle GVA Flüge',
    svc_disposal:'Zur Verfügung', svc_disposal_d:'Dedizierter Fahrer auf Abruf',
    svc_longDistance:'Fernstrecke', svc_longDistance_d:'Genf → Zürich, Lyon, Paris und mehr',
    svc_events:'Veranstaltungen', svc_events_d:'Hochzeiten, Galas, private Abende',
    svc_shuttle:'Shuttle', svc_shuttle_d:'Regelmäßige Transfers & Abonnements',
    svc_corporate:'Corporate', svc_corporate_d:'Maßgeschneiderte Businesslösungen',
    calc_title:'Preisrechner', calc_sub:'Sofortige Preisschätzung für Ihre Fahrt',
    routes_label:'Beliebte Strecken', km_label:'Distanz', vehicle_label:'Fahrzeug',
    price_label:'Geschätzter Preis', min_note:'* Mindestpreis angewendet',
    cta_title:'Bereit zur Abfahrt?', cta_sub:'24/7 verfügbar · Genf und gesamte Schweiz',
    btn_call_now:'📞 Jetzt anrufen',
  },
  IT: {
    nav_fleet:'Flotta', nav_services:'Servizi', nav_pricing:'Tariffe', nav_contact:'Contatti',
    btn_book:'Prenota', btn_quote:'Calcola il percorso', btn_call:'📞 Chiama · +41 76 455 01 73',
    hero_line1:'Il tuo autista', hero_line2:'privato a Ginevra',
    hero_sub:'Eleganza, puntualità e comfort per tutti i vostri spostamenti in Svizzera e oltre.',
    stat_clients:'Clienti', stat_vehicles:'Veicoli', stat_available:'Disponibile',
    fleet_title:'La Nostra Flotta', fleet_sub:'Veicoli premium per ogni occasione',
    cat_economy:'Economy', cat_business:'Business', cat_firstClass:'Prima Classe',
    spec_pax:'pass.', spec_lug:'bag.',
    svc_title:'I Nostri Servizi', svc_sub:'Una gamma completa di servizi di trasporto su misura',
    svc_airport:'Transfer Aeroporto', svc_airport_d:'Puntuale per tutti i voli GVA & Euroairport',
    svc_disposal:'A Disposizione', svc_disposal_d:'Il tuo autista dedicato su richiesta',
    svc_longDistance:'Lunga Distanza', svc_longDistance_d:'Ginevra → Zurigo, Lione, Parigi e altro',
    svc_events:'Eventi', svc_events_d:'Matrimoni, gala, serate private',
    svc_shuttle:'Navetta', svc_shuttle_d:'Trasferimenti regolari & abbonamenti',
    svc_corporate:'Corporate', svc_corporate_d:'Soluzioni aziendali personalizzate',
    calc_title:'Calcolatore Tariffa', calc_sub:'Stima il costo del viaggio in pochi secondi',
    routes_label:'Percorsi popolari', km_label:'Distanza', vehicle_label:'Veicolo',
    price_label:'Prezzo stimato', min_note:'* Tariffa minima applicata',
    cta_title:'Pronti a partire?', cta_sub:'Disponibile 24/7 · Ginevra e tutta la Svizzera',
    btn_call_now:'📞 Chiama ora',
  },
  RM: {
    nav_fleet:'Flot', nav_services:'Servetschs', nav_pricing:'Tarifs', nav_contact:'Contact',
    btn_book:'Reservar', btn_quote:'Calcular il viadi', btn_call:'📞 Telefonar · +41 76 455 01 73',
    hero_line1:'Voss schofför', hero_line2:'privat a Genevra',
    hero_sub:'Eleganza, punctualitad e confort per tuts voss viadis en Svizra ed ultra.',
    stat_clients:'Clients', stat_vehicles:'Vehichels', stat_available:'Disponibel',
    fleet_title:'Noss Flot', fleet_sub:'Vehichels premium per mintga occaziun',
    cat_economy:'Economy', cat_business:'Business', cat_firstClass:'Primera Classa',
    spec_pax:'pass.', spec_lug:'bag.',
    svc_title:'Noss Servetschs', svc_sub:'Ina paletta completa da prestaziuns persuenter',
    svc_airport:'Transfer Eroport', svc_airport_d:'Punctual per tuts voss vols GVA',
    svc_disposal:'A disposiziun', svc_disposal_d:'Voss schofför dedicà sin dumonda',
    svc_longDistance:'Distanza Lunga', svc_longDistance_d:'Genevra → Turitg, Liun, Paris',
    svc_events:'Eveniments', svc_events_d:'Nozzas, galas, sairas privas',
    svc_shuttle:'Navetta', svc_shuttle_d:'Transfers regulars & abunaments',
    svc_corporate:'Corporate', svc_corporate_d:'Soluziuns interpresa persuenter',
    calc_title:'Calculatur da Tarifs', calc_sub:'Estime voss cuors instontanamain',
    routes_label:'Viadis populars', km_label:'Distanza', vehicle_label:'Vehichel',
    price_label:'Pretsch estimà', min_note:'* Tarif minimum applitgà',
    cta_title:'Pronts per partir?', cta_sub:'Disponibel 24/7 · Genevra e tutta la Svizra',
    btn_call_now:'📞 Telefonar uss',
  },
}
