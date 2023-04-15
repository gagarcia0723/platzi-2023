import Template from './templates/Template.js';
import './styles/main.css';


(async function App() {

  const main = null || document.getElementById('main');
  main.innerHTML = await Template();

})();


/** NOTAS DEL ARCHIVO
 * 
 * Se importa el template a utilizar el cual llega de un archivo .js, 
 * que contiene mediante `` comillas invertidas la información en html guardada en una variable y esta 
 * dentro de un función, la cual retorna el contenido luego de cargarle los datos obtenidos por un API. 
 * en este caso se utilozó una funcion async, porque se está utilizando,
 * una funcion asyncronica que es importada en primera instancia al archivo js, para luego ser consumida.
 * 
*/