// fs es el módulo de Node.js para trabajar con el sistema de archivos.
// Aquí se está utilizando la versión de promesas (node:fs/promises),
//  lo que permite usar async/await.
const fs = require('node:fs/promises')
// path es un módulo de Node.js para trabajar con rutas de archivos y directorios.
const path = require('node:path')
const pc = require('picocolors')

// 'Nullish Coalescing Operator' -> operador lógico que devuelve 
// su operando del lado derecho cuando su operando del lado izquierdo
// es null o undefined. Si el operando del lado izquierdo no es
// null ni undefined, devuelve ese operando.

// 'rocess.argv' es una matriz que contiene 
// los argumentos de la línea de comandos.
const folder = process.argv[2] ?? '.'

async function ls (folder) {
  let files
  try {
    files = await fs.readdir(folder)
    
  } catch {
    console.error(pc.red(`❌ No se pudo leer el directorio ${folder}`))
    process.exit(1)
  }

  const filesPromises = files.map(async file => {
    const filePath = path.join(folder, file)
    let stats

    try {
      stats = await fs.stat(filePath) // status - información del archivo
    } catch {
      console.error(`No se pudo leer el archivo ${filePath}`)
      process.exit(1)
    }

    const isDirectory = stats.isDirectory()
    const fileType = isDirectory ? 'd' : 'f'
    const fileSize = stats.size.toString()
    const fileModified = stats.mtime.toLocaleString()

    return `${pc.bgMagenta(fileType)} ${pc.bludde(file.padEnd(20))} ${pc.green(fileSize.padStart(10))} ${pc.yellow(fileModified)}`
  })

  const filesInfo = await Promise.all(filesPromises)

  filesInfo.forEach(fileInfo => console.log(fileInfo))
}

ls(folder)



// ->  Resumen del Código
// - El código está diseñado para:

// - Tomar un argumento de directorio desde la línea de comandos.
// - Leer el contenido de ese directorio utilizando las  
//   funciones del sistema de archivos basadas en promesas.
// - Imprimir la lista de archivos en el directorio, tanto
//   como una matriz completa como cada archivo individualmente.
// - Manejar cualquier error que ocurra durante la 
//   lectura del directorio y reportarlo a la consola.

  // Esto ejecutará el script y listará los archivos en el directorio especificado .\1- cjs\.

  // node .\8.ls-advanced.js '.\1- cjs\'
  // node .\8.ls-advanced.js '.\1- cjASDAs\' -> sin controlar los errores