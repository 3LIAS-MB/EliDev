import { useState, useRef } from 'react'
import { searchMovies } from '../services/movies'

// Custom hook -> Extrae logica del componente
// se convierten en una caja negra 
export function useMovies ({ search, sort }) {
  const [movies, setMovies] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const previousSearch = useRef(search)

  const getMovies = async () => {
    if(search === previousSearch.current) return

    try {
        setLoading(true)
        setError(null)
        previousSearch.current =  search
        const newMovies = await searchMovies({ search })
        setMovies(newMovies) 
        } catch (e) {
        setError(e.message)
    } finally {
        // tanto en el 'try' como en el 'catch'
        setLoading(false)
    }
  }

 
  // localeCompare() se utiliza para comparar cadenas
  // de caracteres teniendo en cuenta las diferencias
  // de idioma y cultura, lo que lo hace útil para
  // ordenar cadenas en contextos multilingües.
  const sortedMovies = sort
  // operador ternario ' : ? '
  ? [...movies].sort((a, b) => a.year.localeCompare(b.year))
  : movies

  return { movies: sortedMovies, getMovies, loading }
}
