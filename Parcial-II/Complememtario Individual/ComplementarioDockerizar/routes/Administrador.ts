import {Router} from 'express'
import{check}from 'express-validator'
import{Administrador} from '../controllers'
import funciones from '../middlewares'


const {validarCampo}=funciones

const {Obtener_administrador}=Administrador

const router=Router()

//Establacemos las rutas para cada funcion que se realizo en la carpeta de controllers/products.ts
router.get('/',Obtener_administrador)
// router.get('/:id', check('id','Debe ser un id de mongo').isMongoId(),validarCampo,Obtener_producto)
// router.post('/',check('nombre','El nombre es obligatorio').not().isEmpty(),validarCampo,crear_producto)


//Exportamos la variable router
export {router}

// import {Router} from 'express'
// import{check}from 'express-validator'

// import{Administrador} from '../controllers'
// import funciones from '../middlewares'


// const {validarCampo}=funciones

// const {Obtener_administrador, Crear_Administrador}=Administrador

// const router=Router()

// //Establacemos las rutas para cada funcion que se realizo en la carpeta de controllers/products.ts

// router.get('/:id', check('id','Debe ser un id de mongo').isMongoId(),validarCampo,Obtener_administrador)

// router.post('/',check('nombre','El nombre es obligatorio').not().isEmpty(),validarCampo,Crear_Administrador)

// import {Router} from 'express'
// import{check}from 'express-validator'
// import{Administrador} from '../controllers'
// const {Obtener_administrador}=Administrador
// class AdministradorRoutes{
//     router: Router;
//     constructor(){
//         this.router=Router();
//         this.routes();
//     }
//     routes(){
//         this.router.get('/',Obtener_administrador);
//     }

// }
// const administradorRoutes=new AdministradorRoutes();

// administradorRoutes.routes();
// export default administradorRoutes.router;

// export {router}

