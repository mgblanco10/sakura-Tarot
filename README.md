# sakura-Tarot

## Objetivos
El objetivo de este proyecto fue crear una aplicación que consuma la API de Sakura https://6388b6e5a4bb27a7f78f96a5.mockapi.io/sakura-cards/  la cual devuelve un archivo JSON con la información de las cartas. Para este ejercicio, se eligió mostrar la "sakura card". La aplicación permité al usuario seleccionar una carta para el pasado, otra para el presente y otra para el futuro, y luego obtener el significado de cada carta seleccionada, pudiendo poner en esta lectura como se siente y esto poder guardarlo, para poder guardar y borrar estas lecturas se utilizo json server.

## Instalación y ejecución
Para instalar y ejecutar la aplicación, sigue estos pasos:

Clona el repositorio en tu máquina local.

https://github.com/mgblanco10/sakura-Tarot.git

Abre una terminal y navega hasta el directorio del proyecto.

Instala las dependencias del proyecto ejecutando el siguiente comando:

`npm install`

Inicia la aplicación ejecutando el siguiente comando:

`npm run dev`  

Para poder guardar y almacenar las lecturas se utiliza JSON Server. Para iniciar el servidor JSON, abre otra terminal en el directorio del proyecto y ejecuta el siguiente comando:

`npm run server`

Esto iniciará el servidor JSON en http://localhost:3000.

Recuerda que es necesario tener Node.js y npm instalados en tu máquina para poder ejecutar la aplicación.

# Maqueta 
### Figma mobile
![Enlace al diseño Versión Mobil en Figma](app/src/assets/figmaMobile.png)
### Figma version desktop
![Enlace al diseño Versión Desktop en Figmfig](app/src/assets/figmaDesktop.png)

## :hammer:Tecnologias y Herramientas

<div align=""> 
<img src="https://profilinator.rishav.dev/skills-assets/html5-original-wordmark.svg" alt="HTML5" height="50" />  
<img src="https://profilinator.rishav.dev/skills-assets/css3-original-wordmark.svg" alt="CSS3" height="50" />  
<img src="https://profilinator.rishav.dev/skills-assets/javascript-original.svg" alt="JavaScript" height="50" />
<img src="https://profilinator.rishav.dev/skills-assets/react-original-wordmark.svg" alt="React" height="50" /> 
  <img src="./app/src/assets/vite.png" alt="Vite" height="50" />
  <img src="./app/src/assets/vitest.png" alt="Vitest" height="50" />
<p style="font-size: 26px;">{Json-server}</p> 
</div>

<div align="">  
<img src="https://cdn-icons-png.flaticon.com/512/25/25231.png" alt="github" width="50" heigth="50"/>
<img style="margin: 5px" src="https://profilinator.rishav.dev/skills-assets/figma-icon.svg" alt="Figma" height="50" />
<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Visual_Studio_Code_1.35_icon.svg/512px-Visual_Studio_Code_1.35_icon.svg.png" alt="VisualStudioCode" height="50" />
<a href="https://getbootstrap.com/docs/3.4/javascript/" target="_blank"><img style="margin: 10px" src="https://profilinator.rishav.dev/skills-assets/bootstrap-plain.svg" alt="Bootstrap" height="50" /></a>  
<img src="https://w7.pngwing.com/pngs/115/721/png-transparent-trello-social-icons-icon.png" alt="trello" width="50" heigth="50"/>
 <img src="https://1000marcas.net/wp-content/uploads/2020/01/logo-Canva.png" alt="Canca" width="60" heigth="60"/>
</div>

## Pruebas con docker (Comandos)
docker build -t json-server . 
docker run -it json-server

## Adicional 
- Ver que imagen está corriendo
docker ps 
- Matar una imagen que tenga corriendo
docker kill <container_id>

## Information instalacion
https://www.makeuseof.com/how-to-install-docker-mac/
https://www.cprime.com/resources/blog/docker-for-mac-with-homebrew-a-step-by-step-tutorial/

https://hub.docker.com/_/node/

https://dev.to/codemaker2015/build-and-deploy-flask-rest-api-on-docker-25mf
https://bpostance.github.io/posts/docker-fask-api/

https://docs.docker.com/engine/reference/builder/
https://docs.docker.com/engine/reference/run/

https://github.com/nuwe-reports/femhack-II-frontend-challenge/tree/main


### VIDEOS
https://www.youtube.com/watch?v=SnSH8Ht3MIc





