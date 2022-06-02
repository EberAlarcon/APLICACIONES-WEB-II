const express = require('express');

const {validacionUsuario,validacionUsuario2,Nombre_mayuscula} = require('../middleware/validaciones');
const { sanitizeBody } = require('express-validator');

//TRAEMOS EL ENRUTAMIENTO DE EXPRESS
const api = express.Router();

let repo = []; //INICIALIZAMOS LA VARIABLE REPO, AQUI SE GUARDAN LOS DATOS

let fin = [];
//CREAMOS RUTA PARA EL POST
api.get('/ruta', (req, res) => {
    return res.status(200).send({
        message: '/ Ruta prueba existe y presenta el siguiente mensaje'
    });  

});

api.get('/uno',  (req, res) => {
 
   
});
module.exports = api;