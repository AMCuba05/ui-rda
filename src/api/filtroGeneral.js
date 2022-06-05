import axios from 'axios';
//const url = 'http://localhost:8000/';
const url = 'https://reserva-aulas-stage.herokuapp.com/';
export const filtroGeneral = async (params) => {
    let formatoPeriodo
    const periodo = params.periodos.split(' ')[0]
    if (periodo.length < 6 ) {
        formatoPeriodo = `0${periodo}:00`
    } else {
        formatoPeriodo = `${periodo}:00`
    }
    console.log(params, formatoPeriodo)
    const { data } = await axios.post(url + 'aula/general', {
        fecha: params.fecha,
        periodos: [formatoPeriodo],
        capacidadMin: parseInt(params.capacidadMin),
        capacidadMax: parseInt(params.capacidadMax),
        area: params.area
    } )
    return data
}
