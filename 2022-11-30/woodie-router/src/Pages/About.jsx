import { Link } from "react-router-dom";
import Footer from "../Components/Footer";
import setBodyColor from "../Components/SetBodyColor";

const About = () => {
    setBodyColor({ color: "#ffffff" });
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
            <Footer />
        </div>
    );
};

export default About;
