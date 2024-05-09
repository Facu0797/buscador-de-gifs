import React from 'react';
import useApi from '../hooks/useApi';
import Gifs from './Gifs';

const MostrarGifs = ({categoria}) => {

    const url = `https://api.giphy.com/v1/gifs/search?api_key=1ZTlJJ0dQYYU0Nqz0asBkbkThr6i13ae&q=${categoria}&limit=20`;

    const {data, cargando} = useApi(url)

    return (
        <div className="container-gifs">
            {
                cargando ?
                data.map((img) => (
                    <Gifs key={img.id} titulo={img.title} imagen={img.images.downsized_medium.url} />
                ))
                : null
            }
        </div>

    );
}
 
export default MostrarGifs;