// -> htpp response

const express = require('express')

const app = express()

app.get('/', (req, res) => {
  // Enviar respuesta SIN usar el metodo file system
  res.sendFile('./L.jpg', {
    root: __dirname // -> objeto global
  })
})

app.get('/user', (req, res) => {
  res.json({
    name: 'fazt',
    lastname: 'ray',
    age: 40,
    point: [1, 2, 3],
    address: {
      city: 'SSDJ',
      street: 'some street 123'
    }
  })
})

app.get('/isAlive', (req, res) => {
  // res.status(204).end()
  res.sendStatus(204).end()
})

app.listen(3000)
console.log(`server on port http://localhost:${3000}`)
