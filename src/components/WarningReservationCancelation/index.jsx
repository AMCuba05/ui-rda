import { Modal } from "rsuite";
import garbageIcon from "../../assets/svg/redGarbageIcom.svg";
import { WhiteButton } from "../Buttons/WhiteButton";
import { CommonButton } from "../Buttons/Common";
import { Classroom } from "../Classroom";
import { BoldText } from "../BoldText";
import "./styles.css";
import "rsuite/dist/rsuite-rtl.css";

export const WarningReservationCancelation = ({openModel, handleOpen, onSubmit, dataClassrooms = null, item}) => {
  return (
    <div>
      <Modal className={"modal-warning"} open={openModel} onClose={handleOpen} >
        <div className={"modal-warning-title"}>
          <BoldText children={"¡Advertencia! antes de confirmar:"} />
        </div>
        <div className={"modal-warning-text"}>
          {console.log(item)}
          Las siguientes aulas tienen conflicto:
        </div>

        <div className={"modal-warning-classroom"}>
          {dataClassrooms != null
            ? dataClassrooms.map((item) => (
                <Classroom name={item.nombre} icon={garbageIcon} />
              ))
            : null}
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