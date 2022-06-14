"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Crear_Administrador = exports.Obtener_administrador = void 0;
//impotamos la varaible definida de la carpeta de models y tambien la variable de la carpeta de interfaces
const models_1 = require("../models");
const Obtener_administrador = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    res.json({
        message: 'Administrador'
    });
});
exports.Obtener_administrador = Obtener_administrador;
const Crear_Administrador = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const _a = req.body, { estado } = _a, body = __rest(_a, ["estado"]);
    const ExisteAdministrador = yield models_1.Administrador.findOne({ nombre: body.nombre });
    if (ExisteAdministrador) {
        return res.status(400).json({
            message: `El nombre administrador ${body.nombre} ya existe`
        });
    }
    const administrador = new models_1.Administrador(body);
    const AdministradorNuevo = yield administrador.save();
    return res.status(200).json(AdministradorNuevo);
});
exports.Crear_Administrador = Crear_Administrador;
