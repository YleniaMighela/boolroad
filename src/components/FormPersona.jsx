// FormPersona.jsx

import { useState } from "react";
import { useNavigate } from "react-router-dom";

const initialFormData = {
    nome: "",
    cognome: "",
    email: "",
    numeroTelefonico: "",
    codiceFiscale: ""
};

export default function FormPersona({ onAddPersona, persone }) {

    const [formData, setFormData] = useState(initialFormData);
    const navigate = useNavigate();


    function handleFormData(e) {
        setFormData((currentFormData) => ({
            ...currentFormData,
            [e.target.name]: e.target.value
        }));
    }

    function handleSubmit(e) {
        e.preventDefault();
        const newPersona = {
            id: persone.length === 0 ? 1 : persone[persone.length - 1].id + 1,
            ...formData
        };

        onAddPersona(newPersona);
        setFormData(initialFormData);
    }

    return (
        <form className="row g-3 mt-4 travel_detail_card" onSubmit={handleSubmit}>
            <div className="col-md-6">
                <label className="form-label">Nome</label>
                <input
                    type="text"
                    name="nome"
                    className="form-control"
                    value={formData.nome}
                    onChange={handleFormData}
                />
            </div>
            <div className="col-md-6">
                <label className="form-label">Cognome</label>
                <input
                    type="text"
                    name="cognome"
                    className="form-control"
                    value={formData.cognome}
                    onChange={handleFormData}
                />
            </div>
            <div className="col-md-6">
                <label className="form-label">Email</label>
                <input
                    type="email"
                    name="email"
                    className="form-control"
                    value={formData.email}
                    onChange={handleFormData}
                />
            </div>
            <div className="col-md-6">
                <label className="form-label">Numero Telefonico</label>
                <input
                    type="tel"
                    name="numeroTelefonico"
                    className="form-control"
                    value={formData.numeroTelefonico}
                    onChange={handleFormData}
                />
            </div>
            <div className="col-md-6">
                <label className="form-label">Codice Fiscale</label>
                <input
                    type="text"
                    name="codiceFiscale"
                    className="form-control"
                    value={formData.codiceFiscale}
                    onChange={handleFormData}
                />
            </div>
            <div className="col-12 d-flex justify-content-center mb-3">
                <button type="submit" className="btn btn-success">Aggiungi Persona</button>
            </div>
        </form>
    );
}