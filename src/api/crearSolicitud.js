import axios from 'axios';

export const crearSolicitud = async (params) => {
    const { data } = await axios.post('https://reserva-aulas-stage.herokuapp.com/aula/disponibles' , params)
    return data
}
