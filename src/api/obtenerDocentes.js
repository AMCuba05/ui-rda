import axios from 'axios';

import { url } from './url';
export const obtenerDocentes = async (id) => {
    const { data } = await axios.get(url + `materia/docentes/${id}` )
    return data
}
