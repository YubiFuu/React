import "./Footer.css";

const Footer = () => {
    return (
        <footer>
            <hr />
            <img src={require("../Data/Logo.png")} alt="woodies logo" />
            <p>(012)8967453</p>
            <p>woodies@gmail.com</p>
            <p>Jakarta, Indonesia</p>
            <p>© 2020 WOODIES</p>
        </footer>
    );
};

export default Footer;
