import React, { useState,useEffect } from 'react';

import './TicTacToe.css';

function TicTacToe() {
  const emptyBoard=Array(9).fill("")
  const [board,setBoard]=useState(emptyBoard)
  const[currentPlayer,setCurrentPlayer]=useState("O")
  const[winner,setWinner]=useState(null)

  let clique=(index) => {
    if(winner) return null
    if(board[index]!=="")return null;
  



setBoard(board.map((item,itemIndex)=>itemIndex===index?currentPlayer:item))
setCurrentPlayer(currentPlayer==="X"?"O":"X")
  }
  const checkWinner =()=>{
    const possiblesWaysToWinTheGame=[
      [board[0],board[1],board[2]],
      [board[3],board[4],board[5]],
      [board[6],board[7],board[8]],

      [board[0],board[4],board[8]],
      [board[2],board[4],board[6]],

      [board[0],board[3],board[6]],
      [board[1],board[4],board[7]],
      [board[2],board[5],board[8]]
      
      
    ];

    possiblesWaysToWinTheGame.forEach(jogo => {
      if( jogo.every (jogo => jogo==="O")) setWinner("O")
      if(jogo.every(jogo=>jogo==="X"))  setWinner("X")
      
    });
   
  }
  const checkDraw=()=>{
    if(board.every(item=> item!=="")&& winner===null){ console.log("empate")
    setWinner("E")
  }
  }
  checkDraw();
 useEffect(checkWinner,[board])
 const resetGame=()=>{
   setCurrentPlayer({winner})
   setBoard(emptyBoard)
   setWinner(null)
}
  return (
    
      <main>
        <h1 className="titulo">Jogo da Velha</h1>
    
    <div className={`tabuleiro ${winner ? "game-over":""}`}>
    {board.map((item,index)=>(
      <div key={index} className={`divisorias ${item}`} onClick={()=>clique(index)}>{item}</div>
    ))}
      

    </div>
    {winner &&
   <footer>
     {winner==="E"?
     
     <h2 className="winner-message">
     <span className={winner}> {winner} </span> Empatou
        </h2>
     :
     <h2 className="winner-message">
  <span className={winner}> {winner} </span> Venceu
     </h2>
}
     <button onClick={resetGame}>Recomeçar jogo</button>
   </footer>
}
    </main>
   
  );
}

export default TicTacToe;
