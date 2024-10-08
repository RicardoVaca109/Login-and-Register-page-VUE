Páginas de Registro y Login en Framework Vue.js

El propósito del proyecto es enseñar el esqueleto, rutas y llamadas a una API (aplicaría igualmente para una base de datos) para realizar una web app de registro y login.
Este proyecto trata de usar el framework de VUE.js para poder generar 3 vistas: una de registro, otra de login y otra de Home. Tener en cuenta que las rutas usadas aquí son llamadas a una API Dummy, que es una API falsa para realizar pruebas con datos quemados en el código y en la web.
Como instalar el proyecto:

**Primero: Descargar npm:**
Comando que viene integrado en la descarga de nodejs: https://nodejs.org/en/download/package-manager/current
1) En una terminal mandamos el siguiente comando para verificar si la instalación está correcta node -v
2) Así aseguramos que instalar con npm nos servirá.

**Segundo: Instalar y Crear Proyecto Vue.js**
1) En otra terminal mandamos el siguiente comando: -> npm install -g @vue/cli
2) Para crear el proyecto en la carpeta donde se va a alojar ponemos: -> vue create project
3) Se generará una carpeta con toda la estructura del proyecto Vue.js.

**Tercero: Descargar json-server (API Dummy):**
Documentación: https://www.npmjs.com/package/json-server
Crear y Validar la API Dummy:
1) En una terminal ejecuta:-> npm install json-server
2) Generar el archivo db.json y llenarlo con algunos datos en formato JSON.
3) Ir a la ruta donde está el archivo y ejecutar: -> json-server db.json
4) Ir a la ruta que muestra y verificar si los datos que están en el archivo se muestran en esa ruta.

**Levantar el Proyecto:**
1) Primero, inicializamos la API Dummy con:-> json-server db.json
2) Verificamos que esté activa.
3) Vamos a la carpeta o ruta del proyecto de Vue.js y ejecutamos: -> npm run serve
4) El puerto de Vue será localhost:8080 o localhost:8081.

VIDEO EN EL QUE ME BASE PARA REALIZAR EL PROYECTO(PASO A PASO):
https://www.youtube.com/watch?v=qieXC2pfeN0&list=PL8p2I9GklV44m5tFH-zjCmTiHeq9GZrby&index=1
