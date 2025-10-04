import { useState } from "react";

import Box from "./Components/Box";
import productsArray from "./Data/products";

import "./BinarySearch.css";

let left = 0;
let right = productsArray.length - 1;
let leftIndexes = [];
let rightIndexes = [];
let elementFoundStatus = { found: null };
leftIndexes.push(left);
rightIndexes.push(right);
console.log(leftIndexes, rightIndexes);

function binarySearchProduct(targetId) {
  leftIndexes = [];
  rightIndexes = [];
  left = 0;
  right = productsArray.length - 1;
  while (left <= right) {
    leftIndexes.push(left);
    rightIndexes.push(right);
    let mid = Math.floor((left + right) / 2);
    let midId = productsArray[mid].id;

    if (midId === targetId) {
      leftIndexes.push(mid);
      rightIndexes.push(mid);
      elementFoundStatus.found = true;
      return { leftIndexes, rightIndexes, elementFoundStatus };
    } else if (midId < targetId) {
      left = mid + 1; // Search right half
    } else {
      right = mid - 1; // Search left half
    }
  }
  console.log(leftIndexes, rightIndexes);
  elementFoundStatus.found = false;
  leftIndexes.push(-1);
  rightIndexes.push(-1);
  return { leftIndexes, rightIndexes, elementFoundStatus };
}

function BinarySearch() {
  const [givenValue, setGivenValue] = useState("");
  const [stepsCount, setStepsCount] = useState(0);
  const [iterationsLength, setIterationsLength] = useState(0);

  let resultObject = null;

  function handleFormSubmit(e) {
    e.preventDefault();
    resultObject = binarySearchProduct(givenValue);
    console.log(resultObject);
    setStepsCount(0);
    setIterationsLength(
      resultObject.leftIndexes.length ? resultObject.leftIndexes.length - 1 : 0
    );
    // setStepsCount(iterationsLength);
  }

  function handlePreviousBtnClick() {
    setStepsCount((prevValue) => {
      prevValue--;
      if (prevValue < 0) {
        prevValue = 0;
      }
      console.log(prevValue);
      return prevValue;
    });
  }

  function handleNextBtnClick() {
    setStepsCount((prevValue) => {
      prevValue++;
      if (prevValue > iterationsLength) {
        prevValue = iterationsLength;
      }
      console.log(prevValue);
      return prevValue;
    });
  }

  return (
    <section className="bs">
      <h1>Binary Searching Products</h1>
      <div className="form-and-result-container">
        {/* FORM ELEMENT */}
        <form onSubmit={handleFormSubmit}>
          <input
            type="text"
            value={givenValue}
            onChange={(e) => setGivenValue(Number(e.target.value))}
          />
          <button>Check</button>
        </form>
        {/* RESULT ELEMENT */}
        <div className="result-container">
          {/* <h2>Found</h2> */}
          {/* <Box details={productsArray[0]} found={true} /> */}
        </div>
      </div>
      {/* STEPS BUTTONS CONTAINER */}
      <div className="buttons-container">
        <button onClick={handlePreviousBtnClick}>Previous</button>
        <button onClick={handleNextBtnClick}>Next</button>
      </div>

      {/* Boxes */}
      <div className="boxes-container">
        {productsArray.map((eachProduct, index) => (
          <Box
            key={index}
            details={eachProduct}
            inRange={
              index >= leftIndexes[stepsCount] &&
              index <= rightIndexes[stepsCount]
            }
          />
        ))}
      </div>
    </section>
  );
}

export default BinarySearch;
