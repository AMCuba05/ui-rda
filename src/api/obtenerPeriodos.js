import axios from 'axios';

export const obtenerPeriodos = async () => {
    const { data } = await axios.get(`https://reserva-aulas-stage.herokuapp.com/periodo` )
    return data
}
