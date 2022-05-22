import axios from 'axios';

export const filtroGeneral = async (params) => {
    const { data } = await axios.post('http://reserva-aulas-stage.herokuapp.com/aula/general', {
        fecha: params.fecha,
        periodos: params.periodos,
        capacidadMin: params.capacidadMin,
        capacidadMax: params.capacidadMax,
        area: params.area
    } )
    console.log(params)
    return params
}
