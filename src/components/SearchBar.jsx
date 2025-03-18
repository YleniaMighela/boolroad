

export default function SearchBar({ search, setSearch }) {


    const handleChange = (event) => {
        setSearch(event.target.value);
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