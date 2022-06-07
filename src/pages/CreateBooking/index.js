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
import {FormTitle} from "../../components/FormTitle";
import {CommonText} from "../../components/CommonText";
import {BackButton} from "../../components/Buttons/BackButton";
import {CommonInput} from "../../components/Inputs/Common";
import {crearSolicitud} from "../../api/crearSolicitud";
import { ModalSuccess } from '../../components/Modals/ModalSuccess';
import { ModalWarning } from '../../components/Modals/ModalWarning';

export const CreateBooking = () => {

    const [aulas, setAulas] = useState()
    const [reserva, setReserva] = useState([])
    const [cantidad, setCantidad] = useState(0)
    const [estimado, setEstimado] = useState(0)
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

    useEffect(() => {
        let sum = 0
        reserva.forEach(item => {
            sum += item.capacidad
        })
        setCantidad(sum)
    }, [reserva])

    const goToCreate = () => {
        navigate("/crear", { replace: true });
    };

    const onSubmit = async () => {
        try {
            const data = JSON.parse(sessionStorage.getItem('solicitud'))
            const params = {
                numero_estimado: parseInt(estimado),
                fecha: data.fecha,
                aulasId: reserva.flatMap(item => item.idAula),
                gruposId: data.gruposId,
                justificacionesLista: data.justificacionesLista,
                periodosId: data.periodosId,
            };
            console.log(params)
            await crearSolicitud(params)
            alert('Solicitud de Reserva enviada correctamente')
            navigate("/", { replace: true });
        } catch (e) {
            alert('Ha ocurrido un error')
        }
    };

    const [openModalS, setOpenModalS ] = useState(false);
    const handleOpenModalS = () => {
      setOpenModalS(!openModalS);
    }

    const [openModalW, setOpenModalW ] = useState(false);
    const handleOpenModalW = () => {
      setOpenModalW(!openModalW);
    }

    return<div>
        <div className={'create-booking-title'}>
            <ModalSuccess openModel={openModalS} handleOpen={handleOpenModalS} onSubmit={onSubmit} dataClassrooms={reserva}/>
            <ModalWarning openModel={openModalW} handleOpen={handleOpenModalW} dataClassrooms={reserva} />
            <BackButton title={"Atras"} onClick={goToCreate} />
            <div className={"form-title-column"}>
                <FormTitle name={"Crear Reserva:"} />
                <text className={'book-subtitle'}>Selección de aula</text>
                <CommonText>A continuación indique la cantidad de estudiantes para la que necesita su reserva.</CommonText>
                <CommonText>El sistema le mostrara aulas basándose en la capacidad asignada, que sumen al total de la capasidad que necesite en caso sea necesario.</CommonText>
                <br/>
                <CommonText>Si necesita un aula en especifico puede ingresarla, tenga en cuenta que si el aula que busca esta reservada por otro docente</CommonText>
                <CommonText>esta se mostrara como: ocupada o no disponible para una reserva.</CommonText>
            </div>
        </div>
        <div className={'table-top-header'}>
            <div className={'table-top-items'}>
                <CommonInput input={estimado} inputChange={setEstimado} label={'Indique la capacidad total que espera reservar'}/>
                <CommonInput label={'Buscar un aula o area en especifico:'}/>
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
                <CommonButton title={'Confirmar Reserva'} onClick={handleOpenModalS} />
            </div>
        </div>
        <div className={'table-suggest-footer'}>
            <div className={'table-suggest-footer-items'} >
                <BoldText>Capacidad seleccionada Total: </BoldText>
                <ColoredTag>{cantidad} Estudiantes</ColoredTag>
            </div>
        </div>
    </div>
}
