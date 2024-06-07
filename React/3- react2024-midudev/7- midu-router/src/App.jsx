import "./App.css";
import { EVENTS } from "./consts.js";
import { useEffect, useState } from "react";
import HomePage from "./pages/Home.jsx";
import AboutPage from './pages/About.jsx'



function App() {
  // La línea de código window.location.pathname en JavaScript se utiliza para obtener la parte de la URL que sigue al dominio, excluyendo el protocolo (http, https), el dominio y el puerto. En otras palabras, window.location.pathname devuelve la ruta del recurso en la web.

  // -> Supongamos que la URL de la página es https://www.ejemplo.com/productos/electronica.
  // -> Se convierte en /productos/electronica
  const [currentPath, setCurrentPath] = useState(window.location.pathname);

  useEffect(() => {
    const onLocationChange = () => {
      setCurrentPath(window.location.pathname);
    };

    window.addEventListener(EVENTS.PUSHSTATE, onLocationChange);
    // 'popstate' es el evento que está el navegador
    //  lanzando cuando hacemos para atrás
    // o incluso cuando hacemos el window.history.back()
    window.addEventListener(EVENTS.POPSTATE, onLocationChange)

    return () => {
      window.removeEventListener(EVENTS.PUSHSTATE, onLocationChange);
      window.removeEventListener(EVENTS.POPSTATE, onLocationChange);

    };
  }, []);

  return (
    <main>
      {/* Renderizado condicional */}
      {currentPath === "/" && <HomePage />}
      {currentPath === "/about" && <AboutPage />}
    </main>
  );
}

export default App;
