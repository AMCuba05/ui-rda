import { TitlePage } from "../../components/TitlePage";
import { BoldText } from "../../components/BoldText";
import { ColoredTag } from "../../components/ColoredTag";
import {CommonText} from "../../components/CommonText";
import FilterIcon from "../../assets/svg/filter.svg";
import redGarbageIcom from "../../assets/svg/redGarbageIcom.svg";
import "./styles.css";
import { obtenerHistorial } from "../../api/historialDocente";
import {eliminarSolicitud} from "../../api/eliminarSolicitud"
import {useNavigate} from "react-router-dom";
import {useEffect, useState} from "react";
import { WarningReservationCancelation } from "../../components/WarningReservationCancelation";

export const HistoryAdmin = () => {
  const navigate = useNavigate()
  const [solicitudes, setHistorial] = useState([])
  const goToOptions = (item) => {
      localStorage.setItem('pendingItem', JSON.stringify(item))
      navigate('/admin/reserva', {replace: true});
    }

  const eliminar = async (item) => {
    if(item.estado == "ACEPTADO" || item.estado == "PENDIENTE"){
      const data = await eliminarSolicitud(item.solicitud[0].id);
    }
  }

  const getHistorial = async () => {
      const data = await obtenerHistorial(JSON.parse(sessionStorage.user).id)
      setHistorial(data)
    }

    useEffect(() => {
        void getHistorial()
    },[])

  const [openModalW, setOpenModalW ] = useState(false);
  const handleOpenModalW = () => {
    setOpenModalW(!openModalW);
  }
  return (
    <div className={"history-admin-page"}>
      
      <div className={"history-admin-title"}>
        <TitlePage title={"Historial de reservas"} />
        <div className={"history-admin-title-filter"}>

        </div>

      </div>
      <div className={"table-history-header"}>
        <div className={"align-flex"}>
          <BoldText white={true}>N°</BoldText>
        </div>
        <div className={"align-flex6"}>
          <BoldText white={true}>Docente(s)</BoldText>

        </div>
        <div className={"align-flex6"}>
          <BoldText white={true}>Aula</BoldText>
        </div>
        <div className={"align-flex5"}>
          <BoldText white={true}>Cantidad</BoldText>
        </div>
        <div className={"history-admin-hours"}>
          <BoldText white={true}>Horario</BoldText>
        </div>
        <div className={"history-admin-hours"}>
          <BoldText white={true}>Fecha</BoldText>
        </div>
        <div className={"align-flex5"}>
          <BoldText white={true}>Motivo</BoldText>
        </div>
        <div className={"align-flex5"}>
          <BoldText white={true}>Estado</BoldText>
        </div>
        <div className={"align-flex2"}>
          <BoldText white={true}>Anular</BoldText>
        </div>
      </div>
      {solicitudes.map((item, index)  => <div className={"table-history-item"}>
      <WarningReservationCancelation openModel={openModalW} handleOpen={handleOpenModalW} onSubmit={eliminar} item={item}/>
      <div className={"align-flex"}>
                <BoldText >{index + 1}</BoldText>
            </div>
            <div className={"align-flex6 history-docents"}>
                {item.docentes.map( (name, index) => index === 0 ?  <BoldText >{name.nombreDocente}</BoldText> : <CommonText >{name.nombreDocente}</CommonText>)}
            </div>
            <div className={"history-class-list  align-flex6"}>
                {item.aulas.map( (aula, index) => <ColoredTag>{aula.nombre}</ColoredTag>)}
            </div>
            <div className={"align-flex5"}>
                <ColoredTag>{item.numero_estimado} est.</ColoredTag>
            </div>
            <div className={"history-admin-hours"}>
            {item.periodos.map((horario,index) =>
                <ColoredTag>{horario.hora_inicio.substring(0,5)} - {horario.hora_fin.substring(0,5)}</ColoredTag>)}


            </div>
            <div className={"history-admin-hours"}>
                <ColoredTag>{item.fecha}</ColoredTag>
            </div>
            <div className={"align-flex5"}>
                <ColoredTag>{item.motivo[0].justificacion}</ColoredTag>
            </div>
            <div className={"align-flex5"}>
              {(item.estado === 'ACEPTADO' ? <ColoredTag state={1}>{item.estado}</ColoredTag>:
                item.estado === 'PENDIENTE' ? <ColoredTag state={2}>{item.estado}</ColoredTag>:
                <ColoredTag state={3}>{item.estado}</ColoredTag>)}

            </div>
            <div className={"align-flex1-5"}>
              <img src={redGarbageIcom} alt="" className={"icono-basurero"} onClick={handleOpenModalW} />
            </div>
            </div>)}
    </div>
  );
};
