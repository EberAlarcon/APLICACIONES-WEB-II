//El proyecto trata de dar un servicio de Salas de Eventos dentro de la Ciudad de Manta
//donde el usuario estè interesado en algun espacio de una Sala de Evento que desea alquilar

//Describo el arreglo de las Salas que puedan haber en la Ciudad de Manta, pa este ejemplo
//uso dos objetos.
const Salas=[
{
    idSala: 1,
    nombre: "Sala de Quinceañera",
    idcliente: 1,
    Cantidad:100,
    Direccion:"Calle 13",
},
{
    idSala: 2,
    nombre: "Sala de Graduacion",
    idcliente: 2,
    Cantidad:120,
    Direccion:"Av. 24",
}
]

//Arreglo de espacios donde esta vinculada con las salas de eventos.
const Espacios=[
    {
        idEspacio:1,
        Tipo: "Espacio Basico",
        idSala:1,
        Precio:150,
        Disponibilidad:"Disponible",
    },
    {
        idEspacio:1,
        Tipo: "Espacio Amplio",
        idSala:2,
        Precio:250,
        Disponibilidad:"Disponible",
    }
]

//Arreglo de los clientes
const Clientes=[
    {
        idcliente:1,
        Nombre:"Eber Alarcon",
        Cedula:"1317144986",
        Telefono:"0969872522",
    },
    {
        idcliente:2,
        Nombre:"Dayanne Cedeño",
        Cedula:"1307144985",
        Telefono:"0999874120",
    }
]

//Arreglo de algunos insumos/adicional que se desearia reservar.
const Insumos=[
{
  idinsumo:1,  
  nombre: "50 sillas",
  precio:50,
},
{
    idinsumo:2,  
  nombre: "Decoracion adicional",
  precio:200,
},
{
    idinsumo:3,  
  nombre: "Bocaditos",
  precio:75,
}
]



//Arreglo para la reserva de algun espacio de sala de eventos
const Reserva =[
    {
        idReserva:1,
        idcliente:1,
        idEspacio:1,
        idServicio:[2,3],
        fechainicio: "2022-05-07",
        fechafin:"2022-05-08",
    }
]


//Está función me permite la búsqueda de una sala de acuerdo a su nombre (lo realicè mediante "promise")  
function buscarSala(nombre)
 {
     return new Promise((resolve, reject)=>{
        const sala  =  Salas.find((sala)=> sala.nombre === nombre);
        if (!sala)
        {
            const error= new Error();
            error.message=`${nombre} no pudo ser encontrado`;
            reject(error);
        }
        resolve(sala);

     })
 }

//Se realiza la Búsqueda por nombre de en este ejemplo usarè "Sala de Graduacion"
buscarSala("Sala de Graduacion").then((sala)=>{
    return buscarSala(sala.nombre)
}).then((sala)=>{
    console.log(sala)
})
.catch((motivo)=>{
    console.log(motivo.message)
})



//Esta función me permite la búsqueda de algun espacio mediante su id, lo realicè usando "Callback" 
function buscarEspacioPorId(idEspacio, callback)
{
    const espacio = Espacios.find((espacio)=> espacio.idEspacio===idEspacio ); 
    if (!espacio)
    {
        const error = new Error();
        error.message =`Espacio de sala no encontrada con id ${idEspacio}`;
        return callback(error)
    }
    return callback(null, espacio);
}
//En esta parte busco un espacio pasando como id el 1.
buscarEspacioPorId(1,(err,espacio)=>{
    if(err)
    {
        console.log(err.message);
        return;
    }
    console.log(espacio);
})


//Función que me permite la búsqueda de espacios por precios, lo realicè usando "Callback"
function buscarEspacioPorPrecio(precio, callback)
{
    const espacio = Espacios.find((espacio)=> espacio.precio===precio ); 
    if (!espacio)
    {
        const error = new Error();
        error.message =`Espacio no encontrado con ${precio}`;
        return callback(error)
    }
    return callback(null, espacio);
}
//Se realiza la búsqueda del precio "300" para este ejemplo no hay ningun espacio
//con ese precio y mostrara por consola el mensaje de error de la funcion anterior.
buscarEspacioPorPrecio(500,(err,espacio)=>{
    if(err)
    {
        console.log(err.message);
        return;
    }
    console.log(espacio);
})


//Función que permite la consulta de las disponibilidades de los espacios, lo realice
//mediante "async"
async function buscarDisponibilidadEspacio(disponibilidad) {
    const espacio = Espacios.filter((espacio) => espacio.disponibilidad === disponibilidad);
    if (!espacio) {
        const error = new Error();
        error.message = `No hay Espacios en Salas disponibles`;
        throw error;
    }
    return espacio;
}
(async () => {
    try {
        const espacio = await buscarDisponibilidadEspacio("Està Disponible");
        console.log(espacio);
    }
    catch(error){
        console.log(error.message)
    }
})();



