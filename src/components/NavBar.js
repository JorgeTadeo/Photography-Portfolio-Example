import "./NavBar.css"
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

function NavBar() {
    return(
        <ul className="NavBar">
            <li><Link to="/"> Portraits </Link></li>
            <li><Link to="/landscapes"> Landscapes </Link></li>
            <li><Link to="/about"> About </Link></li>
        </ul>
    );
}

export default NavBar;