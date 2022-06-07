import axios from 'axios';

import { url } from './url';
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
