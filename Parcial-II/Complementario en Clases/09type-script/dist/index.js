"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
//npm init -y
//npm i express
//Instalar TypeScript de manera global
//npm install -g typescript
//tsc --init
//npm i typescript
const express_1 = __importDefault(require("express"));
//En esta parte se comenta
// const express = require ('express');
const app = (0, express_1.default)();
const port = 3000;
app.get('/', (req, res) => {
    res.json({
        msg: 'ok'
    });
});
app.listen(port, () => {
    console.log(`prueba funcionando`);
});
//Para ejecutarlo es coloca tsc
//Instalar cors   npm i dotenv             npm i mongoose      npm i nodemon-d
//Instalar dotenv
//Instalar express-validator
//Instalar mongoose
