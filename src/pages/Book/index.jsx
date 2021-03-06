import garbageIcon from "../../assets/svg/redGarbageIcom.svg";
import { FormTitle } from "../../components/FormTitle";
import { Classroom } from "../../components/Classroom";
import { FormItemLabel } from "../../components/FormItemLabel";
import { FormItemValue } from "../../components/FormItemValue";
import { CommonText } from "../../components/CommonText";
import { CommonButton } from "../../components/Buttons/Common";
import { WarningButton } from "../../components/Buttons/Warning";
import { FormItemValueDynamic } from "../../components/FormItemValueDynamic";
import { FormItemValueAutoComplete } from "../../components/FormItemValueAutoComplete";
import { FormItemDatePicker } from "../../components/FormItemDatePicker";
import {useEffect, useState} from "react";
import { ModalSuccess } from "../../components/Modals/ModalSuccess";

import { BackButton } from "../../components/Buttons/BackButton";
import { useNavigate } from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import { crearSolicitud } from "../../api/crearSolicitud";
import "./styles.css";
import { ModalWarning } from "../../components/Modals/ModalWarning";
import { BoldText } from "../../components/BoldText";
import {obtenerDocentes} from "../../api/obtenerDocentes";
import {WhiteButton} from "../../components/Buttons/WhiteButton";
import {obtenerPeriodos} from "../../api/obtenerPeriodos";
import {setLoading} from "../../redux/reducers/loading";



