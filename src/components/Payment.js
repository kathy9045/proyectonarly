import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Payment.css';

const Payment = () => {
  const [paymentMethod, setPaymentMethod] = useState('');
  const navigate = useNavigate();

  const handlePayment = () => {
    if (!paymentMethod) return; // Verifica que se haya seleccionado un método de pago

    // Obtiene los pedidos y el carrito del localStorage
    const orders = JSON.parse(localStorage.getItem('orders')) || [];
    const items = JSON.parse(localStorage.getItem('cart')) || [];

    // Crea un nuevo pedido
    const newOrder = {
      id: orders.length + 1,
      items,
      date: new Date().toLocaleDateString(),
      status: 'Enviando'
    };

    // Agrega el nuevo pedido a los pedidos y limpia el carrito
    orders.push(newOrder);
    localStorage.setItem('orders', JSON.stringify(orders));
    localStorage.removeItem('cart');

    // Redirige a la página de pedidos
    navigate('/orders');
  };

  return (
    <div className="payment">
      <h1>Método de Pago</h1>
      <div className="payment-methods">
        <div className="payment-option">
          <input
            type="radio"
            name="payment-method"
            value="credit"
            checked={paymentMethod === 'credit'}
            onChange={() => setPaymentMethod('credit')}
          />
          <label>Tarjeta de Crédito</label>
        </div>
        <div className="payment-option">
          <input
            type="radio"
            name="payment-method"
            value="paypal"
            checked={paymentMethod === 'paypal'}
            onChange={() => setPaymentMethod('paypal')}
          />
          <label>PayPal</label>
        </div>
        {/* Puedes agregar más métodos de pago aquí */}
      </div>
      <button onClick={handlePayment} className="confirm-btn">Confirmar Pago</button>
      <button onClick={() => navigate('/products')} className="continue-shopping-btn">Seguir Comprando</button>
    </div>
  );
};

export default Payment;









