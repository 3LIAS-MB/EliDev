  import { useEffect, useState } from "react";

  const CAT_PREFIX_IMAGEN_URL = 'https://cataas.com/cat/says/'

  // custom hook -> se pueden usar todos los
  // hooks de react dentro de él
  export function useCatImage( {fact} ) {
    const [imageUrl, setImageUrl] = useState();

    // para recuperar la imagen cada 
    // vez que tenemos cita nueva
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

    return { imageUrl: `${CAT_PREFIX_IMAGEN_URL}${imageUrl}` }
  }