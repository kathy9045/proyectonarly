import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>&copy; {new Date().getFullYear()} OmegaPetShop. Todos los derechos reservados.</p>
        <nav>
          <Link to="/privacy-policy">Política de Privacidad</Link>
          
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
