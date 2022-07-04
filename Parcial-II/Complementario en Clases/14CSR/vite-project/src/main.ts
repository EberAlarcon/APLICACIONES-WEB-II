import './style.css'
//Imporatmos axios y la ruta de interfaces para consultar
import axios from 'axios'
import{Extension, Producto} from './interfaces/IProducto'

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
//Cuerpo de estrucutura para el fronde
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
const id = document.querySelector<HTMLInputElement>('#id')!;
const nombre = document.querySelector<HTMLInputElement>('#nombre')!;
const precio = document.querySelector<HTMLInputElement>('#precio')!;
const costo = document.querySelector<HTMLInputElement>('#costo')!;
const estado = document.querySelector<HTMLInputElement>('#estado')!;
const stock = document.querySelector<HTMLInputElement>('#stock')!;
const minimo = document.querySelector<HTMLInputElement>('#minimo')!;

const nuevo = document.querySelector<HTMLButtonElement>("#nuevo")!
const grabar = document.querySelector<HTMLButtonElement>("#grabar")!
const consultar = document.querySelector<HTMLButtonElement>("#consultar")!

const cuerpo = document.querySelector<HTMLDivElement>('#cuerpo')!

//Funcion para limpiar si hay datos ingresados.
nuevo.addEventListener('click', ()=>{
  id.value =""
  nombre.value =""
  precio.value =""
  costo.value =""
  estado.value =""
  stock.value =""
  minimo.value =""
})
//Funcion para consultar un producto en especifico
consultar.addEventListener('click', async ()=>{
  const resproductos:Extension = await( await httpAxios.get<Extension>('productos')).data
  console.log(resproductos);
  const {productos} = resproductos
//Funcion para crear una tabla
  const tabla = document.createElement('table');
  tabla.id="tabla"
  tabla.border="1"

  for(const producto of productos){
    const row = tabla.insertRow();
    const celda = row.insertCell();
//Boton para selecionar un producto y realizar una consulta del producto
    celda.innerHTML=`<button class="boton" value='${producto._id}'>${producto.nombre}</button>`;
    const celda2 = row.insertCell();
    celda2.innerHTML=`${producto.precio}`
  }
  cuerpo.innerHTML=""
  cuerpo.appendChild(tabla)

//Capturo los datos de un producto
  document.querySelectorAll('.boton').forEach((ele:Element)=>{
    ele.addEventListener('click',async()=>{
      const {data} = await httpAxios.get<Producto>(`productos/${(ele as HTMLButtonElement ). value}`);
      console.log(data);
      nombre.value= data.nombre;
      precio.value= data.precio.toString();
      costo.value= data.costo.toString();
      minimo.value= data.minimo.toString();
      stock.value= data.stock.toString();
      estado.value= data.estado!.toString();
      id.value = data._id!

    })
  })
})
//Funcion para asginar cada valor
const asignarValores=()=>{
  const data:Producto ={
    nombre: nombre.value,
    costo: Number (costo.value),
    precio: Number (precio.value),
    minimo: Number (minimo.value),
    stock: Number (stock.value),
  }
  return data;
}
//Metodo para grabar datos modificar y guardar
grabar.addEventListener('click',async ()=>{
  const data = asignarValores()
  if(id.value.trim().length>0)
  {
    const respproductos:Producto = await (await httpAxios.put<Producto>(`productos/${id.value}`, data)).data
    console.log(`El producto ${respproductos.nombre} fue modificado con éxito`);
    return;
  }
  try {
    const respproductos: Producto = await (await httpAxios.post <Producto>(`productos`, data)).data
    console.log(`El producto ${respproductos.nombre} fue insertado con éxito`);
  } catch (error) {
    if (axios.isAxiosError(error)){
      console.log(`Error en axios`);
    }
    console.log(error);
  }
})
