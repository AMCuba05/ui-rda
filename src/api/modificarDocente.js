import axios from 'axios';
import { url } from './url';

//const url = 'http://localhost:8000/';
//const url = 'https://reserva-aulas-stage.herokuapp.com/';
export const actualizarDocente = async (id, email, cel, password) => {

    const { data } = await axios.put(url + `docente/actualizar/${id}` , {
        email:email,
        celular:cel+"",
        contrasenia:password
    });
    console.log(data);
    return data; 
}
