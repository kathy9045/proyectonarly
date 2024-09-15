import React from 'react';
import { useAuth } from '../context/AuthContext';
import './Account.css'; // Asegúrate de crear este archivo para los estilos de la página de cuenta

const Account = () => {
  const { user, updateUser, logout } = useAuth(); // Asegúrate de tener estas funciones en tu contexto

  const handleUpdate = () => {
    // Implementa la lógica para actualizar la información del usuario
    // Por ejemplo, podrías mostrar un formulario para actualizar los datos
    // y luego llamar a updateUser con los nuevos datos
  };

  return (
    <div className="account">
      <h1>Mi Cuenta</h1>
      {user ? (
        <div className="account-details">
          <p><strong>Nombre:</strong> {user.name}</p>
          <p><strong>Email:</strong> {user.email}</p>
          <p><strong>Rol:</strong> {user.role}</p>
          {/* Puedes añadir más información del usuario aquí */}
          <button onClick={handleUpdate} className="btn-update">Actualizar Información</button>
          <button onClick={logout} className="btn-logout">Cerrar Sesión</button>
        </div>
      ) : (
        <p>No estás autenticado. <a href="/login">Inicia sesión</a> para ver tu cuenta.</p>
      )}
    </div>
  );
};

export default Account;
