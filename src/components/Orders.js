import React, { useEffect, useState } from 'react';
import './orders.css';

const Orders = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    // Obtener los pedidos desde localStorage y asegurarse de que sea un array
    const storedOrders = JSON.parse(localStorage.getItem('orders')) || [];
    setOrders(storedOrders);
  }, []);

  // Función para calcular el total de los ítems
  const calculateTotal = (items) => {
    return items ? items.reduce((acc, item) => acc + item.price * item.quantity, 0) : 0;
  };

  return (
    <div className="orders">
      <h1>Mis Pedidos</h1>
      {orders.length === 0 ? (
        <p>No hay pedidos recientes.</p>
      ) : (
        <div className="orders-list">
          {orders.map((order) => (
            <div key={order.id} className="order-card">
              <h2>Pedido #{order.id}</h2>
              <p><strong>Fecha:</strong> {order.date}</p>
              <p><strong>Estado:</strong> <span className={`order-status ${order.status.toLowerCase()}`}>{order.status}</span></p>
              <ul>
                {order.items && order.items.map((item) => (
                  <li key={item.id}>
                    <h3>{item.name}</h3>
                    <p>Precio: ${item.price}</p>
                    <p>Cantidad: {item.quantity}</p>
                    <p>Total: ${item.price * item.quantity}</p>
                  </li>
                ))}
              </ul>
              <h3>Total del Pedido: ${calculateTotal(order.items)}</h3>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Orders;
