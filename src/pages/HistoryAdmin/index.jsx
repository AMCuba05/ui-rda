import { TitlePage } from "../../components/TitlePage";
import { BoldText } from "../../components/BoldText";
import { ColoredTag } from "../../components/ColoredTag";
import {CommonText} from "../../components/CommonText";
import FilterIcon from "../../assets/svg/filter.svg";
import "./styles.css";
import { obtenerHistorial } from "../../api/historialDocente";
import {useNavigate} from "react-router-dom";
import {useEffect, useState} from "react";

export const HistoryAdmin = () => {
  const navigate = useNavigate()
  const [solicitudes, setHistorial] = useState([])
  const goToOptions = (item) => {
      localStorage.setItem('pendingItem', JSON.stringify(item))
      navigate('/admin/reserva', {replace: true});
    }

  const getHistorial = async () => {
      const data = await obtenerHistorial(sessionStorage.user.id)
      console.log(data);
      setHistorial(data)
    }

    useEffect(() => {
        void getHistorial()
    },[])

  return (
    <div className={"history-admin-page"}>
      <div className={"history-admin-title"}>
        <TitlePage title={"Historial de reservas"} />
        <div className={"history-admin-title-filter"}>
        <img src={FilterIcon} alt="" />
        <span>Filtrar</span>

        </div>

      </div>
      <div className={"table-history-header"}>
        <div className={"align-flex"}>
          <BoldText white={true}>N°</BoldText>
        </div>
        <div className={"align-flex6"}>
          <BoldText white={true}>Docente(s)</BoldText>

        </div>
        <div className={"align-flex7"}>
          <BoldText white={true}>Aula</BoldText>
        </div>
        <div className={"align-flex5"}>
          <BoldText white={true}>Cantidad</BoldText>
        </div>
        <div className={"align-flex5"}>
          <BoldText white={true}>Horario</BoldText>
        </div>
        <div className={"align-flex5"}>
          <BoldText white={true}>Fecha</BoldText>
        </div>
        <div className={"align-flex5"}>
          <BoldText white={true}>Motivo</BoldText>
        </div>
        <div className={"align-flex5"}>
          <BoldText white={true}>Estado</BoldText>
        </div>

      </div>
      {solicitudes.map((item, index)  => <div className={"table-history-item"}>
      <div className={"align-flex"}>
                <BoldText >{index + 1}</BoldText>
            </div>
            <div className={"align-flex6 history-docents"}>
                {item.docentes.map( (name, index) => index === 0 ?  <BoldText >{name.nombreDocente}</BoldText> : <CommonText >{name.nombreDocente}</CommonText>)}
            </div>
            <div className={"history-class-list  align-flex7"}>
                {item.aulas.map( (aula, index) => <ColoredTag>{aula.nombre}</ColoredTag>)}
            </div>
            <div className={"align-flex5"}>
                <ColoredTag>{item.numero_estimado} est.</ColoredTag>
            </div>
            <div className={"align-flex5"}>
                <ColoredTag>{item.periodos[0].hora_inicio.substring(0,5)} - {item.periodos[0].hora_fin.substring(0,5)}</ColoredTag>
            </div>
            <div className={"align-flex5"}>
                <ColoredTag>{item.fecha}</ColoredTag>
            </div>
            <div className={"align-flex5"}>
                <ColoredTag>motivo</ColoredTag>
            </div>
            <div className={"align-flex5"}>
              {(item.estado === 'ACEPTADO' ? <ColoredTag state={1}>{item.estado}</ColoredTag>:
                item.estado === 'pendiente' ? <ColoredTag state={2}>{item.estado}</ColoredTag>:
                <ColoredTag state={3}>{item.estado}</ColoredTag>)}
            
            </div>
            </div>)}
      <div className={"table-history-item"}>
      <div className={"align-flex"}>
          <BoldText> 1</BoldText>
        </div>
        <div className={"align-flex6 history-docents"}>
          <BoldText> Esteban Quito R. </BoldText>
          <span>Leticia Blanco</span>
          <span>Vladimir Costas</span>
        </div>
        <div className={"history-class-list  align-flex7"}>
          <ColoredTag> AUDITORIO</ColoredTag>
          <ColoredTag> 696</ColoredTag>
          <ColoredTag> 696</ColoredTag>

        </div>
        <div className={"align-flex5"}>
          <ColoredTag> 900 est.</ColoredTag>
        </div>
        <div className={"align-flex5"}>
          <ColoredTag> 15:45 -17:15</ColoredTag>
        </div>
        <div className={"align-flex5"}>
          <ColoredTag> 20/05/2022</ColoredTag>
        </div>
        <div className={"align-flex5"}>
          <ColoredTag> Examen</ColoredTag>
        </div>
        <div className={"align-flex5"}>
          <ColoredTag state={3}> Rechazado</ColoredTag>
        </div>
      </div>
    </div>
  );
};
