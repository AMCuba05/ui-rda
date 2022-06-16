import { FormTitle } from "../../components/FormTitle";
import { Classroom } from "../../components/Classroom";
import { FormItemLabel } from "../../components/FormItemLabel";
import { FormItemValue } from "../../components/FormItemValue";
import { CommonButton } from "../../components/Buttons/Common";
import { WarningButton } from "../../components/Buttons/Warning";
import "./styles.css";
import {useEffect, useState} from "react";
import { ColoredTag } from "../../components/ColoredTag";
import garbageIcon from "../../assets/svg/redGarbageIcom.svg";
import {BackButton} from "../../components/Buttons/BackButton";
import {useNavigate} from "react-router-dom";
import {aceptarReserva, rechazarReserva} from "../../api/reserva";
import {enviarMailRechazo} from "../../api/servicioMail";
import { ModalSuccess } from "../../components/Modals/ModalSuccess";
import { ModalWarning } from "../../components/Modals/ModalWarning";
import { ModalReject } from "../../components/Modals/ModalReject";
import {obtenerMateriaDatosReserva} from "../../api/docenteMaterias";

export const Request = () => {
  const data = JSON.parse(localStorage.getItem('pendingItem'))
  const [materia, setMateria] = useState('')
  const [conflictos, setConflictos] = useState([])

  useEffect(()=> {
    void getMateria()
    searchConflicts()
  },[])

  const getMateria = async () => {
    const res = await obtenerMateriaDatosReserva(data.solicitud.datos_reserva_id)
    setMateria(res.nombre)
  }
  const onReject = async () => {
    try {
      await rechazarReserva(data.solicitud.id)
      alert('Se rechazó la solicitud de reserva')
      navigate('/admin/pendientes', {replace: true})
      //await enviarMailRechazo(data.docentes[0].email)
    } catch (e) {
      alert('Algo salió mal intentalo más tarde')
    }
  }

  const searchConflicts = () => {
    let newConflictos = []
    data.conflictos.map(item => {
      if(item.estado != 'libre'){
        newConflictos.push(item.nombreAula)
      }
    })
    setConflictos(newConflictos)
  }

  const onAccept = async () => {
    try {
      await aceptarReserva(data.solicitud.id)
      alert('Se acepto la solicitud de reserva')

      //await enviarMailRechazo(data.docentes[0].email)
      navigate('/admin/pendientes', {replace: true})

    } catch (e) {
      alert('Algo salió mal intentalo más tarde')
    }
  }

  const [openSucces, setOpenSuccess] = useState(false);
  const handleOpenSucces = () => setOpenSuccess(!openSucces);

  const [openWarning, setOpenWarning] = useState(false);
  const handleOpenWarning = () => setOpenWarning(!openWarning);

  const [openReject, setOpenReject] = useState(false);
  const handleOpenReject = () => setOpenReject(!openReject);


  const navigate = useNavigate()
  return (
    <div className={"request-content"}>
      <ModalSuccess openModel={openSucces} handleOpen={handleOpenSucces} onSubmit={onAccept} dataClassrooms={data.aulas}/>
      <ModalWarning openModel={openWarning} handleOpen={handleOpenWarning} />
      <ModalReject openModel={openReject} handleOpen={handleOpenReject} onSubmit={onReject}/>
      <BackButton title={'Atras'} onClick={() => navigate('/admin/pendientes', {replace: true})} />
      <div className={"request-title"}>
        <FormTitle name={"Reserva de Aula(s):"} />
        {
          data.aulas.map( aula => <Classroom name={aula.nombre} /> )
        }
      </div>

      <div className={"request-items"}>
        <div className={"request-item-inputs"}>
          <div className={"request-item-inputs-left"}>
            <div className={"request-item-inputs-left-flex"}>
              <FormItemLabel label={"Fecha de Solicitud"} />
              <FormItemValue value={data.solicitud.fecha_creacion.substring(0,10)} />
            </div>
            <div className={"request-item-inputs-left-flex"}>
              <FormItemLabel label={"Docente"} />
              {
                data.docentes.map( docente => <FormItemValue value={docente.nombre} /> )
              }

            </div>

            <div className={"request-item-inputs-left-flex"}>
              <FormItemLabel label={"Lugar"} />
              {data.aulas.map(item => <FormItemValue value={item.ubicacion} /> )}
            </div>
          </div>
          <div className={"request-divider"} />
          <div className={"request-item-inputs-right"}>
            <div className={"request-item-inputs-left-flex"}>
              <FormItemLabel label={"Materia"} />
              <FormItemValue value={materia} />
            </div>

            <div className={"request-item-inputs-left-flex"}>
              <FormItemLabel label={"Grupo (s)"} />
              {data.grupos.map(item => <FormItemValue value={item.nombre} /> )}
            </div>
            <div className={"request-item-inputs-left-flex"}>
              <div className={"request-item-inputs-left-flex"}>
                <FormItemLabel label={"Motivo"} />
                <FormItemValue value={data.justificaciones[0].justificacion} />
              </div>
              <div className={"request-item-inputs-left-flex"}>
                <FormItemLabel label={"Capacidad"} />
                <FormItemValue value={`${data.numero_estimado} Estudiantes`} />
              </div>
            </div>
            <div className={"request-item-inputs-left-flex"}>
              <div className={"request-item-inputs-left-flex"}>
                <FormItemLabel label={"Fecha"} />
                <FormItemValue value={data.fecha} />
              </div>
            </div>
            <div className={"request-item-inputs-left-flex"}>
              <FormItemLabel label={"Horario(s)"} />
              {data.horarios.map(item =>  <FormItemValue value={`${item.hora_inicio.substring(0,5)} - ${item.hora_fin.substring(0,5)}`} /> )}
            </div>
          </div>
        </div>
        {conflictos.length > 0 ?
            <div className={"request-item-inputs-left-flex"}>

              <div>
                <FormItemLabel label={"Conflicto de aulas:"} />
              </div>
              {conflictos.map(item =>  <ColoredTag state={"3"}>{item}</ColoredTag> )}
            </div>
            : null
        }

        <div className="request-suggestions">
          {
            /*
            <div>
          <FormItemLabel label={"Sugerencia de aulas:"} />
          </div>
            */
          }

          <div className="request-sugestions-items">
            {
              /*
              <div className="request-sugestions-items-item">
              <FormItemValue value={"AUDITORIO"} />
              <FormItemValue value={"270 estudiantes"} />

              <FormItemValueDynamic
                options={[
                  "6:45 - 8:15",
                  "8:15 - 9:45",
                  "9:45 - 11:15",
                  "11:15 - 12:45",
                  "12:45 - 14:15",
                  "14:15 - 15:45",
                  "15:45 - 17:15",
                  "17:15 - 18:45",
                  "18:45 - 20:15",
                  "20:15 - 21:45",
                ]}
              />
              <FormItemValue value={"Edificio Nuevo"} />
              <SuccessfulButton title={"Disponible"} />
              <BlackButton title={"Añadir"} />
            </div>
            <div className="request-sugestions-items-item">
              <FormItemValue value={"AUDITORIO"} />
              <FormItemValue value={"270 estudiantes"} />

              <FormItemValueDynamic
                options={[
                  "6:45 - 8:15",
                  "8:15 - 9:45",
                  "9:45 - 11:15",
                  "11:15 - 12:45",
                  "12:45 - 14:15",
                  "14:15 - 15:45",
                  "15:45 - 17:15",
                  "17:15 - 18:45",
                  "18:45 - 20:15",
                  "20:15 - 21:45",
                ]}
              />
              <FormItemValue value={"Edificio Nuevo"} />
              <SuccessfulButton title={"Disponible"} />
              <BlackButton title={"Añadir"} />
            </div>
              */
            }

            <div className="request-sugestions-items-sugestion">
              <div className="request-sugestions-items-sugestion-flex">
                <div className="items-sugestion-flex-label">
                <FormItemLabel label={"Aulas seleccionadas:"} />
                </div>
                <div className="request-sugestions-button-flex">
                  {
                  data.aulas.map( aula => <Classroom name={aula.nombre} /> )
                  }

                </div>
              </div>
              <div className="request-sugestions-button-flex">
                <WarningButton title={"Rechazar Reserva"} onClick={handleOpenReject} />
                <CommonButton title={"Confirmar Reserva"} disabled={conflictos.length > 0} onClick={handleOpenSucces} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
