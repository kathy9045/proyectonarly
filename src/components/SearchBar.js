import React, { useState } from 'react';
import './SearchBar.css'; 

const SearchBar = ({ onSearch, onCategoryChange, onStoreChange }) => {
  const [query, setQuery] = useState('');
  const [category, setCategory] = useState('');
  const [store, setStore] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    onSearch(query);
    onCategoryChange(category);
    onStoreChange(store);
  };

  return (
    <div className="search-bar">
      <form onSubmit={handleSearch}>
        <input
          type="text"
          placeholder="Buscar productos..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <select value={category} onChange={(e) => setCategory(e.target.value)}>
          <option value="">Todas las categorías</option>
          <option value="Comida">Comida</option>
          <option value="Juguetes">Juguetes</option>
          <option value="Accesorios">Accesorios</option>
          <option value="Camas">Camas</option>
        </select>
        <select value={store} onChange={(e) => setStore(e.target.value)}>
          <option value="">Todas las tiendas</option>
          <option value="OmegaPetShop">OmegaPetShop</option>
          <option value="PetWorld">PetWorld</option>
          <option value="PetAccessories">PetAccessories</option>
          <option value="PetBedShop">PetBedShop</option>
        </select>
        <button type="submit">Buscar</button>
      </form>
    </div>
  );
};

export default SearchBar;



