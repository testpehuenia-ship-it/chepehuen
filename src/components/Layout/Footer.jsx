import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Instagram, Facebook } from 'lucide-react';

export default function Footer() {
    return (
        <footer className="footer relative">
            <div className="container footer-content">
                <div className="footer-col">
                    <h3 className="footer-brand">Cabañas Chepehuen</h3>
                    <p className="footer-desc text-muted">
                        Experimenta la magia de la Patagonia en nuestras modernas y confortables cabañas en Villa Pehuenia. El equilibrio perfecto entre naturaleza y confort.
                    </p>
                    <div className="social-links">
                        <a href="#" className="social-icon"><Instagram size={20} /></a>
                        <a href="#" className="social-icon"><Facebook size={20} /></a>
                    </div>
                </div>

                <div className="footer-col">
                    <h4 className="footer-title">Enlaces Rápidos</h4>
                    <ul className="footer-links">
                        <li><Link to="/cabanas">Nuestras Cabañas</Link></li>
                        <li><Link to="/informacion">Villa Pehuenia</Link></li>
                        <li><Link to="/promociones">Promociones</Link></li>
                        <li><Link to="/ubicacion">Ubicación</Link></li>
                        <li><Link to="/reservas">Reservar</Link></li>
                    </ul>
                </div>

                <div className="footer-col">
                    <h4 className="footer-title">Contacto</h4>
                    <ul className="footer-contact">
                        <li>
                            <MapPin size={18} className="contact-icon" />
                            <span>Rp11, Villa Pehuenia, Neuquén, Argentina</span>
                        </li>
                        <li>
                            <Phone size={18} className="contact-icon" />
                            <span>+54 9 2942 123456</span>
                        </li>
                        <li>
                            <Mail size={18} className="contact-icon" />
                            <span>reservas@chepehuen.com</span>
                        </li>
                    </ul>
                </div>
            </div>

            <div className="footer-bottom">
                <div className="container">
                    <p>&copy; {new Date().getFullYear()} Cabañas Chepehuen. Todos los derechos reservados.</p>
                </div>
            </div>

            <style>{`
        .footer {
          background-color: var(--color-bg-dark);
          color: white;
          padding-top: 5rem;
        }
        .footer-content {
          display: grid;
          grid-template-columns: 2fr 1fr 1.5fr;
          gap: 4rem;
          margin-bottom: 4rem;
        }
        .footer-brand {
          font-size: 2rem;
          margin-bottom: 1rem;
          color: var(--color-secondary);
        }
        .footer-desc {
          margin-bottom: 1.5rem;
          line-height: 1.8;
          max-width: 400px;
        }
        .footer-title {
          font-size: 1.25rem;
          margin-bottom: 1.5rem;
          font-weight: 600;
        }
        .social-links {
          display: flex;
          gap: 1rem;
        }
        .social-icon {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 40px;
          height: 40px;
          border-radius: 50%;
          background: rgba(255,255,255,0.1);
          color: white;
          text-decoration: none;
          transition: all var(--transition-fast);
        }
        .social-icon:hover {
          background: var(--color-secondary);
          color: var(--color-primary);
        }
        .footer-links {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
        }
        .footer-links a {
          color: var(--text-muted);
          text-decoration: none;
          transition: color var(--transition-fast);
        }
        .footer-links a:hover {
          color: var(--color-secondary);
        }
        .footer-contact {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }
        .footer-contact li {
          display: flex;
          align-items: flex-start;
          gap: 1rem;
          color: var(--text-muted);
        }
        .contact-icon {
          color: var(--color-secondary);
          flex-shrink: 0;
          margin-top: 0.25rem;
        }
        .footer-bottom {
          background: rgba(0,0,0,0.2);
          padding: 1.5rem 0;
          text-align: center;
          color: var(--text-muted);
          font-size: 0.875rem;
        }

        @media (max-width: 992px) {
          .footer-content {
            grid-template-columns: 1fr 1fr;
          }
        }
        @media (max-width: 768px) {
          .footer-content {
            grid-template-columns: 1fr;
            gap: 2.5rem;
          }
        }
      `}</style>
        </footer>
    );
}
