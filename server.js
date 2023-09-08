const express = require("express");
const bodyParser = require("body-parser");
const nodemailer = require("nodemailer");
const cors = require("cors");

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "https://whytenot.com");
  next();
});

app.post("/send-email", (req, res) => {
  const { name, email, phone, comment, service } = req.body;

  // Configuración del transporte para Zoho
  const transporter = nodemailer.createTransport({
    host: "smtp.zoho.com",
    port: 465, // Puerto seguro para Zoho
    secure: true, // Usar SSL/TLS
    auth: {
      user: "kikodiaz@whytenot.com", // Tu dirección de correo de Zoho
      pass: "Whytenot132.", // Tu contraseña de Zoho
    },
  });

  const mailOptions = {
    from: "kikodiaz@whytenot.com", // Tu dirección de correo de Zoho
    to: "kikodiaz@whytenot.com",
    subject: "Formulario de contacto",
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
      console.error("Error al enviar el correo:", error);
      res.json({ success: false, error: error.message });
    } else {
      console.log("Correo enviado:", info.response);
      res.json({ success: true });
    }
  });
});

app.listen(3001, () => {
  console.log("Servidor iniciado en https://whytenot.com");
});
