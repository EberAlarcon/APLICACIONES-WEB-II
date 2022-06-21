
# CREAR UN ARCHIVO Dockerfile y colocar las rutas y el entrypoint para iniciar el proyecto

FROM node
COPY . /var/www
WORKDIR /var/www
RUN npm install
EXPOSE 3000
ENTRYPOINT ["npm", "start"]

