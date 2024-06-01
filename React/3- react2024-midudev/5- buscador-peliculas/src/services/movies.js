const API_KEY = '4287ad07'

export const searchMovies = async ({ search }) => {
  if (search === '') return null 

  try {
    const response = await fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&s=${search}`)
    const json = await response.json()

    const movies = json.Search  
    
    //'?.' -> es el operador de encadenamiento opcional (optional chaining)
    // Si el valor a la izquierda del operador es null o undefined, el 
    // resultado de la expresión será undefined en lugar de lanzar un error
    return movies?.map(movie => ({
      id: movie.imdbID,
      title: movie.Title,
      year: movie.Year, 
      image: movie.Poster,
    }))
  } catch (e) {
    throw new Error('Error searching movies')
  }
}
