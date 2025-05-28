import { useState } from 'react';

function Square({ value, onSquareClick}) {
  return (<button className="square" onClick={onSquareClick}>
          {value}
        </button>
  );
}

function Board({xIsNext, squares , onPlay}) {

  const indexSquareRow1 = [0,1,2];
  const indexSquareRow2 = [3,4,5];
  const indexSquareRow3 = [6,7,8];

  function handleClick(i) {
    if (squares[i] || calculateWinner(squares)) {
      return;
    }
    const nextSquares = squares.slice();
    if (xIsNext) {
      nextSquares[i] = "X";
    } else {
      nextSquares[i] = "O";
    }
    onPlay(nextSquares);
  }

  const winner = calculateWinner(squares);
  let status;
  if (winner) {
    status = "Ganador: " + winner;
  } else {
    status = "Siguiente jugador: " + (xIsNext ? "X" : "O");
  }

  return (
    <>
       <div className="status">{status}</div>
        <div className="board-row">
          {indexSquareRow1.map((squareIndex)=>(
             <Square key={squareIndex} value={squares[squareIndex]} onSquareClick={() => handleClick(squareIndex)} />
            ))}
      </div>
      <div className="board-row">
        {indexSquareRow2.map((squareIndex)=>(
             <Square key={squareIndex} value={squares[squareIndex]} onSquareClick={() => handleClick(squareIndex)} />
            ))}
      </div>
      <div className="board-row">
       {indexSquareRow3.map((squareIndex)=>(
             <Square key={squareIndex} value={squares[squareIndex]} onSquareClick={() => handleClick(squareIndex)} />
            ))}
      </div>
    </>
  );
}              

export default function Game() {
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const [currentMove, setCurrentMove] = useState(0);
  const currentSquares = history[currentMove];
  const xIsNext = currentMove % 2 === 0;

  function handlePlay(nextSquares) {
    const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
    setHistory(nextHistory);
    setCurrentMove(nextHistory.length - 1);
  }

  function jumpTo(nextMove) {
    setCurrentMove(nextMove);
  }

  const moves = history.map((squares, move) => {
    let description;
    if (move > 0) {
      description = 'Ir al movimiento #' + move;
    } else {
      description = 'Ir al inicio del juego';
    }
    if (currentMove === move && move > 0) {
      return(
      <li key={move}>
         Estas en el movimiento {move}
      </li>
      );
    }else {
      return (
        <li key={move}>
          <button onClick={() => jumpTo(move)}>{description}</button>
        </li>
      );
   }
  });

  const ascMoves = () => {
    alert("invierte!");
  }

  const descMoves = () => {
    alert("invierte!");
  }

  return (
    <div className="game">
      <div className="game-board">
        <Board xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay}/>
      </div>
      <div className="game-info">
      <ol>{moves}</ol>
      </div>
      <br/>
      <button  onClick={ascMoves}>
          Ascendente
      </button>
      <br/>
      <button  onClick={descMoves}>
          Descendente
      </button>
    </div>
  );
}

function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}