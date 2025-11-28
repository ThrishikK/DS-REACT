import { useState } from "react";
import "./ConwaysGameOfLife.css";

const numRows = 25;
const numCols = 25;

function ConwaysGameOfLife() {
  const [grid, setGrid] = useState(() =>
    Array.from({ length: numRows }, () =>
      Array.from({ length: numCols }, () => (Math.random() > 0.7 ? 1 : 0))
    )
  );
  return (
    <div className="conways-game-of-life-container">
      <h1 className="conways-heading">Conway’s Game of Life.</h1>
      <p>Rules : </p>
      <ul className="conways-ul-container">
        <li>The game is played on a grid of cells (2D array).</li>
        <li>Each cell can be alive (1) or dead (0).</li>
        <li>
          The state of each cell updates every “tick” (interval) based on its 8
          neighbors.
        </li>
      </ul>
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
    </div>
  );
}

export default ConwaysGameOfLife;
