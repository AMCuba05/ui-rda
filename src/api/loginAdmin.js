import axios from 'axios';

import { url } from './url';
export const loginAdmin = async (codSis, contrasenia) => {
    const { data } = await axios.post(url + 'auth/loginAdmin', {
        cod_SIS: parseInt(codSis),
        contrasenia: contrasenia
    } )
    return data
}
