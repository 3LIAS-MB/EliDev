// Es un objeto global que tiene propiedades y metodos que 
// permiten interactuar con el entorno de ejecucion de nodejs 
// y nos da informacion q esta relacionada con el proceso actual
// console.log(process)

// argumentos de entrada
console.log(process.argv)

// controlar el proceso y su salida
// process.exit(1)

// podemos controlar eventos del proceso
// process.on('exit', () => {
//   // limpiar los recursos
// })

// current working directory
console.log(process.cwd())

// platform
// console.log(process.env.PEPITO)