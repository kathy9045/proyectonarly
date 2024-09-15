// server.js
const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = 5000;

app.use(bodyParser.json());

// Manejar solicitud GET a la raíz
app.get('/', (req, res) => {
  res.send('Servidor funcionando');
});

// Ruta para manejar el inicio de sesión
app.post('/api/login', (req, res) => {
  const { email, password } = req.body;
  const usersFile = path.join(__dirname, 'data', 'users.json');
  
  if (!fs.existsSync(usersFile)) {
    return res.status(500).json({ message: 'Error en el servidor' });
  }
  
  const users = JSON.parse(fs.readFileSync(usersFile, 'utf8'));
  const user = users.find(u => u.email === email);

  if (!user) {
    return res.status(404).json({ message: 'Usuario no registrado' });
  }

  if (user.password !== password) {
    return res.status(401).json({ message: 'Contraseña incorrecta' });
  }

  res.status(200).json({ message: 'Inicio de sesión exitoso' });
});

// Asegúrate de tener esta línea para servir archivos estáticos si estás usando un frontend en el mismo servidor
app.use(express.static(path.join(__dirname, 'client/build')));

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
