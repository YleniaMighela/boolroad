import travels from "../data/DB";
import { useParams } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

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

            <div className="accordion" id="accordionGroup">
                {travel.persone.map((persona) => {
                    const collapseId = `collapse-${persona.id}`;

                    return (
                        <div className="accordion-item" key={persona.id}>
                            <h2 className="accordion-header" id={`heading-${persona.id}`}>
                                <button
                                    className="accordion-button collapsed"
                                    type="button"
                                    data-bs-toggle="collapse"
                                    data-bs-target={`#${collapseId}`}
                                    aria-expanded="false"
                                    aria-controls={collapseId}
                                >
                                    {persona.nome} {persona.cognome}
                                </button>
                            </h2>
                            <div
                                id={collapseId}
                                className="accordion-collapse collapse"
                                data-bs-parent="#accordionGroup"
                            >
                                <div className="accordion-body">
                                    <span>{persona.eta}</span> |
                                    <span> {persona.email}</span> |
                                    <span> {persona.numeroTelefonico}</span>
                                    <span> {persona.codiceFiscale}</span>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
