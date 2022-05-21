import './styles.css'
import garbageIcon from '../../assets/svg/redGarbageIcom.svg'
import {BoldText} from "../../components/BoldText";
import {ColoredTag} from "../../components/ColoredTag";
import {CommonButton} from "../../components/Buttons/Common";
import {AddButton} from "../../components/Buttons/AddButton";
import {Classroom} from "../../components/Classroom";
import {useEffect, useState} from "react";
import {obtenerAulasDisponibles} from "../../api/aulasDisponibles";
import {useSelector} from "react-redux";


export const Home = () => {

    const [aulas, setAulas] = useState()
    const [reserva, setReserva] = useState([])
    const today = new Date()
    const data = useSelector(state => state.request)
    console.log(data)

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
        <div className={'pending-title'}>
            <div>
                Aulas sin reserva actualmente
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
                    <ColoredTag>{item.hora_inicio} - {item.hora_fin}</ColoredTag>
                    {console.log(item)}
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
                        name={`${item.nombre} de ${item.hora_inicio.substring(0,5)} a ${item.hora_fin.substring(0,5)}`}
                        icon={garbageIcon}
                        onClick={() => removerReserva(item) }/>
                )}
            </div>
            <div className={'table-suggest-footer-items'}>
                <CommonButton title={'Iniciar reserva'} />
            </div>
        </div>
    </div>
}
