"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = require("express");
const controllers_1 = require("../controllers");
const middlewares_1 = __importDefault(require("../middlewares"));
const { validarCampo } = middlewares_1.default;
const { Obtener_administrador } = controllers_1.Administrador;
const router = (0, express_1.Router)();
exports.router = router;
//Establacemos las rutas para cada funcion que se realizo en la carpeta de controllers/products.ts
router.get('/', Obtener_administrador);
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
