import React from 'react';

const Gifs = ({titulo, imagen}) => {
    return ( 
        <div>
            <img src={imagen} alt={titulo} />
            <p>{titulo}</p>
        </div>

    );
}
 
export default Gifs;