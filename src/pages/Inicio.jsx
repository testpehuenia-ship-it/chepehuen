import React from 'react';
import { Link } from 'react-router-dom';
import HeroVideo from '../components/Layout/HeroVideo';

export default function Inicio() {
  return (
    <div className="apres-ski-theme">
      <HeroVideo />

      <section className="feature-section">
        <div className="container">
          <div className="text-center animate-slide-up offset-text">
            <h2 className="text-h2 section-title">Tu Refugio en la Cordillera</h2>
            <p className="text-lead section-desc mx-auto">
              Experimenta el encanto de la Patagonia en un entorno de confort absoluto.
              Cabañas Chepehuen te invita a despertar entre araucarias milenarias y vistas espectaculares.
            </p>
          </div>

          <div className="cabin-highlights grid-3 mt-12">
            <div className="card highlight-card">
              <div className="card-img-wrapper">
                <img src="/images/image01.webp" alt="Cabañas Exclusivas" loading="lazy" className="card-img" />
              </div>
              <div className="card-body">
                <h3>Cabañas Exclusivas</h3>
                <p>Equipamiento premium, vistas panorámicas y diseño patagónico con lujo en cada detalle.</p>
                <Link to="/cabanas" className="action-link">Conocer Cabañas</Link>
              </div>
            </div>
            <div className="card highlight-card">
              <div className="card-img-wrapper">
                <img src="/images/image04.webp" alt="Paisaje" loading="lazy" className="card-img" />
              </div>
              <div className="card-body">
                <h3>Vistas Incomparables</h3>
                <p>El bosque y el lago a tus pies. Desconecta de la rutina en un entorno privilegiado.</p>
                <Link to="/informacion" className="action-link">Descubrir Destino</Link>
              </div>
            </div>
            <div className="card highlight-promo">
              <div className="promo-content">
                <h3 className="promo-title">Vive la<br />Temporada</h3>
                <p className="promo-desc">
                  Reserva anticipada con beneficios exclusivos. Tu próxima aventura empieza aquí.
                </p>
                <Link to="/reservas" className="btn btn-outline reserve-btn">Reservar ahora</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Nueva Sección: Información de Destino */}
      <section className="info-dest-section">
        <div className="container info-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'center' }}>
          <div className="info-img-wrapper animate-slide-up">
            <img src="/images/image02.webp" alt="Villa Pehuenia" loading="lazy" className="info-img" />
          </div>
          <div className="info-text animate-slide-up delay-100">
            <h4 className="luxury-subtitle">EL DESTINO</h4>
            <h2 className="text-h2 section-title">Descubre Villa Pehuenia</h2>
            <p className="section-desc mb-6" style={{ marginBottom: '2rem' }}>
              Un paraíso escondido en el corazón de la Patagonia Argentina. Rodeado de lagos cristalinos (Aluminé y Moquehue) y bosques nativos de majestuosas araucarias.
            </p>
            <div className="services-list mt-6">
              <div className="srv-item">
                <span className="srv-bullet"></span>Gastronomía Patagónica de Autor
              </div>
              <div className="srv-item">
                <span className="srv-bullet"></span>Deportes Invernales (Parque de Nieve Batea Mahuida)
              </div>
              <div className="srv-item">
                <span className="srv-bullet"></span>Trekking, Pesca y Navegación
              </div>
              <div className="srv-item">
                <span className="srv-bullet"></span>Servicios esenciales (Supermercados, Centro de Salud)
              </div>
            </div>
            <Link to="/informacion" className="action-link mt-8" style={{ marginTop: '2.5rem' }}>Ver Guía Completa</Link>
          </div>
        </div>
      </section>

      {/* Nueva Sección: Galería */}
      <section className="gallery-section">
        <div className="container">
          <div className="text-center mb-12 animate-slide-up">
            <h4 className="luxury-subtitle" style={{ justifyContent: 'center' }}>IMÁGENES</h4>
            <h2 className="text-h2 section-title">Nuestra Galería</h2>
          </div>
          <div className="gallery-grid animate-slide-up delay-100">
            <img src="/images/image01.webp" alt="Galería" loading="lazy" className="gal-img img-large" />
            <img src="/images/image02.webp" alt="Galería" loading="lazy" className="gal-img img-portrait" />
            <img src="/images/image03.webp" alt="Galería" loading="lazy" className="gal-img" />
            <img src="/images/image04.webp" alt="Galería" loading="lazy" className="gal-img" />
          </div>
        </div>
      </section>

      <style>{`
        .apres-ski-theme {
          background-color: var(--color-bg-dark);
          color: var(--text-light);
        }
        .feature-section {
          padding-top: 5rem;
          padding-bottom: 8rem;
          background-color: var(--color-bg-dark);
        }
        .offset-text {
          margin-top: 3rem; 
        }
        .text-center { text-align: center; }
        .mx-auto { margin-left: auto; margin-right: auto; }
        .mt-12 { margin-top: 5rem; }
        
        .section-title {
          color: white;
          margin-bottom: 1.5rem;
          letter-spacing: 0.05em;
        }
        .section-desc {
          max-width: 800px;
          color: var(--text-muted);
          line-height: 1.8;
          text-transform: none; /* override lead uppercase here */
          font-weight: 400;
        }
        
        .grid-3 {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 2rem;
        }
        
        .highlight-card {
          background: transparent;
          box-shadow: none;
          display: flex;
          flex-direction: column;
        }
        .highlight-card:hover { box-shadow: none; }
        .highlight-card:hover .card-img { transform: scale(1.05); }

        .card-img-wrapper {
          overflow: hidden;
          background: #000;
        }
        .card-img {
          width: 100%;
          height: 380px;
          object-fit: cover;
          transition: transform var(--transition-smooth);
          opacity: 0.9;
        }
        
        .card-body {
          padding: 2.5rem 0;
          flex-grow: 1;
        }
        .card-body h3 {
          color: var(--color-secondary);
          margin-bottom: 1rem;
          font-size: 1.2rem;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          font-family: var(--font-body);
        }
        .card-body p {
          color: var(--text-muted);
          line-height: 1.7;
          margin-bottom: 1.5rem;
          font-weight: 300;
        }
        
        .action-link {
          color: white;
          text-decoration: none;
          text-transform: uppercase;
          letter-spacing: 0.15em;
          font-size: 0.75rem;
          font-weight: 500;
          display: inline-flex;
          align-items: center;
          border-bottom: 1px solid var(--color-secondary);
          padding-bottom: 4px;
          transition: var(--transition-fast);
        }
        .action-link:hover {
          color: var(--color-secondary);
        }

        .highlight-promo {
          display: flex;
          align-items: center;
          justify-content: center;
          background: var(--color-surface-dark);
          position: relative;
          overflow: hidden;
          padding: 3rem;
          text-align: center;
        }
        .highlight-promo::before {
          content: '';
          position: absolute;
          top: 1rem; left: 1rem; right: 1rem; bottom: 1rem;
          border: 1px solid rgba(200, 163, 89, 0.3); /* Subtle gold border */
          pointer-events: none;
        }
        .promo-content {
          position: relative;
          z-index: 10;
        }
        .promo-title {
          font-size: 2.5rem;
          color: white;
          margin-bottom: 1rem;
        }
        .promo-desc {
          color: var(--text-muted);
          margin-bottom: 3rem;
          line-height: 1.8;
          font-weight: 300;
        }
        .reserve-btn {
          padding: 1rem 2.5rem;
          letter-spacing: 0.2em;
          border-color: var(--color-secondary);
          color: var(--color-secondary);
        }
        .reserve-btn:hover {
          background: var(--color-secondary);
          color: white;
        }

        @media (max-width: 992px) {
          .feature-section { padding-top: 3rem; }
          .offset-text { margin-top: 0; }
          .info-dest-section .info-grid { grid-template-columns: 1fr !important; }
        }
        @media (max-width: 576px) {
          .promo-title { font-size: 2rem; }
          .promo-content { padding: 1.5rem; }
          .highlight-promo { padding: 1.5rem; }
          .card-img { height: 280px; }
        }

        /* Info Section Styles */
        .info-dest-section {
          padding: 8rem 0;
          background: var(--color-surface-dark);
        }
        .luxury-subtitle {
          font-family: var(--font-body);
          color: var(--color-secondary);
          font-size: 0.75rem;
          letter-spacing: 0.25em;
          margin-bottom: 1rem;
          display: flex;
          align-items: center;
          gap: 1rem;
        }
        .luxury-subtitle::before {
          content: '';
          width: 40px;
          height: 1px;
          background: var(--color-secondary);
        }
        .info-img-wrapper {
          position: relative;
        }
        .info-img-wrapper::after {
          content: '';
          position: absolute;
          top: -20px; left: -20px;
          width: 100%; height: 100%;
          border: 1px solid rgba(200, 163, 89, 0.4);
          z-index: 0;
          pointer-events: none;
        }
        .info-img {
          width: 100%;
          height: 500px;
          object-fit: cover;
          position: relative;
          z-index: 1;
        }
        @media (max-width: 576px) {
          .info-img { height: 350px; }
        }
        .services-list {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }
        .srv-item {
          color: var(--text-light);
          font-weight: 300;
          display: flex;
          align-items: center;
          gap: 1rem;
        }
        .srv-bullet {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: var(--color-secondary);
          display: inline-block;
        }

        /* Gallery Styles */
        .gallery-section {
          padding: 8rem 0;
          background-color: var(--color-bg-dark);
        }
        .mb-12 { margin-bottom: 4rem; }
        .gallery-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          grid-auto-rows: 250px;
          gap: 1.5rem;
        }
        .gal-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform var(--transition-smooth);
        }
        .gal-img:hover {
          transform: scale(1.02);
          z-index: 2;
        }
        .img-large {
          grid-column: span 2;
          grid-row: span 2;
        }
        .img-portrait {
          grid-row: span 2;
        }
        @media (max-width: 992px) {
          .gallery-grid { grid-template-columns: repeat(2, 1fr); }
        }
        @media (max-width: 576px) {
          .gallery-grid { grid-template-columns: 1fr; grid-auto-rows: 300px; }
          .img-large, .img-portrait { grid-column: span 1; grid-row: span 1; }
        }
      `}</style>
    </div>
  );
}
