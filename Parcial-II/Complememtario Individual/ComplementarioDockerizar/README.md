        
        
        README para indicar las instrucciones que se deben aplicar para su implementación o
        puesta en marcha.

        Primero se creó un archivo Dockerfile donde se colocó las rutas e intrucciones importantes para crear la imagen despues.
        Luego se creó un archivo docker-compose.yml colocando la imagen de mongo que se descargo con la imagen de mongo  y tambien el puerto que se harà la conexion que es el puerto 3000 basandome en el archivo .env

        COMANDO PARA CREAR UNA IMAGEN EN DOCKER docker build -t dockercomplementario .   ----> COMANDO PARA CREAR UNA IMAGEN EN DOCKER


        LUEGO CREE UNA EXTENSION DE DOCKER EN VISUAL ESTUDIO

        POSTERIORMENTE COLOQUÉ EL COMANDO --------->   docker images <------- PARA VER SI LA IMAGEN SE DECARGÓ EN EL SISTEMA

        UNA VEZ QUE SE DESCARGO LA IMAGEN EJECUTÉ EL SIGUIENTE COMANDO ----->  docker-compose up
        CON ESTE COMANDO INICIA MONGODB Y SE PUEDE DECIR QUE SE ESTA EJECUTANDO Y PARA HACER LA VERIFICACION SE PUEDE ABRIR EL NAVEGADOR O POSTMAN COLOCANDO LA RUTA ESTABLECIDA EN LA CARPETA ROUTES 
        http://localhost:3000/v1/sextoa/api/administradores

