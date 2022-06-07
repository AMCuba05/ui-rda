import axios from 'axios';

import { url } from './url';
export const obtenerNotificacionesDocentes = async (id) => {
    const { data } = await axios.get(url + `docente/notificaciones/${id}` )
    return data
}
