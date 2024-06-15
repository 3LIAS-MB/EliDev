const express = require('express')
const morgan = require('morgan')

const app = express()

// -> EXPRESS SETTING -> (appName, valor)
// -> Siempre tienen que estar antes de los middleware
app.set('appName', 'Express Course')
app.set('port', 3000)
// cada vez que busque una ruta va a repetar los caracteres tal cual sean
// -> configuración reservada
app.set('case sensitive routing', true)

// middleware
app.use(morgan('dev'))

// routes
app.get('/userName', (req, res) => {
  res.send('Username Route')
})

app.listen(app.get('port'))
console.log(`Server ${app.get('appName')} on port http://localhost:${app.get('port')}`)
