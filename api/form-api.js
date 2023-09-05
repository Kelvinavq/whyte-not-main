// form-api.js
export default async function handler(req, res) {
    if (req.method === 'POST') {
      try {
        // Manejar la solicitud POST aquí
        const { body } = req;
        // Procesa los datos del formulario y realiza las acciones necesarias
        // Luego, envía una respuesta adecuada al cliente
        res.status(200).json({ success: true, message: 'Formulario enviado con éxito' });
      } catch (error) {
        console.error('Error al procesar la solicitud:', error);
        res.status(500).json({ success: false, message: 'Error interno del servidor' });
      }
    } else {
      // Manejar otros métodos HTTP (GET, PUT, DELETE) si es necesario
      res.status(405).json({ success: false, message: 'Método no permitido' });
    }
  }
  