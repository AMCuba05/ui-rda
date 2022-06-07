import axios from 'axios';
import { url } from './url';
export const obtenerDocenteMaterias = async () => {
    const { data } = await axios.get(url + `docente/sin-registrar` )
    return data
}
