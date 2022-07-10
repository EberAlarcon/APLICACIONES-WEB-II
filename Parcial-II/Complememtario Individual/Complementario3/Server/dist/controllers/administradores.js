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
exports.ActualizarAdmin = exports.EliminarAdmin = exports.CambiarContraAdmin = exports.BuscarAdmin = exports.ObtenerIdAdmin = exports.ObtenerAdmins = exports.ObtenerAdmin = void 0;
const models_1 = require("../models");
const ObtenerAdmin = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const body = req.body;
    const administrador = new models_1.Administrador(body);
    const NewAdmin = yield administrador.save();
    if (!NewAdmin) {
        return res.status(400).json({
            message: `El cliente no se guardo`
        });
    }
    res.status(201).json("El cliente se creo sastifactoriamente");
});
exports.ObtenerAdmin = ObtenerAdmin;
const ObtenerAdmins = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const NewAdmin = yield models_1.Administrador.find({ estado: true });
    res.json(NewAdmin);
});
exports.ObtenerAdmins = ObtenerAdmins;
const ObtenerIdAdmin = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const NewAdmin = yield models_1.Administrador.findById(id);
    res.json(NewAdmin);
});
exports.ObtenerIdAdmin = ObtenerIdAdmin;
const BuscarAdmin = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const datos = req.query;
    const NewAdmin = yield models_1.Administrador.find(datos);
    res.json(NewAdmin);
});
exports.BuscarAdmin = BuscarAdmin;
const CambiarContraAdmin = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const campo = req.body;
    const NewAdmin = yield models_1.Administrador.findByIdAndUpdate({ _id: campo._id }, { contrasena: campo.contrasena }, { new: true });
    console.log(NewAdmin);
    if (!NewAdmin) {
        return res.status(400).json({
            message: `No se actualizo la contraseña!!`
        });
    }
    res.status(201).json("Se actualizó la contraseña con éxito.");
});
exports.CambiarContraAdmin = CambiarContraAdmin;
const EliminarAdmin = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const campo = req.body;
    const NewAdmin = yield models_1.Administrador.findByIdAndUpdate({ _id: campo._id }, { estado: campo.estado }, { new: true });
    console.log(NewAdmin);
    if (!NewAdmin) {
        return res.status(400).json({
            message: `No se pudo eliminar!!`
        });
    }
    res.status(201).json("Usuario eliminado con éxito.");
});
exports.EliminarAdmin = EliminarAdmin;
const ActualizarAdmin = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const _a = req.body, { estado } = _a, data = __rest(_a, ["estado"]);
    const AdminActualizado = yield models_1.Administrador.findByIdAndUpdate(id, data, { new: true });
    if (!AdminActualizado) {
        return res.status(400).json({
            message: `No se pudo actualizar!! `
        });
    }
    res.status(201).json(`El administrador ${data.nombre} se cambio con éxito.`);
});
exports.ActualizarAdmin = ActualizarAdmin;
