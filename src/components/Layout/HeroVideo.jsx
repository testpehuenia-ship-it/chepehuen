import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Calendar, User, Search } from 'lucide-react';

export default function HeroVideo() {
  const [llegada, setLlegada] = useState('');
  const [salida, setSalida] = useState('');
  const [huespedes, setHuespedes] = useState('2 Personas');

  const handleBuscar = (e) => {
    e.preventDefault();
    if (!llegada || !salida) {
      alert("Por favor, selecciona las fechas de llegada y salida para continuar.");
      return;
    }

    // Format dates to DD/MM/YYYY
    const formLlegada = llegada.split('-').reverse().join('/');
    const formSalida = salida.split('-').reverse().join('/');

    const msg = `¡Hola! Estoy buscando cabaña desde el ${formLlegada} hasta el ${formSalida} para ${huespedes}. ¿Tienen disponibilidad?`;
    const whatsappUrl = `https://wa.me/5492942000000?text=${encodeURIComponent(msg)}`;
    
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="hero-container">
      <div className="hero-section">
        <div className="overlay-gradient"></div>

        {/* Google Drive Background Video */}
        <div className="video-background-container">
          <video
            className="hero-video-element"
            autoPlay
            loop
            muted
            playsInline
          >
            <source src="/videos/hero.mp4" type="video/mp4" />
          </video>
        </div>

        <div className="hero-content container">
          <p className="text-lead animate-slide-up delay-100 hero-subtitle">En cada momento, una experiencia inolvidable</p>
          <h1 className="text-h1 hero-title animate-slide-up">
            Cabañas Boutique<br />en la Patagonia
          </h1>
        </div>
      </div>

      {/* Floating Booking Bar */}
      <div className="booking-bar-wrapper animate-slide-up delay-200">
        <div className="booking-bar glass-dark">
          <div className="booking-field">
            <span className="booking-label">Llegada</span>
            <div className="booking-input-wrap">
              <Calendar size={18} className="booking-icon" />
              <input type="date" className="booking-input" value={llegada} onChange={(e) => setLlegada(e.target.value)} />
            </div>
          </div>
          <div className="booking-field">
            <span className="booking-label">Salida</span>
            <div className="booking-input-wrap">
              <Calendar size={18} className="booking-icon" />
              <input type="date" className="booking-input" value={salida} onChange={(e) => setSalida(e.target.value)} />
            </div>
          </div>
          <div className="booking-field">
            <span className="booking-label">Huéspedes</span>
            <div className="booking-input-wrap">
              <User size={18} className="booking-icon" />
              <select className="booking-input" value={huespedes} onChange={(e) => setHuespedes(e.target.value)}>
                <option>1 Persona</option>
                <option>2 Personas</option>
                <option>3 Personas</option>
                <option>4 Personas</option>
                <option>5+ Personas</option>
              </select>
            </div>
          </div>
          <button onClick={handleBuscar} className="btn btn-primary booking-btn" style={{ border: 'none' }}>
            Buscar
          </button>
        </div>
      </div>

      <style>{`
        .hero-container {
          position: relative;
          background: var(--color-bg-dark);
        }
        .hero-section {
          position: relative;
          height: 100vh;
          min-height: 500px;
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
        }
        .video-background-container {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          z-index: 0;
          pointer-events: none;
          overflow: hidden;
        }
        .hero-video-element {
          width: 100vw;
          height: 100vh;
          object-fit: cover;
          position: absolute;
          top: 0;
          left: 0;
        }
        .hero-content {
          position: relative;
          z-index: 2;
          color: white;
          text-align: center;
          margin-top: -5rem; /* center offset */
        }
        .hero-subtitle {
          color: var(--color-secondary) !important;
          font-weight: 700;
          text-shadow: 0 2px 10px rgba(0,0,0,0.6);
          letter-spacing: 0.15em;
        }
        .hero-title {
          margin-top: 1.5rem;
          text-shadow: 0 4px 20px rgba(0,0,0,0.5);
        }
        
        .booking-bar-wrapper {
          position: relative;
          z-index: 10;
          margin-top: -60px; /* Overlap the video slightly on desktop */
          display: flex;
          justify-content: center;
          padding: 0 1.5rem;
        }

        .booking-bar {
          display: flex;
          align-items: center;
          gap: 2rem;
          padding: 1.5rem 3rem;
          background: rgba(10, 10, 10, 0.85); /* Apres Ski Dark Vibe */
          border-top: 2px solid var(--color-secondary);
          width: 100%;
          max-width: 1200px;
          box-shadow: 0 20px 50px rgba(0,0,0,0.5);
        }

        .booking-field {
          flex: 1;
          display: flex;
          flex-direction: column;
          border-right: 1px solid rgba(255,255,255,0.1);
          padding-right: 2rem;
        }

        .booking-label {
          color: var(--color-secondary);
          font-family: var(--font-body);
          font-size: 0.75rem;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          margin-bottom: 0.5rem;
        }

        .booking-input-wrap {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          color: white;
        }

        .booking-icon {
          color: var(--text-muted);
        }

        .booking-input {
          background: transparent;
          border: none;
          color: white;
          font-family: var(--font-heading);
          font-size: 1.25rem;
          width: 100%;
          outline: none;
          cursor: pointer;
        }
        .booking-input option {
          background: var(--color-bg-dark);
          color: white;
        }
        .booking-input::-webkit-calendar-picker-indicator {
          filter: invert(1);
          opacity: 0.5;
          cursor: pointer;
        }

        .booking-btn {
          flex: 0 0 auto;
          padding: 1.25rem 3rem;
        }

        @media (max-width: 992px) {
          .booking-bar {
            flex-direction: column;
            gap: 1.5rem;
            padding: 2rem;
          }
          .booking-bar-wrapper {
            margin-top: 0; /* Fully below video on mobile */
            padding: 2rem 1.5rem;
            background: var(--color-bg-dark);
          }
          .booking-field {
            width: 100%;
            border-right: none;
            border-bottom: 1px solid rgba(255,255,255,0.1);
            padding-right: 0;
            padding-bottom: 1rem;
          }
          .booking-btn {
            width: 100%;
          }
        }
        @media (max-width: 576px) {
          .hero-section { height: 75vh; } /* Not as overwhelmingly tall on small phones */
          .hero-title { font-size: 2.2rem; margin-top: 1rem; }
          .hero-content { margin-top: -2rem; }
          .booking-bar { padding: 1.5rem; }
          .booking-input { font-size: 1rem; }
        }
      `}</style>
    </div>
  );
}
