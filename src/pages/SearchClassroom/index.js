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
import {setLoading} from "../../redux/reducers/loading";
import {nombreAulas} from "../../api/aulasDisponibles";

export const SearchClassroom = () => {
    const {data} = useSelector((state) => state.filtered)
    const [reserva, setReserva] = useState([])
    const today = new Date()
    const navigate = useNavigate()
    const dispatch = useDispatch()


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
                    <div className={'table-suggest-Aula-docente'} >
                        <BoldText white={true}>Aula</BoldText>
                    </div>
                    <div className={'table-suggest-Cantidad-docente'}>
                        <BoldText white={true}>Capacidad</BoldText>
                    </div>
                    <div className={'table-suggest-Lugar-docente'}>
                        <BoldText white={true}>Lugar</BoldText>
                    </div>
                    <div className={'table-suggest-Estado-docente'}>
                        <BoldText white={true}>Estado</BoldText>
                    </div>
                </div> : <>
                    <div className={'table-header'}>
                        <div className={'table-suggest-Aula-docente'} >
                            <BoldText white={true}>Aula</BoldText>
                        </div>
                        <div className={'table-suggest-Cantidad-docente'}>
                            <BoldText white={true}>Capacidad</BoldText>
                        </div>
                        <div className={'table-suggest-Lugar-docente'}>
                            <BoldText white={true}>Lugar</BoldText>
                        </div>
                        <div className={'table-suggest-Estado-docente'}>
                            <BoldText white={true}>Estado</BoldText>
                        </div>
                    </div>
                    <CommonText>No hay Aulas para mostrar</CommonText>
                </>
        }

        { data.map((item, index)  => {
            return(
                <div className={'table-suggest-item'}>
                    <div className={'table-suggest-Aula-docente'} >
                        <ColoredTag >{item.nombre}</ColoredTag>
                    </div>
                    <div className={'table-suggest-Cantidad-docente'}>
                        <ColoredTag >{item.capacidad} estudiantes</ColoredTag>
                    </div>
                    <div className={'table-suggest-Lugar-docente'}>
                        <ColoredTag>{item.ubicacion}</ColoredTag>
                    </div>
                    <div className={'table-suggest-Estado-docente'}>
                        <ColoredTag state={'1'}>Disponible</ColoredTag>
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
