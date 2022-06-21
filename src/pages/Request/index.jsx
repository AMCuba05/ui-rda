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
import {CommonInput} from "../../components/Inputs/Common";
import suggestIcon from "../../assets/svg/suggest-icon.svg";
import {BoldText} from "../../components/BoldText";
import {nombreAulas, sugerenciaAulas} from "../../api/aulasDisponibles";
import {AddButton} from "../../components/Buttons/AddButton";
import {setLoading} from "../../redux/reducers/loading";
import {useDispatch} from "react-redux";

export const Request = () => {
  const data = JSON.parse(localStorage.getItem('pendingItem'))
  const [materia, setMateria] = useState('')
  const [conflictos, setConflictos] = useState([])
  const [name, setName] = useState()
  const [aulas, setAulas] = useState()
  const [reserva, setReserva] = useState([])
  const dispatch = useDispatch()

  useEffect(()=> {
    void getMateria()
    searchConflicts()
  },[])

  const getMateria = async () => {
    dispatch(setLoading(true))
    const res = await obtenerMateriaDatosReserva(data.solicitud.datos_reserva_id)
    setMateria(res.nombre)
    dispatch(setLoading(false))
  }
  const onReject = async () => {
    dispatch(setLoading(true))
    try {
      await rechazarReserva(data.solicitud.id)
      alert('Se rechazó la solicitud de reserva')
      navigate('/admin/pendientes', {replace: true})
      //await enviarMailRechazo(data.docentes[0].email)
    } catch (e) {
      alert('Algo salió mal intentalo más tarde')
    }
    dispatch(setLoading(false))
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
    dispatch(setLoading(true))
    try {
      await aceptarReserva(data.solicitud.id)
      alert('Se acepto la solicitud de reserva')

      //await enviarMailRechazo(data.docentes[0].email)
      navigate('/admin/pendientes', {replace: true})

    } catch (e) {
      alert('Algo salió mal intentalo más tarde')
    }
    dispatch(setLoading(false))
  }

  const [openSucces, setOpenSuccess] = useState(false);
  const handleOpenSucces = () => setOpenSuccess(!openSucces);

  const [openWarning, setOpenWarning] = useState(false);
  const handleOpenWarning = () => setOpenWarning(!openWarning);

  const [openReject, setOpenReject] = useState(false);
  const handleOpenReject = () => setOpenReject(!openReject);

  const getSugerencias = async () => {
    const data = JSON.parse(sessionStorage.getItem('solicitud'))
    dispatch(setLoading(true))
    try {
      const response = await sugerenciaAulas({
        fecha: data.fecha,
        periodos: [],
        capacidadMin: 10,
        capacidadMax: data.numero_estimado,
        area: data.ubicacion
      })
      if (Array.isArray(response)){
        setAulas(response)
      } else {
        setAulas([response])
      }
    } catch (e) {
      alert('No se encontraron aulas para el número estimado')
    }
    dispatch(setLoading(false))
  }

  const getSugerenciasNombre = async () => {
    const data = JSON.parse(sessionStorage.getItem('solicitud'))
    dispatch(setLoading(true))
    try {
      const response = await nombreAulas({
        fecha: data.fecha,
        nombreAula: name
      })
      if (response.length == 0){
        alert('No se encontraron aulas para el criterio de busqueda')
      }
      if (Array.isArray(response)){
        setAulas(response)
      } else {
        setAulas([response])
      }
    } catch (e) {
      alert('No se encontraron aulas para el número estimado')
    }
    dispatch(setLoading(false))
  }


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
        {conflictos.length > 0 ?
            <div className={'table-top-header'}>
              <div className={'table-top-items'}>
                <div>
                  <CommonInput label={'Buscar un aula o area en especifico:'} input={name} inputChange={setName}/>
                  <CommonButton title={'Buscar'} onClick={getSugerenciasNombre} />
                </div>
              </div>
              <div className={'table-suggest-link'}>
                <a onClick={getSugerencias}>
                  <img src={suggestIcon}/>
                  Sugerirme aulas
                </a>
              </div>
              <div className={'table-header'}>
                <div className={'table-suggest-Aula'} >
                  <BoldText white={true}>Aula</BoldText>
                </div>
                <div className={'table-suggest-Cantidad'}>
                  <BoldText white={true}>Capacidad</BoldText>
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
        : null}

        {aulas ? aulas.map((item, index)  => {
          return(
              <div className={'table-suggest-item'}>
                <div className={'table-suggest-Aula'} >
                  <ColoredTag >{item.nombre}</ColoredTag>
                </div>
                <div className={'table-suggest-Cantidad'}>
                  <ColoredTag >{item.capacidad} estudiantes</ColoredTag>
                </div>
                <div className={'table-suggest-Fecha'}>
                  <ColoredTag>{JSON.parse(sessionStorage.getItem('solicitud')).fecha}</ColoredTag>
                </div>
                <div className={'table-suggest-Lugar'}>
                  <ColoredTag>{item.ubicacion}</ColoredTag>
                </div>
                <div className={'table-suggest-Estado'}>
                  <ColoredTag state={'1'} >Disponible</ColoredTag>
                </div>
                <div className={'table-suggest-vacio'}>
                  <AddButton onClick={() => agregarReserva(item)} title={'Añadir'}/>
                </div>
              </div>
          )}
        ) : null}

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
                  {console.log(data)}
                  {
                  data.aulas.map( aula => aula.estado === 'tiene una solicitud' ? null : <Classroom name={aula.nombre} /> )
                  }
                  {reserva.map((item)=>
                      <Classroom
                          name={`${item.nombre}`}
                          icon={garbageIcon}
                          onClick={() => removerReserva(item) }/>
                  )}

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
