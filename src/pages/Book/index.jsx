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
import { useSelector } from "react-redux";
import { crearSolicitud } from "../../api/crearSolicitud";
import { NotificationsSuccessful } from "../../components/Notifications/Successful";
import { NotificationsWarning } from "../../components/Notifications/warning";
import "./styles.css";
import { ModalWarning } from "../../components/Modals/ModalWarning";
import { BoldText } from "../../components/BoldText";
import {obtenerDocentes} from "../../api/obtenerDocentes";

const periodos = [
  {
    label: "6:45 - 8:15",
    value: "71370f92-4e66-4c07-8aa1-3298cdff745b"
  },
  {
    label: "8:15 - 9:45",
    value: '316f3d2b-0494-4e00-825a-534c2a66b892'
  },
  {
    label: "9:45 - 11:15",
    value: "d5372c81-1755-4815-a365-9b72b492cc54"
  },
  {
    label: "11:15 - 12:45",
    value: "20034093-cec7-44b0-9878-24c849c60847"
  },
  {
    label: "12:45 - 14:15",
    value: "2d3871ce-7f61-4334-958c-87284f0f5077"
  },
  {
    label: "14:15 - 15:45",
    value: '70ba535d-e8ee-488f-b59f-f33f8a558130'
  },
  {
    label: "15:45 - 17:15",
    value: "57249ed7-ab8c-4c36-bb9f-cd72f6efe19d"
  },
  {
    label: "17:15 - 18:45",
    value: "1c6a65ea-e257-4a23-861e-a238516376a7"
  },
  {
    label: "18:45 - 20:15",
    value: "18:45 - 20:15"
  },
  {
    label: "20:15 - 21:45",
    value: "b1366cea-2e57-43de-9aca-b7bc8769e888"
  }
]

