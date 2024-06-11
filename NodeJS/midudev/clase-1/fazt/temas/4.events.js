const EvenEmitter = require('events')

const customEmitter =  new EvenEmitter()

customEmitter.on('xxx', (data, secondData) => {
    console.log(received)
    console.log(data)
    console.log(secondData)
})

customEmitter.emit('xxx', 'hello wOrld', [123])