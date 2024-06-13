// const http = require('http')
// const fs = require('fs')

// const server = http.createServer((req, res) => {
//     const read = fs.createReadStream('./static/index.html')
//     read.pipe(res)
// })

// server.listen(3000)
// console.log(`server on port http://localhost:${3000}`)


const express = require('express')

const app = express()

app.get('/', (req, res) => {
    // En lugar de usar el metodo 'end' que no da tanta informacion de lo q estamos enviando.
    // Lo reemplazamos por 'send' que solo está disponible en express. Evitamos creear esas fnciones
    res.send('<h1>Hello world</h1 style={color: yellow;}>')

    // res.sendFile('static/index.html', {
    //     // leemos el archivo desde este directorio
    //     root: __dirname
    // })
})

app.get('/about', (req, res) => {
    res.send('About')
})

app.get('/weather', (req, res) => {
    res.send('Weather')
})

app.use((req, res) => {
    res.statusCode(404).send('nO se encontró la pagina')
})

app.listen(3000)
console.log(`server on port http://localhost:${3000}`)
