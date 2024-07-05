// MVC -> Modelo vista controlador
// -> Es un partrón de arquitectura ampliamente utilizado en el desarrollo de software
// especialmente en aplicaciones web y moviles. Hay muchos framework que se basan en este modelo
// porque esta arquitectura proporciona una estructura que te obliga a separar la aplicacion
// en tres componentes interconectados (MVC) que separan las preocupaciones de la aplicacion

// Patron de arquitectura -> toma como arquitectura toda la aplicacion
// Patron de diseño -> repetible, facil de hacer para resolver una cosa en concreto

// Esta logica de filtrar va a ser distintas de la de mongoDB
//  -> logica de negocio -> MODELO
import { readJSON } from '../../utils.js'
import { randomUUID } from 'node:crypto'

const movies = readJSON('./movies.json')

export class MovieModel {
  // Es interesante que sea de la clase
  // porque asi tienen un contrato

  // -> static getAll = async ({ genre }) => { -> forma valida también
  static async getAll ({ genre }) {
    if (genre) {
      return movies.filter((movie) =>
        movie.genre.some((g) => g.toLowerCase() === genre.toLowerCase())
      )
    }
    return movies
  }

  static async getById ({ id }) {
    const movie = movies.find((movie) => movie.id === id)
    return movie
  }

  static async create ({ input }) {
    const newMovie = {
      id: randomUUID(),
      ...input
    }

    movies.push(newMovie)

    return newMovie
  }

  static async delete ({ id }) {
    const movieIndex = movies.findIndex((movie) => movie.id === id)
    if (movieIndex === -1) return false

    movies.splice(movieIndex, 1)
    return true
  }

  static async update ({ id, input }) {
    const movieIndex = movies.findIndex((movie) => movie.id === id)

    if (movieIndex < 0) return false

    movies[movieIndex] = {
      ...movies[movieIndex],
      ...input
    }
    return movies[movieIndex]
  }
}
