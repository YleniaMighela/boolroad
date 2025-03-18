

export default function SearchBar({ search, setSearch }) {


    const handleChange = (event) => {
        setSearch(event.target.value);
    };

    return (
        <nav className="navbar">
            <div className="container-fluid justify-content-center">
                <form className="d-flex" role="search">
                    <input className="form-control me-2" type="search" placeholder="Cerca partecipante..."
                        aria-label="Search" value={search} onChange={(e) => setSearch(e.target.value)} />
                </form>
            </div>
        </nav>
    );
}