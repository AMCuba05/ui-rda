import axios from 'axios';

//const url = 'https://localhost:8000/';
const url = 'https://reserva-aulas-stage.herokuapp.com/';
export const obtenerPendientes = async (date) => {
    const { data } = await axios.get(url + 'solicitud-reserva/pendientes' , )
    return data
}
