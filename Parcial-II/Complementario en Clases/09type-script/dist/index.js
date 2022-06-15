"use strict";
//npm init -y
//npm i express
//Instalar TypeScript de manera global
//npm install -g typescript
//tsc --init
//npm i typescript
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = require("dotenv");
(0, dotenv_1.config)();
const server_1 = require("./server");
const server = new server_1.Server();
server.listen();
//Para ejecutarlo es coloca tsc
//Instalar cors   npm i dotenv             npm i mongoose      npm i nodemon-d
//Instalar dotenv
//Instalar express-validator
//Instalar mongoose
