//Una constante que voy a requerir express
const express =  require('express');
const cors =  require('cors');
//Desectricturo dbConnection hacia la ruta donde tengo mi conexion
const { dbConnection } = require ('./database/config');
//Se crea una clase server con su constructor para realizar el proceso de conexion de servidor
class Server {
    constructor(){
        this.app = express.Router();
        this.router = express.Router();
        this.port = process.env.PORT;
        this.paths= {
            productos:'/api/productos',
        }
        this.conectarBD();
        this.middlewares();
        this.routes();
        //    localhost:3000/v1/sextoa/api/productos
        this.router.use('/v1/sextoa', this.app);
        this._express=  express().use(this.router)
    }

    //Funciones que permten la conectividad del servidor
    async conectarBD(){
        await dbConnection();
    }
    middlewares(){
        this.app.use(cors());
        this.app.use(express.json());
        
    }
    routes(){
        this.app.use(this.paths.productos
            , require('./routes/productos') )

    }
    listen(){
        this._express.listen(this.port, ()=>{
            console.log(`Servidor corriendo en puerto ${this.port}`);
        })
    }
}


module.exports =  Server;