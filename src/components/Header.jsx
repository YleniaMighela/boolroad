// importo il componente dalla libreria di react-router
import { Link } from "react-router-dom"
import SearchBar from "./SearchBar";


export default function Header() {

    return (
        <header>
            <nav className="d-flex justify-content-between align-items-center navbar p-3" style={{ backgroundColor: "#0044cc" }}>
                <div className="d-flex align-items-center">
                    <Link to="/" className="d-flex align-items-center text-decoration-none" style={{ color: "#28a745" }}>
                        <h1 id="title" className="me-2 fw-bold">BOOLROAD</h1>
                    </Link>
                </div>
                <SearchBar />
            </nav>
        </header>
    );



}