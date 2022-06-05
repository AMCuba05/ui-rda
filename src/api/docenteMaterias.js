import axios from 'axios';
import { url } from './url';
export const docenteMaterias = async (id) => {
    const { data } = await axios.get(url + `docente/materias/${id}` )
    return data
}
