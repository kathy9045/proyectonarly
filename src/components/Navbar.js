import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const navigate = useNavigate();

  const handleBuyNowClick = () => {
    navigate('/register');
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">Tienda Mascotas</Link>
        <div className="navbar-menu">
          <Link to="/" className="navbar-item">Inicio</Link>
          <Link to="/products" className="navbar-item">Productos</Link>
          <Link to="/cart" className="navbar-item">Carrito</Link>
          <button onClick={handleBuyNowClick} className="navbar-button">Comprar Ahora</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
