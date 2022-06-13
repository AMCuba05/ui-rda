import { Modal } from "rsuite";
import garbageIcon from "../../../assets/svg/redGarbageIcom.svg";
import { WhiteButton } from "../../Buttons/WhiteButton";
import { CommonButton } from "../../Buttons/Common";
import { BoldText } from "../../BoldText";
import { FormItemLabel } from "../../FormItemLabel";
import { FormItemValueDynamic} from "../../FormItemValueDynamic";
import "./styles.css";
import "rsuite/dist/rsuite-rtl.css";

export const ModalMoreInfo = ({ openModel, handleOpen, onSubmit }) => {
  return (
    <div>
      <Modal className={"modal-more-info"} open={openModel} onClose={handleOpen}>
        <div className={"modal-more-info-title"}>
          <BoldText children={"No puede anular un aula confirmada"} />
        </div>
        <div className={"modal-more-info-text"}>
        Para mas información contáctese con: <b> Admin@gmail.com </b>
        </div>

        <div className={'modal-more-info-buttons'}>
          <div className={'modal-more-info-buttons-btn'} onClick={handleOpen}>
            <CommonButton title={"Aceptar"} />
          </div>
        </div>
      </Modal>
    </div>
  );
};
