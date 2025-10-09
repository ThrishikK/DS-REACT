import { useEffect, useReducer, useRef } from "react";
import binarySearchProductAlgorithm from "./Algorithm/Algorithm";

import Box from "./Components/Box/Box";
import Message from "./Components/Message/Message";
import productsArray from "./Data/products";

import "./BinarySearch.css";

let rightBoundary = productsArray.length - 1;

const initialState = {
  stepsCount: 0,
  iterationsLength: 0,
  givenValue: "",
  isAnimating: false,
  elementFoundStatus: null,
  leftIndexes: [0],
  rightIndexes: [rightBoundary],
};

function reducer(state, action) {
  switch (action.type) {
    case "SET_INPUT_VALUE":
      return { ...state, givenValue: action.payload };

    case "BINARY_SEARCH_CALLED":
      return {
        ...state,
        stepsCount: action.payload.newStepsCount,
        iterationsLength: action.payload.newIterationsLength,
        elementFoundStatus: action.payload.newElementFoundStatus,
        leftIndexes: action.payload.newLeftIndexes,
        rightIndexes: action.payload.newRightIndexes,
      };

    case "PREVIOUS": {
      let { stepsCount, iterationsLength } = state;
      stepsCount--;
      if (stepsCount < 0) stepsCount = iterationsLength;
      return { ...state, stepsCount };
    }
    case "NEXT": {
      let { stepsCount, iterationsLength } = state;
      stepsCount++;
      if (stepsCount > iterationsLength) stepsCount = 0;
      return { ...state, stepsCount };
    }

    case "START_ANIMATION":
      return { ...state, isAnimating: true };

    case "STOP_ANIMATION":
      return { ...state, isAnimating: false };
    default:
      return state;
  }
}

function BinarySearch() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const boxRefs = useRef([]);

  const {
    stepsCount,
    isAnimating,
    givenValue,
    elementFoundStatus,
    leftIndexes,
    rightIndexes,
  } = state;

  let resultObject = null;

  useEffect(() => {
    let intervalId;

    if (isAnimating) {
      intervalId = setInterval(() => {
        dispatch({ type: "NEXT" });
      }, 1000); // every 1 second
    }

    // cleanup when stopped or component unmounts
    return () => {
      clearInterval(intervalId);
    };
  }, [isAnimating]);

  useEffect(() => {
    const firstInRange = boxRefs.current.find(
      (el) => el && el.classList.contains("in-range")
    );

    if (firstInRange) {
      firstInRange.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
    }
  }, [stepsCount]);

  function handleFormSubmit(e) {
    e.preventDefault();

    console.log(givenValue);

    resultObject = binarySearchProductAlgorithm(givenValue, rightBoundary);
    console.log(resultObject);

    dispatch({
      type: "BINARY_SEARCH_CALLED",
      payload: {
        newStepsCount: 0,
        newIterationsLength: resultObject.newLeftIndexes.length
          ? resultObject.newLeftIndexes.length - 1
          : 0,
        newElementFoundStatus: resultObject.found,
        newLeftIndexes: resultObject.newLeftIndexes,
        newRightIndexes: resultObject.newRightIndexes,
      },
    });
  }

  return (
    <section className="bs">
      <h1 className="algorithm-heading">Binary Searching Products</h1>
      <div className="form-and-result-container">
        {/* FORM ELEMENT */}
        <form onSubmit={handleFormSubmit}>
          <input
            type="text"
            value={givenValue}
            placeholder="Enter an ID"
            onChange={(e) =>
              dispatch({
                type: "SET_INPUT_VALUE",
                payload: Number(e.target.value),
              })
            }
          />
          <button>Check</button>
        </form>
        {/* RESULT ELEMENT */}
        <Message elementFoundStatus={elementFoundStatus} />
      </div>
      {/* STEPS BUTTONS CONTAINER */}
      <div className="buttons-container">
        <button
          onClick={() => dispatch({ type: "PREVIOUS" })}
          disabled={isAnimating}
          className={isAnimating ? "disabled-button" : ""}
        >
          Previous
        </button>
        {isAnimating ? (
          <button onClick={() => dispatch({ type: "STOP_ANIMATION" })}>
            Stop
          </button>
        ) : (
          <button onClick={() => dispatch({ type: "START_ANIMATION" })}>
            Start
          </button>
        )}
        <button
          disabled={isAnimating}
          onClick={() => dispatch({ type: "NEXT" })}
          className={isAnimating ? "disabled-button" : ""}
        >
          Next
        </button>
      </div>

      {/* Boxes */}
      <div className="boxes-container">
        {productsArray.map((eachProduct, index) => {
          // console.log(index, stepsCount, leftIndexes, rightIndexes);
          return (
            <Box
              key={index}
              details={eachProduct}
              inRange={
                index >= leftIndexes[stepsCount] &&
                index <= rightIndexes[stepsCount]
              }
              ref={(el) => (boxRefs.current[index] = el)}
            />
          );
        })}
      </div>
    </section>
  );
}

export default BinarySearch;
