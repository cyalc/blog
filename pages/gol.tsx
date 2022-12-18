import React, { useState, useEffect } from "react";
import { GolManager } from "../apps/gol/golmanager";
import { generateRandomState } from "../apps/gol/golstate";

type Props = {};
type State = { grid: number[][] };

function GameOfLifePage() {
  const [state, setState] = useState<State>();

  const golManager = new GolManager();

  useEffect(() => {
    const interval = setInterval(() => {
      if (state?.grid !== undefined) {
        console.log("update state");
        setState({
          grid: golManager.update(state.grid),
        });
      } else {
        console.log("initialize state");
        setState({
          grid: generateRandomState(50, 50, 2),
        });
      }
    }, 300);

    return () => {
      console.log("clearInterval");
      clearInterval(interval);
    };
  }, []);

  return (
    <div>
      {state?.grid.map((row, i) => (
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
