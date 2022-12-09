import { Link } from "react-router-dom";
import setBodyColor from "../Components/SetBodyColor";
import "./Home.css";

const Home = () => {
    setBodyColor({
        color: "linear-gradient(90deg, rgba(255,255,255,1) 70%, rgba(249,189,189,1) 70%)",
    });
    return (
        <div>
            <main>
                <h3>
                    Are you looking for <span>woodden furniture</span> for your
                    place?
                </h3>
                <h4>This is the Right Place</h4>
                <Link to="/categories">Explore Categories</Link>
            </main>
        </div>
    );
};

export default Home;
