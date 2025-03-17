import travels from "../data/DB";
import { useParams } from "react-router-dom";

export default function TravelsDetailCard() {
    const { id } = useParams();
    const travel = travels.find((trip) => trip.id === parseInt(id));

    if (!travel) {
        return <p>Viaggio non trovato.</p>;
    }

    return (
        <div className="travel_detail_card">
            <h2>{travel.citta}</h2>
            <p>{travel.dataPartenza}</p>
            <p>{travel.dataArrivo}</p>

            <strong>Partecipanti</strong>

            <div className="user_info">
                {travel.persone.map((persona) => (
                    <div key={persona.nome}>
                        <p>{persona.nome} {persona.cognome}</p>
                    </div>
                ))}
            </div>
            <button>Partecipanti</button>
        </div>
    );
}