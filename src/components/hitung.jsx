import { useState } from "react";
import logo from '../logo.svg';
import '../App.css';

function Hitung() {
    const [count, setCount] = useState(0);

    if (count % 6 == 0) {
        setCount(count + 1)
    }

    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>
                    Edit <code>src/App.js</code> and save to reload.
                </p>
                <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Learn React
                </a>
                <div>
                    <h4>Total Click:</h4>
                    <h1>{count}</h1>
                    <button className="App-button" onClick={() => setCount(count + 1)}>Click</button>
                </div>
            </header>
        </div>
    );
}

export default Hitung;