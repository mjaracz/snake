import * as React from 'react';
import GridCell from './GridCell/GridCell';
import  './Board.css';
import BoardGameOver from "./BoardGameOver";
import { Snake } from './BoardContainer';
import { row_col } from './BoardContainer';

type Props = {
  snake: Snake,
  apple: row_col,
  setDirection(): void
}

export default class BoardComponent extends React.Component<Props> {
  render() {
    const {
      gridSize,
      snake,
      apple,
      gameOver
    } = this.props;
    const cells = Array.from(Array(gridSize).keys());

    const boardItem = cells.map(col => {
      return cells.map(row => {
        const foodCell = (apple.row === row && apple.col === col);
        const snakeCell = (snake.head.row === row && snake.head.col === col);
        const tailCell = snake.tail.find(item => {
          return(item.row === row && item.col === col)
        });
        return (
          <GridCell
            snakeCell={ snakeCell }
            foodCell={ foodCell }
            tailCell={ tailCell }
            key={row + ' ' + col}
          />
        )
      });
    });
    return(
      <div>
        <div className={gameOver ? 'main__gameOver' :  'main__board'}>
          { !gameOver ? boardItem : <BoardGameOver snake={ snake }/>}
        </div>
      </div>
    )
  }
};
