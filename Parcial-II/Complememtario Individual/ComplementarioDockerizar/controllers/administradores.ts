//impotamos la varaible definida de la carpeta de models y tambien la variable de la carpeta de interfaces
import {Administrador} from '../models'
import { IAdministradores } from '../interfaces'
import { Request, Response } from 'express'




const Obtener_administrador=async(req:Request,res:Response)=>{
   
    res.json({
      message: 'Administrador'
})
}

const Crear_Administrador = async ( req: Request,res:Response)=>{
    const {estado, ...body} = req.body as IAdministradores;
    const ExisteAdministrador = await Administrador.findOne({nombre: body.nombre})
    if(ExisteAdministrador){
        return res.status(400).json({
            message:`El nombre administrador ${body.nombre} ya existe`
        });
    } 
    const administrador = new Administrador (body);
    const AdministradorNuevo = await administrador.save();
    return res. status(200).json(AdministradorNuevo);

}
//Se exporta las funciones que se creó
export {
    Obtener_administrador,
    Crear_Administrador
}

