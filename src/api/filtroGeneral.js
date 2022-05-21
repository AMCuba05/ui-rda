import axios from 'axios';

export const filtroGeneral = async (data) => {
    const { data } = await axios.post('http://reserva-aulas-stage.herokuapp.com/aula/general', {
        fecha: data.fecha,
        periodos: data.periodos,
        capacidadMin: data.capacidadMin,
        capacidadMax: data.capacidadMax,
        area: data.area
    } )
    console.log(data)
    return data
}
