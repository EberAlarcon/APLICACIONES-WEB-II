import{Administrador} from '../models'
import {IAdministradores} from '../interfaces'
import{Request,Response}from 'express'

const ObtenerAdmin=async(req:Request,res:Response)=>{
    const body= req.body as IAdministradores;
    const administrador = new Administrador(body);
    const NewAdmin = await administrador.save(); 
    if(!NewAdmin){
        return res.status(400).json({
            message:`El cliente no se guardo`
        });
    }
    res.status(201).json("El cliente se creo sastifactoriamente");
}

const ObtenerAdmins=async(req:Request,res:Response)=>{
    const NewAdmin = await Administrador.find({estado:true}); 
    res.json(NewAdmin);
}

const ObtenerIdAdmin=async(req:Request,res:Response)=>{
    const {id}=req.params;
    const NewAdmin = await Administrador.findById(id); 
    res.json(NewAdmin);
}

const BuscarAdmin=async(req:Request,res:Response)=>{
    const datos =req.query;
    const NewAdmin = await Administrador.find(datos); 
    res.json(NewAdmin);
}  

const CambiarContraAdmin=async(req:Request,res:Response)=>{
    const campo=req.body;
    const NewAdmin = await Administrador.findByIdAndUpdate({_id:campo._id},{contrasena:campo.contrasena},{new: true}); 
   console.log(NewAdmin);
    if(!NewAdmin){
        return res.status(400).json({
            message:`No se actualizo la contraseña!!`
        });
    }
    res.status(201).json("Se actualizó la contraseña con éxito.");
}  

const EliminarAdmin=async(req:Request,res:Response)=>{
    const campo=req.body;
    const NewAdmin = await Administrador.findByIdAndUpdate({_id:campo._id},{estado:campo.estado},{new: true}); 
   console.log(NewAdmin);
    if(!NewAdmin){
        return res.status(400).json({
            message:`No se pudo eliminar!!`
        });
    } 
    res.status(201).json("Usuario eliminado con éxito.");
} 

const ActualizarAdmin=async(req:Request,res:Response)=>{
    const {id}=req.params;
    const {estado, ...data}=req.body;
   const AdminActualizado=await Administrador.findByIdAndUpdate(id,data, {new:true});
   if(!AdminActualizado){
    return res.status(400).json({
        message:`No se pudo actualizar!! `
    });
}

res.status(201).json(`El administrador ${data.nombre} se cambio con éxito.`);
}
export{
    ObtenerAdmin,ObtenerAdmins,ObtenerIdAdmin,
    BuscarAdmin,CambiarContraAdmin,EliminarAdmin,ActualizarAdmin
}