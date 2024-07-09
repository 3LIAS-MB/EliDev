import { createApp } from './app.js'
import { MovieModel } from './models/mysql/movie-models.js'

createApp({ movieModel: MovieModel })
