import axios from 'axios';

//const url = 'https://localhost:8000/';
const url = 'https://reserva-aulas-stage.herokuapp.com/';
export const crearSolicitud = async (params) => {
    console.log(params)
    const { data } = await axios.post(url + 'solicitud-reserva' , params)
    return data
}
