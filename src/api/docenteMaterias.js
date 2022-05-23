import axios from 'axios';

export const docenteMaterias = async (id) => {
    const { data } = await axios.get(`http://reserva-aulas-stage.herokuapp.com/docente/materias/${id}` )
    return data
}
