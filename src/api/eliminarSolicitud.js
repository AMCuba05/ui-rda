import axios from 'axios';
import { url } from './url';

//const url = 'http://localhost:8000/';
//const url = 'https://reserva-aulas-stage.herokuapp.com/';
export const eliminarSolicitud = async (id) => {
    const { data } = await axios.put(url + `solicitud-reserva/eliminar/${id}`)
    return data
}
