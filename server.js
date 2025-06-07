const express = require('express');
const cors = require('cors'); // Asegúrate de tener esta línea
const app = express();

// Middlewares
app.use(cors()); // Y esta
app.use(express.urlencoded({ extended: true }));

// Ruta para registrar
app.post('/registrar', (req, res) => {
    console.log("¡Conexión recibida en /registrar!");
    const { nombre, horario } = req.body;
    console.log(`Datos recibidos -> Nombre: ${nombre}, Horario: ${horario}`);
    console.log("-------------------------------------------");
    res.send(`<h1>¡Registro completado, ${nombre}!</h1>`);
});

// --- LÍNEAS MODIFICADAS ---
const PORT = process.env.PORT || 3000;

app.listen(PORT, '0.0.0.0', () => {
    console.log(`Servidor iniciado y escuchando en el puerto ${PORT}`);
});