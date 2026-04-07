import React from 'react';
import { Wifi, Tv, Flame, Coffee, Mountain, Bath } from 'lucide-react';
import { Link } from 'react-router-dom';

const CABIN_DATA = [
  {
    id: 1,
    name: "Cabaña Araucaria",
    type: "PREMIUM",
    capacity: "HSTA 6 PAX",
    description: "Nuestra cabaña más exclusiva, con amplios ventanales orientados al lago y terminaciones de lujo. Un refugio sofisticado en la inmensidad patagónica.",
    image: "/images/image01.png",
    price: "$150.000 / noche",
    services: [
      { icon: <Wifi size={18} />, label: "Wi-Fi Alta Velocidad" },
      { icon: <Flame size={18} />, label: "Hogar a Leña" },
      { icon: <Mountain size={18} />, label: "Vista Panorámica" },
      { icon: <Coffee size={18} />, label: "Desayuno Incluido" }
    ]
  },
  {
    id: 2,
    name: "Cabaña Lenga",
    type: "FAMILIAR",
    capacity: "HASTA 5 PAX",
    description: "Diseñada para familias, cuenta con dos plantas, cocina completa y un deck exterior con parrilla para atardeceres memorables.",
    image: "/images/image02.png",
    price: "$120.000 / noche",
    services: [
      { icon: <Wifi size={18} />, label: "Wi-Fi" },
      { icon: <Tv size={18} />, label: "Smart TV 55\"" },
      { icon: <Bath size={18} />, label: "Bañera c/Hidro" },
      { icon: <Flame size={18} />, label: "Cale. Central" }
    ]
  },
  {
    id: 3,
    name: "Cabaña Ñire",
    type: "PAREJAS",
    capacity: "HASTA 2 PAX",
    description: "Un espacio íntimo y acogedor, perfecto para escapadas románticas. Disfruta del silencio del bosque patagónico desde tu jacuzzi privado.",
    image: "/images/image03.png",
    price: "$90.000 / noche",
    services: [
      { icon: <Mountain size={18} />, label: "Bosque Privado" },
      { icon: <Bath size={18} />, label: "Jacuzzi Doble" },
      { icon: <Flame size={18} />, label: "Salamandra" },
      { icon: <Wifi size={18} />, label: "Wi-Fi" }
    ]
  },
  {
    id: 4,
    name: "Cabaña Coihue",
    type: "ESTÁNDAR",
    capacity: "HASTA 4 PAX",
    description: "Comodidad clásica con todas las facilidades necesarias para disfrutar de tu estadía sin preocupaciones, rodeado de calma.",
    image: "/images/image04.png",
    price: "$100.000 / noche",
    services: [
      { icon: <Coffee size={18} />, label: "Cocina Equipada" },
      { icon: <Tv size={18} />, label: "DirectTV" },
      { icon: <Wifi size={18} />, label: "Wi-Fi" },
      { icon: <Flame size={18} />, label: "Losa Radiante" }
    ]
  }
];

