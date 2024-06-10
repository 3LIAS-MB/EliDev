const path = require("node:path");

// Muestra la barra separadora de carpetas segun el SO
console.log(path.sep);

// unir rutas con path.join
const filePath = path.join("content", "subfolder", "test.txt");
console.log(filePath);

// 'basename' te muestra el nombre del fichero de la ruta
const base = path.basename("/tmp/midu-secret-files/password.txt");
console.log(base);

// muestra el nombre del fichero sin la extension
const fileName = path.basename("/tmp/midu-secret-files/password.txt", ".txt");
console.log(fileName);

// muestra solo la extension
const extension = path.extname("my.super.image.jpg");
console.log(extension);
