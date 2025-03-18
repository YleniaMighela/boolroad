// TravelsDetailPage.jsx

import { useParams } from "react-router-dom";
import { useState } from "react";
import TravelsDetailCard from "../components/TravelsDetailCard";

export default function TravelsDetailPage({ travels }) {

    const { id } = useParams();
    const [travelsState, setTravelsState] = useState(travels);

    const travel = travelsState.find((trip) => trip.id === Number(id));

    if (!travel) {
        return <p>Viaggio non trovato.</p>;
    }

    const handleAddPersona = (newPersona) => {
        // modifico i dati dei viaggi per aggiungere la persona
        setTravelsState((prevTravels) => {
            return prevTravels.map((trip) =>
                trip.id === travel.id
                    ? { ...trip, persone: [...trip.persone, newPersona] }
                    : trip
            );
        });
    };

    return (
        <TravelsDetailCard travel={travel} onAddPersona={handleAddPersona} />
    )

}