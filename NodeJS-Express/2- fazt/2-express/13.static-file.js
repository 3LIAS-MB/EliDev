const express = require('express')
const path = require('path')

const app = express()

app.set('appName', 'Express Course')
app.set('port', 3000)
app.set('case sensitive routing', true)

app.use(express.json())

// Si tengo una ruta igual que el nombre de un archivo publico
// y quiero que se muestre 1ro, lo subo antes de q se llame al archivo
app.get('zasda.txt', (req, res) => {
  res.send('este no es un archivo')
})

app.get('/welcome', (req, res) => {
  res.send('Welcome to the route')
})

// va a servir el nombre de la carpeta
// sus archivos van a poder ser accedidos
// -> http://localhost:3000/13.static-File.css

// sin el prefijo 'public' no va a poder acceder
// a todo lo que este dentro de esta carpeta
// -> http://localhost:3000/public/13.static-File.css
// En general, estos archivos estaticos se colocan al ultimo. Primero
// procesamos las rutas, si no conciden, buscamos en la carpetas 'public'
app.use('/public', express.static('./public'))
app.use('/uploads', express.static('./uploads'))
app.use('/update', express.static('./update')) // -> './dist'
// se pueden tener muchas carpetas estaticas...

// -> SI METO MI CONTENIDO DENTRO DE UNA CARPETA SRC
// pasa que express interpreta que todas las carpetas estan en la ruta
// principal, y si pongo mis archivos en src se pierde, esta seria la solución
app.use('/public', express.static(path.join(__dirname, 'public')))

app.listen(app.get('port'))
console.log(`Server ${app.get('appName')} on port http://localhost:${app.get('port')}`)
