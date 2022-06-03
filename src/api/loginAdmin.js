import axios from 'axios';

//const url = 'https://localhost:8000/';
const url = 'https://reserva-aulas-stage.herokuapp.com/';
export const loginAdmin = async (codSis, contrasenia) => {
    const { data } = await axios.post(url + 'auth/loginAdmin', {
        cod_SIS: parseInt(codSis),
        contrasenia: contrasenia
    } )
    console.log('login data:',data)
    return data
}
