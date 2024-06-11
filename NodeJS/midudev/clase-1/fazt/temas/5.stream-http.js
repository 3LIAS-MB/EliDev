const http = require('http')
const { createReadSteam } = require('fs')

const server = http.createServer((req, res) => {
    const fileStream = createReadSteam('./data/bigFile.txt', {
        encoding: 'utf-8'
    })

    fileStream.on('data', (chunk) => {
        fileStream.pipe(res)
    })

    fileStream.on('error', error => {
        console.log(error)
    })
})

server.listen(3000)
console.log(`server on port ${3000}`)