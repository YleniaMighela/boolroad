// Importo useState per gestire lo stato locale e useNavigate per navigare tra le pagine
import { useState } from "react";
import { useNavigate } from "react-router-dom";

// Stato iniziale del form, con i campi vuoti
const initialFormData = {
    citta: "",
    dataPartenza: "",
    dataArrivo: ""
};


// Componente FormViaggio che riceve due props:
// - onAddTravel: funzione per aggiungere un nuovo viaggio
// - travels: lista dei viaggi esistente (serve per assegnare un nuovo id)

export default function FormViaggio({ onAddTravel, travels }) {

    // Stato per memorizzare i dati inseriti nel form
    const [formData, setFormData] = useState(initialFormData);
    // Hook per navigare programmaticamente (dopo aver aggiunto un viaggio)
    const navigate = useNavigate();

    // Funzione per aggiornare lo stato del form quando l'utente digita qualcosa
    function handleFormData(e) {
        setFormData((currentFormData) => ({
            ...currentFormData,
            [e.target.name]: e.target.value  // Aggiorno solo il campo modificato
        }));
    }

    // funzione convertire data in formato europeo
    function formatDateToEuropean(date) {
        if (!date) return "";

        if (date instanceof Date) {
            return date.toLocaleDateString("it-IT");
        }

        // Se la data è una stringa nel formato yyyy-mm-dd, la converto
        const [year, month, day] = date.split("-");
        return `${day}-${month}-${year}`;
    }

    // Funzione che gestisce l'invio del form
    function handleSubmit(e) {
        e.preventDefault();  // Previene il comportamento di default (refresh della pagina)
        // Creo un nuovo oggetto viaggio
        const newTravel = {
            // Genero un id incrementale basandomi sull'ultimo id presente
            id: travels.length === 0 ? 1 : travels[travels.length - 1].id + 1,
            citta: formData.citta,
            dataPartenza: formatDateToEuropean(formData.dataPartenza),
            dataArrivo: formatDateToEuropean(formData.dataArrivo),
        };

        // Chiamo la funzione passata come prop per aggiungere il viaggio
        onAddTravel(newTravel);
        // Resetto il form
        setFormData(initialFormData);
        // Dopo l'aggiunta, torno alla homepage
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
            <div className="col-12 d-flex justify-content-center">
                <button type="submit" className="btn btn-success">Aggiungi Viaggio</button>
            </div>
        </form>
    );
}
