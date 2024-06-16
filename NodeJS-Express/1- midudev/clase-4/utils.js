// EN EL FUTURO: el import del json será asi
// import movies from './movies.json' with {  type: 'json'}

// como leer un json en ESModules
// import fs from 'node:fs'
// const movies = JSON.parse(fs.readFileSync('./movies.json', 'utf-8'))

// como leer un json en ESModules recomendado por ahora
import { createRequire } from 'node:module'
const require = createRequire(import.meta.url)

export const readJSON = (path) => require(path)
