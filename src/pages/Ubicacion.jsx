import React from 'react';
import { MapPin, Navigation, Clock } from 'lucide-react';

export default function Ubicacion() {
    return (
        <div className="page-wrapper animate-fade-in pb-20">
            <div className="section-padding pt-32 container">
                <div className="text-center mb-16">
                    <h1 className="text-h1 text-primary">Dónde Estamos</h1>
                    <p className="text-lead mt-4 max-w-2xl mx-auto">
                        Descubre cómo llegar a nuestro oasis de tranquilidad en el corazón de Villa Pehuenia, Neuquén, Argentina.
                    </p>
                </div>

                <div className="location-grid">
                    <div className="map-container card">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d49723.1119565576!2d-71.2185514!3d-38.8872688!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x96152a1ba365f5cf%3A0xc3cfc32454a85fa6!2sVilla%20Pehuenia%2C%20Neuqu%C3%A9n!5e0!3m2!1ses-419!2sar!4v1700000000000"
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            title="Mapa de Villa Pehuenia"
                        ></iframe>
                    </div>

                    <div className="location-info">
                        <div className="info-box card glass">
                            <div className="info-header">
                                <MapPin className="text-secondary" size={24} />
                                <h3 className="text-h3 text-primary">Dirección</h3>
                            </div>
                            <p className="text-secondary-color mt-4">
                                RP11 Mza 40 Lote 2,<br />
                                Centro Cívico, Villa Pehuenia,<br />
                                Provincia de Neuquén, Argentina.
                            </p>
                        </div>

                        <div className="info-box card glass">
                            <div className="info-header">
                                <Navigation className="text-secondary" size={24} />
                                <h3 className="text-h3 text-primary">Cómo Llegar</h3>
                            </div>
                            <p className="text-secondary-color mt-4">
                                <strong>Desde Zapala:</strong> Tomar la RP13, pasar por Primeros Pinos (camino consolidado de ripio).
                                <br /><br />
                                <strong>Desde Aluminé:</strong> Tomar la RP23 bordeando el río Aluminé (asfalto y ripio en excelentes condiciones).
                            </p>
                        </div>

                        <div className="info-box card glass">
                            <div className="info-header">
                                <Clock className="text-secondary" size={24} />
                                <h3 className="text-h3 text-primary">Check-in / Check-out</h3>
                            </div>
                            <div className="schedule-grid mt-4">
                                <div className="schedule-item">
                                    <span className="font-bold text-primary">Check-in:</span>
                                    <span className="text-secondary-color">14:00 hs</span>
                                </div>
                                <div className="schedule-item">
                                    <span className="font-bold text-primary">Check-out:</span>
                                    <span className="text-secondary-color">10:00 hs</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <style>{`
        .page-wrapper { min-height: 100vh; background: var(--color-bg-light); }
        .pt-32 { padding-top: 8rem; }
        .pb-20 { padding-bottom: 5rem; }
        .text-center { text-align: center; }
        .text-primary { color: var(--text-primary); }
        .text-secondary { color: var(--color-secondary); }
        .text-secondary-color { color: var(--text-secondary); line-height: 1.6; }
        .mb-16 { margin-bottom: 4rem; }
        .mt-4 { margin-top: 1rem; }
        .max-w-2xl { max-width: 42rem; }
        .mx-auto { margin-left: auto; margin-right: auto; }
        .font-bold { font-weight: 700; }

        .location-grid {
          display: grid;
          grid-template-columns: 3fr 2fr;
          gap: 2rem;
          max-width: 1200px;
          margin: 0 auto;
        }

        .map-container {
          min-height: 600px;
          padding: 0;
          overflow: hidden;
        }

        .location-info {
          display: flex;
          flex-direction: column;
          gap: 2rem;
        }

        .info-box {
          padding: 2.5rem;
        }

        .info-header {
          display: flex;
          align-items: center;
          gap: 1rem;
        }

        .schedule-grid {
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
        }
        .schedule-item {
          display: flex;
          justify-content: space-between;
          padding-bottom: 0.75rem;
          border-bottom: 1px solid rgba(0,0,0,0.05);
        }
        .schedule-item:last-child {
          border-bottom: none;
          padding-bottom: 0;
        }

        @media (max-width: 992px) {
          .location-grid {
            grid-template-columns: 1fr;
          }
          .map-container {
            min-height: 400px;
          }
        }
      `}</style>
        </div>
    );
}
