// Framework
const express = require('express') 
// la cantidad de APIS que hay importando el json XXd
const ditto = require('./pokemon/ditto.json')

const PORT = process.env.PORT ?? 1234

const app = express()
// Esto es para desactivar la cabecera extra que le añade express.
// Express la usa para indicar que se está usando su framework xD
// Es mejor quitarlo porque puede ser un problema de seguridad,
// porque si apareciera la versión y esta tendria un fallo de seguridad...
app.disable('x-powered-by')

// MIDDLEWARE -> se pueden poner las para la urls que quieramos o
// tambien para una accion en concreto (get, post, get); pero
// generalmente son para todo en general
// app.use('/pokemon/*', (req, res, next) => {})

// app.use((req, res, next) => {
//   // solo llegan request que son POST y que
//   // tienen el header Content-Type: application/json
//   if (req.method !== 'POST') return next()
//   if (req.headers['content-type'] !== 'application/json') return next()

//   let body = ''

//   req.on('data', chunk => {
//     body += chunk.toString()
//   })

//   req.on('end', () => {
//     const data = JSON.parse(body)
//     data.timestamp = Date.now()
//     // mutar la request y meter la
//     // información en el req.body
//     req.body = data
//     next() // IMPORTANTE para continuar
//   })
// })

// MIDDLEWARE que hace exactamente lo mismo de forma nativa
app.use(express.json())

// Esta basado más en las rutas 
// Forma más declarativa
// -> El 'status' y el 'content type' estan por defecto
app.get('/pokemon/ditto', (req, res) => {
  res.json(ditto)
})

app.post('/pokemon', (req, res) => {
  // req.body deberíamos guardar en bbdd
  res.status(201).json(req.body)
})

// la última a la que va a llegar cualquiera 
// sea la accion va a pasar por aqui
app.use((req, res) => {
  res.status(404).send('<h1>404</h1>')
})

app.listen(PORT, () => {
  console.log(`server listening on port http://localhost:${PORT}`)
})
