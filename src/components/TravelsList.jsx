import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

export default function TravelsList({ travels }) {

    // funzione convertire data in formato europeo
    function formatDateToEuropean(date) {
        if (!date) return "";
        const [year, month, day] = date.split("-");
        return `${day}/${month}/${year}`;
    }

    return (
        <div className="container mt-4">
            <h2 className="mb-3 text-light">Destinazioni di Viaggio</h2>
            <ul className="list-group">
                {travels.map((trip) => (
                    <li key={trip.id} className="list-group-item d-flex justify-content-between align-items-center mb-3 border">
                        <strong>Viaggio:</strong> {trip.citta}  <strong>Date:</strong>{formatDateToEuropean(trip.dataPartenza)} - {formatDateToEuropean(trip.dataArrivo)}
                        <Link to={`/travel/${trip.id}`} className="btn btn-primary">Dettagli</Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}