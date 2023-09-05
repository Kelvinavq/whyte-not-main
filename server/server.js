const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const app = express();
const port = 3000; // Puedes cambiar el puerto si es necesario
const nodemailer = require('nodemailer');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Ruta para manejar las solicitudes POST del formulario
app.post('/submit-form', (req, res) => {
  const formData = req.body;
  const dataFilePath = 'data.json';

  // Lee los datos existentes (si los hay)
  let existingData = [];
  try {
    existingData = JSON.parse(fs.readFileSync(dataFilePath, 'utf-8'));
  } catch (error) {
    console.error('Error al leer el archivo de datos:', error);
  }

  // Agrega el nuevo formulario a los datos existentes
  existingData.push(formData);

  // Guarda los datos actualizados en el archivo
  fs.writeFileSync(dataFilePath, JSON.stringify(existingData, null, 2), 'utf-8');

  res.json({ message: 'Formulario enviado con éxito' });
});

app.listen(port, () => {
  console.log(`Servidor escuchando en el puerto ${port}`);
});

// Configuración del transporte de correo electrónico
const transporter = nodemailer.createTransport({
    service: 'Gmail', // Cambia a tu servicio de correo electrónico (puede ser 'Gmail', 'Yahoo', etc.)
    auth: {
      user: 'tu_correo@gmail.com', // Tu dirección de correo electrónico
      pass: 'tu_contraseña', // Tu contraseña
    },
  });