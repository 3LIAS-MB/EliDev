import { id } from 'prelude-ls'
import { useEffect, useState } from 'react'

const CAT_PREFIX_IMAGE_URL = 'https://cataas.com/cat/says/'

// custom hook -> se pueden usar todos los  hooks de react dentro de él, empieza con
// la palabra 'use' para identificarlo. es como una caja negra porque no necesitamos
// saber lo que hay dentro de él, solo que devuelve la imagen. -> no puede estar dentro
// de un 'if', 'while', tiene q ser llamado desde el cuerpo del componente

// La diferencia entre un custom hook y una funcion es que en el custom hook
// puede usar hooks dentro de él y una función no
export function useCatImage ({ fact }) {
  const [imageUrl, setImageUrl] = useState()

  // para recuperar la imagen cada
  // vez que tenemos cita nueva
  useEffect(() => {
    if (!fact) return

    const threeFirstWords = fact.split(' ', 3).join(' ')
    // const threeFirstWord = fact.split(' ')[0].slice(0, 3).join(' ')
    // console.log(threeFirstWord); 

    fetch(`https://cataas.com/cat/says/${threeFirstWords}?size=50&color=red&json=true`)
      .then(res => res.json())
      .then(response => {
        const { _id } = response
        const url = `/cat/${_id}/says/${threeFirstWords}`
        setImageUrl(url)
      })
  }, [fact])

  console.log(`${CAT_PREFIX_IMAGE_URL}`)
  return { imageUrl: `${CAT_PREFIX_IMAGE_URL}${imageUrl}` }
}
