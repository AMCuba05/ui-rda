import axios from 'axios';

import { url } from './url';
export const obtenerHistorial = async (id) => {
    const { data } = await axios.get(url + `solicitud-reserva/docente-solicitud/${id}` )
    return data
}