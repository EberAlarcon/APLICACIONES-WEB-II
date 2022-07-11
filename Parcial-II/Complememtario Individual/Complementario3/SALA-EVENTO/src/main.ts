import './style.css'
// Se importo la variable de httpAxios del archivo HTTP
import {httpAxios} from './HTPP'
// Se importó Administrador desde la carperta de Interface
import {Administrador} from './Interface/IAdmin'
// De importa axios y se lo descarga
import axios from 'axios';



const app = document.querySelector<HTMLDivElement>('#app')!
let _id: string | undefined =''
const actualizar_table= async()=>{
  const respproductos = await (await httpAxios.get('administradores')).data
  console.log(respproductos);
//-------------------------
//----------Tabla----------
//-------------------------  
  const tabla = document.createElement('table');
  tabla.id="tabla"
  tabla.border="1"

  for(const producto of respproductos){
    const row = tabla.insertRow();
    const celda = row.insertCell();
    celda.innerHTML=`<button class="boton" value='${producto._id}'>${producto.nombre}</button>`;
    const celda2 = row.insertCell();
    celda2.innerHTML=`${producto.nusuario}`
    const celda3 = row.insertCell();
    celda3.innerHTML=`${producto.correo}`
    const celda4 = row.insertCell();
    celda4.innerHTML=`${producto.contrasena}`

  }
  cuerpo.innerHTML=""
  cuerpo.appendChild(tabla)

 document.querySelectorAll('.boton').forEach((ele:Element)=>{
    ele.addEventListener('click',async ()=>{
     console.log((ele as HTMLButtonElement).value)
     const {data}= await  httpAxios.get<Administrador>(`administradores/${(ele as HTMLButtonElement).value}`);
     console.log({data})
     nombre.value=data.nombre;
     usuario.value=data.nusuario;
     contrasena.value=data.contrasena;
     correo.value=data.correo;
   _id=data._id
    })
  })
}


/*app.innerHTML = `
  <h1>Hello Vite!</h1>
  <a href="https://vitejs.dev/guide/features.html" target="_blank">Documentation</a>
`*/

app.innerHTML +=`
<div >
<h1>Registrese Usuario Administrador</h1>
<label for='nombre' >Nombre:</label><input id='nombre'/>
<label for='nusuario' >Usuario:</label><input id='nusuario'/>
<label for='correo' >Correo:</label><input id='correo'/>
<label for='contrasena' >Contraseña:</label><input id='contrasena'/>

<p>
		<ul id="errores"></ul>
	</p>
<button id="nuevo">Nuevo</button>
<button id="grabar">Grabar</button>


<div id="cuerpo">${actualizar_table()}</div>
</div>

<div>
<h1>Login del Administrador</h1>
<label for='nombres' >Usuario:</label><input id='nombres'/>
<label for='contrasenas' >Contraseña:</label><input id='contrasenas'/>
<button id="iniciar">Buscar</button>
</div>
<div id="actualizar"></div>

`

//Se define algunas funciones para el manejo de cada variable.
const nombre= document.querySelector<HTMLInputElement>('#nombre')!;
const usuario= document.querySelector<HTMLInputElement>('#nusuario')!;
const correo= document.querySelector<HTMLInputElement>('#correo')!;
const contrasena= document.querySelector<HTMLInputElement>('#contrasena')!;
const nombres= document.querySelector<HTMLInputElement>('#nombres')!;
const contrasenas= document.querySelector<HTMLInputElement>('#contrasenas')!;
let erroresUl:HTMLUListElement = document.querySelector('#errores')!
const nuevo = document.querySelector<HTMLButtonElement>("#nuevo")!
const Bgrabar = document.querySelector<HTMLButtonElement>("#grabar")!

const iniciar = document.querySelector<HTMLButtonElement>("#iniciar")!

const cuerpo = document.querySelector<HTMLDivElement>('#cuerpo')!

