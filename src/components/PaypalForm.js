import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const PaypalForm = ({ onSubmit }) => {
  const [email, setEmail] = useState('');

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(); 
    navigate('/orders'); 
  };

  return (
    <form onSubmit={handleSubmit} className="payment-form">
      <h2>Detalles de PayPal</h2>
      <label>
        Correo Electrónico
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </label>
      <button type="submit">Pagar</button>
    </form>
  );
};

export default PaypalForm;
