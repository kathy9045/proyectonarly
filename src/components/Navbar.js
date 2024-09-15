// src/components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faSignInAlt, faUserPlus, faShoppingCart, faEnvelope, faTag, faUser } from '@fortawesome/free-solid-svg-icons';
import { useAuth } from '../context/AuthContext';
import './Navbar.css';

const Navbar = () => {
  const { user, logout } = useAuth();
  console.log('User in Navbar:', user); // Verifica el estado del usuario

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          <FontAwesomeIcon icon={faHome} /> OmegaPetShop
        </Link>
        <div className="navbar-menu">
          <Link to="/products" className="navbar-item">
            <FontAwesomeIcon icon={faHome} /> Productos
          </Link>
          <Link to="/contact" className="navbar-item">
            <FontAwesomeIcon icon={faEnvelope} /> Contacto
          </Link>
          {user ? (
            <>
              <Link to="/cart" className="navbar-item">
                <FontAwesomeIcon icon={faShoppingCart} /> Carrito
              </Link>
              <Link to="/orders" className="navbar-item">
                <FontAwesomeIcon icon={faTag} /> Pedidos
              </Link>
              <Link to="/account" className="navbar-item">
                <FontAwesomeIcon icon={faUser} /> Cuenta
              </Link>
              <button onClick={logout} className="navbar-button">Cerrar Sesión</button>
            </>
          ) : (
            <>
              <Link to="/login" className="navbar-item">
                <FontAwesomeIcon icon={faSignInAlt} /> Iniciar Sesión
              </Link>
              <Link to="/register" className="navbar-item">
                <FontAwesomeIcon icon={faUserPlus} /> Registrarse
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
