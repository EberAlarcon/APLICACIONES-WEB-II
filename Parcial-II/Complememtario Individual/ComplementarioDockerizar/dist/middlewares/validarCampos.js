"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validarContraseña = exports.validacionNombre = exports.validarCampo = void 0;
//Importamos check para validadciones
const express_validator_1 = require("express-validator");
//Se realiza la validacion de campo en caso de presentarse algun error mandar un json errors
const validarCampo = (req, res, next) => {
    const errors = (0, express_validator_1.validationResult)(req);
    if (!errors.isEmpty()) {
        return res.status(400).json(errors);
    }
    next();
};
exports.validarCampo = validarCampo;
const validacionNombre = [
    (0, express_validator_1.check)('nombre')
        .not()
        .notEmpty().withMessage('El nombre no puede estar vacía'),
    (req, res, next) => {
        validarCampo(req, res, next);
    }
];
exports.validacionNombre = validacionNombre;
const validarContraseña = [
    (0, express_validator_1.check)('contrasena')
        .not()
        .notEmpty().withMessage('La clave no puede estar vacía'),
    (req, res, next) => {
        validarCampo(req, res, next);
    }
];
exports.validarContraseña = validarContraseña;
