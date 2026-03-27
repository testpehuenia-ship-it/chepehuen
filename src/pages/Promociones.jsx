import React from 'react';
import { Tag, CalendarCheck } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Promociones() {
    const promos = [
        {
            id: 1,
            title: "Reserva Anticipada Invierno 2026",
            discount: "20% OFF",
            bgImage: "/images/image02.png",
            description: "Asegura tus vacaciones de nieve congelando precios y obteniendo un descuento especial.",
            validity: "Válido para reservas abonadas antes del 30 de Mayo."
        },
        {
            id: 2,
            title: "Escapada Romántica (3 Noches)",
            discount: "Noche de Regalo",
            bgImage: "/images/image03.png",
            description: "Reserva tres noches en nuestra cabaña Ñire (parejas) y abona solo dos. Incluye late check-out y desayuno especial.",
            validity: "Válido para temporada baja y media (excluye feriados largos)."
        }
    ];

    return (
        <div className="page-wrapper animate-fade-in pb-20">
            <div className="section-padding pt-32 container">
                <div className="text-center mb-16">
                    <h1 className="text-h1 text-primary">Promociones Exclusivas</h1>
                    <p className="text-lead mt-4 max-w-2xl mx-auto">
                        Aprovecha nuestros beneficios de temporada para planificar tu próxima visita a Villa Pehuenia al mejor precio.
                    </p>
                </div>

                <div className="promos-grid">
                    {promos.map((promo) => (
                        <div key={promo.id} className="promo-card card glass">
                            <div className="promo-img-wrapper">
                                <div className="overlay-gradient"></div>
                                <img src={promo.bgImage} alt={promo.title} className="promo-img" />
                                <div className="promo-badge">
                                    <Tag size={18} />
                                    <span>{promo.discount}</span>
                                </div>
                            </div>
                            <div className="promo-content">
                                <h3 className="text-h3 text-primary mb-3">{promo.title}</h3>
                                <p className="text-secondary-color mb-6">{promo.description}</p>
                                <div className="validity glass-dark text-white">
                                    <CalendarCheck size={18} className="text-secondary" />
                                    <span className="text-sm">{promo.validity}</span>
                                </div>
                                <Link to="/reservas" className="btn btn-outline text-primary mt-8 w-full border-primary hover-bg-primary">
                                    Consultar Disponibilidad
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <style>{`
        .page-wrapper { min-height: 100vh; background: var(--color-bg-light); }
        .pt-32 { padding-top: 8rem; }
        .pb-20 { padding-bottom: 5rem; }
        .text-center { text-align: center; }
        .text-primary { color: var(--color-primary); }
        .mb-16 { margin-bottom: 4rem; }
        .mb-3 { margin-bottom: 0.75rem; }
        .mb-6 { margin-bottom: 1.5rem; }
        .mt-4 { margin-top: 1rem; }
        .mt-8 { margin-top: 2rem; }
        .max-w-2xl { max-width: 42rem; }
        .mx-auto { margin-left: auto; margin-right: auto; }
        .w-full { width: 100%; text-align: center; }
        .border-primary { border-color: var(--color-primary); color: var(--color-primary); }
        .hover-bg-primary:hover { background: var(--color-primary); color: white; }

        .promos-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(450px, 1fr));
          gap: 3rem;
          max-width: 1100px;
          margin: 0 auto;
        }

        .promo-card {
          flex-direction: column;
          display: flex;
        }

        .promo-img-wrapper {
          position: relative;
          height: 280px;
          overflow: hidden;
        }

        .promo-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.8s ease;
        }

        .promo-card:hover .promo-img {
          transform: scale(1.05);
        }

        .promo-badge {
          position: absolute;
          top: 1.5rem;
          left: 1.5rem;
          background: var(--color-accent);
          color: white;
          padding: 0.5rem 1rem;
          border-radius: 50px;
          font-weight: 700;
          z-index: 10;
          display: flex;
          align-items: center;
          gap: 0.5rem;
          box-shadow: 0 4px 15px rgba(232, 106, 51, 0.4);
        }

        .promo-content {
          padding: 2.5rem;
          flex-grow: 1;
          display: flex;
          flex-direction: column;
        }

        .text-secondary-color { color: var(--text-secondary); line-height: 1.6; }

        .validity {
          display: flex;
          align-items: center;
          gap: 1rem;
          padding: 1rem;
          border-radius: 12px;
          margin-top: auto;
        }
        .text-sm { font-size: 0.875rem; }
        .text-secondary { color: var(--color-secondary); }

        @media (max-width: 768px) {
          .promos-grid { grid-template-columns: 1fr; }
        }
      `}</style>
        </div>
    );
}
