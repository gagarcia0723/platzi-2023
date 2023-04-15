<h1>CURSO DE WEB PACK 2023</h1>



<b>CLASE NUMERO 3 - 14 042023</b>

1. instalacion de webpack npm install webpack webpack-cli -D

Esto ya permite que al correr el comando npx webpack -mode development o npx webpack -mode production, el index.js ubicado en la carpeta src, se prepare y salga por la carpeta de dist. Esto lo hace por default. Webpack al final lo que hace es que permite trabajar con las importaciones y modulos, ademas de permitir que estas caracteristicas puedan ser utilizadas en la gran mayoria de navegadores de la actualidad.

Important mantener en la carpeta principal la carpeta de src/index.js

<b>CLASE NUMERO 4 - 14 042023</b>

2. Decargar de los archivos a optimizar mediante el webpack archivos necesarios para el curso.
Nota: Ver curso SPA javascript vanilla.

<b>CLASE NUMERO 5 - 14 042023</b>

3.  Creando archivos de configuracion de entrada y salida, basicamente a lo que se refiere es la carpeta de index.js
su ubicacion en los directorios. Y el punto de salida que seria la carpeta de dist, que se crea por default pero esto es completamente configurable.

siempre al crear el archivo de configuracion webpack.config.js 
inicia importando const path = require('path');
<pre>
    module.exports = {
        entry: './src/index.js',

        output: {
            path: path.resolve(__dirname, 'dist'),
            filename: 'main.js'
        }
    } 
</pre>

el entry es el lugar en donde esta ubicado el index.js,
el output para configurarlo se utiliza path.resolve lo cual nos ayuda a ubicar el directorio exacto en donde estara el proyecto, asi al momento de realizar la instalacion en un servidor remoto el mismo puede encontrarse mucho más facil.

por ejemplo en el comando esta __dirname que hace referencia a la carpeta en donde esta el proyecto y luego se indica en que carpeta saldra el estandar es utilizar dist.

por ultimo el archivo de salida, para compilar en esta ocasion se agregara el archivo que se acaba de crear, con el comando siguiente se compila y se agrega el archivo mencionado: 

<i> npx webpack --mode production --config webpack.config.js </i> En estos momentos solamente se estan trabajando con js. Aun n se ha agregado los estilos y el cuerpo html.

Se agrego tambien el comando build a el archivo package.json, para compilar con <b> npm run buil </b>






