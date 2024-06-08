import { Link } from "../Link.jsx";

export default function AboutPage() {
  return (
    <>
      <h1>About</h1>
      <div>
        <img
          src="https://static-cdn.jtvnw.net/jtv_user_pictures/5a72c3d9-424a-40a6-bf23-73370cd85578-profile_image-300x300.png"
          alt="midudev"
        />
        <h1>Hola, estoy creando un clon de React Router</h1>
      </div>
      <Link to="/">Ir a la Home</Link>
      {/* <button onClick={() => navigate("/")}>Ir la Home</button> */}
    </>
  );
}
