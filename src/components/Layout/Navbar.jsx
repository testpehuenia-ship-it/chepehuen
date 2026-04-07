import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, MapPin, Phone } from 'lucide-react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const isHome = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Inicio', path: '/' },
    { name: 'Cabañas', path: '/cabanas' },
    { name: 'Información', path: '/informacion' },
    { name: 'Promociones', path: '/promociones' },
    { name: 'Ubicación', path: '/ubicacion' }
  ];

  return (
    <header className={`navbar ${isScrolled || !isHome ? 'navbar-scrolled glass' : 'navbar-transparent'}`}>
      <div className="container nav-container">
        <Link to="/" className="brand">
          <span className="brand-text">Cabañas Chepehuen</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="desktop-nav">
          <ul className="nav-list">
            {navLinks.map((link) => (
              <li key={link.name}>
                <Link
                  to={link.path}
                  className={`nav-link ${location.pathname === link.path ? 'active' : ''}`}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
          <Link to="/reservas" className="btn btn-primary nav-btn">Reservar</Link>
        </nav>

        {/* Mobile Toggle */}
        <button className="mobile-toggle" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Nav */}
      <div className={`mobile-menu ${isMobileMenuOpen ? 'open glass-dark' : ''}`}>
        <ul className="mobile-nav-list">
          {navLinks.map((link) => (
            <li key={link.name}>
              <Link
                to={link.path}
                className="mobile-nav-link"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </Link>
            </li>
          ))}
          <li>
            <Link
              to="/reservas"
              className="btn btn-primary w-full text-center mt-4"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Reservar
            </Link>
          </li>
        </ul>
      </div>

      <style>{`
        .navbar {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          z-index: 100;
          transition: all var(--transition-smooth);
          padding: 1.5rem 0;
        }
        .navbar-scrolled {
          padding: 1rem 0;
          background: rgba(255, 255, 255, 0.95);
          color: var(--text-primary);
          border-bottom: 1px solid rgba(0,0,0,0.05);
          box-shadow: 0 4px 20px rgba(0,0,0,0.05);
        }
        .navbar-transparent {
          background: transparent;
          color: white;
          border-bottom: 1px solid rgba(255,255,255,0.1);
        }
        .nav-container {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        .brand {
          text-decoration: none;
          color: inherit;
        }
        .brand-text {
          font-family: var(--font-heading);
          font-size: 1.5rem;
          font-weight: 400;
          letter-spacing: 0.1em;
          text-transform: uppercase;
        }
        .desktop-nav {
          display: flex;
          align-items: center;
          gap: 3rem;
        }
        .nav-list {
          display: flex;
          gap: 2.5rem;
          list-style: none;
        }
        .nav-link {
          text-decoration: none;
          color: inherit;
          font-weight: 400;
          font-size: 0.8rem;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          opacity: 0.7;
          transition: opacity var(--transition-fast);
        }
        .nav-link:hover, .nav-link.active {
          opacity: 1;
        }
        .nav-btn {
          padding: 0.75rem 2rem;
          font-size: 0.75rem;
          background: transparent;
          border: 1px solid var(--color-secondary);
          color: var(--color-secondary);
        }
        .nav-btn:hover {
          background: var(--color-secondary);
          color: #FFF;
        }

        .mobile-toggle {
          display: none;
          background: none;
          border: none;
          color: inherit;
          cursor: pointer;
        }
        .mobile-menu {
          display: none;
        }
        
        @media (max-width: 992px) {
          .desktop-nav { display: none; }
          .mobile-toggle { display: block; }
          .mobile-menu {
            display: block;
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100vh;
            padding: 6rem 2rem 2rem;
            transform: translateX(100%);
            transition: transform var(--transition-smooth);
            z-index: 99;
          }
          .mobile-menu.open {
            transform: translateX(0);
          }
          .mobile-nav-list {
            list-style: none;
            display: flex;
            flex-direction: column;
            gap: 1.5rem;
          }
          .mobile-nav-link {
            text-decoration: none;
            color: white;
            font-size: 1.5rem;
            font-weight: 600;
          }
        }
      `}</style>
    </header>
  );
}
