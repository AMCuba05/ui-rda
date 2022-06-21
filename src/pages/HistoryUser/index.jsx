import { TitlePage } from "../../components/TitlePage";
import { BoldText } from "../../components/BoldText";
import { ColoredTag } from "../../components/ColoredTag";
import {CommonText} from "../../components/CommonText";
import redGarbageIcom from "../../assets/svg/redGarbageIcom.svg";
import FilterIcon from "../../assets/svg/filter.svg";

import { obtenerHistorial } from "../../api/historialDocente";
import {useNavigate} from "react-router-dom";
import {useEffect, useState} from "react";
import { ModalDelete } from "../../components/Modals/ModalDelete";
import {ModalMoreInfo} from "../../components/Modals/ModalMoreInfo";
import {setLoading} from "../../redux/reducers/loading";
import {useDispatch} from "react-redux";
import {eliminarSolicitud} from "../../api/eliminarSolicitud"
import "./styles.css";

export const HistoryUser = () => {
  const navigate = useNavigate()
  const [solicitudes, setHistorial] = useState([])
    const dispatch = useDispatch()
  const goToOptions = (item) => {
      localStorage.setItem('pendingItem', JSON.stringify(item))
      navigate('/admin/reserva', {replace: true});
    }

    const eliminar = async (item) => {
      dispatch(setLoading(true))
      try{
        const data = await eliminarSolicitud(item);
        alert('Solicitud de Reserva eliminada correctamente')
        handleOpenModalW();
      }catch(e){
        alert('La Solicitud de Reserva no se pudo eliminar')
      }
      dispatch(setLoading(false))

    }

  const getHistorial = async () => {
      dispatch(setLoading(true))
      const data = await obtenerHistorial(JSON.parse(sessionStorage.user).id)
      setHistorial(data)
      dispatch(setLoading(false))
    }

    const [openModalW, setOpenModalW ] = useState(false);

    const handleOpenModalW = () => {
    setOpenModalW(!openModalW);
    }

    const [dataForModal, setDataForModal] = useState([]);
    const handleDataForModal = (newData) => {
      setDataForModal(newData);
    }

    const [itemDelete, setItemdDelete] = useState('');
    const handleItemDelete = (newItem) => {
      setItemdDelete(newItem);
    }

    useEffect(() => {
        void getHistorial()
    },[])

  return (
    <div className={"history-user-page"}>
      <ModalDelete openModel={openModalW} handleOpen={handleOpenModalW} dataClassrooms={dataForModal} onSubmit={() => eliminar(itemDelete)}/>
      <ModalMoreInfo openModel={false}/>
      <div className={"history-user-title"}>
        <TitlePage title={"Historial de reservas"} />
        <div className={"history-user-title-filter"}>
        <img src={FilterIcon} alt="" />
        <span>Filtrar</span>

        </div>

      </div>
      <div className={"table-history-user-header"}>
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
        <div className={"history-user-hours"}>
          <BoldText white={true}>Horario</BoldText>
        </div>
        <div className={"history-user-hours"}>
          <BoldText white={true}>Fecha</BoldText>
        </div>
        <div className={"align-flex5"}>
          <BoldText white={true}>Motivo</BoldText>
        </div>
        <div className={"align-flex5"}>
          <BoldText white={true}>Estado</BoldText>
        </div>
        <div className={"align-flex2"}>

        </div>
      </div>
      {solicitudes.map((item, index)  => <div className={"table-history-item"}>

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
            {(item.estado === "CANCELADO" ?
              null :
              <img src={redGarbageIcom} alt="" className={"icono-basurero"}
              onClick={() => {handleDataForModal(item.aulas);
                              handleItemDelete(item.solicitud[0].id);
                              handleOpenModalW() }} />
               )}


            </div>
            </div>)}
    </div>
  );
};
