import { useEffect, useRef, useState } from "react";
import rebuildWrapper from "./Algorithm.jsx";
import "./ImageRebuild.css";

const MAX_DIMENSION = 400;
const MIN_DIMENSION = 300;
// console.log(window.innerWidth);
const START_DIMENSION =
  window.innerWidth >= 550 && window.innerWidth < 1500
    ? MAX_DIMENSION
    : MIN_DIMENSION;

// console.log(START_DIMENSION);

export default function ImageRebuild() {
  const leftCanvasRef = useRef(null);
  const rightCanvasRef = useRef(null);

  const [image, setImage] = useState(null);
  const [inputDepth, setInputDepth] = useState(7);

  const [dimension, setDimension] = useState(START_DIMENSION);

  function handleFormSubmit(e) {
    e.preventDefault();
    // console.log(inputDepth);
    // GETTING RIGHT CANVAS
    const rightCanvasElement = rightCanvasRef.current;
    const rightContext = rightCanvasElement.getContext("2d");
    if (!rightContext || !image) return;
    rightContext.clearRect(0, 0, 400, 400);
    rebuildWrapper(0, 0, 400, inputDepth, 5, rightContext, image);
  }

  function paintImage(dimension) {
    const leftCanvasElement = leftCanvasRef.current;
    const leftContext = leftCanvasElement.getContext("2d");

    // LOADS A RANDOM IMAGE

    const img = new Image();
    img.src = `https://picsum.photos/${dimension}`;

    img.onload = () => {
      setImage(img);
      leftContext.drawImage(img, 0, 0, dimension, dimension);
    };
  }

  useEffect(
    function () {
      paintImage(dimension);
    },
    [dimension]
  );

  useEffect(function () {
    function changeDimension() {
      const newDimesion = Math.floor(window.innerWidth);
      console.log(newDimesion);
      let settingDimension = null;
      if (newDimesion >= 550 && newDimesion < 1500) {
        settingDimension = 400;
      } else if (newDimesion < 550) {
        settingDimension = MIN_DIMENSION;
      }
      // console.log(settingDimension);
      setDimension(settingDimension);
    }

    window.addEventListener("resize", changeDimension);

    return () => window.removeEventListener("resize", changeDimension);
  }, []);

  return (
    <div className="image-rebuild-container">
      <h1>Image Rebuild</h1>
      {/* EXPLANATION */}
      <ul className="points-ul-wrapper">
        <li>Start with a blank canvas.</li>
        <li>Recursively divide the image into quadrants.</li>
        <li>
          {" "}
          Gradually draw each smaller block one by one, simulating the “conquer”
          step.
        </li>
        <li>
          {" "}
          The full image will appear from tiny patches — bottom-up assembly.
        </li>
      </ul>
      {/* CANVASES */}
      <div className="canvases-container">
        {/* CANVAS - 1 */}
        <canvas
          ref={leftCanvasRef}
          width={dimension}
          height={dimension}
          style={{
            border: `3px solid var(--primary-color-shade-half)`,
            borderRadius: "1rem",
            marginBottom: "1rem",
          }}
        />
        {/* FORM CONTAINER */}
        <form onSubmit={handleFormSubmit}>
          <input
            placeholder="Enter -6 for fun Max Depth is 4"
            onChange={(e) => setInputDepth(Number(e.target.value))}
          />
          <button>Halves</button>
        </form>
        {/* CANVAS - 1 */}
        <canvas
          ref={rightCanvasRef}
          width={dimension}
          height={dimension}
          style={{
            border: `3px solid var(--primary-color-shade-half)`,
            borderRadius: "1rem",
            marginBottom: "1rem",
          }}
        />
      </div>
    </div>
  );
}
