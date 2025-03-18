// importo il componente dalla libreria di react-router
import { Link } from "react-router-dom"
import SearchBar from "./SearchBar";


export default function Header() {

    return (
        <header>
            <nav className="navbar bg-body-tertiary">
                <div className="container-fluid">
                    <Link to="/"> <h1>BOOLROAD</h1>
                        <img src="/docs/5.3/assets/brand/bootstrap-logo.svg" alt="Bootstrap" width="30" height="24" />
                    </Link>



                </div>

                <SearchBar />
            </nav>
        </header>
    );



}