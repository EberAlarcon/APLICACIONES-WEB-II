//SE REQUIERE "EXPRESS" Y "CORS"

const express = require ('express');
const cors = require ('cors');
const req = require('express/lib/request');

//SE AÑADE CONSTANTES QUE TENDRÁ DEL MISMO EXPRESS Y LA VARIABLE DEL PUERTO Y UN LET COMIDA COMO ARREGLO
const app = express();
const ruta = express.Router();
const PUERTO = 3000;
let comidas =[];


//ESTRCUTURA
app.use(cors()).use(express.json());

//SE DEFINE CADA UNA DE LAS RUTAS 
ruta.get('/', (req, res)=>{
    res.status(200).send(comidas);
})



ruta.post('/:id', (req, res)=>{
    const {body}=req;
    if (comidas.filter(c=> c.codigo===body.codigo).length>0){
       return res.status(400).send({
            message: `El codigo ya existe`,
            response: body
        })
    }



    comidas.push(body);
    res.status(201).send({
        message:`El dato se inserto corractamente`,
        response:body
    })
}) 
ruta.put('/', (req, res)=>{
const {codigo, descripcion, tipo}=req.body;{
    if (comidas.filter(c=> c.codigo=== codigo).length==0){
        res.status(400).send({
            message:  `No se encuentra la comida`
        })
      
    }
    let comida = comidas.filter(c=> c.codigo===codigo)[0];
    comida.descripcion = descripcion;
    comida.tipo=tipo;
    res.status(200).send({
        message: `Dato modificado`,
        response: comida
    })
   

}
})
ruta.delete('/codigo', (req, res)=>{
 const {codigo}= req.params;
 comidas = estudiantes.filter(c=>c.codigo=== codigo);
 res.status(200).send({
     message: `Eliminado correctamente`
 })
})

ruta.get('/:codigo', (req, res)=>{
    const {codigo}= req.params;
    comida = comidas.filter(c=>c.codigo === codigo);
    if (comida.length > 0){
        res.status(200).send({
            message : `Dato Encontrado`,
            response : comida [0]
        })
    }else{
        res.status(400).send({
            message: `Comida con ese codigo no encontrado`
        })
    }
})

//SE HACE UN LLAMADO AL PUERTO Y UN MENSAJE QUE CONFIRMACION CON LA VARIABLE DEL PUERTO
app.listen(PUERTO,()=>{
    console.log(`Servidor funcionando en http://localhost: ${PUERTO}`);
})