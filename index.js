//coloco una variable mongoose y requiero el mismo
const mongoose = require('mongoose');
//coloco una constante "conexion" y coloco entre comillas la direccion del mongo db atlas
const conexion= "mongodb+srv://eber:aplicaciones@cluster0.lhuw2.mongodb.net/Ejemplo?retryWrites=true&w=majority";
//funcion asincronica colocando varias constantes para establecer la conexion 
( async ()=>{
    const estadoConexion = await mongoose.connect(conexion);
    //se crea como un modelo fdfd de una base de dato como entidad el usuario y un atributo de nombre como string
    const Usuario =  mongoose.model("Usuario", { nombre: String } );
    //establezco un dato en el atributo de nombre
    const usuario1=  new Usuario({nombre:"Prueba sexto A"});
    //creo una consntante para guardar y tomo la variable anterior con el "save" guardo el dato
    const guardado=  await usuario1.save();
    const resultado =  await Usuario.find();
    //finalmente se tiene que mostrar el usuario 
    console.log(resultado)
})();