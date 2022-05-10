import axios from 'axios';

export const obtenerMaterias = async () => {
    const { data } = await axios.get('https://reserva-aulas-stage.herokuapp.com/materia' )
    return data
}
