import "./App.css";
import Nav from "./Components/Nav";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./Pages/About";
import Categories from "./Pages/Categories";
import Home from "./Pages/Home";

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Nav />
                <Routes>
                    <Route path="/" element={<Home />}></Route>
                    <Route path="/about" element={<About />}></Route>
                    <Route path="/categories" element={<Categories />}></Route>
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
