import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Layout/Navbar';
import Footer from './components/Layout/Footer';

// Pages
import Inicio from './pages/Inicio';
import Cabanas from './pages/Cabanas';
import Informacion from './pages/Informacion';
import Promociones from './pages/Promociones';
import Ubicacion from './pages/Ubicacion';
import ContactoReservas from './pages/ContactoReservas';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Navbar />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/cabanas" element={<Cabanas />} />
          <Route path="/informacion" element={<Informacion />} />
          <Route path="/promociones" element={<Promociones />} />
          <Route path="/ubicacion" element={<Ubicacion />} />
          <Route path="/reservas" element={<ContactoReservas />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
