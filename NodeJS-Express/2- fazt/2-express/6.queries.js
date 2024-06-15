const express = require('express')

const app = express()

app.get('/hello/:username', (req, res) => {
  console.log(req.query.user)
  console.log(req.query.age)
  res.send(`Hello ${req.params.username}`)
})

app.get('/search', (req, res) => {
  if (req.query.q === 'javascript book') {
    res.send('Lista de libros de javascript')
  } else {
    res.send('Página normal')
  }
})

app.listen(3000)
console.log(`server on port http://localhost:${3000}`)

// lAS QUERIES SIRVEN PARA CAMBIAR DE PAGINA
