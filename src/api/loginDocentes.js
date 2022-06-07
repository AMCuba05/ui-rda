import axios from 'axios';
import { url } from './url';

export const loginDocentes = async (codSis, contrasenia) => {
    const { data } = await axios.post(url+'auth/loginDocente', {
        cod_SIS: parseInt(codSis),
        contrasenia: contrasenia
    } )
    console.log('login data:',data)
    return data
}

export const registroDocentes = async (codSis, nombre, celular, email ,contrasenia) => {

    const { data } = await axios.post(url+'auth/activarDocente', {
        cod_SIS: parseInt(codSis),
        nombre : nombre,
        celular : parseInt(celular),
        email: email,
        contrasenia: contrasenia
    } )
    console.log('Register data:',data)
    return data
}

export const getSolicitudesCreacion = async (codSis, contrasenia) => {
    const { data } = await axios.get(url+'docente/cuentas')
    return data
}

export const aceptarSolicitudesCreacion = async (id) => {
    const { data } = await axios.put(url+`docente/verificar/${id}`)
    return data
}

export const rechazarSolicitudesCreacion = async (id) => {
    const { data } = await axios.put(url+`docente/verificar/${id}`)
    return data
}
