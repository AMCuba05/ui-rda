import axios from 'axios';

export const loginDocentes = async (codSis, contrasenia) => {
    const { data } = await axios.post('https://reserva-aulas-stage.herokuapp.com/auth/loginDocente', {
        cod_SIS: parseInt(codSis),
        contrasenia: contrasenia
    } )
    console.log('login data:',data)
    return data
}
