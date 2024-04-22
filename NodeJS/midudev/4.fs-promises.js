// '/promises' sirve para en vez de utilizar
// 'callback' se utilice promesas
const fs = require("node:fs/promises");

// -> FORMA ASINCRONA
console.log("Leyendo el primer archivo ... ");
fs.readFile("./archivo.txt", "utf-8", (err, text) => {
  console.log("primer texto:", text);
});

console.log("→ Hacer cosas mientras lee el archivo... ");

// console.log('Leyendo el segundo arch ivo ... ')
// fs.readFile('./archivo2.txt', 'utf-8', (err, text) => {
//     console.log('segundo texto:', text)
// })
