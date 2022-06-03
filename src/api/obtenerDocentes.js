import axios from 'axios';

//const url = 'https://localhost:8000/';
const url = 'https://reserva-aulas-stage.herokuapp.com/';
export const obtenerDocentes = async (id) => {
    const { data } = await axios.get(url + `materia/docentes/${id}` )
    return data
}
