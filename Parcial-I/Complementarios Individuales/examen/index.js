//EJEMPLO DE ENTRADA
const NotasAlumno = [
  {
    nota1: 2,
    nota2: 4,
    asignatura: { nombre: "Aplicaciones Web II" },
    alumno: { nombre: "Miguel C." },
  },
  {
    nota1: 3,
    nota2: 2,
    asignatura: { nombre: "Aplicaciones Web II" },
    alumno: { nombre: "Pedro S." },
  },
  {
    nota1: 5,
    nota2: 2,
    asignatura: { nombre: "Estructura de datos" },
    alumno: { nombre: "Juan P" },
  },
];
//FUNCION FLECHA PARA DEVOLVER LOS NOMBRES DE LOS ESTUDIANTES MENOS DE 8 EN APLICACIONES WEB
const principal = (NotasAlumno) => {
  let array = [];
  for (i = 0; i < NotasAlumno.length; i++) {
    const datos = NotasAlumno[i].asignatura.nombre;
    if (datos == "Aplicaciones Web II") {
      var nota1 = NotasAlumno[i].nota1;
      var nota2 = (nota = NotasAlumno[i].nota2);
      var suma = NotasAlumno[i].nota1 + NotasAlumno[i].nota2;
      if (suma < 8) {
        array.push(NotasAlumno[i].alumno.nombre);
      }
      console.log(array);
    }
  }
  return array;
};
const dato = principal(NotasAlumno);
console.log(dato);
