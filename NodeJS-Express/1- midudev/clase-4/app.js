import express, { json } from 'express'
import { moviesRouter } from './ruotes/movies.js'
import { corsMiddleware } from './middlewares/cors.js'

const app = express()
app.use(json())
app.use(corsMiddleware())
// deshabilitar el header X-Powered-By: Express
app.disable('x-powered-by')

// cuando se accede a 'movies' se carga todas las rutas de moviesRouter.
// de esta forma separamos todas las rutas que tienen q ver con '/movies '
app.use('/movies', moviesRouter)

const PORT = process.env.PORT ?? 1234

app.listen(PORT, () => {
  console.log(`server listening on port http://localhost:${PORT}`)
})
