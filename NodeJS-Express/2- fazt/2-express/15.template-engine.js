const express = require('express')
const morgan = require('morgan')
const path = require('path')

// este modulo nos permite procesar archivos html en el backed y
// enviarle al fronted estos html. tiene más caracteristicas q html
require('ejs') // -> no hace faltar guardarlo en una constante

const app = express()

const HomeRoutes = require('./routes/14.home.js')
const UserRoutes = require('./routes/14.users.js')

// setting
app.set('case sensitive routing', true)
app.set('appName', 'Express Course')
app.set('port', 3000)
// con esto configuro EJS para que express sepa el template que uso
app.set('view engine', 'ejs')
// requerido, para saber dnd está la ruta de la carpeta 'views'
app.set('views', path.join(__dirname, 'views'))

// middlewares
app.use(express.json())
app.use(morgan('dev'))

// middlewares
app.use(HomeRoutes)
app.use(UserRoutes)

app.listen(app.get('port'))
console.log(`Server ${app.get('appName')} on port http://localhost:${app.get('port')}`)
