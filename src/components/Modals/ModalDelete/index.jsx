import { Modal } from "rsuite";
import garbageIcon from "../../../assets/svg/redGarbageIcom.svg";
import { WhiteButton } from "../../Buttons/WhiteButton";
import { CommonButton } from "../../Buttons/Common";
import { Classroom } from "../../Classroom";
import { BoldText } from "../../BoldText";
import { FormItemValue } from "../../FormItemValue";
import { ColoredTag } from "../../ColoredTag";
import "./styles.css";
import "rsuite/dist/rsuite-rtl.css";

export const ModalDelete = ({openModel, handleOpen, onSubmit, dataClassrooms = null, periodos = null}) => {
  return (
    <div>
      <Modal className={"modal-delete"} open={openModel} onClose={handleOpen} >
        <div className={"modal-delete-title"}>
          <BoldText children={"¿Esta seguro de que quieres anular esta reserva?"} />
        </div>
        <div className={"modal-delete-text"}>
        La siguiente reserva sera anulada: <br />
        Aulas:
        </div>

        <div className={"modal-delete-classroom"}>
          {dataClassrooms != null
            ? dataClassrooms.map((item) => (
                <Classroom name={item.nombre} icon={garbageIcon} />
              ))
            : null}
        </div>

        <div className={"modal-delete-text"}>
          Periodos:
        </div>
        <div className={"modal-delete-classroom"}>
          {periodos.map((horario,index) =>
                <ColoredTag>{horario.hora_inicio.substring(0,5)} - {horario.hora_fin.substring(0,5)}</ColoredTag>)}

        </div>

        <div className={"modal-delete-text"}>
          ¿Desea Continuar?
        </div>

        <div className={"modal-delete-buttons"}>
          <div className={"modal-delete-buttons-btn"} onClick={handleOpen}>
            <WhiteButton title={"Atras"} />
          </div>
          <div className={"modal-delete-buttons-btn"}>
            <CommonButton title={"Aceptar"} onClick={onSubmit} />
          </div>
        </div>
      </Modal>
    </div>
  );
};
