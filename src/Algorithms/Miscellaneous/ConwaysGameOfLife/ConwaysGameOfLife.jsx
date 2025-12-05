import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRightLong, faDownLong } from "@fortawesome/free-solid-svg-icons";

import { useState, useRef, useEffect } from "react";
import CanvasHelper from "./CanvasHelper";
import "./ConwaysGameOfLife.css";

const numRows = 25;
const numCols = 25;

function ConwaysGameOfLife() {
  const [grid, setGrid] = useState(() =>
    Array.from({ length: numRows }, () =>
      Array.from({ length: numCols }, () => (Math.random() > 0.7 ? 1 : 0))
    )
  );

  const [running, setRunning] = useState(false);
  const runningRef = useRef(running);
  runningRef.current = running;

  const runSimulation = () => {
    if (!runningRef.current) return;

    setGrid((g) => {
      return g.map((row, i) =>
        row.map((cell, j) => {
          let neighbors = 0;
          const directions = [
            [-1, -1],
            [-1, 0],
            [-1, 1],
            [0, -1],
            [0, 1],
            [1, -1],
            [1, 0],
            [1, 1],
          ];
          directions.forEach(([x, y]) => {
            const newI = i + x;
            const newJ = j + y;
            if (newI >= 0 && newI < numRows && newJ >= 0 && newJ < numCols) {
              neighbors += g[newI][newJ];
            }
          });

          if (cell === 1 && (neighbors < 2 || neighbors > 3)) return 0;
          if (cell === 0 && neighbors === 3) return 1;
          return cell;
        })
      );
    });

    setTimeout(runSimulation, 100); // recursive call
  };

  function handleConwayBtnClick() {
    setRunning(!running);
    if (!running) {
      runningRef.current = true;
      runSimulation();
    } else {
      runningRef.current = false;
    }
  }

  return (
    <div className="conways-game-of-life-container">
      <h1 className="conways-heading">🧬 Conway's Game of Life</h1>
      <p>Rules : </p>
      <ul className="conways-ul-container">
        <li>The game is played on a grid of cells (2D array).</li>
        <li>Each cell can be alive (1) or dead (0).</li>
        <li>
          The state of each cell updates every “tick” (interval) based on its 8
          neighbors.
        </li>
      </ul>
      {/*  */}
      <button onClick={handleConwayBtnClick} className="conways-game-btn">
        {running ? "Stop" : "Start"}
      </button>
      {/* GAME OF LIFE CONTAINER */}
      <div className="grid-container">
        {grid.map(function (eachRow, i) {
          // console.log(eachRow);
          return eachRow.map(function (cell, j) {
            // console.log(cell);
            return (
              <div
                className="conways-box"
                key={`${i + 1}-${j + 1}`}
                style={{
                  backgroundColor:
                    cell === 1
                      ? "var(--primary-color-shade)"
                      : "var(--primary-color-tint-half)",
                }}
              ></div>
            );
          });
        })}
      </div>
      {/* RULES */}
      <h2>Rules</h2>
      <CanvasHelper />
    </div>
  );
}

export default ConwaysGameOfLife;
