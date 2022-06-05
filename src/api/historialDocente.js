import axios from 'axios';

//const url = 'http://localhost:8000/';
const url = 'https://reserva-aulas-stage.herokuapp.com/';
export const obtenerHistorial = async (id) => {
    const { data } = await axios.get(url + `solicitud-reserva/docente-solicitud/${id}` )
    return data
}