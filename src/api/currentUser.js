import axios from 'axios';

export const currentUser = async (token) => {
    const { data } = await axios.get(`http://reserva-aulas-stage.herokuapp.com/auth/meDocente`, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    } )
    return data
}
