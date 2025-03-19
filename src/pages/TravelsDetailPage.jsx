// TravelsDetailPage.jsx

import { useParams } from "react-router-dom"; // Hook per leggere i parametri dell'URL
import { useState } from "react"; // Hook per gestire lo stato locale
import TravelsDetailCard from "../components/TravelsDetailCard"; // Componente che mostra i dettagli del viaggio

// Componente principale che mostra i dettagli di un viaggio specifico
export default function TravelsDetailPage({ travels, setTravels }) {

    // Recupero dell'ID del viaggio dai parametri dell'URL
    const { id } = useParams();

    // Trovo il viaggio corrispondente all'ID recuperato dall'URL
    const travel = travels.find((trip) => trip.id === Number(id));

    // Se non trovo un viaggio con quell'ID, mostro un messaggio di errore
    if (!travel) {
        return <p>Viaggio non trovato.</p>;
    }

    // Funzione per aggiungere una nuova persona al viaggio
    const handleAddPersona = (newPersona) => {
        // modifico i dati dei viaggi per aggiungere la persona
        setTravels((prevTravels) => {
            return prevTravels.map((trip) =>
                trip.id === travel.id
                    ? { ...trip, persone: [...trip.persone, newPersona] } // Aggiungo la persona
                    : trip // Gli altri viaggi rimangono invariati
            );
        });
    };

    // Ritorno il componente che mostra i dettagli del viaggio, passando i dati e la funzione per aggiungere una persona
    return (
        <TravelsDetailCard travel={travel} onAddPersona={handleAddPersona} />
    )

}