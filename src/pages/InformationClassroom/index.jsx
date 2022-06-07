import './styles.css'
import {CommonText} from "../../components/CommonText";
import {BoldText} from "../../components/BoldText";
import {ColoredTag} from "../../components/ColoredTag";
import {Search} from "../../components/Search";
import { TitlePage } from '../../components/TitlePage';
import {CommonButton} from "../../components/Buttons/Common";
import {WarningButton} from "../../components/Buttons/Warning";
import {BlackButton} from "../../components/Buttons/BlackButton";
import {useNavigate} from "react-router-dom";
import {useEffect, useState} from "react";
import {obtenerPendientes} from "../../api/obtenerPendientes";
import { obtenerTodasAulas } from '../../api/aulasDisponibles';

export const InformationClassroom = () => {
  const navigate = useNavigate()
  const [aulas, setAulas] = useState([])
  const goToOptions = (item) => {
      localStorage.setItem('pendingItem', JSON.stringify(item))
      navigate('/admin/reserva', {replace: true});
    }

    const getAulas = async () => {
      const data = await obtenerTodasAulas()
      console.log(data);
      setAulas(data)
    }

    useEffect(() => {
        void getAulas()
    },[])

    return<div className={'pending-page'}>
        
        <div>
            <TitlePage title={"Lista de Aula(s) Disponibles:"}/>
                
            
        </div>
        <div className = {'margen'}>
        <Search/>  
        </div>
        
        <div className = {'margen'}>
            <span >
            Busca la informacion de las aulas que te gustaria reservar, podras ver la disponibilidad del aula, su capacidad y lugar donde se encuentren.
            </span>
        </div>
        
        <div className={'table-header'}>
            
            <div className={'table-Aula'}>
                <BoldText white={true}>Aula</BoldText>
            </div>
            <div className={'table-Cantidad'}>
                <BoldText white={true}>Capacidad</BoldText>
            </div>
            <div className={'table-Fecha'}>
                <BoldText white={true}>lugar</BoldText>
            </div>
            <div className={'table-Respuesta'}>
                <BoldText white={true}>Estado</BoldText>
            </div>
        </div>
        {aulas.map((item, index)  => <div className={'table-item'}>
            <div className={'table-Aula'}>
                <ColoredTag >{item.nombre}</ColoredTag>
            </div>
            <div className={'table-Cantidad'}>
                <ColoredTag>{item.capacidad} est.</ColoredTag>
            </div>
            <div className={'table-Motivo'}>
                <ColoredTag>{item.ubicacion}</ColoredTag>
            </div>
            <div className={'table-Motivo'}>
            {(item.disponible_para_uso === 1 ? <ColoredTag state={1}>Disponible</ColoredTag>:
                <ColoredTag state={3}>Fuera de Uso</ColoredTag>)}
            </div>
            </div>)}
            
    </div>
}
