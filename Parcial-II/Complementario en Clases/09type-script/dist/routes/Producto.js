"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = require("express");
const express_validator_1 = require("express-validator");
const controllers_1 = require("../controllers");
const middlewares_1 = __importDefault(require("../middlewares"));
const { validarCampo } = middlewares_1.default;
const { crear_producto, Obtener_producto, Obtener_productos } = controllers_1.Producto;
const router = (0, express_1.Router)();
exports.router = router;
//Establacemos las rutas para cada funcion que se realizo en la carpeta de controllers/products.ts
router.get('/', Obtener_productos);
router.get('/:id', (0, express_validator_1.check)('id', 'Debe ser un id de mongo').isMongoId(), validarCampo, Obtener_producto);
router.post('/', (0, express_validator_1.check)('nombre', 'El nombre es obligatorio').not().isEmpty(), validarCampo, crear_producto);
// import { Router } from 'express'
// import { check } from 'express-validator'
// import { Producto } from '../controllers'
// const { Obtener_productos, Obtener_producto, crear_producto } = Producto
// import funciones from '../middlewares'
// const { validarCampo } = funciones
// const router = Router()
// router.get('/', Obtener_productos)
// router.get('/:id'
// , check('id', 'Debe ser un ID de mongo valido').isMongoId()
// ,validarCampo
// ,  Obtener_producto)
// router.post('/'
// , check('nombre','El nombre es obligatorio').not().isEmpty()
// ,validarCampo
// ,crear_producto)
// export {router }
