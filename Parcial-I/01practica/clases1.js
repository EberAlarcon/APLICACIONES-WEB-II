const persona={
    nombre:"Homero",
    apellido:"Simpson",
    esDocente: true,
    geolocalizacion:{
        lat:234.234234,
        lng:34.3453453,
    },
    getNombreCompleto(){
        return `${this.nombre} ${this.apellido}`
    }
}
// function mostrarDatos(personax){
// console.log(personax.getNombreCompleto())
// console.log(personax.geolocalizacion.lat)
// }
// mostrarDatos(persona)

function mostrarDatos({nombre, apellido, geolocalizacion: {lat, lng}, getNombreCompleto}){
    console.log(nombre)
    console.log(apellido)
    console.log(lat)
    console.log(lng);
    console.log(persona.getNombreCompleto());
    
}
mostrarDatos(persona)