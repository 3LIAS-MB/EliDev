const express = require('express')
const morgan = require('morgan')

const app = express()

app.set('case sensitive routing', true)
app.set('appName', 'Express Course')
app.set('port', 3000)

app.use(morgan('dev'))

// routes
app.use('/public', express.static('./public'))

app.listen(app.get('port'))
console.log(`Server ${app.get('appName')} on port http://localhost:${app.get('port')}`)
