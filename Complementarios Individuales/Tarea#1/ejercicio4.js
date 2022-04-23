//Recorrer el arreglo definido en la opcion anterior y mostrarlo aplicando
//4 estrcuturas de repeticion.

// class comidaFavorita{
//     constructor (nombre, ingredientes, tipo, cocina){

    const comidaFavorita= [{
        Nombre: 'Caldo de pollo:',
        Ingredientes: [
            '1 gallina criolla',
            '2 ½ litros de agua fría',
            '1 cebolla paiteña partida en 2',
            '1 rama cebolla blanca picada',
            '1 pimiento partido en 2',
            '4 dientes de ajo picados',
            '1 rama de culantro picados muy finamente',
            '1 yuca mediana pelada y cortada en trozos',
            'Orégano, comino y sal al gusto'],
        Tipo: 'Plato Fuerte', 
        Cocina: 'Ecuatoriana'
    },
    {
        Nombre: 'Salchipapa',
        Ingredientes: [
            'Papas',
            'Aceite',
            'Sal',
            'Salsa de Tomate',
            'Mayonesa'],
        Tipo: 'Plato Fuerte',
        Cocina: 'Ecuatoriana'
    }
    ]

function estructura(dato) {
    console.log("Usando forEach");
    dato.forEach(comida => {
        console.log("nombre: %s, ingredientes:%s, tipo:%s, cocina:%s", comida.nombre, comida.ingredientes, comida.tipo, comida.cocina );
        
    });
    
}
estructura(comidaFavorita);
//longitud del arreglo
let resultado = comidaFavorita.length;

//Usando FOR
function estructura2(info, valor) {
    console.log("Usando for");
    for ( x = 0; x < valor; x++){
        console.log(info[x]);
    }
     }
     estructura2(comidaFavorita, resultado);
//Usando while
function estructura3(info, valor) {
console.log("Usando While");
let x = 0;
while (x < valor) {
    console.log(info[x]);
    x++;
    
}

    
}
estructura3(comidaFavorita, resultado);
//Usando do while
function estructura4(info, valor) {
    console.log("Usando Do While");
    let  x=0;
    do {
        console.log(info[x]);
        x++;
    } while (x < valor);

    
}
estructura4(comidaFavorita, resultado);


    
