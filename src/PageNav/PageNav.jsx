import { NavLink } from "react-router-dom";
import "./PageNav.css";

function PageNav() {
  return (
    <nav>
      <ul>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/binary-search">Binary Search</NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default PageNav;
