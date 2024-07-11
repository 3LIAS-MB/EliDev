// Para tener una subnavegación en tienda se podria crear un componente e importarlo en cada uno.
// Pero una mejor opción es crear otro 'Layout'. En este nuevo Layout ya no se necesita el HTMl porque
// este ya está añadido en el Layout inicial y SOLO HAY UN RootLayout. Solo uno q contiene al resto

// Dentro de este Layout también podría añadir un contexto que solo
// apliquen a las páginas que est dentro de la carpeta tienda

import Link from "next/link" // paquete link/componente 

export const metadata = {
  title: "Mi tienda con Next js",
  description: "Esta es la pagina principal de mi tienda",
  keywords: ["tienda", "online", "ecommerce"]
}

export default function TiendaLayout({ childen }) {
  return (
    <>
      <nav>
        <h3>Seccion Tienda</h3>
        <ul>
          <li>
            <Link href={"/tienda/categoria"}>Categorias</Link>
          </li>
          <li>
            <Link href={"/tienda/categoria/computadoras"}>Computadoras</Link>
          </li>
        </ul>
      </nav>
      {childen}
    </>
  );
}

