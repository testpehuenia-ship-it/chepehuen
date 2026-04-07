import React, { useState } from 'react';
import { Mail, Phone, Calendar as CalIcon, Users, Home } from 'lucide-react';

export default function ContactoReservas() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        cabin: 'Cabaña Araucaria (Premium)',
        checkin: '',
        checkout: '',
        guests: '1',
        message: ''
    });

    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Simulate form submission
        console.log("Reserva enviada:", formData);
        setSubmitted(true);
        setTimeout(() => setSubmitted(false), 5000);
        setFormData({
            name: '', email: '', phone: '', cabin: 'Cabaña Araucaria (Premium)',
            checkin: '', checkout: '', guests: '1', message: ''
        });
    };

    return (
        <div className="page-wrapper animate-fade-in pb-20">
            <div className="section-padding pt-32 container">
                <div className="text-center mb-16">
                    <h1 className="text-h1 text-primary">Contacto y Reservas</h1>
                    <p className="text-lead mt-4 max-w-2xl mx-auto">
                        Completa el siguiente formulario para consultar disponibilidad o realizar tu reserva. Te responderemos a la brevedad.
                    </p>
                </div>

                <div className="contact-grid">
                    <div className="contact-info card glass-dark text-white">
                        <h3 className="text-h3 text-secondary mb-6">Atención al Cliente</h3>
                        <p className="text-white opacity-90 mb-8">
                            Nuestro equipo está disponible para ayudarte a organizar unas vacaciones inolvidables en Villa Pehuenia.
                        </p>

                        <ul className="contact-list">
                            <li>
                                <div className="icon-wrapper"><Phone size={20} /></div>
                                <div>
                                    <span className="block text-sm opacity-70">Llámanos o WhatsApp</span>
                                    <span className="block font-bold mt-1">+54 9 2942 123456</span>
                                </div>
                            </li>
                            <li>
                                <div className="icon-wrapper"><Mail size={20} /></div>
                                <div>
                                    <span className="block text-sm opacity-70">Correo Electrónico</span>
                                    <span className="block font-bold mt-1">reservas@chepehuen.com</span>
                                </div>
                            </li>
                            <li>
                                <div className="icon-wrapper"><Home size={20} /></div>
                                <div>
                                    <span className="block text-sm opacity-70">Horario de Recepción</span>
                                    <span className="block font-bold mt-1">08:00 a 22:00 hs</span>
                                </div>
                            </li>
                        </ul>
                    </div>

                    <div className="contact-form-wrapper card glass">
                        {submitted ? (
                            <div className="success-message text-center animate-slide-up">
                                <div className="success-icon mb-4">✓</div>
                                <h3 className="text-h3 text-primary mb-2">¡Solicitud Enviada!</h3>
                                <p className="text-secondary-color">Gracias por contactarnos. Hemos recibido tu solicitud de reserva y nos pondremos en contacto contigo pronto.</p>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit} className="contact-form">
                                <h3 className="text-h3 text-primary mb-6">Solicitud de Reserva</h3>

                                <div className="form-grid">
                                    <div className="form-group">
                                        <label>Nombre Completo</label>
                                        <input type="text" name="name" required value={formData.name} onChange={handleChange} className="form-control" placeholder="Juan Pérez" />
                                    </div>
                                    <div className="form-group">
                                        <label>Correo Electrónico</label>
                                        <input type="email" name="email" required value={formData.email} onChange={handleChange} className="form-control" placeholder="juan@ejemplo.com" />
                                    </div>
                                    <div className="form-group">
                                        <label>Teléfono</label>
                                        <input type="tel" name="phone" required value={formData.phone} onChange={handleChange} className="form-control" placeholder="+54 9 11 1234-5678" />
                                    </div>
                                    <div className="form-group">
                                        <label><Home size={16} className="inline-icon" /> Selecciona una Cabaña</label>
                                        <select name="cabin" value={formData.cabin} onChange={handleChange} className="form-control">
                                            <option>Cabaña Araucaria (Premium)</option>
                                            <option>Cabaña Lenga (Familiar)</option>
                                            <option>Cabaña Ñire (Parejas)</option>
                                            <option>Cabaña Coihue (Estándar)</option>
                                        </select>
                                    </div>
                                    <div className="form-group">
                                        <label><CalIcon size={16} className="inline-icon" /> Check-in</label>
                                        <input type="date" name="checkin" required value={formData.checkin} onChange={handleChange} className="form-control" />
                                    </div>
                                    <div className="form-group">
                                        <label><CalIcon size={16} className="inline-icon" /> Check-out</label>
                                        <input type="date" name="checkout" required value={formData.checkout} onChange={handleChange} className="form-control" />
                                    </div>
                                    <div className="form-group full-width">
                                        <label><Users size={16} className="inline-icon" /> Cantidad de Huéspedes</label>
                                        <input type="number" min="1" max="6" name="guests" value={formData.guests} onChange={handleChange} className="form-control" />
                                    </div>
                                    <div className="form-group full-width">
                                        <label>Mensaje o Consulta Adicional</label>
                                        <textarea name="message" rows="4" value={formData.message} onChange={handleChange} className="form-control" placeholder="Escribe tu mensaje aquí..."></textarea>
                                    </div>
                                </div>

                                <div className="form-footer mt-8">
                                    <button type="submit" className="btn btn-primary w-full text-center">Enviar Solicitud</button>
                                </div>
                            </form>
                        )}
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
        .text-white { color: white; }
        .mb-2 { margin-bottom: 0.5rem; }
        .mb-4 { margin-bottom: 1rem; }
        .mb-6 { margin-bottom: 1.5rem; }
        .mb-8 { margin-bottom: 2rem; }
        .mt-1 { margin-top: 0.25rem; }
        .mt-4 { margin-top: 1rem; }
        .mt-8 { margin-top: 2rem; }
        .max-w-2xl { max-width: 42rem; }
        .mx-auto { margin-left: auto; margin-right: auto; }
        .font-bold { font-weight: 700; }
        .block { display: block; }
        .opacity-70 { opacity: 0.7; }
        .opacity-90 { opacity: 0.9; }
        .text-sm { font-size: 0.875rem; }
        .w-full { width: 100%; display: block; }

        .contact-grid {
          display: grid;
          grid-template-columns: 1fr 2fr;
          gap: 2rem;
          max-width: 1200px;
          margin: 0 auto;
        }

        .contact-info {
          padding: 3rem;
          background: #1A1A1A;
          border: none;
        }

        .contact-list {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 2rem;
        }
        .contact-list li {
          display: flex;
          align-items: center;
          gap: 1.25rem;
        }
        .icon-wrapper {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 48px;
          height: 48px;
          border-radius: 50%;
          background: rgba(255,255,255,0.1);
          color: var(--color-secondary);
        }

        .contact-form-wrapper {
          padding: 3rem;
        }

        .form-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1.5rem;
        }
        .form-group {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }
        .full-width {
          grid-column: 1 / -1;
        }
        .form-group label {
          font-weight: 600;
          color: var(--text-primary);
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }
        .inline-icon { color: var(--color-secondary-light); }
        
        .form-control {
          padding: 0.875rem 1rem;
          border: 1px solid rgba(0,0,0,0.1);
          border-radius: 8px;
          font-family: 'Outfit', sans-serif;
          font-size: 1rem;
          color: var(--text-primary);
          background: rgba(255,255,255,0.8);
          transition: all var(--transition-fast);
        }
        .form-control:focus {
          outline: none;
          border-color: var(--color-secondary);
          box-shadow: 0 0 0 3px rgba(212, 175, 55, 0.2);
          background: white;
        }

        .success-message {
          padding: 4rem 2rem;
        }
        .success-icon {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 80px;
          height: 80px;
          border-radius: 50%;
          background: var(--color-secondary);
          color: var(--text-primary);
          font-size: 3rem;
          margin: 0 auto;
        }

        @media (max-width: 992px) {
          .contact-grid { grid-template-columns: 1fr; }
        }
        @media (max-width: 576px) {
          .form-grid { grid-template-columns: 1fr; }
          .contact-form-wrapper { padding: 2rem 1.5rem; }
        }
      `}</style>
        </div>
    );
}
