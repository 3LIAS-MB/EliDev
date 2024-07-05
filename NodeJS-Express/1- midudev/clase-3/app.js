const express = require('express')
// biblioteca nativa de nodejs, funca en el navegador
// -> crypto nos permite crear crear IDS unicas
const crypto = require('node:crypto')
// middleware cors -> esto po
const cors = require('cors')
const movies = require('./movies.json')
const { validateMovie, validatePartialMovie } = require('./schemas/movies')

const app = express()

app.use(
  cors({
    origin: (origin, callback) => {
      const ACCEPTED_ORIGINS = [
        'http://localhost:8080',
        'http://localhost:1234',
        'https://movies.com',
        'https://midu.dev',
        'http://localhost:58801'
      ]

      if (ACCEPTED_ORIGINS.includes(origin)) {
        return callback(null, true)
      }

      if (!origin) {
        return callback(null, true)
      }

      return callback(new Error('Not allowed by CORS'))
    }
  })
)

app.use(express.json())
// deshabilitar el header X-Powered-By: Express
app.disable('x-powered-by')

// endpoint -> un path en el que tenemos un recurso.
// las apis tiene diferentes urls que podemos llamar
// para extraer informacíón
app.get('/movies', (req, res) => {
  // -> PARA TODO ESTO YA EXISTEN DEPENCIAS COMO 'CORS'

  // // El navegador no envia el header de 'origin'
  // // cuando la peticion es del mismo origin
  // const origin = req.header('origin')
  // if (ACCEPTED_ORIGINS.includes(origin) || !origin) {
  //   /* '*' -> todos los origines q no sean los mios están permitidos */
  //   res.header('Access-Control-Allow-Origin', origin) // -> 'http://localhost:8080'
  // }

  const { genre } = req.query
  if (genre) {
    const filteredMovies = movies.filter((movie) =>
      movie.genre.some((g) => g.toLowerCase() === genre.toLowerCase())
    )
    return res.json(filteredMovies)
  }
  res.json(movies)
})

app.get('/movies/:id', (req, res) => {
  const { id } = req.params
  const movie = movies.find((movie) => movie.id === id)
  if (movie) return res.json(movie)
  res.status(404).json({ message: 'Movie not found' })
})

app.post('/movies', (req, res) => {
  const result = validateMovie(req.body)

  if (result.error) {
    // !result.success -> devuelve un booleano
    return res.status(400).json({ error: JSON.parse(result.error.message) })
  }

  // Esto iria en la base de datos
  const newMovie = {
    // UUID -> Identificador unico universal
    id: crypto.randomUUID(),
    // no es lo mismo hacer esto (req.body),
    // porque no se estaria validando
    ...result.data
  }
  // Esto no seria REST, porque estamos guardando
  // el estado de la aplicación en memoria
  movies.push(newMovie)
  // actualizar la caché del cliente con la nueva ID
  res.status(201).json(newMovie)
})

app.delete('/movies/:id', (req, res) => {
  const { id } = req.params
  const movieIndex = movies.findIndex((movie) => movie.id === id)

  if (movieIndex === -1) {
    return res.status(404).json({ message: 'Movie not found' })
  }

  movies.splice(movieIndex, 1)

  return res.json({ message: 'Movie deleted' })
})

app.patch('/movies/:id', (req, res) => {
  const result = validatePartialMovie(req.body)

  if (!result.success) { // if (result.error)
    return res.status(400).json({ error: JSON.parse(result.error.message) })
  }

  const { id } = req.params
  const movieIndex = movies.findIndex((movie) => movie.id === id)

  if (movieIndex < 0) {
    return res.status(404).json({ message: 'Movie not found' })
  }

  const updateMovie = {
    // todo lo que tenemos en movieIndex
    ...movies[movieIndex],
    ...result.data
  }
  // guardar en "base de datos"
  movies[movieIndex] = updateMovie

  return res.json(updateMovie)
})

// -> PARA TODO ESTO YA EXISTEN DEPENCIAS COMO 'CORS'

// métodos normales: GET/HEAD/POST
// métodos complejos: PUT/PATCH/DELETE.

// En estos existe el 'CORS PRE-Fligh' que requieren una peticion
// especial que se llama 'OPTIONS'. Es como una petición previa
// app.options('/movies/:id', (req, res) => {
//   // -> Lo reemplaza la dependencia
//   const origin = req.header('origin')
//   if (ACCEPTED_ORIGINS.includes(origin) || origin) {
//     // cabeceras
//     res.header('Access-Control-Allow-Origin', origin)
//     // estos son los metodos que va a poder usar
//     res.header('Access-Control-Allow-Methods', 'GET', 'POST', 'PUT', 'PATCH', 'DELETE')
//   }
//   res.send(200)
// })

// El hosting asigna el puerto automaticamente por variable de entorno.
// Es por eso que es importante agregar 'process.env.PORT'
const PORT = process.env.PORT ?? 1234

app.listen(PORT, () => {
  console.log(`server listening on port http://localhost:${PORT}`)
})
