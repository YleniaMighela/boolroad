// Definizione del componente SearchBar che riceve due props:
// - search: il valore attuale della barra di ricerca
// - setSearch: funzione per aggiornare il valore della ricerca


export default function SearchBar({ search, setSearch }) {

    // Funzione che viene chiamata ogni volta che l'utente scrive nella barra di ricerca
    const handleChange = (event) => {
        setSearch(event.target.value);  // Aggiorna lo stato con il valore digitato
    };

    return (
        <nav className="navbar mb-3">
            <div className="container-fluid justify-content-center">
                <form className="d-flex" role="search">
                    <input className="form-control me-2" type="search" placeholder="Cerca partecipante..."
                        aria-label="Search" value={search} onChange={handleChange} />
                </form>
            </div>
        </nav>
    );
}