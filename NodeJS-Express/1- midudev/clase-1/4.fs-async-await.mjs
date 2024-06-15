// Los MJS sí tienen soporte de utilizar 'await' en el cuerpo del archivo
// -> Esto se llama top level await. En CMJ NO se puede sin su alterniva vieja

import { readFile } from 'node:fs/promises'

console.log('Leyendo el primer archivo...')
const text = await readFile('./archivo.txt', 'utf-8')
console.log('primer texto:', text)
console.log('--> Hacer cosas mientras lee el 2do archivo...')

console.log('Leyendo el segundo archivo...')
const secondText = await readFile('./archivo2.txt', 'utf-8')
console.log('segundo texto:', secondText)
