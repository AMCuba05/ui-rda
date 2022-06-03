import axios from 'axios';

//const url = 'https://localhost:8000/';
const url = 'https://reserva-aulas-stage.herokuapp.com/';
export const aceptarReserva = async (id) => {
    const { data } = await axios.post(url + `reserva/crearReserva/${id}` , )
    return data
}

export const rechazarReserva = async (id) => {
    const data = await axios.put(url + `solicitud-reserva/cambio-estado/${id}` )
    return data
}
