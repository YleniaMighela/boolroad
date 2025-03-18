import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

export default function TravelsList({ travels }) {
    return (
        <div className="container mt-4">
            <h2 className="mb-3 text-light">Destinazioni di Viaggio</h2>
            <ul className="list-group">
                {travels.map((trip) => (
                    <li key={trip.id} className="list-group-item d-flex justify-content-between align-items-center mb-3 border">
                        Viaggio: {trip.citta} - Date: {trip.dataPartenza} - {trip.dataArrivo}
                        <Link to={`/travel/${trip.id}`} className="btn btn-primary">Dettagli</Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}