// const platos=[
//     {
//         id: 1,
//         descripcion: 'encebollado',
//         idrestaruante: 1,
//     },
//     {
//         id: 2,
//         descripcion: 'Ceviche',
//         idrestaruante: 1,
//     },
//     {
//         id: 3,
//         descripcion: 'Tigrillo',
//         idrestaruante: 2,
//     },
//     {
//         id: 4,
//         descripcion: 'Tostadas',
//         idrestaruante: 2,
//     }

// ]
// const restaurant =[
//     {
//         id:1,
//         nombre: 'La carreta de Tono',
//     },
//     {
//         id: 2,
//         nombre: 'Miquelito Restarurant',
//     }


// ]
// //find la mas adecuada para realizar este ejercicio por filtro
// function buscarPlatoPorId(id, callback) {
//     const plato = platos.find((plato)=>plato.id=== id);
//     if(!plato){
//         const error =new Error();
//         error.message=`Plato no encontrado con id ${id}`;
//         return callback(error)

//     }
//     return callback(null, plato);
// }
// function buscarRestaurantPorId(id, callback)
//  {
//      const restaurante = restaurant.find (restaurante=> restaurante.id=== id);
//      if(!restaurante){
//          const error = new Error();
//          error.message= `Restaurant no encontrado por ID ${id}`;
//          return callback (error)

//      }
//      return callback (null, restaurante);
    
// }
   
    

// buscarPlatoPorId(1, (err, plato)=>{
//     if (err){
//         console.log(err.message);
//         return;
//     }
    

// })

// buscarRestaurantPorId (platos.idrestaruante,(err, restaurante)=>{
//     if (err){
//         console.log(err.message);
//         return;
//     }
//     plato.nombreRestaurante = restaurante;
//     delete plato.idrestaruante;
//     console.log(plato);
// })


//recurso de forma asincrónica utilizando callbaks
//los recursos habituales son base de datos

//definir arreglo como recurso
const platos=[
    {
        id:1,
        descripcion:'Encebollado',
        idrestaurante:1, //vinculado con el arreglo restaurantes
    },
    {
        id:2,
        descripcion:'Ceviche',
        idrestaurante:1,
    },
    {
        id:3,
        descripcion:'Tigrillo',
        idrestaurante:2,
    },
    {
        id:4,
        descripcion:'Tostadas',
        idrestaurante:2,
    },
]
const restaurantes=[
    {
        id:1,
        nombre:'La carreta de Tono',
    },
    {
        id:2,
        nombre:'Miguelito Restaurant',
    },
]
//callback es una función que tiene como parámetro otra función
function buscarPlatoPorId(id, callback)
{
    const plato = platos.find((plato)=> plato.id===id ); //se pone así ya que es una sola instrucción, sin llaves o return
    if (!plato)
    {
        const error = new Error();
        error.message =`Plato no encontrado con id ${id}`;
        return callback(error)
    }
    return callback(null, plato);
}


function buscarRestaurantePorId(id, callback)
{
    const restaurante = restaurantes.find((restaurante)=> restaurante.id=== id);
    if(!restaurante)
    {
        const error = new Error();
        error.message= `Restaurante con id ${id}`;
        return callback(error)
    }
    return callback(null,restaurante);
}
buscarPlatoPorId(1,(err,plato)=>{
    if(err)
    {
        console.log(err.message);
        return;
    }
    //console.log(plato);
    buscarRestaurantePorId(plato.idrestaurante, (err, restaurante)=>{
        if(err)
        {
            console.log(err.message);
            return;
        }
        plato.restaurante= restaurante;
        delete plato.idrestaurante;
        console.log(plato);
    })
})