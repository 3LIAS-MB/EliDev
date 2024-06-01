import "./App.css";
// useRef es un hook que te permite crear una referencia mutable que persiste
// durante todo el ciclo de vida de tu componente (entre entre rendes), es util
// para guardar cualquier valor que puedas mutar, como un identificador, un elemento
// del DOM, contador, etc y que cada vez que cambia no vuelve a renderizar el contentente
import { useEffect, useState, useRef, useCallback } from "react";
import { useMovies } from "./hooks/useMovies";
import { Movies } from "./components/Movies";
import debounce from "just-debounce-it";

function useSearch() {
  const [search, updateSearch] = useState("");
  const [error, setError] = useState(null);
  const isFirstInput = useRef(true);

  // Casi siempre un useEffect es un 'custom hook'
  useEffect(() => {
    if (isFirstInput.current) {
      // cada vez que se intenta acceder a una referencia
      // siempre se accede al valor desde la propiedad 'current'
      isFirstInput.current = search === "";
      return;
    }

    if (search === " ") {
      setError("No se puede buscar una palabra vacia");
      return;
    }
    if (search.match(/^\d+$/)) {
      setError("No se puede buscar una pelicula con un número");
      return;
    }
    if (search.length < 3) {
      setError("La busqueda debe tener almenos 3 caracteres");
      return;
    }

    setError(null);
  }, [search]);

  return { search, updateSearch, error };
}

function App() {
  const [sort, setSort] = useState(false);

  const { search, updateSearch, error } = useSearch();    
  const { movies, loading, getMovies } = useMovies({ search, sort });

  
  const debouncedGetMovies = useCallback(
    debounce((search) => {
      getMovies({ search });
    }, 300),
    [getMovies]
  );

  // -> Forma no controlada
  // 1) Es decir, dependemos del DOM
  // 2) Midu recomienda esta porque suele ser más facil,
  // optimo, menos problemas y aprendes más JS
  const handleSubmit = (event) => {
    // const value = inputRef.current.value

    // const inputEl = inputRef.current
    // const value = inputEl.value

    // const fields = new window.FormData(event.target)
    // const query = fields.get('query')

    // -> Para varios inputs
    // const fields = Object.fromEntries(new window.FormData(event.target))
    // console.log(fields)
    event.preventDefault();
    getMovies({ search });
  };

  const handleSort = () => {
    setSort(!sort);
  };
  // -> Forma controlada
  // 1) Hay más posibilidades para validar un formulario
  // 2) Codigo más recogido
  // 3) No depender del DOM
  const handleChange = (event) => {
    const newSearch = event.target.value;
    updateSearch(newSearch);
    debouncedGetMovies(newSearch);
  };

  useEffect(() => {
    console.log("new getMovies received");
  }, [getMovies]);

  return (
    <div className="page">
      <header>
        <h1>Buscador de películas</h1>
        <form className="form" onSubmit={handleSubmit}>
          <input
            style={{
              border: "1px solid transparent",
              borderColor: error ? "red" : "transparent",
            }}
            onChange={handleChange}
            value={search}
            name="query"
            placeholder="Avengers, Star Wars, The Matrix..."
          />
          <input type="checkbox" onChange={handleSort} checked={sort} />
          <button type="submit">Buscar</button>
        </form>
        {error && <p style={{ color: "red" }}>{error}</p>}
      </header>

      <main>{loading ? <p>Cargando...</p> : <Movies movies={movies} />}</main>
    </div>
  );
}

export default App;
