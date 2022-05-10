import axios from 'axios';

export const obtenerAulasDisponibles = async (date) => {
    const { data } = await axios.post('https://reserva-aulas-stage.herokuapp.com/aula/disponibles' , {
        fecha: date
    })
    return data
}
