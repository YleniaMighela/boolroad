import travels from "../data/DB";

export default function travelsDetailCard() {

    return (
        <>

            {
                <div className="travel_detail_card">
                    <h2>{travels[0].citta}</h2>
                    <p>{travels[0].dataPartenza}</p>
                    <p>{travels[0].dataArrivo}</p>

                    <strong>Partecipanti</strong>

                    <div className="user_info">
                        {travels[0].persone.map((persona) =>
                            <div key={persona}>
                                <p>
                                    {persona.nome} {persona.cognome}
                                </p>
                            </div>
                        )}
                    </div>
                    <button>
                        Partecipanti
                    </button>
                </div>
            }

        </>
    )

}
