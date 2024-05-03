import resposeMovies from '../mocks/with-results.json'
// import withoutResults from '../mocks/no-results.json'

// Custom hook -> Extrae logica del componente
// se convierten en una caja negra 
export function useMovies () {
  const movies = resposeMovies.Search

  const mappedMovies = movies?.map(movie => ({
    id: movie.imdbID,
    title: movie.Title,
    year: movie.Year,
    image: movie.Poster
  }))

  return { movies: mappedMovies }
}
