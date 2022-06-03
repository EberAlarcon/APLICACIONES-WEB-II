const {ValidarResultado} = require('express-validator')

const ValidarResultado = (req, res, next) => {

    try{

        ValidarResultado(req).throw()
        return next(); //Si todo esta bien en las validaciones sigue su curso la app

    }catch(err){

        res.status(403).send({errors:"No esiste" }) //Si hay un error nos retorna el error

    }

}

module.exports = {ValidarResultado}