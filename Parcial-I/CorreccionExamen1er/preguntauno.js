//EJEMPLO DE ENTRADA
const NotasAlumnos = [
  {
    nota1: 2,
    nota2: 4,
    asignatura: { nombre: "Aplicaciones web II" },
    alumno: { nombre: "Miguel C." },
  },
  {
    nota1: 3,
    nota2: 2,
    asignatura: { nombre: "Aplicaciones web II" },
    alumno: { nombre: "Pedro S." },
  },
  {
    nota1: 5,
    nota2: 2,
    asignatura: { nombre: "Estructura de datos" },
    alumno: { nombre: "Juan P." },
  },
];
//FUNCION FLECHA QUE RECIBA EL ARREGLO DE OBJETOS Y DEVUELVA EN UN ARREGLO DE CADENAS LOS NOMBRES DE LOS ESTUDIANTES QUE PERDIERON LA ASIGNATURA APLICACIONES WEB II CUANDO LA SUMA DE LAS DOS NOTAS ES MENOR DE 8.
const principal = (NotasAlumnos) => {
  let array = [];
  for (i = 0; i < NotasAlumnos.length; i++) {
    const datos = NotasAlumnos[i].asignatura.nombre;
    if (datos == "Aplicaciones web II") {
      var nota1 = NotasAlumnos[i].nota1;
      var nota2 = (nota1 = NotasAlumnos[i].nota2);
      var resultado = NotasAlumnos[i].nota1 + NotasAlumnos[i].nota2;
      if (resultado < 8) {
        array.push(NotasAlumnos[i].alumno.nombre);
      }
      console.log(array);
    }
  }
  return array;
};
const dato = principal(NotasAlumnos);
console.log(dato);