const actualizar = document.querySelector<HTMLDivElement>('#actualizar')!
function imprimirErrores(errores: string[]): void {
  // Limpiamos los errores anteriores en HTML
  erroresUl.textContent = '' 
  // Generamos todos LI con su mensaje
  errores.forEach(function(mensaje) {
      // Creamos una variable nuevo LI.
      let nuevoLi = document.createElement('li')
      nuevoLi.textContent = mensaje
      // Lo añadimos dentro de nuestro UL.
      erroresUl.appendChild(nuevoLi)
  })
}
function enviarFormulario(): void {

  // Variables
  let errores: string[] = []
  // let regexpNumber: RegExp = /^[+ 0-9]{10}$/;
  let coreo_ex: RegExp = /\S+@\S+\.\S+/;
  // Se valida que el nombre no sea menor que cuatro
  if (nombre.value.length<4) errores.push('El nombre no puede ser un menor que 4')
  // Se valida que el campo de nombre no puede estar vacio
  if (nombre.value === '') errores.push('El nombre es obligatorio')
  // Se valida que el correo sea válido en el formato
  console.log(correo.value)
  if (!coreo_ex.test(correo.value)) errores.push('Ingrese un email válido')
  // Se valida que la en el campo de la contraseña no puede estar vacio y tambien no puede enviarse menos de 8 caracteres.
  if (contrasena.value==='') errores.push('La contraseña no puede estar vacío')
  if (contrasena.value.length<8) errores.push('La contraseña no puede ser  menor de 8')
  // Se muestra los errores
  imprimirErrores(errores)
console.log(errores.length)
  // Se envia los datos
  if (errores.length === 0) {
    grabar(_id)
  }
}

nuevo.addEventListener('click',()=>{
  nombre.value=""
  usuario.value=""
  correo.value=""
  contrasena.value=""

})

//----------------------------------------------
//----------Menu de inicio de sesion------------
//----------------------------------------------
iniciar.addEventListener('click',async()=>{
const enviar=inicio();
console.log(enviar)
const data=await(await httpAxios.get('administradores/inicio-sesion',{
  params: {
    nusuario: enviar.nusuario,
    contrasena: enviar.contrasena,
  }
})).data
console.log(data.length)
//Condición para validar datos de la base de datos.
if(data.length==1){
  alert("Se inició sesión");
  cambio(data)
}else{
  alert("Datos incorrectos...");
  actualizar.innerHTML =``  
}
})


const cambio=(datas:any)=>{
  actualizar.innerHTML +=`
<div >
<h1>Cambio de contraseña</h1>
<label for='contra' >Contraseña</label><input id='contra'/>
<button id="actuliza_contra">Actualizar</button>
<button id="elimina">Eliminar Cuenta Admin</button>
</div>
`
const contra= document.querySelector<HTMLInputElement>('#contra')!;
const actuliza_contra = document.querySelector<HTMLButtonElement>("#actuliza_contra")!
const elimina = document.querySelector<HTMLButtonElement>("#elimina")!
//Actualizar la contraseña
actuliza_contra.addEventListener('click',async ()=>{
console.log(datas)
console.log(contra.value)
console.log(datas[0]._id)
const cambiar={
  _id: datas[0]._id,
  contrasena: contra.value,
}
  const data=await(await httpAxios.put('administradores/reset-contra',cambiar)).data
alert(data)
actualizar_table();
})
//Eliminar a un usuario administrador.
elimina.addEventListener('click',async ()=>{
  console.log(datas)
  console.log(contra.value)
  console.log(datas[0]._id)
  const cambiar={
    _id: datas[0]._id,
    Estado: false,
  }
    const data=await(await httpAxios.put('administradores/delete',cambiar)).data
  alert(data)
  actualizar_table();
  })
}
//Buscar los datos a traves de la base de datos
const inicio=()=>{
  const buscar={
    nusuario: nombres.value,
    contrasena: contrasenas.value,
  }
  return buscar;
}
//Funcion de guardar datos a la base de datos
const funcion_grabar=()=>{
  const grabar:Administrador={
    nombre: nombre.value,
    nusuario: usuario.value,
    correo :correo.value,
    contrasena:contrasena.value,
  }
 return grabar;
}

const grabar=async(_id:any)=>{
  const enviar=funcion_grabar();
 
  console.log(_id)
  if(_id.trim().length>0){
    const respuesta:Administrador=await( await  httpAxios.put(`administradores/${_id}`, enviar)).data
   alert(respuesta);
     return;
     }

  try{
    const data=await(await httpAxios.post<Administrador>('administradores',enviar)).data
    alert(data)
    actualizar_table();
  }
  catch(error){
  
    if(axios.isAxiosError(error)){
      const errorMsg:any=error.response?.data 
     for (let index = 0; index < errorMsg.errors.length; index++) {
       alert( errorMsg.errors[index].msg );
      
       
     }
    }
      
    
  }

}

Bgrabar.addEventListener('click',async()=>{
  enviarFormulario()
}) 



