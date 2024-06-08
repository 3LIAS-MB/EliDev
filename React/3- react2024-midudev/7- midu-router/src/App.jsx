// Nos permite importar de forma dinamica los componentes
// De forma que hasta que no lo necesitemos, no los renderiza
import { Suspense, lazy } from "react";

import "./App.css";
// import estático
// import AboutPage from "./pages/About.jsx";
// import HomePage from "./pages/Home.jsx";
import Page404 from "./pages/404.jsx";
import SearchPage from "./pages/Search.jsx";

import { Router } from "./Router.jsx";
import { Route } from "./pages/Route.jsx";

// Import dinámico
const LazyHomePage = lazy(() => import("./pages/Home.jsx"));
const LazyAboutPage = lazy(() => import("./pages/About.jsx"));

const appRoutes = [
  // {
  //   path: "/",
  //   Component: HomePage,
  // },
  // {
  //   path: "/about",
  //   Component: AboutPage,
  // },
  // {
  //   path: '/from',
  //   Component: ({ routeParams }) => <h1>Has buscado {routeParams.query}</h1>
  // },
  {
    path: "/:lang/about",
    Component: LazyAboutPage
  },
  {
    // Ruta dinamica -> /search/:query
    path: "/search/:query",
    Component: SearchPage,
  },
];

function App() {
  return (
    <main>
      {/* Renderizado condicional */}
      {/* {currentPath === "/" && <HomePage />}
      {currentPath === "/about" && <AboutPage />} */}

      {/* <Router
        routes={appRoutes} defaultComponent={Page404}/> */}

      {/*fallback por si queremos mostrar algo mientras carga*/}
      <Suspense fallback={null}>
        <Router routes={appRoutes} defaultComponent={Page404}>
          <Route path="/" Component={LazyHomePage} />
          <Route path="/about" Component={LazyAboutPage} />
        </Router>
      </Suspense>
    </main> 
  );
}

export default App;
