import { Modal } from "rsuite";
import garbageIcon from "../../../assets/svg/redGarbageIcom.svg";
import { WhiteButton } from "../../Buttons/WhiteButton";
import { CommonButton } from "../../Buttons/Common";
import { Classroom } from "../../Classroom";
import { BoldText } from "../../BoldText";
import "./styles.css";
import "rsuite/dist/rsuite-rtl.css";

export const ModalSuccess = ({ openModel, handleOpen }) => {
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
          <Classroom name={"620"} icon={garbageIcon} />
          <Classroom name={"620"} icon={garbageIcon} />
        </div>

        <div className={'modal-buttons'}>
          <div className={'modal-buttons-btn'} onClick={handleOpen}>
            <WhiteButton title={"Retroceder"} />
          </div>
          <div className={'modal-buttons-btn'}>
            <CommonButton title={"Confirmar"} />
          </div>
        </div>
      </Modal>
    </div>
  );
};
