import { Modal } from "rsuite"
import { useState } from "react";
import { WarningButton } from "../Buttons/Warning";
import SuccesIcon from "../../assets/svg/success-modal.svg"
import { FormTitle } from "../FormTitle";
import './styles.css'
import 'rsuite/dist/rsuite-rtl.css';

export const ModalSuccess = ({openModel}) =>{
    //TODO: it works when change useState(openModel) by useState(true) but does not work when i put openmodel >:v
    const [open, setOpen] = useState(openModel);
    const handleClose = () => setOpen(false);
    
    return <div >
        <Modal className={"modal"} open={open} onClose={handleClose}>
        <div className={"modal-title"}>
            <FormTitle name={'Solicitud Enviada Con Exito'}/>
            <div onClick={handleClose}>
            <WarningButton title={'x'}/>
            </div>    
        </div>
        <div>
            <img className={'modal-img'} src={SuccesIcon} alt="" />
        </div>
        
          
        
      </Modal>
    </div>
}