import {CommonText} from "../../components/CommonText";
import './styles.css'
import {BoldText} from "../../components/BoldText";
import {useDispatch, useSelector} from "react-redux";
import {ColoredTag} from "../../components/ColoredTag";
import {AddButton} from "../../components/Buttons/AddButton";
import {Classroom} from "../../components/Classroom";
import garbageIcon from "../../assets/svg/redGarbageIcom.svg";
import {CommonButton} from "../../components/Buttons/Common";
import {setRequest} from "../../redux/reducers/crearSolicitud";
import {useNavigate} from "react-router-dom";
import {useState} from "react";
import {FormItemValueDynamic} from "../../components/FormItemValueDynamic";
import {setMaterias} from "../../redux/reducers/materias";
import {docenteMaterias} from "../../api/docenteMaterias";
import {Title} from "../../components/Title/indes";
import {Search} from "../../components/Search";

export const SearchClassroom = () => {
    const {data} = useSelector((state) => state.filtered)
    const [reserva, setReserva] = useState([])
    const today = new Date()
    const navigate = useNavigate()
    const dispatch = useDispatch()


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

    return<div className={'search-classroom-container'}>
        <div className={"layout-title"}>
            <Title title={"Lista de Aulas disponibles:"} />
            <Search />
        </div>

        <CommonText>Busque el aula que le gustaria reservar, si tiene una busqueda en particular
            puede usar el boton Buscar Aula</CommonText>
        <br/>

        {
            data.length > 0 ?
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
                </div> : <>
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
                    <CommonText>No hay Aulas para mostrar</CommonText>
                </>
        }

        { data.map((item, index)  => {
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
                        <ColoredTag state={'1'}>Disponible</ColoredTag>
                    </div>
                    <div className={'table-suggest-vacio'}>

                    </div>
                </div>
            )}
        )}
        {
            data.length > 0?
                <div className={'table-suggest-footer'}>

                </div> : null
        }
    </div>
}
