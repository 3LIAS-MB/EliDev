async function loadPost() {
  const rest = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await rest.json();
  return data
}

// El hecho de que lleve async significa que ya no estamos hablando de 
// un componente basico de react sino un componente que está procesando
// codigo asincrono, y para que lo haga un servidor lo debe ejecutar
export default async function PostPages() {
  const posts = await loadPost()
  return (
    <>
      {
        posts.map(post => (
          <div key={post.id}>
            <h3>{post.id}. {post.title}</h3>
            <p>{post.body}</p>
          </div>
        ))
      }
    </>
  );
}
