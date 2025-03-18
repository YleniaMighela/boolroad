// importo il componente dalla libreria di react-router
import { Link } from "react-router-dom"
// import SearchBar from "./SearchBar";


export default function Header() {

    return (
        <header>
            <nav className="d-flex justify-content-between align-items-center navbar p-1" style={{ backgroundColor: "#0044cc" }}>
                <div className="d-flex align-items-center">
                    <Link to="/" className="d-flex align-items-center text-decoration-none" style={{ color: "#28a745" }}>
                        <img
                            src="/Logo.png"
                            alt="BoolRoad Logo"
                            className="me-2"
                            style={{ height: "120px" }}
                        />
                    </Link>
                </div>
                <Link to="/travel/create" className="d-flex align-items-center text-decoration-none">Aggiungi Viaggio</Link>
            </nav>
        </header>
    );



}