export const Book = () => {
  const [teachers, setTeachers] = useState([]);
  const [teachersList, setTeachersList] = useState([])
  const [teachersNameList, setTeachersNameList] = useState([])
  const [groupName, setGroupName] = useState([])
  const [assignments, setAssignments] = useState([]);
  const [groups, setGroups] = useState([]);
  const [codeGroup, setCodeGroup] = useState([]);
  const [total, setTotal] =useState(0)
  const date = new Date()
  const formatDate = date.toISOString().slice(0,10)
  const [periodo, setPeriodo] = useState('71370f92-4e66-4c07-8aa1-3298cdff745b');
  const navigate = useNavigate();
  const { data } = useSelector((state) => state.request);
  const { materias } = useSelector((state) => state.materias);
  const nombreMaterias = materias.flatMap((item) => (item.nombre_materia));

  const [open, setOpen] = useState(false);
  const [openError, setOpenError] = useState(false);
  const handleOpen = () => setOpen(!open);
  const handleOpenError = () => setOpenError(!openError);

  const sumCapacidad = () => {
    let count = 0
    data.forEach(item => count += item.capacidad)
    setTotal(count)
  }

  const onChangePeriodo = e => {
    setPeriodo(e.target.value)
  }

  useEffect(() => {
    sumCapacidad()
  }, [])

  useEffect(() => {
    assignments.map(item => void findItem(item))
  }, [assignments])

  useEffect(() => {
    const codes = []
    groups.map(item =>
    teachersList.map( (group) => {
      if (group.nombre_grupo === item ){
        codes.push(group.id_grupo)
      }
    }))
    setCodeGroup(codes)
  }, [groups])

  useEffect(() => {
    const groups = []
    teachers.map(item =>
        teachersList.map( (data) => {
          if (data.nombre_docente === item ){
            groups.push(data.nombre_grupo)
          }
        }))
    setGroupName(groups)
  }, [teachers])

  useEffect( () => {
    const arrDocente = teachersList.flatMap((item) => (item.nombre_docente));
    setTeachersNameList(arrDocente)
  },[teachersList])

  const findItem = async (item) => {
    await materias.map( async (materia, index) => {
      if (materia.nombre_materia === item) {
        const response = await obtenerDocentes(materia.idMateria)
        setTeachersList(response)
      }
    })
  }


  const onSubmit = async () => {
    try {
      const solicitud = await crearSolicitud({
        numero_estimado: total,
        fecha: formatDate,
        aulasId: data.flatMap(item => item.idAula),
        gruposId: codeGroup,
        justificacionesLista: ["test"],
        periodosId: [periodo],
      });
      hideNotification()
    } catch (e) {
      alert('Ha ocurrido un error')
      setOpenError(true)
    }
  };
  const goToCreate = () => {
    navigate("/crear", { replace: true });
  };

  const hideNotification = () => {
    let classNotification = document.getElementById("notifications-hide");
    classNotification.classList.remove("hide");
    classNotification.classList.add("hide-transform");
    setTimeout(() => {
      classNotification.classList.remove("hide-transform");
      classNotification.classList.add("hide");
    }, "10000");
  };

  return (
    <div className={"form-content"}>
      <div className={"form-title-column"}>
        <BackButton title={"Atras"} onClick={goToCreate} />
        <div className={"form-title"}>
          <FormTitle name={"Reserva de Aula(s):"} />
          {data.map((item) => (
            <Classroom name={item.nombre} icon={garbageIcon} />
          ))}
        </div>
        <NotificationsSuccessful date={formatDate} />
        <NotificationsWarning />
      </div>

      <div className={"form-items"}>
        <div className={"form-item-inputs"}>
          <div className={"form-item-inputs-left"}>
            <div className={"form-item-inputs-left-flex"}>
              <FormItemLabel label={"Materia"} />
              <FormItemValueAutoComplete
                items={assignments}
                setItems={setAssignments}
                docentOptions={nombreMaterias}
              />
            </div>

            {
              teachersList.length > 0 ?
                  <div className={"form-item-inputs-left-flex"}>

                    <FormItemLabel label={"Añadir Docentes"} />
                    <FormItemValueAutoComplete
                        items={teachers}
                        setItems={setTeachers}
                        docentOptions={teachersNameList}
                    />
                  </div>
                  : null
            }

            {
              groupName.length > 0 ?
                  <div className={"form-item-inputs-left-flex"}>
                    <FormItemLabel label={"Grupo"} />
                    <FormItemValueAutoComplete
                        items={groups}
                        setItems={setGroups}
                        docentOptions={groupName}
                    />
                  </div>
                  : null
            }
            {
              groupName.length > 0 ?
                  <div className={"form-item-inputs-left-flex"}>
                    <FormItemLabel label={"Motivo"} />
                    <FormItemValueDynamic
                        options={["Examen", "Clase", "Laboratorio"]}
                    />
                  </div>
                  : null
            }


          </div>
          <div className={"form-divider"} />
          <div className={"form-item-inputs-right"}>
            <div className={"form-item-inputs-left-flex"}>
              <div className={"form-item-inputs-left-flex"}>
                <FormItemLabel label={"Horario"} />
                <FormItemValueDynamic
                  options={periodos}
                  onChange={onChangePeriodo}
                />
              </div>
              <div className={"form-item-inputs-left-flex"}>
                <FormItemLabel label={"Fecha"} />
                <FormItemDatePicker />
              </div>
            </div>


              {data.map(item => <div className={"form-item-inputs-left-flex"}>
                <div className={"form-item-inputs-left-flex"}>
                  <FormItemLabel label={"Capacidad Aula 1:"} />
                  <FormItemValue value={`${item.capacidad} estudiantes`} />
                </div>
                <div className={"form-item-inputs-left-flex"}>
                  <FormItemLabel label={"Lugar"} />
                  <FormItemValue value={item.ubicacion} />
                </div>
              </div>)}

            <div className={"form-item-inputs-left-flex"}>
              <FormItemLabel label={"Capacidad Total:"} />
              <FormItemValue value={`${total} estudiantes`} />
            </div>
          </div>
        </div>
        <div className={"form-submit-container"}>
          <div className={"form-submit-description"}>
            <div>
            <BoldText>Acepto Recibir Sugerencias: </BoldText>
            </div>
          </div>
          <div className={"form-submit-buttons"}>
            <div>
              <WarningButton title={"Cancelar Reserva"} />
            </div>
            <div onClick={onSubmit /*hideNotification*/}>
              <CommonButton title={"Enviar Reserva"} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
