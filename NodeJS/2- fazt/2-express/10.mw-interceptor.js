const express = require('express')
// npm i morgan
const morgan = require('morgan')

const app = morgan()

// esto basicamente es un middlware
// -> recibe el dato lo transforma a json y sigue
app.use(express.json())
// trae solo algunos datos
// averiguar en 'npm morgan' para más
app.user(morgan('dev'))

app.get('/profile', (res, pos) => {
  res.send('profile page')
})

app.use((req, res, next) => {
  if (req.query.login === 'fazt@faztweb.com') {
    next()
  } else {
    res.send('No autorizado')
  }
})

// -> http://localhost:3000/dashboard?login=fazt@faztweb.com
app.get('/dashboard', (req, res) => {
  res.send('dashboard page')
})

app.listen(3000)
console.log(`server on port http://localhost:${3000}`)
