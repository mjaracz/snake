import * as React from 'react';
import './Board.css';
import BoardComponent from "./BoardComponent";

export type row_col = {
  row: number,
  col: number
}

export interface Snake {
  head: row_col,
  tail: number[],
}


type State = {
  cellElement: number[],
  apple: row_col,
  snake: Snake,
  intervalID: Object,
  gridSize: number
}


class BoardContainer extends React.Component<null, State> {
  constructor(props) {
    super(props);
    this.state = {
      intervalID: {},
      gridSize: 20,
      snake: {
        head: {
          row: 4,
          col: 4
        },
        tail: []
      },
      apple: {
        row: 0,
        col: 0
      },
      direction: {
        x: 1,
        y: 0
      },
      gameOver: false
    };
  };
  componentWillMount() {
    this.setState({
      height: window.innerHeight
    });
    this.getRandomApple();
  }
  componentDidMount() {
    const { snake } = this.state;
    document.addEventListener("keydown", e => {
      this.setDirection(e)
    });
    setInterval(() => {
      this.gameLoop();
    }, (snake.tail.length !== 0) ?  (snake.tail.length / 200) * 200 : 200)
  }
  getRandomApple = () => {
    const FoodX = parseInt(Math.floor(Math.random()*20));
    const FoodY = parseInt(Math.floor(Math.random()*20));
    const randomFood = {
      row: FoodX,
      col: FoodY
    };

    this.setState({
      apple: randomFood
    });
  };
  moveSnake = () => {
    switch(this.state.key) {
      case "ArrowUp":
        this.setState({
          direction: {
            x: 0,
            y: -1
          }
        });
        break;
      case "ArrowDown":
        this.setState({
          direction: {
            x: 0,
            y: 1
          }
        });
        break;
      case "ArrowRight":
        this.setState({
          direction: {
            x: 1,
            y: 0
          }
        });
        break;
      case "ArrowLeft":
        this.setState({
          direction: {
            x: -1,
            y: 0
          }
        });
        break;
    }
  };
  setDirection = e => {
    this.setState({
      key: e.key
    });
    this.moveSnake();
  };

  gameLoop = () => {
    const {
      direction,
      snake,
      apple
    } = this.state;

    const eatApple = this.collisionWithApple();
    const collisionWithEdge = this.collisionWithEdge();
    const collisionWithTail = this.collisionWithTail();
    this.setState(() => {
      const nextSnake = {
        snake: {
          head: {
            row: snake.head.row + direction.x,
            col: snake.head.col + direction.y
          },
          tail: [snake.head, ...snake.tail]
        },
        apple: eatApple ? this.getRandomApple() : apple
      };
      if(!eatApple) nextSnake.snake.tail.pop();
      return nextSnake;
    });
    if(collisionWithEdge || collisionWithTail) {
      this.endGame();
      this.setState(() => ({
        gameOver: true
      }))
    }
  };

  collisionWithApple = () => {
    const { snake, apple } = this.state;
    if(
      snake.head.row === apple.row
      && snake.head.col === apple.col
    ) {
      return true
    }
  };
  collisionWithEdge = () => {
    const { snake } = this.state;
    if(snake.head.row > 20
      || snake.head.col > 20
      || snake.head.row < 0
      || snake.head.col < 0
    ) {
      return true
    }
  };
  collisionWithTail = () => {
    const { snake } = this.state;
    return snake.tail.find(inTail => {
      return (inTail.row === snake.head.row && inTail.col === snake.head.col)
    })
  };

  endGame = () => {
    clearInterval(this.state.intervalID)
  };

  render(){
    const {
      snake, apple,
      gridSize,
      gameOver,
      height
    } = this.state;
    return(
      <BoardComponent
        snake={ snake }
        apple={ apple }
        gridSize={ gridSize }
        setDirection={ this.setDirection }
        gameOver={ gameOver }
        height={ height }
      />
    )
  }
}

export default BoardContainer;
