// HomePage.jsx

// Importo il componente che mostra la lista dei viaggi
import TravelsList from "../components/TravelsList";

// Definisco il componente HomePage che riceve come prop l'elenco dei viaggi
function HomePage({ travels }) {
    return (
        <>
            <TravelsList travels={travels} />
        </>
    );
}

// Esporto il componente
export default HomePage;