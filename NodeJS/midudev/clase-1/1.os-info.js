// -----Importando modulos nativos de node----
// const os = require('os')

// A partir de la versión Node 16 esto es más 
// recomendable, es decir, usar el prefijo 'node'
const os = require('node:os')

// -> ES Module
// import os from 'node:os';
// import { platform, release, arch, cpus, freemem, totalmem, uptime } from 'node:os';


console.log('Información del sistema operativo:')
console.log('--------------------------------')
console.log('Información de mi usuario', os.userInfo());
console.log('Nombre del sistema operativo', os.platform());
console.log('Versión del sistema operativo', os.release());
console.log('Arquitectura', os.arch()); // 32 bits, 63 bits
console.log('CPUs', os.cpus ());
// lo dividir para tener los megas
console.log('Memoria libre', os.freemem() / 1024 / 1024); 
console.log('Memoria total', os.totalmem() / 1024 / 1024);
// Tiempo que transcurrio desde que prendi la pc
console.log('update', os.uptime() / 60 / 60)

console.table({
    os: os.platform(),
    version: os.release(),
    totalMemory: os.totalmem(),
})