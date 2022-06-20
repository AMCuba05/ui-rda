import { Modal } from "rsuite";
import garbageIcon from "../../assets/svg/redGarbageIcom.svg";
import { WhiteButton } from "../Buttons/WhiteButton";
import { CommonButton } from "../Buttons/Common";
import { Classroom } from "../Classroom";
import { BoldText } from "../BoldText";
import { ColoredTag } from "../ColoredTag";
import "./styles.css";
import "rsuite/dist/rsuite-rtl.css";

export const WarningReservationCancelation = ({openModel, handleOpen, onSubmit, dataClassrooms = null, item = null}) => {

  return (
    <div>
      <Modal className={"modal-warning"} open={openModel} onClose={handleOpen} >
        <div className={"modal-warning-title"}>
          <BoldText children={"¿Estas seguro de que quieres anular esta reserva?"} />
        </div>
        <div className={"modal-warning-text"}>
          La siguiente reserva sera anulada:
        </div>

        <div className={"modal-warning-text"}>
          Fecha:
        </div>

        <div className={"modal-warning-data"}>
          {item != null
            ?
                <ColoredTag>{item.fecha}</ColoredTag>

            : null}
        </div>

        <div className={"modal-warning-text"}>
          Aulas:
        </div>

        <div className={"modal-warning-data"}>
          {item.aulas.map((aula) =>
              <ColoredTag>{aula.nombre}</ColoredTag>

            )}
        </div>

        <div className={"modal-warning-text"}>
          Peridos:
        </div>
        <div className={"modal-warning-data"}>
          {item.periodos.map((periodo) =>
              <ColoredTag>{periodo.hora_inicio.substring(0,5)} - {periodo.hora_fin.substring(0,5)}</ColoredTag>
            )
          }
        </div>

        <div className={"modal-warning-text"}>
          ¿Desea Continuar?
        </div>

        <div className={"modal-warning-buttons"}>
          <div className={"modal-warning-buttons-btn"} onClick={handleOpen}>
            <WhiteButton title={"Retroceder"} />
          </div>
          <div className={"modal-warning-buttons-btn"}>
            <CommonButton title={"Continuar"} onClick={onSubmit} />
          </div>
        </div>
      </Modal>
    </div>
  );
};
