import axios from 'axios';

import { url } from './url';
export const aceptarReserva = async (id) => {
    const { data } = await axios.post(url + `reserva/crearReserva/${id}` , )
    return data
}

export const rechazarReserva = async (id) => {
    const data = await axios.put(url + `solicitud-reserva/cambio-estado/${id}` )
    return data
}
