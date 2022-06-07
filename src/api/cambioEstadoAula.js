import axios from 'axios';
import { url } from './url';

export const cambiarEstadoAula = async (id) => {
    const { data } = await axios.put(`http://localhost:8000/aula/modificar/${id}`)
    return data
}
export const obtenerAulas = async () => {
    const { data } = await axios.get(`http://localhost:8000/aula`)
    return data
}