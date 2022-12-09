import "./Nav.css";
import { Link } from "react-router-dom";

const Nav = () => {
    return (
        <nav>
            <Link to="/">
                <img src={require("../Data/Logo.png")} alt="woodies logo" />
            </Link>
            <ul>
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/categories">Categories</Link>
            </ul>
        </nav>
    );
};

export default Nav;
