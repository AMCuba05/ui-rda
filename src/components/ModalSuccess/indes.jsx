import { Modal } from "rsuite"
import { WarningButton } from "../Buttons/Warning";
import SuccesIcon from "../../assets/svg/success-modal.svg"
import { FormTitle } from "../FormTitle";
import './styles.css'
import 'rsuite/dist/rsuite-rtl.css';

export const ModalSuccess = ({open, handleOpen}) =>{

    return <div >
        <Modal className={"modal"} open={open} >
        <div className={"modal-title"}>
            <FormTitle name={'Solicitud Enviada Con Exito'}/>
            <div onClick={()=> handleOpen()} >
            <WarningButton  onClick={()=> handleOpen()} title={'x'}/>
            </div>
        </div>
        <div>
            <img className={'modal-img'} src={SuccesIcon} alt="" />
        </div>



      </Modal>
    </div>
}
