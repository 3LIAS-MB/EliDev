import { Link } from "../Link.jsx";

const il8n = {
  es: {
    title: 'Sobre Nosotros',
    button: 'Ir a la Home',
    description: 'Hola, me llamo Elias y estoy creando un clon de React Router'
  },
  en: {
    title: 'About us',
    button: 'Go to about us',
    description: 'Hello, My name is Elias and I am creating a clone of React Router'
  }
}

const useI18n = (lang) => {
  return il8n[lang] || il8n.en
  }
  
export default function AboutPage({ routeParams }) { // {lang: 'en'}
  console.log('0asd')
  console.log(routeParams)
  const i18n = useI18n(routeParams.lang ?? 'es')
  console.log(routeParams.lang)


  return (
    <>
      <h1>{i18n.title}</h1>
      <div>
        <img
          src="https://static-cdn.jtvnw.net/jtv_user_pictures/5a72c3d9-424a-40a6-bf23-73370cd85578-profile_image-300x300.png"
          alt="midudev"
        />
        <p>{i18n.description}</p>
      </div>
      <Link to="/">{i18n.button}</Link>
      {/* <button onClick={() => navigate("/")}>Ir la Home</button> */}
    </>
  );
}
  