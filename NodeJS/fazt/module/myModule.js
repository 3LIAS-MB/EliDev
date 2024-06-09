// .js -> por defecto utiliza CommonJS
// .cjs -> para forzar utilizar CommonJS (CJS)
// .mjs -> para utlizar ES Modules

//------------------------------------------
// ES Modules (ESM) es el sistema de módulos nativo de JavaScript, estandarizado
// en la especificación ECMAScript 2015 (ES6). ESM permite importar y exportar
// funciones, objetos o valores entre archivos JavaScript.

// * Características:

// -> Sintaxis declarativa: Utiliza las palabras clave import y export.
// -> Asíncrono: Las importaciones son asíncronas y no bloqueantes.
// -> Ámbito léxico: Los módulos tienen su propio ámbito léxico, lo que
// significa que las variables y funciones declaradas en un módulo no
// son accesibles fuera de él a menos que sean exportadas.

// import { add } from './math.js';
//------------------------------------------
// CommonJS (CJS)es un sistema de módulos utilizado principalmente en Node.js.
// Fue uno de los primeros sistemas de módulos en JavaScript y se
// popularizó antes de la introducción de ES Modules.

// * Características:

// -> Sintaxis imperativa: Utiliza las palabras clave require y module.exports.
// -> Síncrono: Las importaciones son síncronas y bloqueantes.
// -> Ejecutado en tiempo de ejecución: Los módulos son cargados y ejecutados en tiempo de ejecución.

// const { add } = require('./math');

// module.exports = {
//   add
// };
//------------------------------------------

// Creo mis variables
const myWebAddress = "faztweb.com";
const myNumber = 30;
const myArray = [10, 20, 30];
const user = {
  name: "ryan",
  lastname: "ray",
};

// En este objeto de aqui decido que exportar
const group = {
  myWebAddress: myWebAddress,
  myNumber: myNumber,
  myArray: myArray,
  user: user,
};
module.exports = group;

// -> Es lo mismo
module.exports = {
  myWebAddress: myWebAddress,
  myNumber: myNumber,
  myArray: myArray,
  user: user,
};

// -> Es lo mismo
module.exports = {
  myWebAddress,
  myNumber,
  myArray,
  user,
};

// Otra forma de exportar
// exportar 1x1
module.exports.user = user
module.exports.numer = number
module.exports.Array = myArray // Es mejor que sean iguales pero se puede hacer esto
// etc...

console.log(module)

/*PARA IMPORTARLO DESDE OTRO FICHERO*/
//const web = require('./module/myModule')

/*PUEDO EXTRAER SOLO LO QUE NECESITE*/
//const { myNumber, myArray } = require('./module/myModule')
