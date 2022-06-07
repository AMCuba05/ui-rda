import axios from 'axios';
import { url } from './url';
export const docenteMaterias = async (id) => {
    const { data } = await axios.get(url + `docente/materias/${id}` )
    return data
}

export const obtenerMateriaDatosReserva = async (id) => {
    const { data } = await axios.get(url + `datos-reserva/materia/${id}` , )
    return data
}
