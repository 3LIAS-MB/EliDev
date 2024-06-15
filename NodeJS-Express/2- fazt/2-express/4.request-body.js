// -> htpp response

const express = require('express')

const app = express()

app.use(express.text())
app.use(express.json())
// para entender datos q vienen de un formulario
app.use(express.urlencoded({ extended: false })) // -> url simple

app.post('/user', (req, res) => {
  console.log(req.body)
  res.send('Nuevo usuario creado')
})

app.listen(3000)
console.log(`server on port http://localhost:${3000}`)
