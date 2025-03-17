import React from "react";
import { travelData } from "../data/travelData";

export default function TravelsList() {

    return (
        <ul>
            {travelData.map((trip) => (
                <li key={trip.id}>
                    {trip.citta} - {trip.dataPartenza} - {trip.dataArrivo}
                </li>
            ))}
        </ul>
    );
};
