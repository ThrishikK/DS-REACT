import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRightLong, faDownLong } from "@fortawesome/free-solid-svg-icons";

import { useState, useRef, useEffect } from "react";
import "./ConwaysGameOfLife.css";

const canvasWidth = 300;
const canvasHeight = 300;

function CanvasHelper() {
  const [isRightArrow, setIsRightArrow] = useState(true);
  const canvasOneRef = useRef(null);
  const canvasTwoRef = useRef(null);
  const canvasThreeRef = useRef(null);
  const canvasFourRef = useRef(null);
  const canvasFiveRef = useRef(null);
  const canvasSixRef = useRef(null);
  const canvasSevenRef = useRef(null);
  const canvasEightRef = useRef(null);

  function fillCanvasBackground(givenCanvasCtx, width, height, color) {
    givenCanvasCtx.fillStyle = color;
    givenCanvasCtx.fillRect(0, 0, width, height);
  }

  function drawLinesOnCanvas(givenCanvasCtx, width, height, gap, lineColor) {
    givenCanvasCtx.strokeStyle = lineColor;
    for (let x = 0; x <= width; x += gap) {
      givenCanvasCtx.beginPath();
      givenCanvasCtx.moveTo(x, 0);
      givenCanvasCtx.lineTo(x, height);
      givenCanvasCtx.stroke();
    }
    for (let y = 0; y <= height; y += gap) {
      givenCanvasCtx.beginPath();
      givenCanvasCtx.moveTo(0, y);
      givenCanvasCtx.lineTo(width, y);
      givenCanvasCtx.stroke();
    }
  }

  function drawBoxes(givenCanvasCtx, length, points) {
    points.map(function (eachPoint) {
      givenCanvasCtx.fillStyle = "#144495";
      givenCanvasCtx.fillRect(eachPoint[0], eachPoint[1], length, length);
    });
  }

  function drawCircle(givenCanvasCtx, color) {
    givenCanvasCtx.beginPath();
    givenCanvasCtx.arc(150, 150, 10, 0, Math.PI * 2);
    givenCanvasCtx.fillStyle = color;
    givenCanvasCtx.fill();
    givenCanvasCtx.stroke();
  }

  // ARROW CHANGING EFFECT
  useEffect(
    function () {
      const arrowChangingFun = () => {
        if (window.innerWidth <= 740) {
          console.log("Trigger");
          setIsRightArrow(false);
        } else {
          setIsRightArrow(true);
        }
      };

      window.addEventListener("resize", arrowChangingFun);

      return function () {
        window.removeEventListener("resize", arrowChangingFun);
      };
    },
    [isRightArrow]
  );

  useEffect(function () {
    // CANVAS 1
    const canvasOne = canvasOneRef.current;
    const ctxOne = canvasOne.getContext("2d");

    fillCanvasBackground(ctxOne, 300, 300, "#8aa2ca");
    drawLinesOnCanvas(ctxOne, 300, 300, 100, "#030b19");
    drawBoxes(ctxOne, 100, [
      [0, 0],
      [100, 100],
    ]);
    drawCircle(ctxOne, "#8aa2ca");

    // CANVAS 2
    const canvasTwo = canvasTwoRef.current;
    const ctxTwo = canvasTwo.getContext("2d");

    fillCanvasBackground(ctxTwo, 300, 300, "#8aa2ca");
    drawBoxes(ctxTwo, 100, [[0, 0]]);
    drawLinesOnCanvas(ctxTwo, 300, 300, 100, "#030b19");
    drawCircle(ctxTwo, "#030b19");

    // CANVAS 3
    const canvasThree = canvasThreeRef.current;
    const ctxThree = canvasThree.getContext("2d");

    fillCanvasBackground(ctxThree, 300, 300, "#8aa2ca");
    drawBoxes(ctxThree, 100, [
      [0, 0],
      [100, 0],
      [100, 100],
      [200, 200],
    ]);
    drawLinesOnCanvas(ctxThree, 300, 300, 100, "#030b19");
    drawCircle(ctxThree, "#8aa2ca");

    // CANVAS 4
    const canvasFour = canvasFourRef.current;
    const ctxFour = canvasFour.getContext("2d");

    fillCanvasBackground(ctxFour, 300, 300, "#8aa2ca");
    drawBoxes(ctxFour, 100, [
      [0, 0],
      [100, 0],
      [100, 100],
      [200, 200],
    ]);
    drawLinesOnCanvas(ctxFour, 300, 300, 100, "#030b19");
    drawCircle(ctxFour, "#8aa2ca");

    // CANVAS 5
    const canvasFive = canvasFiveRef.current;
    const ctxFive = canvasFive.getContext("2d");

    fillCanvasBackground(ctxFive, 300, 300, "#8aa2ca");
    drawBoxes(ctxFive, 100, [
      [100, 0],
      [0, 100],
      [100, 100],
      [200, 100],
      [100, 200],
    ]);
    drawLinesOnCanvas(ctxFive, 300, 300, 100, "#030b19");
    drawCircle(ctxFive, "#8aa2ca");

    // CANVAS 6
    const canvasSix = canvasSixRef.current;
    const ctxSix = canvasSix.getContext("2d");

    fillCanvasBackground(ctxSix, 300, 300, "#8aa2ca");
    drawBoxes(ctxSix, 100, [
      [100, 0],
      [0, 100],
      [200, 100],
      [100, 200],
    ]);
    drawLinesOnCanvas(ctxSix, 300, 300, 100, "#030b19");
    drawCircle(ctxSix, "#030b19");

    // CANVAS 7
    const canvasSeven = canvasSevenRef.current;
    const ctxSeven = canvasSeven.getContext("2d");

    fillCanvasBackground(ctxSeven, 300, 300, "#8aa2ca");
    drawBoxes(ctxSeven, 100, [
      [200, 100],
      [100, 200],
      [200, 200],
    ]);
    drawLinesOnCanvas(ctxSeven, 300, 300, 100, "#030b19");
    drawCircle(ctxSeven, "#030b19");

    // CANVAS 8
    const canvasEight = canvasEightRef.current;
    const ctxEight = canvasEight.getContext("2d");

    fillCanvasBackground(ctxEight, 300, 300, "#8aa2ca");
    drawBoxes(ctxEight, 100, [
      [100, 100],
      [200, 100],
      [100, 200],
      [200, 200],
    ]);
    drawLinesOnCanvas(ctxEight, 300, 300, 100, "#030b19");
    drawCircle(ctxEight, "#8aa2ca");
    //
  }, []);

  return (
    <div className="conway-rules-container">
      <div className="rule-wrapper">
        {/* RULE - 1 */}
        <h3>
          1 - Any live cell with fewer than two live neighbours dies (as if
          caused by underpopulation).
        </h3>
        {/* CANVASES CONTAINER */}
        <div className="canvases-container">
          <canvas
            ref={canvasOneRef}
            height={canvasHeight}
            width={canvasWidth}
          ></canvas>
          <FontAwesomeIcon
            icon={isRightArrow ? faRightLong : faDownLong}
            className="fa-arrow-styles"
          />
          <canvas
            ref={canvasTwoRef}
            height={canvasHeight}
            width={canvasWidth}
          ></canvas>
        </div>
      </div>
      <div className="rule-wrapper">
        {/* RULE - 2 */}
        <h3>
          2 - Any live cell with two or three live neighbors lives on to the
          next generation.
        </h3>
        {/* CANVASES CONTAINER */}
        <div className="canvases-container">
          <canvas
            ref={canvasThreeRef}
            height={canvasHeight}
            width={canvasWidth}
          ></canvas>
          <FontAwesomeIcon
            icon={isRightArrow ? faRightLong : faDownLong}
            className="fa-arrow-styles"
          />
          <canvas
            ref={canvasFourRef}
            height={canvasHeight}
            width={canvasWidth}
          ></canvas>
        </div>
      </div>
      <div className="rule-wrapper">
        {/* RULE - 3 */}
        <h3>3 - Any live cell with more than three live neighbors dies.</h3>
        {/* CANVASES CONTAINER */}
        <div className="canvases-container">
          <canvas
            ref={canvasFiveRef}
            height={canvasHeight}
            width={canvasWidth}
          ></canvas>
          <FontAwesomeIcon
            icon={isRightArrow ? faRightLong : faDownLong}
            className="fa-arrow-styles"
          />
          <canvas
            ref={canvasSixRef}
            height={canvasHeight}
            width={canvasWidth}
          ></canvas>
        </div>
      </div>
      <div className="rule-wrapper">
        {/* RULE - 4 */}
        <h3>
          4 - Any dead cell with exactly three live neighbors becomes a live
          cell.
        </h3>
        {/* CANVASES CONTAINER */}
        <div className="canvases-container">
          <canvas
            ref={canvasSevenRef}
            height={canvasHeight}
            width={canvasWidth}
          ></canvas>
          <FontAwesomeIcon
            icon={isRightArrow ? faRightLong : faDownLong}
            className="fa-arrow-styles"
          />
          <canvas
            ref={canvasEightRef}
            height={canvasHeight}
            width={canvasWidth}
          ></canvas>
        </div>
      </div>
    </div>
  );
}

export default CanvasHelper;
