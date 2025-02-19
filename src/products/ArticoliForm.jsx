import { useState } from "react";

const articoliIniziali = [
    {
        id: 1,
        titolo: "titolo JavaScript",
        autore: "Mario",
        contenuto: "JavaScript è un linguaggio",
        categoria: "Programmazione"
    },
    {
        id: 2,
        titolo: "titolo CSS",
        autore: "Luca",
        contenuto: "CSS è un linguaggio",
        categoria: "Design"
    },
    {
        id: 3,
        titolo: "titolo React",
        autore: "Giulia",
        contenuto: "React è un framework",
        categoria: "Programmazione"
    },
];


const formDatiInizio = {
    titolo: "",
    autore: "",
    contenuto: "",
    categoria: "",
};


const ArticoliForm = () => {

    const [articoli, setArticoli] = useState(articoliIniziali);
    const [formDati, setFormDati] = useState(formDatiInizio);

    function gestioneFormDati(e) {
        setFormDati((datiFormCorrenti) => ({
            ...datiFormCorrenti,
            [e.target.name]: e.target.value,
        }));
    }

    function gestioneInvio(event) {
        event.preventDefault();
        setArticoli((articoliCorrenti) => [...articoliCorrenti, { id: articoliCorrenti[articoliCorrenti.length - 1].id + 1, ...formDati }]);
    }


    return (
        <>


            <form action="#" onSubmit={gestioneInvio}>
                <input
                    type="text"
                    name="titolo"
                    onChange={gestioneFormDati}
                    value={formDati.titolo}
                    placeholder="inserire titolo"
                />
                <input
                    type="text"
                    name="autore"
                    onChange={gestioneFormDati}
                    value={formDati.autore}
                    placeholder="inserire nome"
                />
                <textarea
                    type="text"
                    name="contenuto"
                    onChange={gestioneFormDati}
                    value={formDati.contenuto}
                    placeholder="testo"
                />
                <input
                    type="text"
                    name="categoria"
                    onChange={gestioneFormDati}
                    value={formDati.categoria}
                    placeholder="genere"
                />
                <button type="submit">Add</button>
            </form>
            {articoli.map((articolo) => (
                <div key={articolo.id}>
                    <h3>{articolo.titolo}</h3>
                    <p>{articolo.autore}</p>
                    <p>{articolo.contenuto}</p>
                    <p>{articolo.categoria}</p>
                </div>
            ))}
        </>
    )
}



export default ArticoliForm