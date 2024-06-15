const express = require('express')

const app = express()

// middlewares -> pasa siempre por aqui 1ro
app.use((req, res, next) => { // app.use(function (req, response) {
  console.log(`Route: ${req.url} Metodo: ${req.method}`)
  console.log('paso por aqui')
  next()
})

app.get('/profile', (req, res) => {
  res.send('profile page')
})

app.all('/about', (req, res) => {
  res.send('about page')
})

app.listen(3000)
console.log(`server on port http://localhost:${3000}`)
