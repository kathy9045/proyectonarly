import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import SearchBar from './SearchBar';
import './Products.css';

const Products = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedStore, setSelectedStore] = useState('');

  useEffect(() => {
    // Simulación de la carga de productos con categorías y tiendas
    setProducts([
      { id: 1, name: 'Comida para Perros', price: 20000, image: 'https://via.placeholder.com/150?text=Dog+Food', description: 'Comida nutritiva para perros de todas las edades.', category: 'Comida', store: 'OmegaPetShop' },
      { id: 2, name: 'Comida para Gatos', price: 15000, image: 'https://via.placeholder.com/150?text=Cat+Food', description: 'Comida especial para gatos.', category: 'Comida', store: 'OmegaPetShop' },
      { id: 3, name: 'Juguete para Gatos', price: 10000, image: 'https://via.placeholder.com/150?text=Cat+Toy', description: 'Juguete interactivo para mantener a tu gato entretenido.', category: 'Juguetes', store: 'PetWorld' },
      { id: 4, name: 'Pelota para Perros', price: 12000, image: 'https://via.placeholder.com/150?text=Dog+Ball', description: 'Pelota resistente para perros.', category: 'Juguetes', store: 'PetWorld' },
      { id: 5, name: 'Arenero para Gatos', price: 35000, image: 'https://via.placeholder.com/150?text=Cat+Litter+Box', description: 'Arenero fácil de limpiar para gatos.', category: 'Accesorios', store: 'PetAccessories' },
      { id: 6, name: 'Rascador para Gatos', price: 25000, image: 'https://via.placeholder.com/150?text=Cat+Scratcher', description: 'Rascador para mantener las uñas de tu gato saludables.', category: 'Accesorios', store: 'PetAccessories' },
      { id: 7, name: 'Cama para Perros', price: 50000, image: 'https://via.placeholder.com/150?text=Dog+Bed', description: 'Cama cómoda para perros de todos los tamaños.', category: 'Camas', store: 'PetBedShop' },
      { id: 8, name: 'Cama para Gatos', price: 30000, image: 'https://via.placeholder.com/150?text=Cat+Bed', description: 'Cama suave para gatos.', category: 'Camas', store: 'PetBedShop' },
    ]);
  }, []);

  useEffect(() => {
    const results = products.filter(product => {
      const matchesQuery = product.name.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCategory = !selectedCategory || product.category === selectedCategory;
      const matchesStore = !selectedStore || product.store === selectedStore;
      return matchesQuery && matchesCategory && matchesStore;
    });

    setFilteredProducts(results);
  }, [searchQuery, selectedCategory, selectedStore, products]);

  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  const handleStoreChange = (store) => {
    setSelectedStore(store);
  };

  const addToCart = (product) => {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart.push(product);
    localStorage.setItem('cart', JSON.stringify(cart));
  };

  return (
    <div className="products">
      <h1>Productos</h1>
      <SearchBar onSearch={handleSearch} onCategoryChange={handleCategoryChange} onStoreChange={handleStoreChange} />
      <div className="product-list">
        {filteredProducts.length > 0 ? (
          filteredProducts.map(product => (
            <div key={product.id} className="product-item">
              <img src={product.image} alt={product.name} className="product-image" />
              <div className="product-info">
                <h2>{product.name}</h2>
                <p className="product-price">COP {product.price.toLocaleString()}</p>
                <p className="product-description">{product.description}</p>
                <div className="product-actions">
                  <Link to={`/products/${product.id}`} className="btn-secondary">Ver Detalles</Link>
                  <button onClick={() => addToCart(product)} className="btn-primary">Añadir al Carrito</button>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p>No se encontraron productos.</p>
        )}
      </div>
    </div>
  );
};

export default Products;













