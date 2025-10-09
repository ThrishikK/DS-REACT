import { NavLink } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import "./HomeIcon.css";

function HomeIcon() {
  return (
    <div className="home-icon-container">
      <NavLink to="/">
        <FontAwesomeIcon icon={faHome} className="home-icon" />
      </NavLink>
    </div>
  );
}

export default HomeIcon;
