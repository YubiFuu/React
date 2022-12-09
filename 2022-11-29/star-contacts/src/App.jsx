import contacts from "./contacts.json";
import ContactContainer from "./Components/ContactContainer";
import "./App.css";
import { useState } from "react";

function App() {
    const [starContacts, setStarContacts] = useState(contacts);
    const starContactsCopy = [...starContacts];
    const [checkNam, setCheckNam] = useState(true);
    const [checkPop, setCheckPop] = useState(true);

    function sortName() {
        if (checkNam == true) {
            starContactsCopy.sort(
                (a, b) => a.name.toLowerCase() > b.name.toLowerCase()
            );
            setCheckNam(false);
        } else if (checkNam == false) {
            starContactsCopy.sort(
                (a, b) => a.name.toLowerCase() < b.name.toLowerCase()
            );
            setCheckNam(true);
        }
        setCheckPop(true);
        setStarContacts(starContactsCopy);
    }

    function sortPopularity() {
        if (checkPop == true) {
            starContactsCopy.sort((a, b) => a.popularity < b.popularity);
            setCheckPop(false);
        } else if (checkPop == false) {
            starContactsCopy.sort((a, b) => a.popularity > b.popularity);
            setCheckPop(true);
        }
        setCheckNam(true);
        setStarContacts(starContactsCopy);
    }

    return (
        <div className="app">
            <div className="button">
                <button onClick={sortName}>sort by name</button>
                <button onClick={sortPopularity}>sort by popularity</button>
            </div>
            <div className="container">
                <p>Picture</p>
                <p>Name</p>
                <p>Popularity</p>
            </div>
            {starContacts.map((element, index) => (
                <ContactContainer key={index} {...element} />
            ))}
        </div>
    );
}

export default App;
