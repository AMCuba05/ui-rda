import axios from 'axios';
import {url} from "./url";

export const obtenerPeriodos = async () => {
    const { data } = await axios.get(url + `periodo` )
    return data
}
