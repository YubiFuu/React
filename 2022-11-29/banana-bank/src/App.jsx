import { useRef } from "react";
import { useState } from "react";
import "./App.css";

function App() {
    const [money, setMoney] = useState(0);
    const textInput = useRef();

    function plusMoney() {
        setMoney(money + Number(textInput.current.value));
        textInput.value = "";
        console.log(textInput.current.value);
    }
    function minusMoney() {
        setMoney(money - Number(textInput.current.value));
        textInput.value = "";
    }

    return (
        <>
            <main>
                <h1>Banana Bank</h1>
                <section>
                    <h2>Dein Girokonto</h2>
                    <p>{money}€</p>
                    <input ref={textInput} type="number" />
                    <div>
                        <button onClick={plusMoney}>Einzahlen</button>
                        <button onClick={minusMoney}>Auszahlen</button>
                    </div>
                </section>
            </main>
        </>
    );
}

export default App;
