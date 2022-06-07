import axios from 'axios';

import { url } from './url';
export const obtenerPendientes = async (date) => {
    const { data } = await axios.get(url + 'solicitud-reserva/pendientes' , )
    return data
}
