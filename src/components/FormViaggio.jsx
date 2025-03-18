import { useState } from "react";
import { useNavigate } from "react-router-dom";

const initialFormData = {
    citta: "",
    dataPartenza: "",
    dataArrivo: ""
};

export default function FormViaggio({ onAddTravel }) {
    const [formData, setFormData] = useState(initialFormData);
    const navigate = useNavigate();

    function handleSubmit(e) {
        e.preventDefault();
        onAddTravel({
            id: Date.now(),
            ...formData
        });
        setFormData(initialFormData);
        navigate("/");
    }

    function handleFormData(e) {
        setFormData((currentFormData) => ({
            ...currentFormData,
            [e.target.name]: e.target.value
        }));
    }

    return (
        <form className="row g-3 bg-primary" onSubmit={handleSubmit}>
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
            <div className="col-12">

                <button type="submit" className="btn btn-primary">Click</button>

            </div>
        </form>
    );
}