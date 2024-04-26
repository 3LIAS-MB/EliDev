import { WINNER_COMBOS } from '../constants'

export const checkWinnerFrom = (boardToCheck) => { // (9)['x', 'x', 'x', null, 'o', 'o', null, null, null]
  // revisamos las convinaciones ganadoras
  for (const combo of WINNER_COMBOS) {
    const [a, b, c] = combo
    if (
      boardToCheck[a] &&
      boardToCheck[a] === boardToCheck[b] &&
      boardToCheck[a] === boardToCheck[c]
    ) {
      return boardToCheck[a]
    }
  }
  // si no hay ganador
  return null
}

export const checkEndGame = (newBoard) => {
  // La función every() toma una función de callback como argumento.
  // Para cada elemento del array, esta función de
  // callback se llama con tres argumentos: el valor
  // del elemento, el índice del elemento y el array en sí

  // si no hay más espacios vacios es un empate
  return newBoard.every((square) => square !== null)
}
