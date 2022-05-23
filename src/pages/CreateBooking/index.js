import './styles.css'
import garbageIcon from '../../assets/svg/redGarbageIcom.svg'
import {BoldText} from "../../components/BoldText";
import {ColoredTag} from "../../components/ColoredTag";
import {CommonButton} from "../../components/Buttons/Common";
import {AddButton} from "../../components/Buttons/AddButton";
import {Classroom} from "../../components/Classroom";
import {useEffect, useState} from "react";
import {obtenerAulasDisponibles} from "../../api/aulasDisponibles";
import {useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {setRequest} from "../../redux/reducers/crearSolicitud";
import {setMaterias} from "../../redux/reducers/materias";
import {docenteMaterias} from "../../api/docenteMaterias";
import {FormItemValueDynamic} from "../../components/FormItemValueDynamic";


export const CreateBooking = () => {

    const [aulas, setAulas] = useState()
    const [reserva, setReserva] = useState([])
    const today = new Date()
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const getAulas = async () => {
        const data = await obtenerAulasDisponibles(today.toISOString().substring(0,10))
        setAulas(data.slice(0,10))
    }

    const removerReserva = (item) => {
        const nuevaReserva = [...reserva]
        reserva.map( (itemReserva, index) => {
            if ( itemReserva === item ){
                nuevaReserva.splice(index, 1)
                setReserva(nuevaReserva)
            }
        })
    }

    const goToBooking = async () => {
        if (reserva.length > 0) {
            const user = JSON.parse(sessionStorage.getItem('user'))
            const data = await docenteMaterias(user.id)
            dispatch(setMaterias(data))
            dispatch(setRequest(reserva))
            navigate('/reservar', {replace: true})
        }
    }

    const agregarReserva = (item) => {
        const nuevaReserva = [...reserva]
        if ( !nuevaReserva.includes(item) ) {
            nuevaReserva.push(item)
            setReserva(nuevaReserva)
        }
    }

    useEffect(()=> {
        void  getAulas()
    }, [])

    return<div>
        <div className={'create-booking-title'}>
            <div>
                Para empezar la reserva puede escoger
                una de las siguientes aulas o busca un aula
            </div>
        </div>
        <div className={'table-header'}>
            <div className={'table-suggest-Aula'} >
                <BoldText white={true}>Aula</BoldText>
            </div>
            <div className={'table-suggest-Cantidad'}>
                <BoldText white={true}>Capacidad</BoldText>
            </div>
            <div className={'table-suggest-Horario'}>
                <BoldText white={true}>Horario</BoldText>
            </div>
            <div className={'table-suggest-Fecha'}>
                <BoldText white={true}>Fecha</BoldText>
            </div>
            <div className={'table-suggest-Lugar'}>
                <BoldText white={true}>Lugar</BoldText>
            </div>
            <div className={'table-suggest-Estado'}>
                <BoldText white={true}>Estado</BoldText>
            </div>
            <div className={'table-suggest-vacio'}>
                <BoldText white={true}></BoldText>
            </div>
        </div>
        {aulas ? aulas.map((item, index)  => {
            return(
                <div className={'table-suggest-item'}>
                    <div className={'table-suggest-Aula'} >
                        <ColoredTag >{item.nombre}</ColoredTag>
                    </div>
                    <div className={'table-suggest-Cantidad'}>
                        <ColoredTag >{item.capacidad} estudiantes</ColoredTag>
                    </div>
                    <div className={'table-suggest-Horario'}>
                        <FormItemValueDynamic options={['6:45 - 8:15', '8:15 - 9:45', '9:45 - 11:15',
                            '11:15 - 12:45', '12:45 - 14:15', '14:15 - 15:45', '15:45 - 17:15', '17:15 - 18:45',
                            '18:45 - 20:15', '20:15 - 21:45']}/>
                    </div>
                    <div className={'table-suggest-Fecha'}>
                        <ColoredTag>{today.toISOString().substring(0,10)}</ColoredTag>
                    </div>
                    <div className={'table-suggest-Lugar'}>
                        <ColoredTag>{item.ubicacion}</ColoredTag>
                    </div>
                    <div className={'table-suggest-Estado'}>
                        <ColoredTag state={'free'}>Disponible</ColoredTag>
                    </div>
                    <div className={'table-suggest-vacio'}>
                        <AddButton onClick={() => agregarReserva(item)} title={'Añadir'}/>
                    </div>
                </div>
            )}
        ) : null}
        <div className={'table-suggest-footer'}>
            <div className={'table-suggest-footer-items'} >
                <BoldText>Aulas Seleccionadas: </BoldText>
                {reserva.map((item)=>
                    <Classroom
                        name={`${item.nombre}`}
                        icon={garbageIcon}
                        onClick={() => removerReserva(item) }/>
                )}
            </div>
            <div className={'table-suggest-footer-items'}>
                <CommonButton title={'Iniciar reserva'} onClick={goToBooking} />
            </div>
        </div>
    </div>
}
