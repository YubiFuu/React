import Main from "./components/Main";
import Header from "./components/Header";
import Footer from "./components/Footer";
import "./App.css";

function App() {
    return (
        <div>
            <div className="App">
                <Header />
                <Main />
                <Footer />
            </div>
            <outro>
                <p>© 2021 The Design Shop</p>

                <div>
                    <a href="">Disclaimer</a>
                    <a href="">Shop</a>
                    <a href="">Weekly picks</a>
                </div>
                <p>
                    Made/Curated by <a href="">Ruby Bacanovic</a>
                </p>
            </outro>
        </div>
    );
}

export default App;
