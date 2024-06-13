// sincrono sencuencial

// En CMJ no tiene acceso a esta forma de utilizar el async-await
// ->  const text = await readFile('./archivo.txt', 'utf-8')
// Una manera vieja de hacerlo podría ser de esta forma: "
const { readFile } = require('node:fs/promises');

// IIFE - Inmediatly Invoked Function Expression
(async () => {
  console.log('Leyendo el primer archivo...')
  const text = await readFile('./archivo.txt', 'utf-8')
  console.log('primer texto:', text)
  console.log('--> Hacer cosas mientras lee el 2do archivo...')

  console.log('Leyendo el segundo archivo...')
  // no se resuelve mientras no termine la primera lectura
  const secondText = await readFile('./archivo.txt', 'utf-8')
  console.log('segundo texto:', secondText)
})() // -> Función autoinvocada
