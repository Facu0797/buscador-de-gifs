import React, { useState } from 'react';

const Categoria = ({setCategoria}) => {

    const [input, setInput] = useState("");
    const [error, setError] = useState(false);

    const buscarGifs = (e) => {
        e.preventDefault();

        if(input === "") {
            setError(true);
            return;
        }
        setError(false)
        setInput("")
        setCategoria(input)
    }

    return (
        <>
            <form onSubmit={buscarGifs}>
                <input onChange={(e) => setInput(e.target.value)} value={input} type="text" placeholder='Buscar gifs'/>
            </form>

            {error ? <p className="error">El campo no puede estar vacio</p> : null }
            
        </>
    );
}
 
export default Categoria;