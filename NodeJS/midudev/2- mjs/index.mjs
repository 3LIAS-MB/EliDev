// .js -> por defecto utiliza CommonJS
// .mjs -> para utlizar ES Modules
// .cjs -> para forzar utilizar CommonJS

// La extension en ES Modules no es obligatoria pero sí necesaria
import { sum, sub, mult } from './sum.mjs'

console.log(sum(1, 2))
console.log(div(1, 2))
console.log(mult(1, 2))