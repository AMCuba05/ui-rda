import axios from 'axios';
import { url } from './url';

//const url = 'http://localhost:8000/';
//const url = 'https://reserva-aulas-stage.herokuapp.com/';
export const actualizarAula = async (aulasId, datosReservaId) => {
    const { data } = await axios.put(url + `datos-reserva/actualizarAulas/${datosReservaId}` ,{
        aulasId: aulasId
    })
    return data
}
