import { useState } from "react";
import { useNavigate } from "react-router-dom";

const initialFormData = {
    citta: "",
    dataPartenza: "",
    dataArrivo: ""
};

export default function FormViaggio({ onAddTravel, travels }) {

    const [formData, setFormData] = useState(initialFormData);
    const navigate = useNavigate();


    function handleFormData(e) {
        setFormData((currentFormData) => ({
            ...currentFormData,
            [e.target.name]: e.target.value
        }));
    }

    // funzione convertire data in formato europeo
    function formatDateToEuropean(date) {
        if (!date) return "";

        if (date instanceof Date) {
            return date.toLocaleDateString("it-IT");
        }

        const [year, month, day] = date.split("-");
        return `${day}-${month}-${year}`;
    }

    function handleSubmit(e) {
        e.preventDefault();
        const newTravel = {
            id: travels.length === 0 ? 1 : travels[travels.length - 1].id + 1,
            citta: formData.citta,
            dataPartenza: formatDateToEuropean(formData.dataPartenza),
            dataArrivo: formatDateToEuropean(formData.dataArrivo),
        };

        onAddTravel(newTravel);
        setFormData(initialFormData);
        navigate(`/`);
    }

    return (
        <form className="row g-3 mt-4 travel_detail_card" onSubmit={handleSubmit}>
            <div className="col-md-6">
                <label className="form-label">Destinazione</label>
                <input
                    type="text"
                    name="citta"
                    className="form-control"
                    value={formData.citta}
                    onChange={handleFormData}
                />
            </div>
            <div className="col-md-6">
                <label className="form-label">Data di partenza</label>
                <input
                    type="date"
                    name="dataPartenza"
                    className="form-control"
                    value={formData.dataPartenza}
                    onChange={handleFormData}
                />
            </div>
            <div className="col-md-6">
                <label className="form-label">Data di arrivo</label>
                <input
                    type="date"
                    name="dataArrivo"
                    className="form-control"
                    value={formData.dataArrivo}
                    onChange={handleFormData}
                />
            </div>
            <div className="col-12 d-flex justify-content-center mb-3">
                <button type="submit" className="btn btn-success">Aggiungi Viaggio</button>
            </div>
        </form>
    );
}