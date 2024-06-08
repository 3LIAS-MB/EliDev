import { EVENTS } from "./consts.js";
// Children es una utilidad que nos proporciona una forma
// de poder iterar los 'children' de diferentes formas
import { Children, useEffect, useState } from "react";
import { match } from "path-to-regexp";

// Esto lo hace reactRoner, nextjs y
// tds los framework que utilizan Router

// children como prop cuando es 1 elemento
// es un objeto, más de eso es un array
export function Router ({ children, routes = [], defaultComponent: DefaultComponent = () => <h1>404</h1> }) {

  // La línea de código window.location.pathname en JavaScript se utiliza para obtener la parte de la URL que sigue al dominio, excluyendo el protocolo (http, https), el dominio y el puerto. En otras palabras, window.location.pathname devuelve la ruta del recurso en la web.

  // -> Supongamos que la URL de la página es https://www.ejemplo.com/productos/electronica.
  // -> Se convierte en /productos/electronica
  const [currentPath, setCurrentPath] = useState(window.location.pathname);

  useEffect(() => {
    // Actualiza la ruta cuando cambia
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

  // add routes from children <Route /> components
  // -> leer las props de los 'children'
  // -> Devuelve un array de objetos
  const routesFromChildren = Children.map(children, ({ props, type }) => { // children, mapped
    const { name } = type
    const isRoute = name === 'Route'
    return isRoute ? props : null
  })

  // Concatena las rutas pasadas como props y las renderizadas como children
  const routesToUse = routes.concat(routesFromChildren).filter(Boolean)

  const Page = routesToUse.find(({ path }) => {
    if (path === currentPath) return true
    // La función match se utiliza para crear una función que
    // compara currentPath con path, permitiendo rutas dinámicas.
    // -> hemos usado path-to-regexp para poder detectar rutas dinámicas

    // { decode: decodeURIComponent }
    // -> asegura que los parámetros de la URL se decodifiquen correctamente.
    // -> nos devuelve otra función que nos va a permitir compararlo con el 'currentPath'
    const matcherUrl = match(path, { decode: decodeURIComponent })
    // matcheUrl se llama con currentPath para verificar si hay una coincidencia dinámica.
    // matched será un objeto con detalles de la coincidencia si hay una, o false si no hay coincidencia.}
    const matched = matcherUrl(currentPath)
    if (!matched) return false


    // guardar los parámetros de la url que eran dinámicos
    // y que hemos extraído con path-to-regexp,
    // por ejemplo, si la ruta es /search/:query
    // y la url es search/javascript
    // -> matched.params.query === 'javascript'
    routeParams = matched.params
    return true;
  })?.Component; // -> encadenamiento opcional (optional chaining)

  return Page
    ? <Page routeParams={routeParams} />
    : <DefaultComponent routeParams={routeParams} />
}
