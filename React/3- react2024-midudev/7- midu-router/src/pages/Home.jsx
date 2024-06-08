import { Link } from "../Link.jsx";

export default function HomePage() {
  return (
    <>
      <h1>Home</h1>
      <h1>Esta es una pagina de ejemplo para crear React Router desde 0</h1>
      <Link to='/about'>Ir a Sobre nosotros</Link>

      {/* <button onClick={() => navigate("/about")}>Ir a Sobre Nosotros</button> */}
    </>
  );
}
