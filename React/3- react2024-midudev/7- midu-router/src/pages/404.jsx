import { Link } from "../Link";

export default function Page404() {
  return (
    <>
      <div>
        <h1>This is NOT fine</h1>
        <img
          src="https://media1.tenor.com/m/-kZOB16tELEAAAAC/this-is-fine-fire.gif"
          alt="Gif del perro de This is Fine quemándose vivo"
        />
      </div>
      <Link to="/">Volver a la Home</Link>
    </>
  );
}
