import axios from 'axios';
import {url} from "./url";

export const obtenerPeriodos = async () => {
    const { data } = await axios.get(url + `periodo` )
    return data
}

export const obtenerPeriodById = async (idPeriodos) => {
    var lista = new Array();
    for(let i=0; i<idPeriodos.length; i++){
        const {data} = await axios.get(url + `periodo/`+ idPeriodos[i])    
        lista.push(data.hora_inicio);
    }
    return lista;
}
