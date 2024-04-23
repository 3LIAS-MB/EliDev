import { useState } from "react"
import conffeti from "canvas-confetti"

import { Square } from "./components/Square.jsx"
import { TURNS } from "./constants.js"
import { checkWinnerFrom, checkEndGame} from "./logic/board.js"
import { WinnerModal } from "./components/WinnerModal.jsx"

function App() {
  const [board, setBoard] = useState(Array(9).fill(null))
  const [turn, setTurn] = useState(TURNS.X)
  // null es que no hay ganador y false es un empate      
  const [winner, setWinner] = useState(null)



  const resetGame = () => {
    setBoard(Array(9).fill(null))
    setTurn(TURNS.X)
    setWinner(null)
  }



  const updateBoard = (index) => {
    // no actualizamos si ya tiene algo
    // o si hay un ganador
    if(board[index] || winner) return

    // los datos del nuevo renderizado
    // tienen q ser nuevos o el mismo
    const newBoard = [...board]
    newBoard[index] = turn // x u o
    setBoard(newBoard)
    // cambiar el turno
    const newTurn = turn === TURNS.X ? TURNS.O : TURNS.X
    setTurn(newTurn)
    // revisar si hay ganador
    const newWinnner = checkWinnerFrom(newBoard)
    if (newWinnner) {
      conffeti()
      setWinner(newWinnner)
    } else if (checkEndGame(newBoard)) {
      setWinner(false) // empate
    }
  }

  return (
    <main className="board">
      <h1>Tic tac toe</h1>
      <button onClick={resetGame}>Reset del juego</button>
      <section className="game">
        {
          board.map((square, index) => {
            return (
              <Square
              key={index}
              index={index}
              /*Pasar una función como prop*/
              updateBoard={updateBoard}
              >
                {square}
                {/* {board[index]} */}
              </Square>
            )
          })
        } 
      </section>

      <section className="turn">
        <Square isSelected={turn == TURNS.X}> 
          {TURNS.X}
        </Square>
        
        <Square isSelected={turn == TURNS.O}>
          {TURNS.O}
        </Square>
      </section>

        <WinnerModal resetGame={resetGame} winner={winner}/>
      
    </main>
  )
}

export default App