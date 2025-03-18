//  TravvelsList.jsx

import travels from "../data/DB";

export default function TravelsList() {

    return (
        <ul>
            {travels.map((trip) => (
                <div className="card">
                    <div className="card-body">
                        <li key={trip.id}>
                            {trip.citta} - {trip.dataPartenza} - {trip.dataArrivo}
                        </li>
                    </div>
                </div>

            ))}
        </ul>
    );
};
