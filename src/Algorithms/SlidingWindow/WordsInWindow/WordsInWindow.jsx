import { useEffect, useState } from "react";
import "./WordsInWindow.css";

function WordsInWindow() {
  const [timeFrameWidth, setTimeFrameWidth] = useState(30);
  const [words, setWords] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [highlightedWords, setHighlightedWords] = useState([]);

  function handleResetClick() {
    setWords([]);
    setHighlightedWords([]);
    setInputValue("");
    setTimeFrameWidth(30);
  }

  function handleTimeSpanCLick(value) {
    if (value === timeFrameWidth) return;
    handleResetClick();
    setTimeFrameWidth(value);
  }

  function handleInputChange(e) {
    // console.log(e.target.value);
    const value = e.target.value;

    if (value.endsWith(" ")) {
      const trimmedValue = value.trim();
      if (trimmedValue.length > 0) {
        const now = Date.now();
        setWords(function (prevWords) {
          return [...prevWords, { textContent: trimmedValue, timeStamp: now }];
        });
        setInputValue("");
      }
    } else {
      setInputValue(value);
    }
  }

  // CALCULATIONS USING  USE EFFECT
  useEffect(
    function () {
      const interval = setInterval(function () {
        // console.log("Interval started");
        const now = Date.now();
        const filteredWords = words.filter(function (eachWord) {
          return now - eachWord.timeStamp <= timeFrameWidth * 1000;
        });
        setHighlightedWords(filteredWords);
      }, 1000);

      return function () {
        clearInterval(interval);
        console.log("Cleared Interval");
      };
    },
    [words]
  );

  // CALCULATING STYLES
  function calculateStyles(wordObj) {
    console.log(wordObj);
    let result = highlightedWords.some(function (eachObj) {
      return (
        eachObj.textContent === wordObj.textContent &&
        eachObj.timeStamp === wordObj.timeStamp
      );
    });
    console.log(result);
    return result ? "span-word highlighted" : "span-word";
  }

  return (
    <div className="words-in-window-container">
      <h1>Words In Window</h1>
      {/* INPUT */}
      <input
        value={inputValue}
        className="input-text"
        type="text"
        placeholder="Type here and press space for calculations..."
        onChange={handleInputChange}
      />
      <button onClick={handleResetClick} className="reset-btn">
        Reset
      </button>
      {/* TIME SPAN BUTTONS */}
      <div className="time-span-buttons">
        <button
          className={
            timeFrameWidth === 30
              ? "selected-time-btn"
              : "not-selected-time-btn "
          }
          onClick={() => handleTimeSpanCLick(30)}
        >
          30 Seconds
        </button>
        <button
          className={
            timeFrameWidth === 60
              ? "selected-time-btn"
              : "not-selected-time-btn "
          }
          onClick={() => handleTimeSpanCLick(60)}
        >
          1 Minute
        </button>
        <button
          className={
            timeFrameWidth === 120
              ? "selected-time-btn"
              : "not-selected-time-btn "
          }
          onClick={() => handleTimeSpanCLick(120)}
        >
          2 Minutes
        </button>
      </div>
      {/* RESULT CHECKING WORDS LENGTH */}
      <div className="result-container">
        {words.length === 0 && <p>Enter text in input box above...</p>}
        {/* WORDS ARE THERE */}
        {/* <span className="span-word">Reducer</span>
        <span className="span-word highlighted">Pure Function</span> */}

        {words.map(function (eachWord, index) {
          return (
            <span className={calculateStyles(eachWord)} key={index}>
              {eachWord.textContent}
            </span>
          );
        })}
      </div>
      {/* STATS */}
      <div className="stats-container">
        <p className="stats-para">Total Words :</p>
        <span className="stats-para-span">{words.length}</span>
      </div>
      <div className="stats-container">
        <p className="stats-para">
          {" "}
          Words Entered in the last {timeFrameWidth} Seconds Window :
        </p>
        <span className="stats-para-span">{highlightedWords.length}</span>
      </div>
    </div>
  );
}

export default WordsInWindow;
