import './App.css'
// useRef es un hook que te permite crear una referencia mutable
// que persiste entre entre rendes,es util para guardar cualquier valor que
// puedas mutar, como un identificador, un elemento del DOM, contador, etc
// y que cada vez que cambia no vuelve a renderizar el contentente
import { useEffect, useState, useRef } from 'react'
import { useMovies } from './hooks/useMovies'
import { Movies } from './components/Movies'

function useSearch () {
  const [search, updateSearch] = useState('')
  const [error, setError] = useState(null)
  const isFirstInput = useRef(true)

  useEffect(() => {
    if (isFirstInput.current) {
      isFirstInput.current = search === ''
      return
    }

    if (search === '') {
      setError('No se puede buscar una palabra vacia')
      return
    }
    if (search.match(/^\d+$/)) {
      setError('No se puede buscar una pelicula con un número')
      return
    }
    if (search.length < 3) {
      setError('La busqueda debe tener almenos 3 caracteres')
      return
    }

    setError(null)
  }, [search])

  return { search, updateSearch, error }
}

function App () {
  const [sort, setSort] = useState()

  const { search, updateSearch, error } = useSearch()
  const { movies, loading, getMovies } = useMovies({ search, sort })

  const handleSubmit = (event) => {
    // const value = inputRef.current.value

    // const inputEl = inputRef.current
    // const value = inputEl.value

    // -> Para varios inputs
    // const fields = new window.FormData(event.target)
    // const query = fields.get('query')

    // const { query } = Object.fromEntries(new window.FormData(event.target))
    event.preventDefault()
    getMovies()
  }

  const handleSort = () => {
    setSort(!sort)
  }
  // -> Forma controlada
  const handleChange = (event) => {
    const newSearch = event.target.value
    updateSearch(newSearch)
    console.log('XDXD')
    // debouncedGetMovies(newSearch)
  }

  return (
    <div className='page'>
      <header>
        <h1>Buscador de películas</h1>
        <form className='form' onSubmit={handleSubmit}>
          <input
            style={{
              border: '1px solid transparent',
              borderColor: error ? 'red' : 'transparent'
            }}
            onChange={handleChange}
            value={search}
            name='query'
            placeholder='Avengers, Star Wars, The Matrix...'
          />
          <input type='checkbox' onChange={handleSort} checked={sort} />
          <button type='submit'>Buscar</button>
        </form>
        {error && <p style={{ color: 'red' }}>{error}</p>}
      </header>

      <main>
        {
          loading
            ? <p>Cargando...</p>
            : <Movies movies={movies} />
        }

      </main>
    </div>
  )
}

export default App
