import { useEffect, useState } from "react";

interface ISnake {
  snake: { x: number; y: number }[];
  food: { x: number; y: number };
  gameOver: boolean;
  directin?: "up" | "right" | "right" | "left";
}

export default function Snake() {
  const initialState: ISnake = {
    snake: [
      { x: 0, y: 0 },
      { x: 1, y: 4 },
    ],
    food: { x: 0, y: 0 },
    gameOver: false,
  };
  const [state, setState] = useState<ISnake>(initialState);

  useEffect(() => {
    if (state.gameOver) {
      alert("game over");
      return;
    }
    // update the position of game
    const snake = [...state.snake];
    const head = snake[snake.length - 1];
    snake.shift(); // remove the first Element
    snake.push({ x: head.x + 1, y: head.y + 1 });

    // check the if the snake has eaten
    if (head.x === state.food.x && head.y == state.food.y) {
      const food = {
        x: Math.floor(Math.random() * 10),
        y: Math.floor(Math.random() * 10),
      };

      // increase the snake size
      snake.unshift({ x: head.x, y: head.y });
      setState({ ...state, snake, food });
    } else {
      setState({ ...state, snake });
    }
  }, []);

  return <div></div>;
}

//
