import { Router } from 'express'
import { MovieController } from '../controllers/movies-controllers.js'

export const createMovieRouter = ({ movieModel }) => {
  const moviesRouter = Router()

  // Inyección de dependencias
  const movieController = new MovieController({ movieModel })

  moviesRouter.get('/', movieController.getAll)
  moviesRouter.post('/', movieController.create)

  moviesRouter.get('/:id', movieController.getById)
  moviesRouter.delete('/:id', movieController.delete)
  moviesRouter.patch('/:id', movieController.update)

  return moviesRouter
}
