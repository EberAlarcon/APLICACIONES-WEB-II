const servidor = require('./src/app');

servidor.listen(process.env.PORT, ()=>{
    console.log(`Microservicio de administrador corriendo en ${process.env.PORT}`);
})
