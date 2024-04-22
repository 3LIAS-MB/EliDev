const fs = require('node:fs')

// -> Se puede transformar un callback en promesa pero solo es recomendable hacerlo
// cuando el modulo no tiene una version con promesa. De otra forma usar el NATIVO

/*const { promisify } = require('node:util')
const readFilePromise = promisify(fs.readFile)*/
/*-----------------------------------*/
// -> devuelve un buffer por defecto,
// usamos 'utf-8' para que podamos interpretarlo
// Esta es la forma sincrona
const text = fs.readFileSync('./archivo.txt', 'utf-8')
/*-----------------------------------*/

// -> FORMA ASINCRONA
console.log( 'Leyendo el primer archivo ... ')
fs.readFile('./archivo.txt', 'utf-8', (err, text) => { // <- Callback: función que se ejecuta cuando 
    console. log('primer texto:', text)                // se completa una tarea asincrona
})

console.log('→ Hacer cosas mientras lee el archivo... ')

console.log('Leyendo el segundo archivo ... ')
fs.readFile('./archivo2.txt', 'utf-8', (err, text) => {
    console.log('segundo texto:', text)
})