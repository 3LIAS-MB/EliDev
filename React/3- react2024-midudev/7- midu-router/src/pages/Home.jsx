import { navigate } from '../Link.jsx'

export default function HomePage() {
    return (
      <>
        <h1>home</h1>
        <h1>Esta es una pagina de ejemplo para crear React Router desde 0</h1>
        <button onClick={() => navigate("/about")}>Ir a Sobre Nosotros</button>
      </>
    );
  }

