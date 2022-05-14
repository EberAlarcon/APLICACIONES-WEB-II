//exportamos la libreria de mongoose que previamente instalamos
const mongoose = require ('mongoose');
//Definimos los datos de conexion al mongodb
const conexion="mongodb+srv://SalaEvento:aplicaciones@cluster0.iej87.mongodb.net/Sala_Tarea?retryWrites=true&w=majority";

(async ()=>{
 const estadoConectado=await mongoose.connect(conexion)
 //a traves de la funcion mongoose model definimos los atributos de esta coleccion

//Creo una entidad "Sala" con sus atributos y defino las llaves foraneas de las entidades de "Empresas" y "TipoSala"
const Sala = mongoose.model("Sala",
{
    nombre:String,
    Precio:Number,
    Celular:String,
    Correo:String,
    Direccion:String,
idEmpresa:{type:mongoose.Types.ObjectId,ref:"Empresa" },
idTipoSala:  {type:mongoose.Types.ObjectId,ref:"TipoSala" }, 
});

//Creo una entidad "TipoSala" con sus atributos
const TipoSala = mongoose.model("TipoSala",
{
nombre:String,  
});

//Creo una entidad "Administrador" con sus atributos y defino como llave foranea de la entidad de "Empresa"
const Administrador =mongoose.model("Administrador",
{
    nombre:String,
    Nusuario:String,
    Contraseña:String,
    Correo:String,
idEmpresa:{type:mongoose.Types.ObjectId,ref:"Empresa" },   
});
//Creo una entidad "Empresa" con sus atributos y defino como llave foranea de la entidad de "Administrador"
const Empresa =mongoose.model("Empresa",
{
    nombre:String,
    Celular:String,
    Correo:String,
idAdministrador:{type:mongoose.Types.ObjectId,ref:"Administrador" }, 
  
});



//Defino en un arreglo los campos para un administrador, segun se establecio em el modelo
const administrador =new Administrador({
    nombre:"Eber Alarcon",
    Nusuario:"eber17",
    Contraseña:"*********",
    Correo:"eber@gmail.com",  
        })
//Guardo datos establecidos
const guardarx=await administrador.save();

//Defino en un arreglo los campos para la empresa relacionadola con la llave foranea de "Administrador"
const empresa=new Empresa({
    nombre:"Universal",
    Celular:"0988888888",
    Correo:"empresa@gmail.com",
    idAdministrador:administrador._id,

})
//Guardo datos establecidos
const guardar=await empresa.save();

//Defino en un arreglo los campos para los tipos de sala 
const Tipo_Sala=new TipoSala({
    nombre:"Graduacion",
    })
 //Guardo datos establecidos
const guardara =await Tipo_Sala.save();

//Defino en un arreglo los campos para una sala relacionadola como llaves foraneas de la entidad de tiposala y de la empresa
const Cons_Sala=new Sala({
nombre:"sala de Eventos Yanira",
Precio: 120,
Celular:0999999999,
Correo:"EventosYanira@gmail.com",
Direccion:"27V3+69C",
idTipoSala: Tipo_Sala.id,
idEmpresa: empresa._id,
})
//Guardamos en la base de datos
const guardado=await Cons_Sala.save();

//a traves de un a funcion await buscamos todos las salas de la coleccion ya que no tenemos ningun filtro
const resultado = await Sala.find()
//mostramos el resultados de la colecccion de Sala
console.log(resultado);
})();

//Descargas de paquetes
//npm init --y
// npm i mongoose