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
import { useState } from "react";
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

export const Book = () => {
  const [teachers, setTeachers] = useState([]);
  const [assignments, setAssignments] = useState([]);
  const [groups, setGroups] = useState([]);
  const [date, setDate] = useState(false);
  const navigate = useNavigate();
  const { data } = useSelector((state) => state.request);
  console.log(data[0]);
  const { materias } = useSelector((state) => state.materias);
  const nombreMaterias = materias.flatMap((item) => ({
    label: item.nombre,
    value: item.id,
  }));

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(!open);

  const onSubmit = async () => {
    await crearSolicitud({
      numero_estimado: data[0].capacidad,
      fecha: "2022-05-13",
      aulasId: [data[0].id],
      gruposId: [1],
      justificacionesLista: ["lista"],
      periodosId: ["24bcbcb2-f178-4214-be53-5a11d8289b22"],
    });
    setOpen(true);
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
        <NotificationsSuccessful />
        <NotificationsWarning />
      </div>

      <div className={"form-items"}>
        <div className={"form-item-inputs"}>
          <div className={"form-item-inputs-left"}>
            <div className={"form-item-inputs-left-flex"}>
              <FormItemLabel label={"Docente:"} />
              <FormItemValue value={"Leticia Blanco"} />
            </div>
            <div className={"form-item-inputs-left-flex"}>
              <FormItemLabel label={"Materia"} />
              <FormItemValueAutoComplete
                items={assignments}
                setItems={setAssignments}
                docentOptions={[
                  "Introduccion a la programación",
                  "Sistemas 1",
                  "Sistemas 2",
                ]}
              />
            </div>

            <div className={"form-item-inputs-left-flex"}>
              <FormItemLabel label={"Añadir Docentes"} />
              <FormItemValueAutoComplete
                items={teachers}
                setItems={setTeachers}
                docentOptions={[
                  "Leticia Blanco",
                  "Americo Fiorilio",
                  "Yony Montaño",
                ]}
              />
            </div>

            <div className={"form-item-inputs-left-flex"}>
              <FormItemLabel label={"Motivo"} />
              <FormItemValueDynamic
                options={["Examen", "Clase", "Laboratorio"]}
              />
            </div>

            <div className={"form-item-inputs-left-flex"}>
              <FormItemLabel label={"Grupo"} />
              <FormItemValueAutoComplete
                items={groups}
                setItems={setGroups}
                docentOptions={["1", "4", "5"]}
              />
            </div>
          </div>
          <div className={"form-divider"} />
          <div className={"form-item-inputs-right"}>
            <div className={"form-item-inputs-left-flex"}>
              <div className={"form-item-inputs-left-flex"}>
                <FormItemLabel label={"Horario"} />
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
              </div>
              <div className={"form-item-inputs-left-flex"}>
                <FormItemLabel label={"Fecha"} />
                <FormItemDatePicker />
              </div>
            </div>

            <div className={"form-item-inputs-left-flex"}>
              <div className={"form-item-inputs-left-flex"}>
                <FormItemLabel label={"Capacidad Aula 1:"} />
                <FormItemValue value={`${data[0].capacidad} estudiantes`} />
              </div>

              <div className={"form-item-inputs-left-flex"}>
                <FormItemLabel label={"Lugar"} />
                <FormItemValue value={data[0].ubicacion} />
              </div>
            </div>

            <div className={"form-item-inputs-left-flex"}>
              <div className={"form-item-inputs-left-flex"}>
                <FormItemLabel label={"Capacidad Aula 2:"} />
                <FormItemValue value={`${data[0].capacidad} estudiantes`} />
              </div>

              <div className={"form-item-inputs-left-flex"}>
                <FormItemLabel label={"Lugar"} />
                <FormItemValue value={data[0].ubicacion} />
              </div>
            </div>

            <div className={"form-item-inputs-left-flex"}>
              <div className={"form-item-inputs-left-flex"}>
                <FormItemLabel label={"Capacidad Aula 3:"} />
                <FormItemValue value={`${data[0].capacidad} estudiantes`} />
              </div>

              <div className={"form-item-inputs-left-flex"}>
                <FormItemLabel label={"Lugar"} />
                <FormItemValue value={data[0].ubicacion} />
              </div>
            </div>

            <div className={"form-item-inputs-left-flex"}>
              <FormItemLabel label={"Capacidad Total:"} />
              <FormItemValue value={`${data[0].capacidad} estudiantes`} />
            </div>
          </div>
        </div>
        <div className={"form-submit-container"}>
          <div className={"form-submit-description"}>
            <div>
            <BoldText>Aulas seleccionadas: </BoldText>
            </div>
            <div>
            {data.map((item) => (
              <Classroom name={item.nombre} icon={garbageIcon} />
            ))}
            </div>
          </div>
          <div className={"form-submit-buttons"}>
            <div>
              <WarningButton title={"Cancelar Reserva"} />
            </div>
            <div onClick={hideNotification}>
              <CommonButton title={"Enviar Reserva"} />
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};
