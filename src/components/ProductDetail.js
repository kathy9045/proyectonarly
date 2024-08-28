import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './ProductDetail.css';

const ProductDetails = () => {
  const { id } = useParams(); // Obtiene el ID del producto de la URL
  const [product, setProduct] = useState(null);

  useEffect(() => {
    // Simulación de la carga del producto
    const fetchProduct = async () => {
      try {
        // Simula la carga de productos (aquí iría la llamada a la API)
        const products = [
          { id: 1, name: 'Comida para Perros', price: 20.000, image: 'https://via.placeholder.com/150?text=Dog+Food', description: 'Comida nutritiva para perros de todas las edades.' },
          { id: 2, name: 'Juguete para Gatos', price: 10.000, image: 'https://via.placeholder.com/150?text=Cat+Toy', description: 'Juguete interactivo para mantener a tu gato entretenido.' }
        ];
        const selectedProduct = products.find(product => product.id === parseInt(id));
        setProduct(selectedProduct);
      } catch (err) {
        console.error('Error al cargar el producto:', err);
      }
    };

    fetchProduct();
  }, [id]);

  if (!product) {
    return <div className="loading">Cargando detalles del producto...</div>;
  }

  return (
    <div className="product-details">
      <img src={product.image} alt={product.name} className="product-image" />
      <div className="product-info">
        <h1>{product.name}</h1>
        <p className="product-price">${product.price.toFixed(2)}</p>
        <p className="product-description">{product.description}</p>
        <button className="btn-primary">Añadir al Carrito</button>
      </div>
    </div>
  );
};

export default ProductDetails;









