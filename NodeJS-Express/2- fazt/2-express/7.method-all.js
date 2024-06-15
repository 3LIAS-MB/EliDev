const express = require('express')

const app = express()

// 'all' -> esta ruta funcionará con metodos
// get, post, delete, etc.
app.all('/info', (req, res) => {
  res.send('server info')
})

app.listen(3000)
console.log(`server on port http://localhost:${3000}`)
