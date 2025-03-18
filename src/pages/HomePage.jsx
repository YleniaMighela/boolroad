// HomePage.jsx

import TravelsList from "../components/TravelsList";

function HomePage({ travels }) {
    return (
        <>
            <TravelsList travels={travels} />
        </>
    );
}

export default HomePage;