import React, { useState } from 'react';
import axios from 'axios';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
    
    try {
      const response = await axios.post('http://localhost:5000/api/login', { email, password });
      console.log(response.data.message); // Manejar inicio de sesión exitoso
      setError(''); // Limpiar error si hay éxito
    } catch (err) {
      // Manejar error
      if (err.response && err.response.status === 404) {
        setError('Usuario no registrado');
      } else if (err.response && err.response.status === 401) {
        setError('Contraseña incorrecta');
      } else {
        setError('Error al iniciar sesión');
      }
    }
  };

  return (
    <div>
      <h1>Iniciar Sesión</h1>
      <form onSubmit={handleLogin}>
        <div>
          <label>Email:</label>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        </div>
        <div>
          <label>Contraseña:</label>
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
        </div>
        <button type="submit">Iniciar Sesión</button>
      </form>
      {error && <p>{error}</p>}
    </div>
  );
};

export default Login;
