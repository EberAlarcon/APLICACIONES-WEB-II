
## Implementación del proyecto para microservicios

Se realizó teniendo en cuenta el complementario que se realizó en la práctica anteriormente y unificarla, para realizar la ejecución se debe tener en cuenta ejecutar el comando en cada unas de las carpetas:

   ■ npm install 

Luego se creó un archivo llamado "docker-compose.yml" para establecer cada una de las carpetas y definirlas mediante la imagen de mongo y el puerto de "27017:27017". También la imagen de nginx que es es un servidor web open source de alta performance que ofrece el contenido estático de un sitio web de forma rápida y fácil de configurar y el puerto de "8080:8080"; y para el volumes: 

   ■ ./nginx.conf:/etc/nginx/conf.d/default.conf

Dicha información se la puede encontrar en el siguiente sitio web: 

   ■ https://hub.docker.com/_/nginx

Por siguiente, se creó un archivo nginx.conf definiendo las rutas que fueron establecidas en cada carpeta y el puerto que se definió en el archivo anteriormente de "8080"

Por último, se ejecutó el comando para su implementación y ejecución del proyecto como tal: 

   ■ docker-compose build

   ■ docker-compose up



