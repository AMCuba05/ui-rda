import axios from "axios";
import {url} from "./url";

export const estadoAula = async (params) => {
    const body = {
        fecha: params.fecha,
        periodoIni: await obtenerPeriodo(params.periodo),
        nombreAula: params.nombreAula,
        ubicacionAula: params.ubicacionAula
    }
    const { data } = await axios.post(url + 'aula/estado-aula' , body)
    return data.estadoAula === 'LIBRE'
}

export const obtenerPeriodo = async (id) => {
    const { data } = await axios.get(url + `periodo/${id}`)
    return data.hora_inicio
}
