// Dos formas  de cargar modulos diferentes

// importa el módulo de servidor web integrado de Node
// const http = require('http') // esto seria CommonJS -> más común
/*------------------------------------------------------------------*/
//import http from 'http' ->  esto seria edma script module (q es el de js)

const express = require('express')
const app = express()

// La app tiene que utilizar el modulo que está en express.json
// tiene que soportar la request q se le hace cuando se le pasa
// un objeto y lo va a parsear para tenerlo dispobible en el request.body
app.use(express.json())

let notes = [
  {
      "userId": 1,
      "id": 1,
      "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderitxd",
      "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
  },
  {
      "userId": 1,
      "id": 2,
      "title": "qui est esse",
      "body": "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla"
  },
  {
      "userId": 1,
      "id": 3,
      "title": "ea molestias quasi exercitationem repellat qui ipsa sit aut",
      "body": "et iusto sed quo iure\nvoluptatem occaasdecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut"
  }
]

/*
  const app = http.createServer((request, response) => { // -> Se le pasa un callback como parametro
  response.writeHead(200, { 'Content-Type': 'application/json' })
  response.end(JSON.stringify(notes)) // recupera el array, lo recorre y transforma todos los obj en un string
 });


  const PORT = 3001 
  app.listen(PORT, () => { // cuando termine el servidor de levantarse ejecuta esto:
  console.log(`Server running on port ${PORT}`)
  });
*/

/*La función del controlador de eventos acepta dos parámetros.
El primer parámetro request contiene toda la información de la
solicitud HTTP y el segundo parámetro response se utiliza para
definir cómo se responde a la solicitud.*/
app.get('/', (request, response) => {
// la solicitud se responde utilizando el método send del objeto response.
  response.send('<h1>Hello worlD XD</h1>')
})

app.get('/api/notes', (request, response) => {
  response.json(notes) // java script object notation
})

app.get('/api/notes/:id', (request, response) => {
  const id = Number(request.params.id)
  const note = notes.find(note => note.id === id)

  if (note) {
    response.json(note)
  } else {  
    response.status(404).end()
  }
  
})

app.delete('/api/notes/:id', (request, response) => {
  const id = Number(request.params.id)
  notes = notes.filter(note => note.id !== id)
  response.status(204).end() 
})

app.post('/api/notes', (request, response) => {
  const note = request.body
  console.log(note)

  response.json(note)
})


const PORT = 3001
app.listen(PORT, () => { // cuando termine el servidor de levantarse ejecuta esto:
console.log(`Server running on port ${PORT}`)
})

