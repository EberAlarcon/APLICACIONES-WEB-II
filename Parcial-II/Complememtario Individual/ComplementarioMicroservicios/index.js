

const express = require ('express');
const morgan = require ('morgan')



//Los middelwares funcionan para procesar datos antes de que lleguen a las rutas
function logger(req, res, next){
    console.log(`Route received: ${req.protocol}://${req.get('host')}${req.originalUrl}`);
    next();
}



const app = express();
//Para entender los archivos JSON
app.use(express.json());
//Para ver la repuesta del servidor de logiar de mostrar por consola las petuiciones
app.use(morgan('dev'))
app.use(logger);

//Settings
app.set('appname', 'Eber Express');
app.set('view engine', 'ejs')


//Es una funcion express que hace que cualquier ruta podamos hacer algo antes que llegue
app.all('/user', (req, res, next)=>{
    console.log('Por aqui paso');
    next();
})
//Para mandar una peticion
//GRUPO
// app.get('/api/prueba/v1', (req, res)=>{
//     res.send('ruta 1')
// })
// app.get('/api/prueba/v2', (req, res)=>{
//     res.send('ruta 2')
// })
//mandar un archivo JSON

//Routes

app.get('/', (req, res)=>{
    const data =  [{name: 'jhon'},{name: 'joe'},{name: 'cameron'}]
    res.render('index.ejs', data);
})



app.get('/user', (req, res)=>{
    res.json({
        username: 'Eber',
        Lastname: "Alarcon"
    });
})


//el id para crearlo y mostrarlo
app.post('/user/:id', (req, res)=>{
    console.log(req.body);
    console.log(req.params);
    res.send('PETICION RECIBIDO')
})


app.put('/user/:id', (req, res)=>{
    console.log(req.body);
    res.send(`User ${req.params.id} actualizado`)
})

app.delete('/user/:id', (req, res)=>{
    res.send(`User ${req.params.id} ha sido eliminado`)
})

//MIDELWARES
app.use(express.static('public'));





app.listen(3000, ()=> {
    //Solo para verificar el setting
    console.log(app.get('appname'));
    console.log('Server conectado en puerto 3000');
})