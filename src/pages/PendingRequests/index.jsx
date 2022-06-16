import './styles.css'
import {CommonText} from "../../components/CommonText";
import {BoldText} from "../../components/BoldText";
import {ColoredTag} from "../../components/ColoredTag";
import ToggleButton from "../../components/ToogleSwitchFiltros"
import {CommonButton} from "../../components/Buttons/Common";
import {WarningButton} from "../../components/Buttons/Warning";
import {BlackButton} from "../../components/Buttons/BlackButton";
import {useNavigate} from "react-router-dom";
import {useEffect, useState} from "react";
import {obtenerPendientes, obtenerAntiguas, obtenerProximas} from "../../api/obtenerPendientes";

export const PendingRequests = () => {
  const navigate = useNavigate()
  const [aulas, setAulas] = useState([])
  const goToOptions = (item) => {
      localStorage.setItem('pendingItem', JSON.stringify(item))
      navigate('/admin/reserva', {replace: true});
    }

    const getAulas = async () => {
      const data = await obtenerPendientes()
      setAulas(data)
    }
    const getAulasProximas = async () => {
        const data = await obtenerProximas()
        setAulas(data)
    }
    const getAulasAntiguas = async () => {
        const data = await obtenerAntiguas()
        setAulas(data)
    }
    const drawState = (state) => {
      switch (state){
          case 'tiene una solicitud':
            return 2
          case 'libre':
            return 1
          default:
            return 3
      }
    }
    useEffect(() => {
        void getAulasProximas()
        void getAulas()
    },[])

    return<div className={'pending-page'}>
        <div className={'pending-title'}>
            <div>
                Lista de Solicitudes Pendientes
                <div className={'toggle-texto'}>
                Proximidad
                < ToggleButton onChange={state => state === true ?getAulasAntiguas():getAulasProximas()}/>

                Antiguedad
                </div>
            </div>

        </div>
        <div className={'table-header'}>
            <div className={'table-N'} >
                <BoldText white={true}>N°</BoldText>
            </div>
            <div className={'table-Docente'}>
                <BoldText white={true}>Docente(s)</BoldText>
            </div>
            <div className={'table-Aula'}>
                <BoldText white={true}>Aula</BoldText>
            </div>
            <div className={'table-Cantidad'}>
                <BoldText white={true}>Cantidad</BoldText>
            </div>
            <div className={'table-Horario'}>
                <BoldText white={true}>Horario</BoldText>
            </div>
            <div className={'table-Fecha'}>
                <BoldText white={true}>Fecha</BoldText>
            </div>
            <div className={'table-Motivo'}>
                <BoldText white={true}>Motivo</BoldText>
            </div>
            <div className={'table-Respuesta'}>
                <BoldText white={true}>Respuesta</BoldText>
            </div>
        </div>
        {aulas.map((item, index)  => <div className={'table-item'}>
            <div className={'table-N'} >
                <BoldText >{index + 1}</BoldText>
            </div>
            <div className={'table-Docente'}>
                {item.docentes.map( (name, index) => index === 0 ?  <BoldText >{name.nombre}</BoldText> : <CommonText >{name.nombre}</CommonText>)}
            </div>
            <div className={'table-Aula'}>
                {item.aulas.map( (aula) => <ColoredTag state={aula.estado ? drawState(aula.estado) : 3} >{aula.nombre}</ColoredTag>)}
            </div>
            <div className={'table-Cantidad'}>
                <ColoredTag>{item.numero_estimado} est.</ColoredTag>
            </div>
            <div className={'table-Horario'}>
            {item.horarios.map((horario,index) =>
                <ColoredTag>{horario.hora_inicio.substring(0,5)} - {horario.hora_fin.substring(0,5)}</ColoredTag>)}
            </div>
            <div className={'table-Fecha'}>
                <ColoredTag>{item.fecha}</ColoredTag>
            </div>
            <div className={'table-Motivo'}>
                <ColoredTag>{item.justificaciones[0].justificacion}</ColoredTag>
            </div>
            <div className={'table-Respuesta'}>
                <BlackButton title={'Opciones'} onClick={() => goToOptions(item)}/>
            </div>
            </div>)}
    </div>
}
