import Users from "@/components/Users";

// Los metadata solo funcionan con paginas que estén del lado del servidor
export const metadata = {
  title: 'Mi pagina especial Home'
}

export default function Page() {
  return (
    // Server component
    <section>
      <h1>Hello world</h1>
      {/* Client component */}
      <Users />
    </section>
  );
}
