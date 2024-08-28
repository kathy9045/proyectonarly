import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const CreditCardForm = ({ onSubmit }) => {
  const [cardNumber, setCardNumber] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [cvv, setCvv] = useState('');

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí podrías agregar validaciones y lógica adicional
    onSubmit(); // Llama a la función para confirmar el pago
    navigate('/orders'); // Redirige a la página de pedidos después de completar el pago
  };

  return (
    <form onSubmit={handleSubmit} className="payment-form">
      <h2>Detalles de Tarjeta de Crédito</h2>
      <label>
        Número de Tarjeta
        <input
          type="text"
          value={cardNumber}
          onChange={(e) => setCardNumber(e.target.value)}
          required
        />
      </label>
      <label>
        Fecha de Expiración
        <input
          type="text"
          value={expiryDate}
          onChange={(e) => setExpiryDate(e.target.value)}
          required
        />
      </label>
      <label>
        CVV
        <input
          type="text"
          value={cvv}
          onChange={(e) => setCvv(e.target.value)}
          required
        />
      </label>
      <button type="submit">Pagar</button>
    </form>
  );
};

export default CreditCardForm;
