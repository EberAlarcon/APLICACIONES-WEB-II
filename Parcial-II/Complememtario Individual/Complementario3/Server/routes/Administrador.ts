import {Router} from 'express'
import{check}from 'express-validator'
import{Administrador} from '../controllers'
import funciones from '../middlewares'


const {validarCampo}=funciones

const {ObtenerAdmin,ObtenerAdmins,ObtenerIdAdmin,BuscarAdmin,CambiarContraAdmin,EliminarAdmin,ActualizarAdmin}=Administrador

const router=Router()

//Establacemos las rutas para cada funcion que se realizo en la carpeta de controllers/products.ts
router.post('/',ObtenerAdmin)

router.get('/',ObtenerAdmins)

router.get('/inicio-sesion',BuscarAdmin);

router.put('/reset-contra', CambiarContraAdmin);

router.put('/:id',ActualizarAdmin);

router.put('/delete',EliminarAdmin);

router.get('/:id',ObtenerIdAdmin);   


//Exportamos la variable router
export {router}
