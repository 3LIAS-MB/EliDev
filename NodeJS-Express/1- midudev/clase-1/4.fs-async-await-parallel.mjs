// Sincrono paralelo

import { readFile } from 'node:fs/promises'
// Lo bueno es que esto va a ser más rapido

// Promise.all toma una matriz de promesas y devuelve una nueva promesa que 
// se resuelve cuando todas las promesas en la matriz se han resuelto.
Promise.all([
  readFile('./archivo.txt', 'utf-8'),
  readFile('./archivo2.txt', 'utf-8')
]).then(([text, secondText]) => {
  console.log('primer texto:', text)
  console.log('segundo texto:', secondText)
})

console.log("hola mundo")