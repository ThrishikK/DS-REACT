import { useEffect, useRef, useState } from "react";
import rebuildWrapper from "./Algorithm.jsx";
import "./ImageRebuild.css";

export default function ImageRebuild() {
  const leftCanvasRef = useRef(null);
  const rightCanvasRef = useRef(null);

  const [image, setImage] = useState(null);
  const [inputDepth, setInputDepth] = useState(7);

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
  useEffect(function () {
    const leftCanvasElement = leftCanvasRef.current;
    const leftContext = leftCanvasElement.getContext("2d");

    const img = new Image();
    img.src = "https://picsum.photos/400";

    img.onload = () => {
      setImage(img);
      leftContext.drawImage(img, 0, 0, 400, 400);
    };
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
          width={400}
          height={400}
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
          width={400}
          height={400}
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
