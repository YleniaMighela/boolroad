

export default function SearchBar({ search, setSearch }) {


    const handleChange = (event) => {
        setSearch(event.target.value);
    };

    return (
        <nav className="navbar bg-body-tertiary">
            <div className="container-fluid">
                <form className="d-flex" role="search">
                    <input className="form-control me-2" type="search" placeholder="Search"
                        aria-label="Search" value={search} onChange={(e) => setSearch(e.target.value)} />
                    <button className="btn btn-outline-success" type="submit" onClick={handleChange}>Search</button>
                </form>
            </div>
        </nav>
    );
}