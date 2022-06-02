//localhost:3000/api/uno
const express = require('express'); //REQUERIMOS EXPRESS

//CONFIGURAR PUERTO
const port = process.env.PORT || 3000;

//RUTAS
const computadora_route = require('./routes/Usuario')

//INICIALIZAR EXPRESS
const app = express();

//CONFIGURAR SERVER
app.use(express.json());

//USO DE RUTA
app.use('/api', computadora_route,(error, req, res, next) => {
    res.status(400).json({
        status: 'error',
        message: "No existe la ruta",
    });
});
app.use('/api',(error, req, res, next) => {
    res.status(400).json({
        status: 'error',
        message: "No existe la ruta",
    });
});

//CONFIGURAR APP
app.listen(port, function() {
    console.log("API Rest corriendo en el puerto: " + port);
    console.log(" " + " " + " " +" " + " " + " " +" " + " " + " " + "CONEXION CORRECTA");
});

