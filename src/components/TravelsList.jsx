//  TravvelsList.jsx

import travels from "../data/DB";

export default function TravelsList() {

    return (
        <ul>
            {travels.map((trip) => (
                <li key={trip.id}>
                    {trip.citta} - {trip.dataPartenza} - {trip.dataArrivo}
                </li>
            ))}
        </ul>
    );
};
