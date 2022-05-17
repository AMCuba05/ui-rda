import { FormTitle } from "../../components/FormTitle";
import { Classroom } from "../../components/Classroom";
import { FormItemLabel } from "../../components/FormItemLabel";
import { FormItemValue } from "../../components/FormItemValue";
import { FormItemValueDynamic } from "../../components/FormItemValueDynamic";
import { CommonText } from "../../components/CommonText";
import { CommonButton } from "../../components/Buttons/Common";
import { WarningButton } from "../../components/Buttons/Warning";
import { SuccessfulButton } from "../../components/Buttons/Successful";
import "./styles.css";
import { ColoredTag } from "../../components/ColoredTag";
import { BlackButton } from "../../components/Buttons/BlackButton";
import garbageIcon from "../../assets/svg/redGarbageIcom.svg";
import { WhiteButton } from "../../components/Buttons/WhiteButton";

export const Request = () => {
  return (
    <div className={"request-content"}>
      <div className={"request-title"}>
        <FormTitle name={"Reserva de Aula(s):"} />
        <Classroom name={"651"} />
        <Classroom name={"652"} />
      </div>

      <div className={"request-items"}>
        <div className={"request-item-inputs"}>
          <div className={"request-item-inputs-left"}>
            <div className={"request-item-inputs-left-flex"}>
              <FormItemLabel label={"Hora de Solicitud"} />
              <FormItemValue value={"12:00 - 20/05/2022"} />
            </div>
            <div className={"request-item-inputs-left-flex"}>
              <FormItemLabel label={"Docente"} />
              <FormItemValue value={"Esteban Quito R."} />
              <FormItemValue value={"Esteban Quito R."} />
            </div>

            <div className={"request-item-inputs-left-flex"}>
              <FormItemLabel label={"Lugar"} />
              <FormItemValue value={"Edificio Nuevo"} />
            </div>
          </div>
          <div className={"request-divider"} />
          <div className={"request-item-inputs-right"}>
            <div className={"request-item-inputs-left-flex"}>
              <FormItemLabel label={"Materia"} />
              <FormItemValue value={"Calculo 1"} />
              <FormItemValue value={"Calculo 2"} />
            </div>

            <div className={"request-item-inputs-left-flex"}>
              <FormItemLabel label={"Grupo (s)"} />
              <FormItemValue value={"1"} />
              <FormItemValue value={"3"} />
              <FormItemValue value={"4"} />
            </div>
            <div className={"request-item-inputs-left-flex"}>
              <div className={"request-item-inputs-left-flex"}>
                <FormItemLabel label={"Motivo"} />
                <FormItemValue value={"examen"} />
              </div>
              <div className={"request-item-inputs-left-flex"}>
                <FormItemLabel label={"Capacidad"} />
                <FormItemValue value={"150 Estudiantes"} />
              </div>
            </div>
            <div className={"request-item-inputs-left-flex"}>
              <div className={"request-item-inputs-left-flex"}>
                <FormItemLabel label={"Horario"} />
                <FormItemValue value={"14:15 - 15:45"} />
              </div>
              <div className={"request-item-inputs-left-flex"}>
                <FormItemLabel label={"Fecha"} />
                <FormItemValue value={"20/05/2022"} />
              </div>
            </div>
          </div>
        </div>

        <div className={"request-item-inputs-left-flex"}>
          <div>
          <FormItemLabel label={"Conflicto de aulas:"} />
          </div>

          <ColoredTag state={"reserved"}>651</ColoredTag>
          <ColoredTag state={"reserved"}>625C</ColoredTag>
          <ColoredTag state={"reserved"}>606</ColoredTag>
        </div>

        <div className="request-suggestions">
          <div>
          <FormItemLabel label={"Sugerencia de aulas:"} />
          </div>
          <div className="request-sugestions-items">
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
            <div className="request-sugestions-items-sugestion">
              <div className="request-sugestions-items-sugestion-flex">
                <div className="items-sugestion-flex-label">
                <FormItemLabel label={"Aulas seleccionadas:"} />
                </div>
                <div>
                <Classroom name={"651"} icon={garbageIcon} />
                </div>

              </div>
              <div className="request-sugestions-button-flex">
                <WhiteButton title={"Enviar Sugerencias"} />
                <CommonButton title={"Confirmar Reserva"} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
