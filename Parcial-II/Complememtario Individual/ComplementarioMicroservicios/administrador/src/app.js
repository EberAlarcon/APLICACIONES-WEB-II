const express = require('express')
const app = express()

const respuesta = {
    data: [],
    arquitectura: 'Microservicio',
    descripcion: 'Administrador Microservicio'

}

app.get('/api/v1/administrador', (req, res) => {
    const {limite='10',desde='0'}=req.query
    const query={estado:true};
    const [total,data]=await  Promise.all([
    data.countDocuments(query),
    data.find(query) 
    .skip(Number(desde))
    .limit(Number(limite))
    ])
    
    res.json({
        total,
        respuesta
})
})

module.exports = app;