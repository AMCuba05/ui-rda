import axios from 'axios';
import { url } from './url';

export const currentUser = async (token) => {
    const { data } = await axios.get(url + `auth/meDocente`, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    } )
    return data
}

export const currentUserAdmin = async (token) => {
    const { data } = await axios.get(url + `auth/meAdmin`, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    } )
    return data
}
