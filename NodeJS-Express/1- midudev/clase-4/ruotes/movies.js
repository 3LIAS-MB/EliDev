// nos permite crear un enrutador a partir
// del cual vamos a poder crear todos los path
import { Router } from 'express'

import { MovieController } from '../controllers/movies.js'

// Export nombrado
export const moviesRouter = Router()

moviesRouter.get('/', MovieController.getAll)
moviesRouter.post('/', MovieController.create)

moviesRouter.get('/:id', MovieController.getById)
moviesRouter.delete('/:id', MovieController.delete)
moviesRouter.patch('/:id', MovieController.update)
