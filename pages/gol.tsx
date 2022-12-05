import React, { useState, useEffect } from "react";
import { GolManager } from "../apps/gol/golmanager";

type Props = {};
type State = { grid: number[][] };

function GameOfLifePage() {
  const [grid, setGrid] = useState([
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  ]);

  const golManager = new GolManager();

  useEffect(() => {
    const interval = setInterval(() => {
      console.log("setInterval");
      setGrid((grid) => golManager.update(grid));
    }, 300);

    return () => {
      console.log("clearInterval");
      clearInterval(interval);
    };
  }, []);

  return (
    <div>
      {grid.map((row, i) => (
        <div key={i}>
          {row.map((col, j) => (
            <span key={j}>{col == 1 ? " o " : " - "}</span>
          ))}
        </div>
      ))}
    </div>
  );
}

export default GameOfLifePage;
