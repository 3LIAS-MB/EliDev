import { useState, useEffect } from 'react'
import { getRandomFact } from '../services/facts'

export function useCatFact () {
  const [fact, setFact] = useState()

  //    gerRamdonFactAndUpdateState
  const refreshFact = () => {
    getRandomFact().then(newFact => setFact(newFact))
    // getRandomFact().then(setFact) -> "a veces es mala practica"
  }

  // efecto para recuperar la cita al cargar la página
  useEffect(refreshFact, [])

  return { fact, refreshFact }
}
