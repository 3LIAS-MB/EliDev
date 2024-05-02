import { Square } from './Square'

{ /* && -> operador de cortocuircuito */ }
export function WinnerModal ({ winner, resetGame }) {
  if (winner === null) return null

  const winnerText = winner === false ? 'Empate' : 'Ganó:'

  return (
    <section className='winner'>
      <div className='text'>
        <h2> {winnerText} </h2>

        <header className='win'>
          {/* // si 'winner' es truthy -> un valor válido distinto de null o false
           // la expresión sigue evaluándose y se renderiza lo 2do */}
          {/* {winner && <Square>{winner}</Square>} */}
          {winner ? <Square>{winner}</Square> : <Square>💀</Square>}
        </header>

        <footer>
          <button onClick={resetGame}>Empezar de nuevo</button>
        </footer>
      </div>
    </section>
  )
}

// {winner !== null && (
