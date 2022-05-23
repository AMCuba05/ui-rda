import axios from 'axios';

export const obtenerDocentes = async (id) => {
    const { data } = await axios.get(`https://reserva-aulas-stage.herokuapp.com/materia/docentes/${id}` )
    return data
}
