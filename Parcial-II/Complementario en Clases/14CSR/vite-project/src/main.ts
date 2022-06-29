import './style.css'
//Imporatmos axios y la ruta de interfaces para consultar
import axios from 'axios'
// Importamos el nombre que se le dió cuando se usó la extension de Paste y el nombre de la inteface como tal
import{Extension, Producto} from './interfaces/IProducto'

//Se define una variable para establcer la ruta del servidor rest
const httpAxios = axios.create({
  baseURL: `http://localhost:2500/v1/sextoa/api/`
})


const app = document.querySelector<HTMLDivElement>('#app')!

// app.innerHTML = `
//   <h1>Hello Vite!</h1>
//   <a href="https://vitejs.dev/guide/features.html" target="_blank">Documentation</a>
// `


const etiqueta = document.createElement("label");
etiqueta.textContent=`ID`
const input = document.createElement("input");
input.id="id"
etiqueta.htmlFor="id"

app.appendChild(etiqueta);
app.appendChild(input)

//Se establece la estructura que se va a visualizar en el navegador
app.innerHTML += `
<label for 'nombre'>Nombre</label><input id='nombre' />
<label for 'estado'>Estado</label><input id='estado' />
<label for 'precio'>Precio</label><input id='precio' />
<label for 'costo'>Costo</label><input id='costo' />
<label for 'stock'>Stock</label><input id='stock' />
<label for 'minimo'>Minimo</label><input id='minimo' />


<button id="nuevo" >Nuevo</button>
<button id="grabar" >Grabar</button>
<button id="consultar" >Consultar</button>

<div id="cuerpo" />
`
// Se define variables con cada unos de los componentes que posee la tabla de productos.
const id = document.querySelector<HTMLInputElement>('#id')!;
const nombre = document.querySelector<HTMLInputElement>('#nombre')!;
const precio = document.querySelector<HTMLInputElement>('#precio')!;
const costo = document.querySelector<HTMLInputElement>('#costo')!;
const estado = document.querySelector<HTMLInputElement>('#estado')!;
const stock = document.querySelector<HTMLInputElement>('#stock')!;
const minimo = document.querySelector<HTMLInputElement>('#minimo')!;

//Se define variables para la funcionabilidad de los botones.
const nuevo = document.querySelector<HTMLButtonElement>("#nuevo")!
const grabar = document.querySelector<HTMLButtonElement>("#grabar")!
const consultar = document.querySelector<HTMLButtonElement>("#consultar")!

const cuerpo = document.querySelector<HTMLDivElement>('#cuerpo')!

//Establecer esta funcion para este evento que hace cuando se ingresa datos y al momento de dar clic en el boton se limpia los datos ingresados
nuevo.addEventListener('click', ()=>{
  id.value =""
  nombre.value =""
  precio.value =""
  costo.value =""
  estado.value =""
  stock.value =""
  minimo.value =""
})

//Realiza una consulta y la muestra por tabla
consultar.addEventListener('click', async ()=>{
  const resproductos:Extension = await( await httpAxios.get<Extension>('productos')).data
  console.log(resproductos);
  const {productos} = resproductos

  const tabla = document.createElement('table');
  tabla.id="tabla"
  tabla.border="1"

  for (const producto of productos)
  {
    const row = tabla.insertRow();
    const celda = row.insertCell();
    celda.innerHTML= `<button class="boton" values '${producto.nombre}'> ${producto.nombre} </button>` 
    const celda2= row.insertCell();
    celda2.innerHTML= `${producto.precio}`

   
  }
  cuerpo.innerHTML=""
  cuerpo.appendChild(tabla)

  document.querySelectorAll('.boton').forEach((ele:Element) =>{
    (ele as HTMLButtonElement).addEventListener('click', ()=>
    {
      httpAxios.get(`productos/62ba0ef1ab25bf0e2a052c59`)

      
    })
    
  })
})

