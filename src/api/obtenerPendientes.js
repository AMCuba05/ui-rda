import axios from 'axios';

import { url } from './url';
export const obtenerPendientes = async (date) => {
    const { data } = await axios.get(url + 'solicitud-reserva/pendientes' , )
    return data
}

export const obtenerProximas = async (date) => {
    const { data } = await axios.get(url + 'solicitud-reserva/proximos' , )
    return data
}

export const obtenerAntiguas = async (date) => {
    const { data } = await axios.get(url + 'solicitud-reserva/antiguedad' , )
    return data
}
