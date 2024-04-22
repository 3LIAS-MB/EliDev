/*https://www.youtube.com/watch?v=yB4n_K7dZV8&list=PLUofhDIg_38qm2oPOV-IRTTEKyrVBBaU7*/

/*globalThis es una variable global en toda nuestra aplicacion,
vamos a poder acceder a ella no importa donde estemos

globalThis en el navegador -> windows
globalThis en node js -> global*/
global.console.log(global);
globalThis.console.log(globalThis);

/*--------Sistema de Módulos CommonJS -> CJS----------*/
/*CommonJS Require Module*/
const {sum} = require('./sum')

