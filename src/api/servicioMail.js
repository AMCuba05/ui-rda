import axios from 'axios';

export const enviarMailPersonalizado = async (email) => {
    console.log(email);
    const { data } = await axios.post('https://reserva-aulas-stage.herokuapp.com/mail/notificacionPersonalizada',email)
    return data
}
export const enviarMailAceptacion = async (email) => {
    console.log(email);
    const { data } = await axios.post('https://reserva-aulas-stage.herokuapp.com/mail/notificarAceptacion',email)
    return data
}
export const enviarMailRechazo = async (email) => {
    console.log(email);
    const { data } = await axios.post('https://reserva-aulas-stage.herokuapp.com/mail/notificarRechazo',email)
    return data
}
