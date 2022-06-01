import axios from 'axios';

export const obtenerPendientes = async (date) => {
    const { data } = await axios.get('https://reserva-aulas-stage.herokuapp.com/solicitud-reserva/pendientes' , )
    return data
}
