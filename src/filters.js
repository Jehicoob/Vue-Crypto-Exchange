// Libreria de JS que permite formatear numeros con dferentes caracteristicas
// Se instala con npm i -S numeral

/* Otras librerias utilizadas ----------------------------------------------------------
npm install vue-chartkick@0.6.1 chart.js@2--> para realizar *los graficos* <-- para Vue2
npm install --save @saeris/vue-spinners para realizar *las animaciones de transicion* <-- para Vue2
el profe los instala asi: npm i -S @saeris/vue-spinners vue-chartkick */

// Al ser una libreria se importa sin el arroba "numeral"
import numeral from "numeral";

const dollarFilter = function (value) {
  // si este valor no existe, vacio o 0
  if (!value) {
    return "$ 0";
  }
  // si este valor existe nos lo regresa con el siguiente formato
  return numeral(value).format("($0.00a)");
};

const percentFilter = function (value) {
  if (!value) {
    return "0%";
  }
  //Number(value) hace un parse "convierte a numero" se coloca por si las dudas
  return `${Number(value).toFixed(2)}%`;
};

export { dollarFilter, percentFilter };
//Se debe importar en el main.js

/* Vue 3 -----------------------------------------------------------------------------------------
import numeral from 'numeral'

const filters  =  {
  DollarFilter: value =>   
    value ? numeral(value).format('($ 0.00a)') : '$ 0'
}

export default filters 

*/
