const express = require('express')

const app = express()

// si agregamos rutas antes de los middleware
// están rutas se visitan normalmente, sin intervencíon
app.get('/profile', (req, res) => {
  res.send('profile page')
})

app.all('/about', (req, res) => {
  res.send('about page')
})

// middlewares -> el orden importa
app.use((req, res, next) => {
  console.log(`Route: ${req.url} Metodo: ${req.method}`)
  next()
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
