import { createApp } from './app.js'

import { MovieModel } from './models/local-file-system/movie-models.js'

createApp({ movieModel: MovieModel })
