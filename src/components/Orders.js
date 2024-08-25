import React, { useEffect, useState } from 'react';

const Orders = () => {
  const [order, setOrder] = useState([]);

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem('cart')) || [];
    setOrder(storedCart);
  }, []);

  const calculateTotal = () => {
    return order.reduce((acc, item) => acc + item.price * item.quantity, 0);
  };

  return (
    <div className="orders">
      <h1>Mis Pedidos</h1>
      {order.length === 0 ? (
        <p>No hay pedidos recientes.</p>
      ) : (
        <ul>
          {order.map((item) => (
            <li key={item.id}>
              <h2>{item.name}</h2>
              <p>Precio: ${item.price}</p>
              <p>Cantidad: {item.quantity}</p>
              <p>Total: ${item.price * item.quantity}</p>
            </li>
          ))}
        </ul>
      )}
      <h2>Total: ${calculateTotal()}</h2>
      <p>Estado: Enviado</p>
    </div>
  );
};

export default Orders;





