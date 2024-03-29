import {Router} from 'express'
import{check}from 'express-validator'
import{Producto} from '../controllers'
import funciones from '../middlewares'


const {validarCampo}=funciones

const {crear_producto,Obtener_producto,Obtener_productos}=Producto

const router=Router()

//Establacemos las rutas para cada funcion que se realizo en la carpeta de controllers/products.ts
router.get('/',Obtener_productos)
router.get('/:id', check('id','Debe ser un id de mongo').isMongoId(),validarCampo,Obtener_producto)
router.post('/',check('nombre','El nombre es obligatorio').not().isEmpty(),validarCampo,crear_producto)


//Exportamos la variable router
export {router}


// import { Router } from 'express'
// import { check } from 'express-validator'

// import { Producto } from '../controllers'

// const { Obtener_productos, Obtener_producto, crear_producto } = Producto

// import funciones from '../middlewares'

// const { validarCampo } = funciones

// const router = Router()


// router.get('/', Obtener_productos)
// router.get('/:id'
// , check('id', 'Debe ser un ID de mongo valido').isMongoId()
// ,validarCampo
// ,  Obtener_producto)
// router.post('/'
// , check('nombre','El nombre es obligatorio').not().isEmpty()
// ,validarCampo
// ,crear_producto)


// export {router }