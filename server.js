const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const cors = require('cors'); 

const app = express();
app.use(cors());

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', 'https://whytenot.com');
    next();
  });

app.use(bodyParser.urlencoded({ extended: true }));

app.post('/send-email', (req, res) => {
  const { name, email, phone, comment, service } = req.body;

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'kvalera200244@gmail.com', // Reemplaza con tu dirección de correo
      pass: '-.K2002avq1992', // Reemplaza con tu contraseña de correo
    },
  });

  const mailOptions = {
    from: 'kvalera200244@gmail.com',
    to: 'kelvinalexandervalera@gmail.com', // Reemplaza con tu dirección de correo personal
    subject: 'Formulario de contacto',
    text: `
      Nombre: ${name}
      Correo: ${email}
      Teléfono: ${phone}
      Comentario: ${comment}
      Servicio: ${service}
    `,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error('Error al enviar el correo:', error);
      res.json({ success: false, error: error.message }); // Agregado el error al JSON de respuesta
    } else {
      console.log('Correo enviado:', info.response);
      res.json({ success: true });
    }
  });
  if (data.success) {
    alert('¡Formulario enviado con éxito!');
  } else {
    alert(`Hubo un error al enviar el formulario: ${data.error}`);
  }
  
});

app.listen(3001, () => {
  console.log('Servidor iniciado en https://whytenot.com');
});
