import axios from 'axios';
//const url = 'http://localhost:8000/';
const url = 'https://reserva-aulas-stage.herokuapp.com/';
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
