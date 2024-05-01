import './App.css'
import { useCatImage } from './hooks/useCatImage.js'
import { useCatFact } from './hooks/useCatFact.js'

export function App () {
  const { fact, refreshRandomFact } = useCatFact()
  const { imageUrl } = useCatImage({ fact })

  const handleClick = async () => {
    refreshRandomFact()
  }

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
      <button onClick={handleClick}>Get new fact</button>

      {fact && <p>{fact}</p>}
      {imageUrl && (
        <img
          src={imageUrl}
          alt={`Image extracted using the first rhee words for ${fact}`}
        />
      )}
    </main> 
  )
}
