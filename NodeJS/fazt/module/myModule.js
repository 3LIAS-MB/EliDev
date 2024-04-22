// .js -> por defecto utiliza CommonJS
// .mjs -> para utlizar ES Modules
// .cjs -> para forzar utilizar CommonJS

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

/*PARA IMPORTARLO DESDE OTRO FICHERO*/
//const web = require('./module/myModule')

/*PUEDO EXTRAER SOLO LO QUE NECESITE*/
//const { myNumber, myArray } = require('./module/myModule')
