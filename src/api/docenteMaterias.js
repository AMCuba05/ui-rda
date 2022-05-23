import axios from 'axios';

export const docenteMaterias = async (id) => {
    const { data } = await axios.get(`https://reserva-aulas-stage.herokuapp.com/docente/materias/${id}` )
    return data
}
