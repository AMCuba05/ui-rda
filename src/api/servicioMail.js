import axios from 'axios';

//const url = 'https://localhost:8000/';
const url = 'https://reserva-aulas-stage.herokuapp.com/';
export const enviarMailPersonalizado = async (email) => {
    console.log(email);
    const { data } = await axios.post(url + 'mail/notificacionPersonalizada',email)
    return data
}
export const enviarMailAceptacion = async (email) => {
    console.log(email);
    const { data } = await axios.post(url + 'mail/notificarAceptacion',email)
    return data
}
export const enviarMailRechazo = async (email) => {
    console.log(email);
    const { data } = await axios.post(url + 'mail/notificarRechazo',email)
    return data
}
