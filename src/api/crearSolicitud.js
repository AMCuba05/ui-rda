import axios from 'axios';
import { url } from './url';
//const url = 'http://localhost:8000/';
//const url = 'https://reserva-aulas-stage.herokuapp.com/';
export const crearSolicitud = async (params) => {
    const { data } = await axios.post(url + 'solicitud-reserva' , params)
    return data
}
