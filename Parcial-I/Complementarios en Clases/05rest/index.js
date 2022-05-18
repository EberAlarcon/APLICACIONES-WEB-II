//Esytcutura del servidor
//Crear=> Post
//Leer=> Get
//Actualizar=> Patch-Post
//Elmininar=> Delete

//npm i express
//opcional
//npm i nodemon --save-dev
//Conectar de un servidor a otro
//npm i cors
//En caso de error
//npm cache clean --force

const express = require ('express');
const cors =  require ('cors');

const app = express ();
const puerto = 2500;
//Permite agg al servidor un midework=>una funcionalidad q permite una validacion 
//tranformacion. Permite cualquier ip conectarse al servidor
app.use(cors()).use(express.json());

app.get('/prueba', (req,res,next)=>{
    next();
},(req,res,next)=>{
    //Para devolver algo
    res.status(200).send({mensaje: "Hola Prueba "});


})

app.listen(puerto,()=>{
    console.log(`Servidor ejecutandose en puerto ${puerto}`)
})

//instalar postman