//  TravvelsList.jsx

import travels from "../data/DB";

// importo bootstrap
import "bootstrap/dist/css/bootstrap.min.css";

export default function TravelsList() {

    return (

        <div className="container mt-4">
            <h2 className="mb-3">Destinazioni di Viaggio</h2>
            <ul className="list-group">
                {travels.map((trip) => (
                    <li key={trip.id} className="list-group-item d-flex justify-content-between align-items-center">
                        Viaggio: {trip.citta} - Date: {trip.dataPartenza} - {trip.dataArrivo}
                        <button className="btn btn-primary">Dettagli</button>
                    </li>
                ))}
            </ul>
        </div>

    );
};
