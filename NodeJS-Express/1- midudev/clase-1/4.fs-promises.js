// utilidad que ayuda a crear la version de promeas
// de una utilidad que no lo sea. solo modulos
// nativos que no tienen promesas nativas

// const fs = require('node:fs')
// const { promisify } = require('node:util')
// const readFilePromise = promisify(fs.readFile)

// console.log('Leyendo el primer archivo...')
// fs.readFilePromise('./archivo.txt', 'utf-8')
//   .then(text => {
//     console.log('primer texto:', text)
//   })

const fs = require('node:fs/promises')

console.log('Leyendo el primer archivo...')
fs.readFile('./archivo.txt', 'utf-8')
  .then(text => {
    console.log('primer texto:', text)
  })

console.log('--> Hacer cosas mientras lee el archivo...')

console.log('Leyendo el segundo archivo...')
fs.readFile('./archivo2.txt', 'utf-8')
  .then(text => {
    console.log('segundo texto:', text)
  })
