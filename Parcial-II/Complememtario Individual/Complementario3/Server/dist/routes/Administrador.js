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
const { ObtenerAdmin, ObtenerAdmins, ObtenerIdAdmin, BuscarAdmin, CambiarContraAdmin, EliminarAdmin, ActualizarAdmin } = controllers_1.Administrador;
const router = (0, express_1.Router)();
exports.router = router;
//Establacemos las rutas para cada funcion que se realizo en la carpeta de controllers/products.ts
router.post('/', ObtenerAdmin);
router.get('/', ObtenerAdmins);
router.get('/inicio-sesion', BuscarAdmin);
router.put('/reset-contra', CambiarContraAdmin);
router.put('/:id', ActualizarAdmin);
router.put('/delete', EliminarAdmin);
router.get('/:id', ObtenerIdAdmin);
