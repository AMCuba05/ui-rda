import axios from 'axios';

export const currentUser = async (token) => {
    const { data } = await axios.get(`https://reserva-aulas-stage.herokuapp.com/auth/meDocente`, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    } )
    return data
}

export const currentUserAdmin = async (token) => {
    const { data } = await axios.get(`https://reserva-aulas-stage.herokuapp.com/auth/meAdmin`, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    } )
    return data
}
