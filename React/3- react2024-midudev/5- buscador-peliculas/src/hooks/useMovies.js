// el 'useCallBack()' ES LO MISMO que el useMemo() pero
// pensado para funciones, y por debajo usa 'useMemo()'
// -> Te permite simplificar la sintaxis.
import { useState, useRef, useMemo, useCallback } from "react";
import { searchMovies } from "../services/movies";

// Custom hook -> Extrae logica del componente
// se convierten en una caja negra
export function useMovies({ search, sort }) {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  // El error puedo implementarlo después
  const [, setError] = useState(null);
  const previousSearch = useRef(search);

  // useMemo() -> Es para memorizar computaciones que hemos hecho que queremos evitar
  // que se hagan a no ser que cambien las dependencias que nosotros le indicamos

  // const getMovies = useMemo(() => {
  //   return async ({ search }) => {
  //     if (search === previousSearch.current) return;

  // Ya no hace falta que le pasemos un callback, sino que
  // le pasamos directamente la función que queremos memorizar
  const getMovies = useCallback(async ({ search }) => {
    if (search === previousSearch.current) return;
    try {
      setLoading(true);
      setError(null);
      previousSearch.current = search;
      const newMovies = await searchMovies({ search });
      setMovies(newMovies);
    } catch (e) {
      setError(e.message);
    } finally {
      // entra de todas formas
      // haya o no un error
      setLoading(false);
    }
  }, []);

  // localeCompare()
  // Se utiliza para comparar dos cadenas de texto de acuerdo con las reglas
  // de ordenamiento específicas del idioma y configuración regiona
  // Este método devuelve un número que indica si una cadena de texto viene
  // antes, después o es igual a otra cadena de texto en el orden de clasificación.

  // 1) locales (opcional): Una cadena o matriz de cadenas con etiquetas
  // de idioma para configurar el idioma que se usará en la comparación.
  // 2) options (opcional): Un objeto con propiedades que configuran las
  // reglas de comparación (como sensitivity, ignorePunctuation, etc.).
  // -> string1.localeCompare(string2, locales, options)

  // Si es una funcion preferiblemente usamos useCallback y si es un valor,
  // como en este caso, usamos 'useMemo()'
  const sortedMovies = useMemo(() => {
    return sort
      ? // operador ternario ' : ? '
        [...movies].sort((a, b) => // 0 (considera 'é' y 'e' como equivalentes)
          a.year.localeCompare(b.year, "en", { sensivility: "base" })
        )
      : movies;
  }, [sort, movies]);

  return { movies: sortedMovies, getMovies, loading };
}
