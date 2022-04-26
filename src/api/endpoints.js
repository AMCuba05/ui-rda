import axios from 'axios'

export const crearSolicitud = async () => {
    const response = await axios.post('https://reserva-aulas-stage.herokuapp.com/solicitud-reserva/', {
        numero_estimado: 150,
        fecha: '2022-06-23',
        aulasId: [1],
        gruposId: [1],
        justificacionesLista: ["test1", "test2"],
        periodosId: [1]
    })
}
