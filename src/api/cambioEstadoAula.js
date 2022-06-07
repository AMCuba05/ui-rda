import axios from 'axios';
import { url } from './url';

export const cambiarEstadoAula = async (id) => {
    const { data } = await axios.put(url + `aula/modificar/${id}`)
    return data
}
export const obtenerAulas = async () => {
    const { data } = await axios.get(url + `aula`)
    return data
}
