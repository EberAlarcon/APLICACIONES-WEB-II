

//npm init -y
//npm i express
//Instalar TypeScript de manera global
//npm install -g typescript
//tsc --init
//npm i typescript

import{config}from 'dotenv'
config()
import{Server}from './server'

const server=new Server()

server.listen()

//Para ejecutarlo es coloca tsc

//Instalar cors   npm i dotenv             npm i mongoose      npm i nodemon-d
//Instalar dotenv
//Instalar express-validator
//Instalar mongoose