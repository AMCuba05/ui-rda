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

export const sugerenciaAulas = async (params) => {
    const { data } = await axios.post(url + 'aula/sugerenciaReserva' , {
        fecha: params.fecha,
        periodos: params.periodos,
        capacidadMin: params.capacidadMin,
        capacidadMax: params.capacidadMax,
        area: params.area
    })
    console.log(data)
    return data
}

export const nombreAulas = async (params) => {
    const { data } = await axios.post(url + 'aula/nombre' , {
        fecha: params.fecha,
        nombreAula: params.nombreAula
    })
    console.log(data)
    return data
}
