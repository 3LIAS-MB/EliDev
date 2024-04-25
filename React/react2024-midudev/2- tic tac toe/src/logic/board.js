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
  // si no hay más espacios vacios es un empate
  return newBoard.every((square) => square !== null)
}
