import React, {useState} from 'react';
import classes from "./App.module.css"
import EnterField from "./Components/EnterField";
import Game from "./Components/Game";


function App() {
    const [GameField, setGameField] = useState(true)

    function drawElement() {
        if (GameField === false)
            return <EnterField setGameField={setGameField}/>
        if (GameField === true)
            return <Game/>
    }

    return (
        <div className={classes.Content}>
            {drawElement()}
        </div>
    );
}

export default App;
