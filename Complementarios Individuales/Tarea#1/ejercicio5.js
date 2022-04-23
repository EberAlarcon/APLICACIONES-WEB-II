//Crear una funcion flecha que reciba un arreglo de comidas y lo devuelva
//en mayuscula y mejoras en su formato de presentacion
import chalk from 'chalk';
Array.prototype.toUpperCase = function() {
    return this.map(word => word.toUpperCase())
  };
  const chalk = require('chalk');
  const comida = [
  'pan', 
  'mortadela', 
  'queso', 
  'mantequilla'].toUpperCase(); 
  for (const comidax of comida) {
    
    console.log(chalk.bgGreen(comidax));
  }