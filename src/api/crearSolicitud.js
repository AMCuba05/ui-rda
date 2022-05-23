import axios from 'axios';

export const crearSolicitud = async (params) => {
    console.log(params)
    const { data } = await axios.post('https://reserva-aulas-stage.herokuapp.com/solicitud-reserva' , params)
    return data
}
