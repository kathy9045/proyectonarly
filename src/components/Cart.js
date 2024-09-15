import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import './Cart.css';

const Cart = () => {
  const { user } = useAuth();  // Accede al estado de autenticación
  const [cart, setCart] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem('cart')) || [];
    setCart(storedCart);
  }, []);

  const calculateTotal = () => {
    return cart.reduce((acc, item) => acc + item.price * item.quantity, 0).toFixed(2);
  };

  const handleQuantityChange = (id, quantity) => {
    const updatedCart = cart.map(item =>
      item.id === id ? { ...item, quantity: parseInt(quantity, 10) || 1 } : item
    );
    setCart(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
  };

  const handleRemoveItem = (id) => {
    const updatedCart = cart.filter(item => item.id !== id);
    setCart(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
  };

  const handleAddToCart = () => {
    if (!user) {
      navigate('/login');
    } else {
      // Aquí podrías añadir la lógica para agregar un producto al carrito
      // Por ejemplo, mostrar un mensaje de éxito o actualizar el carrito
    }
  };

  const handleCheckout = () => {
    if (!user) {
      navigate('/login');
    } else {
      navigate('/payment');
    }
  };

  return (
    <div className="cart">
      <h1>Carrito de Compras</h1>
      {cart.length === 0 ? (
        <p>No hay productos en el carrito.</p>
      ) : (
        <ul>
          {cart.map((item) => (
            <li key={item.id} className="cart-item">
              <img src={item.image} alt={item.name} className="cart-item-image" />
              <div className="cart-item-details">
                <h2>{item.name}</h2>
                <p>Precio: ${item.price}</p>
                <label>
                  Cantidad:
                  <input
                    type="number"
                    min="1"
                    value={item.quantity}
                    onChange={(e) => handleQuantityChange(item.id, e.target.value)}
                  />
                </label>
                <p>Total: ${item.price * item.quantity}</p>
                <button className="btn-remove" onClick={() => handleRemoveItem(item.id)}>Eliminar</button>
              </div>
            </li>
          ))}
        </ul>
      )}
      <div className="cart-summary">
        <h2>Total: ${calculateTotal()}</h2>
        <button className="btn-main" onClick={handleCheckout}>Pagar</button>
        <button className="btn-secondary" onClick={() => navigate('/products')}>Seguir Comprando</button>
        <button className="btn-add" onClick={handleAddToCart}>Añadir al carrito</button> {/* Botón para añadir al carrito */}
      </div>
    </div>
  );
};

export default Cart;
