import axios from 'axios';

import { url } from './url';
export const obtenerHistorial = async () => {
    const { data } = await axios.get(url + `solicitud-reserva/historial-admin` )
    return data
}