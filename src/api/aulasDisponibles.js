import axios from 'axios';
import { url } from './url';

//const url = 'http://localhost:8000/';
//const url = 'https://reserva-aulas-stage.herokuapp.com/';
export const obtenerAulasDisponibles = async (date) => {
    const { data } = await axios.post(url + 'aula/disponibles' , {
        fecha: date
    })
    return data
}
export const obtenerTodasAulas = async ()=>{
    const { data } = await axios.get(url + 'aula' , {})
    return data
}
