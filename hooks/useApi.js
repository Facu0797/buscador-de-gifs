import { useEffect, useState } from "react";

const useApi = (url) => {

    const [data, setData] = useState(null);
    const [cargando, setCargando] = useState(false);

    const fetchApi = () => {
        fetch(url)
            .then(resp => resp.json())
            .then(respJson => {
                setCargando(true);
                setData(respJson.data);
            })
            .catch(error => console.log(error))
    }

    useEffect(() => {
        fetchApi();
    },[url])

    return {data, cargando}
}
 
export default useApi;