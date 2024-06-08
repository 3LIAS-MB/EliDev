import { EVENTS } from "./consts.js";
import { useEffect, useState } from "react";

import { match } from "path-to-regexp";

 // Esto lo hace reactRoner, nextjs y 
 // tds los framework que utilizan Router
export function Router({
  routes = [],
  defaultComponent: DefaultComponent = () => <h1>404</h1>,
}) {
  // La línea de código window.location.pathname en JavaScript se utiliza para obtener la parte de la URL que sigue al dominio, excluyendo el protocolo (http, https), el dominio y el puerto. En otras palabras, window.location.pathname devuelve la ruta del recurso en la web.

  // -> Supongamos que la URL de la página es https://www.ejemplo.com/productos/electronica.
  // -> Se convierte en /productos/electronica
  const [currentPath, setCurrentPath] = useState(window.location.pathname);

  useEffect(() => {
    const onLocationChange = () => {
      setCurrentPath(window.location.pathname);
    };

    // pushState se utiliza para agregar una entrada al historial del
    // navegador sin recargar la página. Este método permite cambiar
    // la URL visible en la barra de direcciones del navegador y asociar datos con la nueva URL.
    window.addEventListener(EVENTS.PUSHSTATE, onLocationChange);
    // 'popstate' es el evento que está el navegador
    //  lanzando cuando hacemos para atrás
    // o incluso cuando hacemos el window.history.back()
    window.addEventListener(EVENTS.POPSTATE, onLocationChange);

    return () => {
      window.removeEventListener(EVENTS.PUSHSTATE, onLocationChange);
      window.removeEventListener(EVENTS.POPSTATE, onLocationChange);
    };
  }, []);

  let routeParams = {};

  const Page = routes.find(({ path }) => {
    if (path === currentPath) return true;

    // hemos usado path-to-regexp
    // para poder detectar rutas dinámicas

    // La función match se utiliza para crear una función que
    // compara currentPath con path, permitiendo rutas dinámicas.

    // { decode: decodeURIComponent }
    // -> asegura que los parámetros de la URL se decodifiquen correctamente.
    // -> nos devuelve otra función que nos va a permitir compararlo con el 'currentPath'
    const matcheUrl = match(path, { decode: decodeURIComponent });
    // matcheUrl se llama con currentPath para verificar si hay una coincidencia dinámica.
    // matched será un objeto con detalles de la coincidencia si hay una, o false si no hay coincidencia.
    const matched = matcheUrl(currentPath);
    if (!matched) return false;

    // guardar los parámetros de la url que eran dinámicos
    // y que hemos extraído con path-to-regexp,
    // por ejemplo, si la ruta es /search/:query
    // y la url es search/javascript
    // -> matched.params.query === 'javascript'
    routeParams = matched.params;
    return true;
  })?.Component; // -> encadenamiento opcional (optional chaining)

  return Page ? (
    <Page routeParams={routeParams} />
  ) : (
    <DefaultComponent routeParams={routeParams} />
  );
}
