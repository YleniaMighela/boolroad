// importo il componente dalla libreria di react-router
import { Link } from "react-router-dom"
// import SearchBar from "./SearchBar";


export default function Header() {

    return (
        <header>
            <nav
                className="d-flex justify-content-between align-items-center navbar p-2"
                style={{
                    backgroundImage: "linear-gradient(to right, rgba(0, 100, 200, 0.85), rgba(50, 150, 100, 0.85))",
                }}
            >
                <div className="d-flex align-items-center">
                    <Link to="/" className="d-flex align-items-center text-decoration-none" style={{ color: "#ffffff" }}>
                        <img
                            src="/Logo.png"
                            alt="BoolRoad Logo"
                            className="me-2"
                            style={{ height: "90px" }}
                        />
                    </Link>
                </div>
                <Link to="/travel/create" className="btn btn-light d-flex align-items-center justify-content-center">
                    ➕ Aggiungi Viaggio
                </Link>
            </nav>
        </header>
    );



}