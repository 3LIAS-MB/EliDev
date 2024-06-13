const express = require('express')

const app = express()

app.get('/hello/:user', (req, res) => {
  res.send(`Hello fazt ${req.params.user}`)
})

app.get('/add/:x/:y', (req, res) => { // ({params: {x, y}}, res) => {
  // console.log(req.params) // -> { x: '10', y: '30' }
  const { x, y } = req.params
  res.send(`Result ${parseInt(x) + parseInt(y)}`)
})

app.get('/user/:username/photo', (req, res) => {
  if (req.params.username === 'fazt') {
    return res.sendFile('./L.jpg', {
      root: __dirname
    })
  }

  res.send('El user no tiene acceso')
})

app.get('/nombre/:name/age/:age', (req, res) => {
  res.send(`El usuario tiene ${req.params.name} tiene ${req.params.age} años`)
})

app.listen(3000)
console.log(`server on port http://localhost:${3000}`)
