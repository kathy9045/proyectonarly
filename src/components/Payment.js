import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Payment.css';
import { FaCreditCard, FaPaypal } from 'react-icons/fa';
import CreditCardForm from './CreditCardForm'; // Asegúrate de tener este archivo
import PaypalForm from './PaypalForm'; // Asegúrate de tener este archivo

const Payment = () => {
  const [paymentMethod, setPaymentMethod] = useState('');
  const [error, setError] = useState('');
  const [items, setItems] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const cartItems = JSON.parse(localStorage.getItem('cart')) || [];
    setItems(cartItems);
  }, []);

  const handlePayment = () => {
    if (!paymentMethod) {
      setError('Por favor, selecciona un método de pago.');
      return;
    }

    if (items.length === 0) {
      setError('Tu carrito está vacío.');
      return;
    }

    // Mostrar el formulario adecuado basado en el método de pago seleccionado
    setShowForm(true);
  };

  const handleFormSubmit = () => {
    const orders = JSON.parse(localStorage.getItem('orders')) || [];
    const newOrder = {
      id: orders.length + 1,
      items,
      date: new Date().toLocaleDateString(),
      status: 'Enviando'
    };

    orders.push(newOrder);
    localStorage.setItem('orders', JSON.stringify(orders));
    localStorage.removeItem('cart');

    setError('');
    navigate('/orders');
  };

  return (
    <div className="payment">
      <h1>Método de Pago</h1>
      <div className="payment-summary">
        <h2>Resumen del Pedido</h2>
        <p>Verifica los detalles de tu pedido antes de continuar con el pago.</p>
        <ul>
          {items.map(item => (
            <li key={item.id}>{item.name} - ${item.price} x {item.quantity}</li>
          ))}
        </ul>
      </div>
      <div className="payment-methods">
        <div
          className={`payment-option ${paymentMethod === 'credit' ? 'selected' : ''}`}
          onClick={() => setPaymentMethod('credit')}
        >
          <FaCreditCard className="payment-icon" />
          <div className="payment-info">
            <h3>Tarjeta de Crédito</h3>
            <p>Paga de manera rápida y segura con tu tarjeta de crédito.</p>
          </div>
        </div>
        <div
          className={`payment-option ${paymentMethod === 'paypal' ? 'selected' : ''}`}
          onClick={() => setPaymentMethod('paypal')}
        >
          <FaPaypal className="payment-icon" />
          <div className="payment-info">
            <h3>PayPal</h3>
            <p>Usa tu cuenta de PayPal para una transacción segura.</p>
          </div>
        </div>
        {/* Puedes agregar más métodos de pago aquí */}
      </div>
      {error && <p className="error-message">{error}</p>}
      {!showForm ? (
        <button
          onClick={handlePayment}
          className={`confirm-btn ${paymentMethod ? '' : 'disabled'}`}
          disabled={!paymentMethod}
        >
          Confirmar Pago
        </button>
      ) : (
        paymentMethod === 'credit' ? (
          <CreditCardForm onSubmit={handleFormSubmit} />
        ) : (
          <PaypalForm onSubmit={handleFormSubmit} />
        )
      )}
      <button onClick={() => navigate('/products')} className="continue-shopping-btn">Seguir Comprando</button>
    </div>
  );
};

export default Payment;













