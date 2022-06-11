import{Producto} from '../models'
import {IProducto} from '../interfaces'
import{Request,Response}from 'express'

//Definir funciones
const Obtener_productos=async(req:Request,res:Response)=>{
    //mas liviano await Producto.find().lean()
    const {limite='10',desde='0'}=req.query
    const query={estado:true};
    const [total,productos]:[Number,IProducto[]]=await  Promise.all([
    Producto.countDocuments(query),
    Producto.find(query) 
    .skip(Number(desde))
    .limit(Number(limite))
    ])
    
    res.json({
        total,
        productos
})
}
const Obtener_producto=async(req:Request,res:Response)=>{
    const{id}=req.params
    const producto:IProducto|null=await Producto.findById(id);
    //const producto:IProducto=(await Producto.findById(id))!;
    res.json(producto)
}
//Funcion de crear algun producto y se realizo una condicion que no permita guardar un producto existente
const crear_producto=async(req:Request,res:Response)=>{
    const{estado,...body}=req.body as IProducto;
    const existeProducto=await Producto.findOne({nombre:body.nombre})
    if(existeProducto){
        return res.status(400).json({
            message:`El producto ${body.nombre} ya existe!`
        });
    }
    const producto=new Producto(body);
    const productoNuevo=await producto.save();
    return res.status(200).json(productoNuevo);
}
//Se exporta las funciones que se creó
export{
    Obtener_producto,
    Obtener_productos,
    crear_producto
}