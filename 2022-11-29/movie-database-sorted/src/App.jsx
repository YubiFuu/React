import { useState } from "react";
import movies from "./Data/movies";
import "./App.css";
import AppMovies from "./Components/AppMovies";
import movies from "./Data/movies";

function App() {
    const [myMovies, setMyMovies] = useState(movies);
    const myMoviesCopy = [...myMovies];
    const sortByDateA = () => {
        myMoviesCopy.sort((a, b) => b.year - a.year);
        setMyMovies(myMoviesCopy);
    };
    const myMoviesCopy1 = [...myMovies];
    const sortByRate = () => {
        myMoviesCopy1.sort((a, b) => b.rate - a.rate);
        setMyMovies(myMoviesCopy1);
    };
    const myMoviesCopy2 = [...myMovies];
    const sortByAlphabet = () => {
        myMoviesCopy2.sort((a, b) => a.title > b.title);
        setMyMovies(myMoviesCopy2);
    };
    const myMoviesCopy3 = [...myMovies];
    const sortByAlphabetZ = () => {
        myMoviesCopy3.sort((a, b) => b.title > a.title);
        setMyMovies(myMoviesCopy3);
    };
    const myMoviesCopy4 = [...myMovies];
    const sortByDateZ = () => {
        myMoviesCopy4.sort((a, b) => a.year - b.year);
        setMyMovies(myMoviesCopy4);
    };
    return (
        <main>
            <div className="sort">
                <button onClick={sortByDateA}>Sort by Date Ascending</button>
                <button onClick={sortByDateZ}>Sort by Date Descending</button>
                <button onClick={sortByRate}>Best Rate</button>
                <button onClick={sortByAlphabet}>A-Z</button>
                <button onClick={sortByAlphabetZ}>Z-A</button>
            </div>
            <section>
                {myMovies.map((props, index) => (
                    <AppMovies key={index} {...props} />
                ))}
            </section>
        </main>
    );
}

export default App;
