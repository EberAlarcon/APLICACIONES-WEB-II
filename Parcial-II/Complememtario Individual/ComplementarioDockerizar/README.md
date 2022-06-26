
## Instalación y proceso al empezar el proyecto 
***

        Se instaló al principio del proyecto:
        * npm init --y
        * npm i express
        * npm i cors
        * npm i mongoose
        * npm install -g nodemon
        * npm install dotenv
        * npm i express-validator
        * npm install -g typescript
        * npm i typescript


        Se ejecutó al principio: 
        * tsc -init para crear un archivo tsconfig.json

        Una vez generado el archivo se dirije al archivo creado y exactamente en la linea 52  se le coloco un nombre que dará la creación de una nueva carpeta con el nombre dado para su compilación.

        Dado todo lo anterior, se empezó a crear las carpetas como "controllers", "database", "interfaces", "middlewares", "models", "routes" cada una de ellas con archivos ts que van a permitir el desarrollo de esta actividad cada una haciendo enfasis a su estructura de cada una. Tambien se creó un archivo .env donde tendrá el puerto y el enlace del mongodb; tambien un archivo server.ts donde se asignará un constructor y se define los metodos propuestos y la ejecución del puerto por consola, y por ultimo en el index.ts que importará una librería de dotenv y también toda la configuración que se realizó en el archivo de server.ts

        Una vez realizado todo lo anterior, para compilar todo el codigo y se genere la carpeta dist coloqué el comando: npm run tsc. Una vez que coloqué el comando se puede verificar si no hay ningun tipo de error en la compilacion y para probarlo ejecuté: npm run start

        También hice uso del Postman colocando la URL que me arrojó por consola.



## Instalación y proceso del Docker
***       

        Primero se creó un archivo Dockerfile donde se colocó las rutas e intrucciones importantes para crear la imagen despues.
        Luego se creó un archivo docker-compose.yml colocando la imagen de mongo que se descargo con la imagen de mongo  y tambien el puerto que se harà la conexion que es el puerto 3000 basandome en el archivo .env

        COMANDO PARA CREAR UNA IMAGEN EN DOCKER docker build -t dockercomplementario .   ----> COMANDO PARA CREAR UNA IMAGEN EN DOCKER


        LUEGO CREE UNA EXTENSION DE DOCKER EN VISUAL ESTUDIO

        POSTERIORMENTE COLOQUÉ EL COMANDO --------->   docker images <------- PARA VER SI LA IMAGEN SE DECARGÓ EN EL SISTEMA

        UNA VEZ QUE SE DESCARGO LA IMAGEN EJECUTÉ EL SIGUIENTE COMANDO ----->  docker-compose up
        CON ESTE COMANDO INICIA MONGODB Y SE PUEDE DECIR QUE SE ESTA EJECUTANDO Y PARA HACER LA VERIFICACION SE PUEDE ABRIR EL NAVEGADOR O POSTMAN COLOCANDO LA RUTA ESTABLECIDA EN LA CARPETA ROUTES 
        http://localhost:3000/v1/sextoa/api/administradores

        También hice uso del Postman colocando la URL de la ruta.

