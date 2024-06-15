// CRUD -> CREAR, ACTUALIZAR, LISTAR, ELIMINAR
// CREATE, READ, UPDATE, DELETE
// -> HTTP Methods

const express = require('express')

const app = express()

app.get('/products', (req, res) => {
  // validate data
  // query a database
  // process data...
  res.send('lista de productos')
})

app.post('/products', (req, res) => {
  res.send('creando de productos')
})

app.put('/products', (req, res) => {
  res.send('actualizando de productos')
})

app.delete('/products', (req, res) => {
  res.send('eliminando productos')
})

app.patch('/products', (req, res) => {
  res.send('actualizando una parte del productos')
})

app.listen(3000)
console.log(`server on port http://localhost:${3000}`)
