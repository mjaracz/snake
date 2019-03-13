import * as React from 'react';

const boardGameOver = ({ snake }) => {
  return(
    <div>
      <h1 className="gameOver__message">
        Game Over
      </h1>
      <h1 className="gameOver__message">
        Your Score { snake.tail.length }
      </h1>
    </div>
  )
};

export default boardGameOver;