export const Book = () => {
  const [teachers, setTeachers] = useState([]);
  const [teachersList, setTeachersList] = useState([])
  const [teachersNameList, setTeachersNameList] = useState([])
  const [groupName, setGroupName] = useState([])
  const [assignments, setAssignments] = useState();
  const [codeGroup, setCodeGroup] = useState([]);
  const [fecha, setFecha] = useState()
  const date = new Date()
  const formatDate = date.toISOString().slice(0,10)
  const [periodo, setPeriodo] = useState([]);
  const navigate = useNavigate();
  const [reason, setReason] = useState()
  const { materias } = useSelector((state) => state.materias);
  const [currentUser, setCurrentUser] = useState(JSON.parse(sessionStorage.getItem('user')))
  const nombreMaterias = ['Selecciona una Materia' , ...materias.flatMap((item) => (item.nombre_materia))]
  const [periodos, setPeriodos] = useState([])

  const [open, setOpen] = useState(false);
  const [openError, setOpenError] = useState(false);
  const dispatch = useDispatch()
  const handleOpen = () => setOpen(!open);
  const handleOpenError = () => setOpenError(!openError);

  const onChangePeriodo = e => {
    setPeriodo(e.target.value)
  }
  

  useEffect(() => {
    void getPeriodo()
    setCurrentUser(JSON.parse(sessionStorage.getItem('user')))
    setTeachers([JSON.parse(sessionStorage.getItem('user')).nombre])
  }, [])

  useEffect(() => {
   void findItem(assignments)
    setCodeGroup([])
    setTeachers([currentUser.nombre])
    setTeachersList([])
  }, [assignments])

  const getGroups = (name) => {
    let res = [{label:'Selecciona un grupo', value: 'nan'}]
    teachersList.map(teacher => {
      if (teacher.nombre_docente === name){
        res.push({
          label: teacher.nombre_grupo,
          value: teacher.id_grupo
        })
      }
    })
    return res
  }


  useEffect( () => {
    const arrDocente = ['Selecciona un Docente' , ...teachersList.flatMap((item) => (item.nombre_docente))];
    const arrFiltered = arrDocente.filter((item,index)=>{
      return arrDocente.indexOf(item) === index;
    })
    setTeachersNameList(arrFiltered)
  },[teachersList])

  const findItem = async (item) => {
    dispatch(setLoading(true))
    await materias.map( async (materia, index) => {
      if (materia.nombre_materia === item) {
        const response = await obtenerDocentes(materia.idMateria)
        setTeachersList(response)
      }
    })
    dispatch(setLoading(false))
  }

  const onSubmit = () => {
    let yourDate = new Date()
    const formatToday = yourDate.toISOString().split('T')[0]
      const solicitud = {
        fecha: fecha,
        gruposId: codeGroup,
        justificacionesLista: [reason],
        periodosId: periodo,
      };
      if (reason != undefined && periodo != undefined && codeGroup.length > 0 && fecha != undefined ){
        if(formatToday < fecha && formatToday.substring(0,4) === fecha.substring(0,4) ){
          sessionStorage.setItem('solicitud', JSON.stringify(solicitud))
          navigate("/reservar", { replace: true });
        } else {
          alert('La fecha no es valida')
        }
      } else {
        if (!reason) {
          alert('Debe llenar campo de Motivo')
        }
        if (!periodo) {
          alert('Debe seleccionar al menos un Horario')
        }
        if (codeGroup.length === 0) {
          alert('Debe seleccionar al menos un Grupo')
        }
        if (!fecha) {
          alert('Debe ingresar una fecha')
        }
      }

  };

  const onChangeGroups = (value) => {
    if(value !== 'nan' ){
      if (!codeGroup.includes(value)) {
        let newCodeGroup = [...codeGroup]
        newCodeGroup.push(value)
        setCodeGroup(newCodeGroup)
      } else {
        let newCodeGroup = arrayRemove(codeGroup, value)
        setCodeGroup(newCodeGroup)
      }
    }
  }

  const onChangePeriods = (value) => {
    if(value !== 'Selecciona un Horario' ){
      if (!periodo.includes(value)) {
        let newPeriodo = [...periodo]
        newPeriodo.push(value)
        setPeriodo(newPeriodo)
      } else {
        let newPeriodo = arrayRemove(periodo, value)
        setPeriodo(newPeriodo)
      }
    }
  }

  function arrayRemove(arr, value) {

    return arr.filter(function(ele){
      return ele != value;
    });
  }

  const getPeriodo = async () => {
    dispatch(setLoading(true))
    const data = await obtenerPeriodos()
    setPeriodos([ 'Selecciona un Horario' ,...data.flatMap((item) => ({label: `${item.hora_inicio.substring(0,5)} - ${item.hora_fin.substring(0,5)}`,value: item.id}))])
    dispatch(setLoading(false))
  }

  const codeIncludes = (value) => {
    return codeGroup.includes(value)
  }

  const periodoIncludes = (value) => {
    return periodo.includes(value)
  }

  return (
    <div className={"form-content"}>
      <div className={"form-title-column"}>
        <div className={"form-title"}>
          <FormTitle name={"Crear Reserva:"} />
          <text className={'book-subtitle'}>Llenado de datos</text>
          <CommonText>Para empezar con la reserva, llene los siguientes campos correspondientes
            en caso de que participen 1 o mas docentes extra, puede a??adirlos en la reserva.

            Una vez llenado todos los datos presione bot??n siguiente, si necesita realizar una modificaci??n podra volver
            a modificarlos aprentendo el boton volver atr??s.</CommonText>
        </div>
      </div>
      <div className={"form-items"}>
        <div className={"form-item-inputs"}>
          <div className={"form-item-inputs-left"}>
            <div className={"form-item-inputs-left"}>
              <FormItemLabel label={"Docente"} />
              <FormItemValue value={currentUser ? currentUser.nombre: 'Docente'} />
            </div>
            <div className={"form-item-inputs-left-flex"}>
              <FormItemLabel label={"Materia"} />
              <FormItemValueDynamic
                  onChange={ e => setAssignments(e.target.value)}
                  options={nombreMaterias}
              />
            </div>

            {assignments != 'Selecciona una materia' && assignments ?
                <div className={"form-item-inputs-left-flex"}>
                  <FormItemLabel label={"A??adir Docentes"} />
                  <FormItemValueDynamic
                      onChange={ e => {
                        let newTeachers = [...teachers]
                        if ( e.target.value != 'Selecciona un Docente' && !newTeachers.includes(e.target.value)){
                          newTeachers.push(e.target.value)
                          setTeachers(newTeachers)
                        }
                      }}
                      options={teachersNameList}
                  />
                </div> : null
            }


          </div>
          <div className={"form-item-inputs-right"}>
            <div className={"form-item-inputs-left-flex-row"}>
              <div className={"form-item-inputs-left-flex"}>
                <FormItemLabel label={"Fecha"} />
                <FormItemDatePicker onChange={e => setFecha(e.target.value)} />
              </div>
              <div className={"form-item-inputs-left-flex"}>
                <FormItemLabel label={"Horario"} />
                <FormItemValueDynamic
                  options={periodos}
                  onChange={e => onChangePeriods(e.target.value)}
                  includes={periodoIncludes}
                />
              </div>
            </div>
            <div className={"form-item-inputs-left-flex-row"}>
              {
                teachersList.length > 0 ?
                    <div className={"form-item-inputs-left-flex"}>
                      <FormItemLabel label={"Motivo"} />
                      <FormItemValueDynamic
                          options={["Motivo", "Examen", "Clase", "Laboratorio", "Taller", "Defensa de Grado"]}
                          onChange={e => setReason(e.target.value)}
                      />
                    </div>
                    : null
              }
              {
                teachersList.length > 0 ?
                    <div className={"form-item-inputs-left-flex"}>
                      <FormItemLabel label={"Grupo(s)"} />
                      <FormItemValueDynamic
                          options={getGroups(teachers[0])}
                          onChange={e => onChangeGroups(e.target.value)}
                          includes={codeIncludes}
                      />
                    </div>
                    : null
              }
            </div>
          </div>
        </div>
        {
          teachers.length > 1 ? teachers.slice(1).map((teacher) =>
              <div className={"form-item-inputs"}>
            <div className={"form-item-inputs-left"}>
              <FormItemLabel label={"Docente"} />
              <FormItemValue value={teacher} />
            </div>
            <div className={"form-item-inputs-left-flex"}>
              <FormItemLabel label={"Grupo(s)"} />
              <FormItemValueDynamic
                  options={getGroups(teacher)}
                  onChange={e => onChangeGroups(e.target.value)}
                  includes={codeIncludes}
              />
            </div>
          </div>) : null
        }

        <div className={"form-submit-container"}>
          <div className={"form-submit-description"}>

          </div>
          <div className={"form-submit-buttons"}>
            <div>
              <WhiteButton title={"Volver atras"} />
            </div>
            <div onClick={onSubmit /*hideNotification*/}>
              <CommonButton title={"Siguiente"} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
