// src/components/Sell.js
import React, { useState } from 'react';
import './Sell.css';

const Sell = () => {
  const [product, setProduct] = useState({
    name: '',
    description: '',
    price: '',
    image: ''
  });

  const [productList, setProductList] = useState([]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct({
      ...product,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (product.name && product.price) {
      setProductList([...productList, product]);
      setProduct({
        name: '',
        description: '',
        price: '',
        image: ''
      });
    }
  };

  return (
    <div className="sell-container">
      <h1>Vender Producto</h1>
      <form onSubmit={handleSubmit} className="sell-form">
        <div className="form-group">
          <label>Nombre del Producto:</label>
          <input
            type="text"
            name="name"
            value={product.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Descripción:</label>
          <textarea
            name="description"
            value={product.description}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label>Precio:</label>
          <input
            type="number"
            name="price"
            value={product.price}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Imagen URL:</label>
          <input
            type="text"
            name="image"
            value={product.image}
            onChange={handleChange}
          />
        </div>
        <button type="submit">Agregar Producto</button>
      </form>
      <div className="product-list">
        <h2>Productos Subidos</h2>
        {productList.length > 0 ? (
          <ul>
            {productList.map((prod, index) => (
              <li key={index}>
                <h3>{prod.name}</h3>
                <p>{prod.description}</p>
                <p>Precio: ${prod.price}</p>
                {prod.image && <img src={prod.image} alt={prod.name} />}
              </li>
            ))}
          </ul>
        ) : (
          <p>No hay productos subidos.</p>
        )}
      </div>
    </div>
  );
};

export default Sell;
