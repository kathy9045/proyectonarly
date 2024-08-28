// src/components/Login.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    const users = JSON.parse(localStorage.getItem('users')) || [];
    const user = users.find(user => user.email === email && user.password === password);
    
    if (user) {
      localStorage.setItem('loggedInUser', JSON.stringify(user));
      navigate('/cart'); // Redirige al carrito de compras
    } else {
      setError('Email o contraseña incorrectos.');
    }
  };

  const handleRegisterRedirect = () => {
    navigate('/register'); // Redirige al formulario de registro
  };

  return (
    <div className="login">
      <h1>Iniciar Sesión</h1>
      <form onSubmit={handleLogin}>
        <div>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Contraseña:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        {error && <p className="error">{error}</p>}
        <button type="submit">Iniciar Sesión</button>
        <p>¿No tienes cuenta? <button type="button" onClick={handleRegisterRedirect}>Regístrate</button></p>
      </form>
    </div>
  );
};

export default Login;






