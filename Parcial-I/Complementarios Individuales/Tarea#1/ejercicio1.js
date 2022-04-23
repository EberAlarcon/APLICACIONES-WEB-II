//Crear una funcion que reciba N como parametro y genere la tabla 
//de multiplicar por consola de este parametro.

//Esta es otra parte que funciona donde al momento de imprimir colocamos el valor 
//que se desea que me muestre la tabla de multiplicar como por ejemplo el numero 6.
function multiplicacion(n) {
console.log('--------Ejemplo 1-----------');
    console.log('Tabla de multiplicar del '+n);           
            for (let i= 1; i<=12; i++) {
                console.log(n+ "*"+ i+ "= "+n*i);
                }}
                multiplicacion (6)

//A cambio en este codigo al momento de imprimir coloco el valor que deseo hasta que posicion 
//de la tabla quiero que se multiplique como por ejemplo el valor numero 4
//se mostrará la tabla de multiplicar del "0", "1", "2", "3".
function multiplicacion(n) {
    let numero=0;    
    for (let k = 0; k<n;k++) {
        console.log('Tabla de multiplicar del '+k);  
    for (let i= 1; i<=10; i++) {
        numero= k* i;
        console.log(k+ "*"+ i+ "= "+numero);
        }}}
        multiplicacion (4)
