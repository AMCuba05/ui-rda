import { Modal } from "rsuite";
import garbageIcon from "../../../assets/svg/redGarbageIcom.svg";
import { WhiteButton } from "../../Buttons/WhiteButton";
import { CommonButton } from "../../Buttons/Common";
import { BoldText } from "../../BoldText";
import { FormItemLabel } from "../../FormItemLabel";
import { FormItemValueDynamic} from "../../FormItemValueDynamic";
import "./styles.css";
import "rsuite/dist/rsuite-rtl.css";
import {useState} from "react";
import {Classroom} from "../../Classroom";

export const ModalReject = ({ openModel, handleOpen, onSubmit, sugerencias= [] }) => {
  const [selected, setSelecetd] = useState("Aula(s) ya reservada(s)")
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
              onChange={setSelecetd}
            />
          </div>
          {sugerencias.length > 0?
              <div className={"modal-reject-text"}>
                Sugerencias de Aula(s):
              </div>

              : null}
          {sugerencias.length > 0?
              <div className="request-sugestions-button-flex">
                {sugerencias.map( aula => <Classroom name={aula.nombre} /> )}
              </div>

              : null}
        </div>
        <div className={'modal-reject-buttons'}>
          <div className={'modal-reject-buttons-btn'} onClick={handleOpen}>
            <WhiteButton title={"Retroceder"} />
          </div>
          <div className={'modal-reject-buttons-btn'} onClick={onSubmit}>
            <CommonButton title={"Confirmar"} />
          </div>
        </div>
      </Modal>
    </div>
  );
};
