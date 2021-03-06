import axios from 'axios';
import { url } from './url';

//const url = 'http://localhost:8000/';
//const url = 'https://reserva-aulas-stage.herokuapp.com/';
export const obtenerAulasDisponibles = async (body) => {
    const { data } = await axios.post(url + 'aula/general' ,body)
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
    const { data } = await axios.post(url + 'aula/infoAula' , {
        nombreAula: params.nombreAula
    })
    console.log(data)
    return data
}

export const sugerenciaNombreAulas = async (params) => {
    const { data } = await axios.post(url + 'aula/nombresAulasDisponible' , {
        nombreAula: params.nombreAula,
        fecha: params.fecha,
        periodos: params.periodos
    })    
    return data
}
