import { useState } from "react";

export default function LudoBoard() {
    const [moves, setMoves] = useState({ blue: 0, red: 0, yellow: 0, green: 0 });
    let [arr, setArray] = useState(["no moves"]);

    function updateBlue() {
        setMoves((prevMoves) => { return { ...prevMoves, blue: prevMoves.blue + 1 } });
        setArray((prevArr) => [...prevArr, "BLUE MOVES"]);
        console.log(arr);
    }
    function updateYellow() {
        setMoves((prevMoves) => { return { ...prevMoves, yellow: prevMoves.yellow + 1 } });
        setArray((prevArr) => [...prevArr, "YELLOW MOVES"]);
        console.log(arr);
    }
    function updateRed() {
        setMoves((prevMoves) => { return { ...prevMoves, red: prevMoves.red + 1 } });
        setArray((prevArr) => [...prevArr, "RED MOVES"]);
        console.log(arr);
    }
    function updateGreen() {
        setMoves((prevMoves) => { return { ...prevMoves, green: prevMoves.green + 1 } });
        setArray((prevArr) => [...prevArr, "GREEN MOVES"]);
        console.log(arr);
    }
    return (
        <div>
            <h1>ludo board</h1>
            {arr.map((el) => <li>{el}</li>)}
            <div className="board">
                <p>Blue Moves = {moves.blue}</p>
                <button onClick={updateBlue}>+1</button>
                <p>Yellow Moves = {moves.yellow}</p>
                <button onClick={updateYellow}>+1</button>
                <p>Red Moves = {moves.red}</p>
                <button onClick={updateRed}>+1</button>
                <p>Green Moves = {moves.green}</p>
                <button onClick={updateGreen}>+1</button>
            </div>
        </div>
    );
}   