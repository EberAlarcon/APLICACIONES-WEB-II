import {Request,Response,NextFunction} from 'express'
//Importamos check para validadciones
import {validationResult, check} from 'express-validator'

//Se realiza la validacion de campo en caso de presentarse algun error mandar un json errors
const validarCampo=(req:Request ,res:Response,next:NextFunction)=>{
    const errors=validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json(errors)
    }
    next()
}

const validacionNombre = [


    check('nombre')
        .not()
        .notEmpty().withMessage('El nombre no puede estar vacía'),
        
        
    (req:Request ,res:Response,next:NextFunction) => {

        validarCampo(req, res, next)

    }

]
const validarContraseña = [


    check('contrasena')
        .not()
        .notEmpty().withMessage('La clave no puede estar vacía'),
        
        
    (req:Request ,res:Response,next:NextFunction) => {

        validarCampo(req, res, next)

    }

]
//Exportamos la funcion 
export{validarCampo,
    validacionNombre,
    validarContraseña
}