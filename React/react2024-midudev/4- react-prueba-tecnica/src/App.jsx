  import { useEffect, useState } from "react";
  import "./App.css";
  import { getRandomFact } from "./services/facts";
import { func } from "prop-types";

  const CAT_PREFIX_IMAGEN_URL = "https://cataas.com/cat/says/";
 
  // custom hook
  function useCatImage() {

  }

  export function App() {
    const [fact, setFact] = useState();
    const [imageUrl, setImageUrl] = useState();
    
    // efecto para recuperar la cita al cargar la página
    useEffect(() => {
      //getRandomFact().then(setFact)
      getRandomFact().then(newFact => setFact(newFact)) 
    }, [])

    // para recuperar la imagen cada vez que tenemos cita nueva
    useEffect(() => {
      if (!fact) return
      
      const threeFirstWord = fact.split(" ", 3).join(" ");
      // const threeFirstWord = fact.split(' ')[0].slice(0, 3).join(' ')
      console.log(threeFirstWord);

      fetch(
        `https://cataas.com/cat/says/${threeFirstWord}?size=50&color=red&json=true`
      )
        .then(res => res.json())
        .then(response => {
          const { url } = response; 
          setImageUrl(response); 
        });
    }, [fact])

    // useEffect(() => {
    //     async function getRandomFact () {
    //         const res = await fetch(CAT_ENDPOINT_RANDOM_FACT)
    //         const json = await res.json()
    //         setFact(json.fact)
    //     }
    //     getRandomFact()
    // }, [])

    return (
      <main>
        <h1>App de gatitos</h1>
        <section>
          <button onClick={getRandomFact()}>Get new fact</button>

          {fact && <p>{fact}</p>}
          {imageUrl && (
            <img
              src={`${CAT_PREFIX_IMAGEN_URL}${imageUrl}`}
              alt={`Image extracted using the first rhee words for ${fact}`}
            />
          )}
        </section>
      </main>
    );
  }

