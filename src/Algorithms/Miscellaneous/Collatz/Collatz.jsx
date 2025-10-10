import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

import { useState } from "react";
import collatzSequence from "./Algorithm.jsx";

import "./Collatz.css";

const initialData = [
  { iteration: 1, value: 5 },
  { iteration: 2, value: 16 },
  { iteration: 3, value: 8 },
  { iteration: 4, value: 4 },
  { iteration: 5, value: 2 },
  { iteration: 6, value: 1 },
];

const CustomTooltip = ({ active, payload }) => {
  if (active && payload && payload.length) {
    // console.log(payload);
    const item = payload[0].payload; // Access the full data object
    return (
      <div
        style={{
          background: "white",
          border: "1px solid #ccc",
          padding: "10px",
          borderRadius: "8px",
        }}
      >
        <p>
          <b>Iteration:</b> {item.iteration}
        </p>
        <p>
          <b>Value:</b> {item.value}
        </p>
      </div>
    );
  }

  return null;
};

function CollatzLineChart() {
  const [inputValue, setInputValue] = useState(7);
  const [sequence, setSequence] = useState(initialData);

  function handleFormSubmit(e) {
    e.preventDefault();
    // console.log(inputValue);
    const newSequence = collatzSequence(inputValue);
    setSequence(newSequence);
  }

  return (
    <div className="collatz-container">
      <h2>Collatz Line Chart</h2>
      {/* ABOUT */}
      <p>
        The Collatz sequence, also known as the 3n+1 problem, is a sequence of
        numbers generated from any positive integer n by applying one of two
        rules: if n is <span className="highlight">even</span>, divide it by two
        <span className="highlight">(n/2)</span> ; if n is{" "}
        <span className="highlight">odd</span>, multiply it by three and add one{" "}
        <span className="highlight">(3n+1)</span>. The Collatz Conjecture states
        that no matter what positive integer you start with, the sequence will
        eventually reach the number 1
      </p>
      <form onSubmit={handleFormSubmit}>
        <input
          placeholder="Enter a number"
          onChange={(e) => setInputValue(Number(e.target.value))}
        />
        <button>Generate</button>
      </form>
      <div style={{ width: "100%", height: 400 }}>
        <ResponsiveContainer>
          <LineChart data={sequence}>
            <CartesianGrid strokeDasharray="3 3" stroke="#ccc" />
            <XAxis
              dataKey="iteration"
              label={{
                value: "Iteration",
                position: "bottom",
                offset: -10,
                style: { fontSize: "14px", fill: "#333" },
              }}
            />
            <YAxis
              label={{
                value: "Value",
                angle: -90,
                position: "insideLeft",
                offset: 10,
                style: { textAnchor: "middle", fontSize: "14px", fill: "#333" },
              }}
            />
            <Tooltip content={<CustomTooltip />} />

            <Line
              type="monotone"
              dataKey="value"
              stroke="#4B9CD3"
              strokeWidth={3}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
export default CollatzLineChart;
