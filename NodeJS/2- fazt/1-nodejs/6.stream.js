// const { writeFile } = require('fs/promises')

// const createBigFile = async () => {
//     await writeFile('./data/bigFile.txt', 'hello world'.repeat(100000))
// }

// createBigFile()

const { createReadStream } = require('fs')
// 'createReadStream' está basado en eventos
// nos devuelve un objeto con manejadores de eventos 'stream' 
const stream = createReadStream('./data/bigFile.txt', 'utf-8', {
    encoding: 'utf-8' // tiene más valoress
})
 
// recibe los datos por trozos y los va imprimiendo por partes
// resumen, un servidor puede recibir un archivo por partes hasta terminar
stream.on('data', (chunk) => {
    console.log(chunk)
})

stream.on('end', () => {
    console.log('ya termine de leer el archivo')
})

stream.on('error', (error) => {
    console.log(error)
})