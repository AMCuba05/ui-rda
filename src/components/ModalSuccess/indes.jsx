import { Modal } from "rsuite"
import { useState } from "react";
import { WarningButton } from "../Buttons/Warning";
import SuccesIcon from "../../assets/svg/success-modal.svg"
import { FormTitle } from "../FormTitle";
import './styles.css'
import 'rsuite/dist/rsuite-rtl.css';

export const ModalSuccess = ({openModel, handleOpen}) =>{

    return <div >
        <Modal className={"modal"} open={openModel} onClose={handleOpen}>
        <div className={"modal-title"}>
            <FormTitle name={'Solicitud Enviada Con Exito'}/>
            <div onClick={handleOpen}>
            <WarningButton title={'x'}/>
            </div>
        </div>
        <div>
            <img className={'modal-img'} src={SuccesIcon} alt="" />
        </div>



      </Modal>
    </div>
}
