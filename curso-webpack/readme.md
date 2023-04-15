<h1>CURSO DE WEB PACK 2023</h1>

<b>Url del curso: </b>https://platzi.com/clases/2242-webpack/36198-babel-loader-para-javascript/

<br><br><br>
<h3><b>CLASE NUMERO 3 - 14 042023</b></h3>
<br><br>


1. instalacion de webpack npm install webpack webpack-cli -D, Esto ya permite que al correr el comando npx webpack -mode development o npx webpack -mode production, el index.js ubicado en la carpeta src, se prepare y salga por la carpeta de dist. Esto lo hace por default. Webpack al final lo que hace es que permite trabajar con las importaciones y modulos, ademas de permitir que estas caracteristicas puedan ser utilizadas en la gran mayoria de navegadores de la actualidad. Important mantener en la carpeta principal la carpeta de src/index.js

<br><br><br>
<h3><b>CLASE NUMERO 4 - 14 042023</b></h3>
<br><br>


2. Decargar de los archivos a optimizar mediante el webpack archivos necesarios para el curso.
<br><br> Nota: Ver curso SPA javascript vanilla, para afianzar.


<br><br><br>
<h3><b>CLASE NUMERO 5 - 14 042023</b></h3>
<br><br>


3.  Creando archivos de configuracion de entrada y salida, basicamente a lo que nos referimos es a la ubicacion en donde está la carpeta que guarda el archivo index.js. <br><br>
Su ubicacion en los directorios. Y el punto de salida que seria la carpeta de dist, que se crea por default pero esto es completamente configurable. <br><br>
Siempre al crear el archivo de configuracion webpack.config.js 
inicia importando const path = require('path'); <br><br> Ya que esto permite realizar un shortcut para el sistema, y así poder ser mas eficiente al momento de buscar en un servidor remoto la ruta del proyecto.

<pre>

    const path = require('path');

    module.exports = {
        entry: './src/index.js',

        output: {
            path: path.resolve(__dirname, 'dist'),
            filename: 'main.js'
        }

        resolve: {

            extensions: ['.js']
        
        }

    }
</pre>

el entry es el lugar en donde esta ubicado el index.js,
el output para configurarlo se utiliza path.resolve lo cual nos ayuda a ubicar el directorio exacto en donde estara el proyecto, asi al momento de realizar la instalacion en un servidor remoto el mismo puede encontrarse mucho más facil.

por ejemplo en el comando esta __dirname que hace referencia a la carpeta en donde esta el proyecto y luego se indica en que carpeta saldra el estandar es utilizar dist.

por ultimo el archivo de salida, para compilar en esta ocasion se agregara el archivo que se acaba de crear, con el comando siguiente se compila y se agrega el archivo mencionado: 

<i> npx webpack --mode production --config webpack.config.js </i> En estos momentos solamente se estan trabajando con js. Aun n se ha agregado los estilos y el cuerpo html.

Se agrego tambien el comando build a el archivo package.json, para compilar con <b> npm run buil </b>


<br><br><br>
<h3><b>CLASE NUMERO 6 - 150423</b></h3>
<br><br>


Instalando Babel y algunos plugins que se requieren para manejar alguna funcionalidad especifica del proyecto, esto se utiliza para garantizar la compatibilidad de js moderno en los navegadores.

<pre>
    npm install babel-loader @babel/core @babel/preset-env @babel/plugin-transform-runtime -D
</pre>


<i>@babel/plugin-transfor-runtime<i> se usa para el async y await. Para verificar que todo esta instalado es necesario revisar en el package.json en la zona de dependencias.

Para configurar babel, es necesario crear el archivo .babelrc para realizar la configuración del mismo.

<pre>
    {
        "presets" : [
            "@babel/preset-env"

        ],

        "plugins" : [
            "@babel/plugin-transform-runtime"
        ]
    }
</pre>

Luego hay que agregar a la configuracion de webpack este modulo, dentro de <b> module.exports </b>

<pre> 
    module : {      

        rules: [
            
            {
                test : /\.m?js$/,
                exclude: /node_module/,
                use: {
                    loader: 'babel-loader'
                }
            }
        ]

    }
</pre>

Hay que agregar que en esta zona del objeto de configuracion es donde se ubicara, los demas modulos que se agreguen al proyecto, por ejemplo los plugins de css, html y cualquier otro que se implemente y le agregue funcionalidad, ahora hay otros que entran por la seccion de plugins.

Luego probamos con:

<pre>  npm run build </pre>

Esto al correr ya nos modifica el .js para poder asi correr el .js en el navegador con todas sus caracteristicas actuales.


<br><br><br>
<h3><b>CLASE NUMERO 7 - 150423</b></h3>
<br><br>


En esta seccion se estará agregando la funcionalidad para trabajar los archivos HTML, para esto se necesita instalar el siguiente plugin:

<pre> npm install html-webpack-plugin -D </pre>

Luego de esto al archivo webpack.config.js se agregara al inicio del archivo este nuevo plugin que se instalo mediante

<pre> const HtmlWebPackPlugin = require('html-webpack-plugin'); </pre>

Luego de esto agregamos una nueva sección al archivo webpack.config.js, para que inlcuya el manejador de html, en este caso entra como un plugin y no como un modulo.

<pre>
    plugins: [
        new HtmlWebpackPlugin({

                inject: true,
                template: './public/index.html',
                filename: './index.html'

            }
        )
    ]
</pre>

Hay que agregar que estas configuracion recibe un template que esta ubicado en public/ y este es el archivo html base para la aplicación que contiene un div con un main que aqui es donde se incrusta los codigos. 

Luego de esto es necesario editar el template, para removerle la importacion manual del el archivo .js del proyecto,normalmente los archivos entran por un solo .js y luego dentro de este se van agregando oras funcionalidades.

hay que buscar en el index.html, ubicado en public/template y abrir este archivo y removerle la importanción del .js de manera manual para que webpack lo agregue en automático.

<pre> #script type="module" src="../src//index.js"></script> </pre>

Luego de esto ya podemos correr el comando, para compilar el sistema que es: 

<pre> npm run build </pre>



