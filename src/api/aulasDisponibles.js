import axios from 'axios';

//const url = 'http://localhost:8000/';
const url = 'https://reserva-aulas-stage.herokuapp.com/';
export const obtenerAulasDisponibles = async (date) => {
    const { data } = await axios.post(url + 'aula/disponibles' , {
        fecha: date
    })
    return data
}
