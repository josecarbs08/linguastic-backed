// 1. Importar las herramientas necesarias
const express = require('express');
const app = express();
const PORT = 3000; // El puerto donde nuestro servidor escuchará

// 2. Configurar "middlewares"
// Esto le permite a nuestro servidor entender los datos que llegan de un formulario
app.use(express.urlencoded({ extended: true }));

// Este middleware (CORS) es importante. Permite que tu página HTML,
// aunque sea un archivo local, pueda comunicarse con tu servidor.
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
});

// 3. Definir la ruta que va a recibir los datos
// Tiene que coincidir con el "action" del formulario: '/registrar'
app.post('/registrar', (req, res) => {
    // Mensaje para confirmar en la terminal que la conexión funcionó
    console.log("¡Conexión recibida en /registrar!");

    // Los datos que envió el formulario están en el objeto 'req.body'
    const nombre = req.body.nombre;
    const horario = req.body.horario;

    // Imprimimos los datos en la consola del SERVIDOR (la ventana negra de la terminal)
    console.log(`Datos recibidos -> Nombre: ${nombre}, Horario: ${horario}`);
    console.log("-------------------------------------------");

    // 4. Enviar una respuesta de vuelta al NAVEGADOR para que el usuario la vea
    res.send(`
        <div style="font-family: 'Poppins', sans-serif; text-align: center; padding: 40px; color: #333;">
            <h1>¡Registro completado, ${nombre}!</h1>
            <p style="font-size: 18px;">Hemos recibido tu solicitud para el horario de <strong>${horario}</strong>.</p>
            <p>Recibirás más detalles por correo pronto. ¡Gracias!</p>
            <a href="javascript:history.back()" style="display: inline-block; margin-top: 20px; text-decoration: none; background: #A050F0; color: white; padding: 10px 20px; border-radius: 8px;">Volver al formulario</a>
        </div>
    `);
});

// 5. Iniciar el servidor y ponerlo a "escuchar"
app.listen(PORT, () => {
    console.log(`Servidor iniciado y escuchando en el puerto ${PORT}`);
    console.log(`Puedes acceder en http://localhost:${PORT}`);
    console.log("Esperando peticiones POST en la ruta /registrar...");
});