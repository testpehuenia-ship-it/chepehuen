import React from 'react';

export default function Informacion() {
    return (
        <div className="page-wrapper animate-fade-in">
            <div className="page-header">
                <div className="overlay-gradient"></div>
                <img src="/images/image01.png" alt="Villa Pehuenia" className="header-bg" />
                <div className="container relative z-10 header-content text-center">
                    <h1 className="text-h1 text-white">Villa Pehuenia</h1>
                    <p className="text-lead text-white opacity-90 mt-4">
                        Un paraíso escondido en la Cordillera de los Andes
                    </p>
                </div>
            </div>

            <section className="section-padding min-h-screen">
                <div className="container max-w-4xl mx-auto">
                    <div className="info-content">
                        <h2 className="text-h2 text-primary mb-6">La Aldea de Montaña</h2>
                        <p className="text-lg text-secondary-color mb-8">
                            Villa Pehuenia es una joven aldea de montaña ubicada en el centro-oeste de la provincia de Neuquén.
                            Enclavada en un paisaje de ensueño, rodeada de lagos de origen glaciar como el Aluminé y Moquehue,
                            bosques de pehuenes (Araucaria Araucana) y la imponente Cordillera de los Andes.
                        </p>

                        <div className="grid-2 mt-12 mb-12">
                            <div className="card info-card">
                                <h3>Verano en Pehuenia</h3>
                                <p>Navegación por los lagos, playas de arena blanca volcánica, trekking al Volcán Batea Mahuida, pesca deportiva, rafting y cabalgatas por los bosques.</p>
                            </div>
                            <div className="card info-card dark-card">
                                <h3>Invierno Mágico</h3>
                                <p>El Parque de Nieve Batea Mahuida (administrado por la comunidad Mapuche Puel) ofrece pistas de esquí ideales para la familia con vistas inigualables.</p>
                            </div>
                        </div>

                        <h2 className="text-h2 text-primary mb-6 mt-12">Capital de la Gastronomía</h2>
                        <p className="text-lg text-secondary-color mb-8">
                            Reconocida como la Capital de la Gastronomía Neuquina, la villa se destaca por la incorporación
                            del piñón (fruto de la Araucaria) en platos gourmet, cervezas artesanales, chocolates y alfajores.
                        </p>
                    </div>
                </div>
            </section>

            <style>{`
        .page-wrapper { min-height: 100vh; background: var(--color-bg-light); }
        .page-header { position: relative; height: 50vh; min-height: 400px; display: flex; align-items: center; overflow: hidden; justify-content: center; }
        .header-bg { position: absolute; top: 0; left: 0; width: 100%; height: 100%; object-fit: cover; z-index: 0; }
        .z-10 { z-index: 10; }
        .relative { position: relative; }
        .text-center { text-align: center; }
        .text-white { color: white; }
        .opacity-90 { opacity: 0.9; }
        .mt-4 { margin-top: 1rem; }
        .mt-12 { margin-top: 3rem; }
        .mb-6 { margin-bottom: 1.5rem; }
        .mb-8 { margin-bottom: 2rem; }
        .mb-12 { margin-bottom: 3rem; }
        .max-w-4xl { max-width: 56rem; }
        .mx-auto { margin-left: auto; margin-right: auto; }
        .text-primary { color: var(--color-primary); }
        .text-lg { font-size: 1.125rem; line-height: 1.8; color: var(--text-secondary); }
        .min-h-screen { min-height: 80vh; }
        
        .grid-2 {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 2rem;
        }

        .info-card {
          padding: 2.5rem;
          border-left: 4px solid var(--color-secondary);
        }

        .info-card h3 {
          color: var(--color-primary);
          font-size: 1.5rem;
          margin-bottom: 1rem;
        }

        .dark-card {
          background: var(--color-primary);
          color: white;
          border-left: 4px solid var(--color-accent);
        }
        .dark-card h3 {
          color: var(--color-secondary-light);
        }

        @media (max-width: 768px) {
          .grid-2 { grid-template-columns: 1fr; }
        }
      `}</style>
        </div>
    );
}
