import { NavLink } from "react-router-dom";
import "./Home.css";

export default function Home() {
  return (
    <div className="home">
      <h1>Some Basic Algorithms</h1>
      {/* LINKS */}
      {/* DIVIDE AND CONQUER */}
      <div className="algorithm-details">
        <div className="link-heading">
          <h3>Divide And Conquer</h3>
        </div>
        <ul className="">
          <li>
            <NavLink to="/binary-search">Binary Search</NavLink>
          </li>
          <li>
            <NavLink to="/image-rebuild">Image Rebuild</NavLink>
          </li>
        </ul>
      </div>
      {/* SLIDING WINDOW */}
      <div className="algorithm-details">
        <div className="link-heading">
          <h3>Sliding Window Algorithm</h3>
        </div>
        <ul>
          <li>
            <NavLink to="/word-in-window">Words in window</NavLink>
          </li>
        </ul>
      </div>
      {/* MISCELLANIOUS */}
      <div className="algorithm-details">
        <div className="link-heading">
          <h3>Miscellaneous</h3>
        </div>
        <ul>
          <li>
            <NavLink to="/collatz">Collatz sequence</NavLink>
          </li>
          <li>
            <NavLink to="/conways-game-of-life">Conway's Game of Life</NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
}
