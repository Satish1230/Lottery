import Ticketnum from "./ticketnum";
export default function Ticket({ ticket }) {
    return (
        <div className="ticket">

            {ticket.map((num, index) =>
                <Ticketnum num={num} key={index} />
            )}
        </div>
    )
}
