import axios from 'axios';

export const obtenerPendientes = async (date) => {
    const { data } = await axios.get('https://reserva-aulas-stage.herokuapp.com/solicitud-reserva/pendientes' , )
    return data
}

export const obtenerProximas = async (date) => {
    const { data } = await axios.get('http://reserva-aulas-stage.herokuapp.com/solicitud-reserva/proximos' , )
    return data
}

export const obtenerAntiguas = async (date) => {
    const { data } = await axios.get('http://reserva-aulas-stage.herokuapp.com/solicitud-reserva/antiguedad' , )
    return data
}
