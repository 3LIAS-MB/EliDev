// sincrono
// asincrono secuencial
// asincrono en paralelo

const fs = require('node:fs')

console.log('Leyendo el primer archivo...')
// por defecto devuelve un buffer -> memoria con infomarción
// con 'ut-8' lo codificamos para poder entenderlo
fs.readFile('./archivo.txt', 'utf-8', (error, text) => { // <- callback
    console.log('primer texto: ', text)
})

console.log('Hacer cosas mientras lee el archivo...')

console.log('Leyendo en el segundo archivo...')
fs.readFile('./archivo2.txt', 'utf-8', (error, text) => {
    console.log('segundo texto: ', text)
})

// 'utf-8' -> puede ser con guion o sin guion