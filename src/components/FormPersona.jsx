// FormPersona.jsx
//  Importo useState per gestire lo stato locale e useNavigate per la navigazione
import { useState } from "react";
import { useNavigate } from "react-router-dom";


// Stato iniziale del form, con tutti i campi vuoti
const initialFormData = {
    nome: "",
    cognome: "",
    email: "",
    eta: "",
    numeroTelefonico: "",
    codiceFiscale: ""
};

// Definizione del componente FormPersona
// Props:
// - onAddPersona: funzione per aggiungere una nuova persona al viaggio
// - persone: lista attuale dei partecipanti

export default function FormPersona({ onAddPersona, persone }) {

    // Stato per gestire i dati inseriti dall'utente
    const [formData, setFormData] = useState(initialFormData);
    const navigate = useNavigate();

    // Funzione per aggiornare lo stato ogni volta che l'utente modifica un campo
    function handleFormData(e) {
        setFormData((currentFormData) => ({
            ...currentFormData,
            [e.target.name]: e.target.value // Aggiorno solo il campo modificato
        }));
    }

    // Funzione che gestisce il submit del form
    function handleSubmit(e) {
        e.preventDefault(); // Evita il refresh della pagina
        // Creo il nuovo oggetto persona, assegnando un id univoco
        const newPersona = {
            id: persone.length === 0 ? 1 : persone[persone.length - 1].id + 1,
            ...formData // Copio i dati inseriti dall'utente
        };

        // Aggiungo la nuova persona alla lista tramite la funzione passata come prop
        onAddPersona(newPersona);
        // Resetto il form dopo l'invio
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
                <label className="form-label">Età</label>
                <input
                    type="number"
                    name="eta"
                    className="form-control"
                    value={formData.eta}
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