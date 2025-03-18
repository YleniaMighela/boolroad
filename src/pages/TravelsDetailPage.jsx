// TravelsDetailPage.jsx

import { useParams } from "react-router-dom";
import TravelsDetailCard from "../components/TravelsDetailCard";

export default function TravelsDetailPage({ travels }) {

    const { id } = useParams();
    const travel = travels.find((trip) => trip.id === Number(id));

    if (!travel) {
        return <p>Viaggio non trovato.</p>;
    }

    return (
        <TravelsDetailCard travel={travel} />
    )

}