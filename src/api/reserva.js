import axios from 'axios';

export const aceptarReserva = async (id) => {
    const { data } = await axios.post(`https://reserva-aulas-stage.herokuapp.com/reserva/crearReserva/${id}` , )
    return data
}

export const rechazarReserva = async (id) => {
    const data = await axios.put(`https://reserva-aulas-stage.herokuapp.com/solicitud-reserva/cambio-estado/${id}` )
    return data
}
