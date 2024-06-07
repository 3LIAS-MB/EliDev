import { useState } from "react";
import './App.css'

const NAVIGATION_EVENT = 'pushstate'

function navigate (href) {
  // no hay una forma nativa de poder escuchar el evento 'pushState()'. Sí hay
  // una forma de escuchar cuando es hacia atrás, pero para hacia delante, no hay
  window.history.pushState({}, '', href)
  // crear un evento personalizado
  const navigationEvent = new Event(NAVIGATION_EVENT)
  window.dispatchEvent(navigationEvent)
}

function HomePage() {
  return (
    <>
      <h1>home</h1>
      <h1>Esta es una pagina de ejemplo para crear React Router desde 0</h1>
      <a href="/about">Ir a Sobre Nosotros</a>
    </>
  );
}

function AboutPage() {
  return (
    <>
      <h1>About</h1>
      <div>
        <img src="https://static-cdn.jtvnw.net/jtv_user_pictures/5a72c3d9-424a-40a6-bf23-73370cd85578-profile_image-300x300.png" alt="midudev"/>
        <h1>Hola, estoy creando un clon de React Router</h1>
      </div>
      <a href="/">Ir a la Home</a>
    </>
  );
}

function App() {
  const [currentPath, setCurrentPath] = useState(window.location.pathname)
  return (
    <main>
      {/* Renderizado condicional */}
      {currentPath === '/' && <HomePage/>}
      {currentPath === '/about' && <AboutPage/>}
    </main>
  );
}

export default App;
