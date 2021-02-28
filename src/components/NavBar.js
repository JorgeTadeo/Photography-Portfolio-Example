import "./NavBar.css"
import {NavLink} from "react-router-dom";

function NavBar() {
    return(
        <ul className="NavBar"> 
            <li><NavLink to="/"> Portraits </NavLink></li>
            <li><NavLink to="/live-music" > Live Music </NavLink></li>
            <li><NavLink to="/landscapes" > Landscapes </NavLink></li>
            <li><NavLink to="/about" > About </NavLink></li>
        </ul>
    );
}

export default NavBar;