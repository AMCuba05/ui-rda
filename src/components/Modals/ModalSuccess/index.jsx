import { Modal } from "rsuite";
import garbageIcon from "../../../assets/svg/redGarbageIcom.svg";
import { WhiteButton } from "../../Buttons/WhiteButton";
import { CommonButton } from "../../Buttons/Common";
import { Classroom } from "../../Classroom";
import { BoldText } from "../../BoldText";
import "./styles.css";
import "rsuite/dist/rsuite-rtl.css";

export const ModalSuccess = ({ openModel, handleOpen, onSubmit, dataClassrooms= null }) => {
  return (
    <div>
      <Modal className={"modal"} open={openModel} onClose={handleOpen}>
        <div className={"modal-title"}>
          <BoldText children={"Se confirman las siguientes aulas:"} />
        </div>
        <div className={"modal-text"}>
          Las siguientes aulas pasaran a estar reservadas:
        </div>

        <div className={"modal-classroom"}>
          {dataClassrooms != null ?

          dataClassrooms.map((item) => (
            <Classroom name={item.nombre} icon={garbageIcon} />
          ))
           : null}
        </div>

        <div className={'modal-buttons'}>
          <div className={'modal-buttons-btn'} onClick={handleOpen}>
            <WhiteButton title={"Retroceder"} />
          </div>
          <div className={'modal-buttons-btn'}>
            <CommonButton title={"Confirmar"} onClick={onSubmit} />
          </div>
        </div>
      </Modal>
    </div>
  );
};
