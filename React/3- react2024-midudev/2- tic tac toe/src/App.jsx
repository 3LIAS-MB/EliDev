import { useState } from "react";
import conffeti from "canvas-confetti";

import { Square } from "./components/Square.jsx";
import { TURNS } from "./constants.js";
import { checkWinnerFrom, checkEndGame } from "./logic/board.js";
import { WinnerModal } from "./components/WinnerModal.jsx";
import { saveGameToStorage, restGameStorage } from "./logic/storage/index.js";

function App() {
  // Los useState no pueden estar dentro de nada (if, for, etc),
  // solo en el cuerpo del componente. A demás, la inicialización
  // ocurre solo una vez (midudev)
    const [board, setBoard] = useState(() => {
    const boardFromStorage = window.localStorage.getItem("board");
    if (boardFromStorage) return JSON.parse(boardFromStorage);
    return Array(9).fill(null);
    // return boardFromStorage ? JSON.parse(boardFromStorage) : Array(9).fill(null)
  });

  const [turn, setTurn] = useState(() => {
    const turnFromStorage = window.localStorage.getItem("turn");
    return turnFromStorage ?? TURNS.X;
  });
  // null es que no hay ganador y false es un empate
  const [winner, setWinner] = useState(null);

  const resetGame = () => {
    setBoard(Array(9).fill(null));
    setTurn(TURNS.X);
    setWinner(null);

    restGameStorage();
  };

  const updateBoard = (index) => {
    // no actualizamos si ya tiene algo
    // o si hay un ganador
    if (board[index] || winner) return;

    // los datos del nuevo renderizado
    // tienen q ser nuevos o el mismo
    const newBoard = [...board];
    newBoard[index] = turn; // x u o
    setBoard(newBoard);
    // cambiar el turno
    const newTurn = turn === TURNS.X ? TURNS.O : TURNS.X;
    setTurn(newTurn);
    // guardar la partida
    saveGameToStorage({
      board: newBoard,
      turn: newTurn,
    });

    // revisar si hay ganador
    const newWinner = checkWinnerFrom(newBoard);
    if (newWinner) { // devuelve el emoji
      conffeti();
      setWinner(newWinner);
    } else if (checkEndGame(newBoard)) {
      setWinner(false); // empate
    }
  };

  return (
    <main className="board">
      <h1>💟💟 SelenE 💟💟</h1>
      <button onClick={resetGame}>Reset game</button>
      <section className="game">

      {/* 
      element: El valor del elemento actual del array.
      index (opcional): El índice del elemento actual del array.
      array (opcional): El array sobre el que se está iterando. */}
        {board.map((square, index) => {
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
          );
        })}
      </section>

      <section className="turn">
        <Square isSelected={turn == TURNS.X}>{TURNS.X}</Square>
        <Square isSelected={turn == TURNS.O}>{TURNS.O}</Square>
      </section>

      <WinnerModal resetGame={resetGame} winner={winner} />
    </main>
  );
}

export default App;
