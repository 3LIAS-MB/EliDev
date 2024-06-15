// Esta es una alternativa a la parte 13. La idea es crear multiples archivos en
// una sola aplicacion. El concepto de dividir archivos en express es Router

const express = require('express')
const morgan = require('morgan')

const app = express()

// const HomeRoutes = require('./routes/home')
const UserRoutes = require('./routes/13.users')

// setting
app.set('case sensitive routing', true)
app.set('appName', 'Express Course')
app.set('port', 3000)

// middlewares
app.use(express.json())
app.use(morgan('dev'))

// Le pasamos 'app' a las funciones
// HomeRoutes(app)
// UserRoutes(app)

// middlewares
// app.use(HomeRoutes)
app.use(UserRoutes)

app.listen(app.get('port'))
console.log(`Server ${app.get('appName')} on port http://localhost:${app.get('port')}`)
