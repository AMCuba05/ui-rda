import axios from 'axios';

export const loginDocentes = async (codSis, contrasenia) => {
    console.log(codSis, contrasenia)
    const { data } = await axios.post('http://reserva-aulas-stage.herokuapp.com/auth/loginDocente', {
        cod_SIS: parseInt(codSis),
        contrasenia: contrasenia
    } )
    return data
}
