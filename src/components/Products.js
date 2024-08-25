import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Products.css';

const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Simular llamada a API
    setProducts([
      { id: 1, name: 'Comida para Perros', price: 20, image: 'https://via.placeholder.com/150?text=Dog+Food' },
      { id: 2, name: 'Juguete para Gatos', price: 10, image: 'https://via.placeholder.com/150?text=Cat+Toy' },
      // Agrega más productos según sea necesario
    ]);
  }, []);

  const addToCart = (product) => {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart.push(product);
    localStorage.setItem('cart', JSON.stringify(cart));
  };

  return (
    <div className="products">
      <h1>Productos</h1>
      <div className="product-list">
        {products.map(product => (
          <div key={product.id} className="product-item">
            <img src={product.image} alt={product.name} className="product-image" />
            <div className="product-info">
              <h2>{product.name}</h2>
              <p className="product-price">${product.price}</p>
              <div className="product-actions">
                <Link to={`/products/${product.id}`} className="btn-secondary">Ver Detalles</Link>
                <button onClick={() => addToCart(product)} className="btn-primary">Añadir al Carrito</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;





