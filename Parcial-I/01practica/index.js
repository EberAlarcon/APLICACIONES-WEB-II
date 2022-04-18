
mostrarLista(5);
function mostrarLista(tope){
    for (let i=0; i< tope ; i++)
    {
        console.log(i)
    }
}


const mostrarLista= tope =>
function llamarFunctionListado(fn, parametro){
    console.log(fn(parametro))
}
llamarFunctionListado (mostrarLista,7)