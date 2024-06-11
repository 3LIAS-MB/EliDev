const fs = require("node:fs/promises");

// lee el directorio (en este caso el actual)
// fs.readdir("."),
//   (err, files) => {
//     if (err) {
//       console.log("Error el leer el directorio", err);
//       return;
//     }

//     files.forEach((file) => {
//       // listado de nuestros ficheros
//       console.log(file);
//     });
//   };

// usando promesas y catch
fs.readdir(".")
  .then((files) => {
    files.forEach((file) => {
      console.log(file);
    });
  })
  .catch((err) => {
    if (err) {
      console.error("Error al leer el directorio: ", err);
      return;
    }
  });

// informacion del contenido de un archivo
// fs.stat("content");

