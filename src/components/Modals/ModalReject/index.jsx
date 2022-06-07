import { Modal } from "rsuite";
import garbageIcon from "../../../assets/svg/redGarbageIcom.svg";
import { WhiteButton } from "../../Buttons/WhiteButton";
import { CommonButton } from "../../Buttons/Common";
import { BoldText } from "../../BoldText";
import { FormItemLabel } from "../../FormItemLabel";
import { FormItemValueDynamic} from "../../FormItemValueDynamic";
import "./styles.css";
import "rsuite/dist/rsuite-rtl.css";

export const ModalReject = ({ openModel, handleOpen }) => {
  return (
    <div>
      <Modal className={"modal-reject"} open={openModel} onClose={handleOpen}>
        <div className={"modal-reject-title"}>
          <BoldText children={"Se enviara una sugerencia al docente solicitante"} />
        </div>
        <div className={"modal-reject-text"}>
            Por favor seleccione una opcion indicando el motivo
        </div>
        <div>
          <div className={'modal-reject-options'}>

          <FormItemValueDynamic
              options={["Aula(s) ya reservada(s)",
              "Aula(s) no disponibles en feriados",
              "Ya reservo demasiadas aulas "]}
            />
          </div>
        </div>
        <div className={'modal-reject-buttons'}>
          <div className={'modal-reject-buttons-btn'} onClick={handleOpen}>
            <WhiteButton title={"Retroceder"} />
          </div>
          <div className={'modal-reject-buttons-btn'}>
            <CommonButton title={"Enviar sugerencia"} />
          </div>
        </div>
      </Modal>
    </div>
  );
};
