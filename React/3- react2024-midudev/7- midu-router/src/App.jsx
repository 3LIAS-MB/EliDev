import "./App.css";

import HomePage from "./pages/Home.jsx";
import AboutPage from "./pages/About.jsx";
import Page404 from "./pages/404.jsx";
import { Router } from "./Router.jsx";
import SearchPage from "./pages/Search.jsx";

const appRoutes = [
  {
    path: "/",
    Component: HomePage,
  },
  {
    path: "/about", 
    Component: AboutPage,
  },
  {
    path: '/from',
    Component: ({ routeParams }) => <h1>Has buscado {routeParams.query}</h1>
  },
  {
    // Ruta dinamica -> /search/:query
    path: '/search/:query',
    Component: SearchPage
  }
] 

function App() {
  return (
    <main>
      {/* Renderizado condicional */}
      {/* {currentPath === "/" && <HomePage />}
      {currentPath === "/about" && <AboutPage />} */}
      <Router
        routes={appRoutes} defaultComponent={Page404}/>
    </main>
  );
}

export default App;