export default function Cabanas() {
  return (
    <div className="page-wrapper animate-fade-in apres-ski-dark">
      <div className="page-header">
        <div className="overlay-gradient-dark"></div>
        <img src="/images/image02.png" alt="Nuestras cabañas" className="header-bg" />
        <div className="container relative z-10 header-content text-center">
          <h1 className="text-h1 page-title">Habitaciones</h1>
        </div>
      </div>

      <section className="cabanas-section section-padding">
        <div className="container max-w-1000">
          <div className="text-center mb-16">
            <p className="text-lead text-muted max-w-2xl mx-auto">
              Exclusivas opciones de alojamiento diseñadas con elegancia y confort para que vivas
              la Patagonia en su máxima expresión.
            </p>
          </div>

          <div className="cabins-list">
            {CABIN_DATA.map((cabin) => (
              <div key={cabin.id} className="cabin-row">
                <div className="cabin-img-col">
                  <div className="img-frame">
                    <img src={cabin.image} alt={cabin.name} className="cabin-img" />
                  </div>
                </div>
                <div className="cabin-info-col">
                  <h4 className="luxury-type">{cabin.type} / {cabin.capacity}</h4>
                  <h2 className="luxury-name">{cabin.name}</h2>

                  <p className="luxury-desc">{cabin.description}</p>

                  <div className="luxury-services">
                    {cabin.services.map((service, idx) => (
                      <div key={idx} className="luxury-service-item">
                        <span className="srv-icon">{service.icon}</span>
                        <span className="srv-label">{service.label}</span>
                      </div>
                    ))}
                  </div>

                  <div className="luxury-action">
                    <div className="price-tag">{cabin.price}</div>
                    <Link to="/reservas" className="btn btn-outline reserve-btn">Consultar</Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <style>{`
        .apres-ski-dark {
          background-color: var(--color-bg-light);
          color: var(--text-primary);
          min-height: 100vh;
        }
        .page-header {
          position: relative;
          height: 60vh;
          min-height: 500px;
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
        }
        .header-bg {
          position: absolute;
          top: 0; left: 0; width: 100%; height: 100%;
          object-fit: cover;
          z-index: 0;
          filter: brightness(0.6);
        }
        .overlay-gradient-dark {
          position: absolute;
          top: 0; left: 0; width: 100%; height: 100%;
          background: linear-gradient(to bottom, rgba(10,10,10,0.3) 0%, rgba(10,10,10,0.7) 100%);
          z-index: 1;
        }
        .page-title {
          color: white;
          letter-spacing: 0.05em;
          text-transform: uppercase;
          text-shadow: 0 4px 15px rgba(0,0,0,0.6);
        }
        .z-10 { z-index: 10; }
        .relative { position: relative; }
        .text-center { text-align: center; }
        .mx-auto { margin-left: auto; margin-right: auto; }
        .mb-16 { margin-bottom: 4rem; }
        .max-w-1000 { max-width: 1000px; }
        .max-w-2xl { max-width: 42rem; }
        .text-muted { color: var(--text-muted); }

        .cabins-list {
          display: flex;
          flex-direction: column;
          gap: 6rem;
        }

        .cabin-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 4rem;
          align-items: center;
        }
        /* Alternate row styling */
        .cabin-row:nth-child(even) .cabin-img-col {
          order: 2;
        }
        .cabin-row:nth-child(even) .cabin-info-col {
          order: 1;
        }

        .img-frame {
          position: relative;
          display: inline-block;
          width: 100%;
        }
        /* Thin gold border offset for luxury feel */
        .img-frame::after {
          content: '';
          position: absolute;
          top: -15px; left: -15px;
          width: 100%; height: 100%;
          border: 1px solid rgba(200, 163, 89, 0.4);
          z-index: 0;
          pointer-events: none;
        }
        .cabin-row:nth-child(even) .img-frame::after {
          left: 15px;
        }
        
        .cabin-img {
          width: 100%;
          height: 450px;
          object-fit: cover;
          position: relative;
          z-index: 1;
          background: #000;
        }

        .cabin-info-col {
          display: flex;
          flex-direction: column;
        }
        
        .luxury-type {
          font-family: var(--font-body);
          color: var(--color-secondary);
          font-size: 0.75rem;
          letter-spacing: 0.2em;
          margin-bottom: 0.5rem;
        }
        
        .luxury-name {
          font-family: var(--font-heading);
          color: var(--text-primary);
          font-size: 2.5rem;
          margin-bottom: 1.5rem;
        }

        .luxury-desc {
          color: var(--text-muted);
          line-height: 1.8;
          font-weight: 300;
          margin-bottom: 2.5rem;
        }

        .luxury-services {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1.25rem;
          margin-bottom: 3rem;
          border-top: 1px solid rgba(0,0,0,0.05);
          border-bottom: 1px solid rgba(0,0,0,0.05);
          padding: 1.5rem 0;
        }
        
        .luxury-service-item {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          color: var(--text-light);
          font-size: 0.85rem;
          font-weight: 300;
        }
        .srv-icon {
          color: var(--color-secondary);
        }

        .luxury-action {
          display: flex;
          align-items: center;
          justify-content: space-between;
        }
        
        .price-tag {
          font-family: var(--font-heading);
          font-size: 1.25rem;
          color: var(--text-primary);
        }

        .reserve-btn {
          letter-spacing: 0.15em;
          padding: 0.75rem 2.5rem;
        }

        @media (max-width: 992px) {
          .cabin-row {
            grid-template-columns: 1fr;
            gap: 2rem;
          }
          .cabin-row:nth-child(even) .cabin-img-col,
          .cabin-row:nth-child(even) .cabin-info-col {
            order: unset; /* reset order on mobile */
          }
          .img-frame::after { display: none; }
          .cabin-img { height: 350px; }
          .luxury-services { grid-template-columns: 1fr; }
          .luxury-action { flex-direction: column; align-items: flex-start; gap: 1.5rem; }
          .reserve-btn { width: 100%; text-align: center; }
        }
        @media (max-width: 576px) {
          .luxury-name { font-size: 2rem; }
          .page-header { min-height: 350px; height: 40vh; }
          .cabin-img { height: 250px; }
          .luxury-services { gap: 1rem; padding: 1rem 0; }
        }
      `}</style>
    </div>
  );
}
