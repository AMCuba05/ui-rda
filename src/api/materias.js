import axios from 'axios';

export const obtenerTodosDocentes = async (id) => {
    const { data } = await axios.get(`https://reserva-aulas-stage.herokuapp.com/materia/docentes7${id}` )
    return data
}
