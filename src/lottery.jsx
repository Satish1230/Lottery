import { useState } from "react";
import { genticket, sum } from "./helper";
import Ticket from "./ticket";

export default function Lottery({ n = 5, winningsum = 7 }) {
    let [ticket, setticket] = useState(genticket(n));
    let iswinning = sum(ticket) === winningsum

    let buyTicket = () => {
        setticket(genticket(n));
    }

    return (
        <div>
            <h1>Lottery</h1>
            <Ticket ticket={ticket} />
            <br />
            <button onClick={buyTicket}>Buy Ticket</button>
            <h3>{iswinning && "You Won!"}</h3>
        </div>
    );
}
