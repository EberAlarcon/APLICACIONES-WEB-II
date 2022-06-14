import express from 'express'
import {Router} from 'express'
import {Application} from 'express'
import dbConnection from './database/config'
import administradorRoutes from './routes/Administrador'
 class Server{
    private app: Application;
    router: Router;
     private _express: any;
     private paths: any;  
     private port: any;  
    // nota_routes = require('./routes/Products');
    constructor(){
      
        this.app = express();
       this.router=Router();
       this.port = process.env.PORT;
       this.paths= {
        administrador:
        '/api/administrador',//definimos la ruta que tomara para cliente en el server
         }
        
        this.routes();
        this.conectarBD();
        this.router.use('/v1/salaevento', this.app);
        this._express=  express().use(this.router)
    }
    private async dbConnection(){}
   
    async conectarBD(){
        await dbConnection();
    }

    routes(){// Rutas donde importortamos los símbolos de modulos al hambito actual.
        this.app.use(this.paths.administrador
            ,administradorRoutes);
        
    

    }
     listen(){
        this._express.listen(this.port, ()=>{// Iniciar el servidor para escuchar la conexión cifrada.
            console.log(`Servidor corriendo en puerto ${this.port}`);
        })
     }

}
export{Server}