import { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Article from "./Components/Article";
import ArticleDetail from "./Components/ArticleDetail";

function App() {
    const [article, setArticle] = useState([]);

    useEffect(() => {
        fetch("https://fakestoreapi.com/products")
            .then((res) => res.json())
            .then((json) => setArticle(json));
    }, []);

    return (
        <div className="App">
            <BrowserRouter>
                <Routes>
                <Route path="/article/:id" element={<ArticleDetail />} />
                    <Route path="/article/:id" element={<ArticleDetail />} />
                </Routes>
            </BrowserRouter>
            <section className="grid">
                {article.map((elt, index) => (
                    <Article key={index} {...elt} />
                ))}
            </section>
        </div>
    );
}

export default App;
