import Link from "next/link" // paquete link/componente 

export default function Navbar() {
  return (
    <nav>
      <h1>Navbar</h1>

      <ul>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/about">About</Link>
        </li>
        <li>
            <Link href={"/tienda"}>Tienda</Link>
        </li>
      </ul>
    </nav>
  );
}
