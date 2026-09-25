import { useState } from "react";

export default function Lottery() {
    const [ticket, setticket] = useState("0");

    function lotery() {
        return String(Math.floor(Math.random() * 1000)).padStart(3, "0");
    }

    function isWin(ticket) {
        let sum = 0;
        for (let i = 0; i < ticket.length; i++) {
            sum += Number(ticket[i]);
        }
        if (sum == 15) {
            return "YOU WIN THE GAME";
        }
        else {
            return "BETTER LUCK NEXT TIME ";
        }
    }

    return (
        <div>
            <h1>WELCOME TO LOTTERY GAME</h1>
            <h3>Lottery Ticket = {ticket}</h3>
            <p>{isWin(ticket)}</p>
            <button onClick={() => { setticket(lotery()) }}>Get New Ticket</button>
        </div>
    );
}