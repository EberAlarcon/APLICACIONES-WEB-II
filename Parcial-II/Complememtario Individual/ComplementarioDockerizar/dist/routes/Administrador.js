"use strict";
// import {Router} from 'express'
// import{check}from 'express-validator'
Object.defineProperty(exports, "__esModule", { value: true });
// import{Administrador} from '../controllers'
// import funciones from '../middlewares'
// const {validarCampo}=funciones
// const {Obtener_administrador, Crear_Administrador}=Administrador
// const router=Router()
// //Establacemos las rutas para cada funcion que se realizo en la carpeta de controllers/products.ts
// router.get('/:id', check('id','Debe ser un id de mongo').isMongoId(),validarCampo,Obtener_administrador)
// router.post('/',check('nombre','El nombre es obligatorio').not().isEmpty(),validarCampo,Crear_Administrador)
const express_1 = require("express");
const controllers_1 = require("../controllers");
const { Obtener_administrador } = controllers_1.Administrador;
class AdministradorRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.routes();
    }
    routes() {
        this.router.get('/', Obtener_administrador);
    }
}
const administradorRoutes = new AdministradorRoutes();
administradorRoutes.routes();
exports.default = administradorRoutes.router;
