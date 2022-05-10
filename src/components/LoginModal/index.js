import {CommonText} from "../CommonText";
import './styles.css'
import {CommonButton} from "../Buttons/Common";
import {WhiteButton} from "../Buttons/WhiteButton";
import {CommonInput} from "../Inputs/Common";

export const LoginModal = ({onAction}) => {
    const goToAdmin = () => {
        localStorage.setItem('role', 'admin')
        localStorage.setItem('logged', '1')
        onAction()
    }

    const goToUser = () => {
        localStorage.setItem('role', 'user')
        localStorage.setItem('logged', '1')
        onAction()
    }
    return<div className={'fullscreen-login-modal'}>
        <div className={'login-modal-container'}>
            <CommonText>¡Hola nos alegra verte!</CommonText>
            <CommonInput label={'Correo'}/>
            <CommonInput label={'Contraseña'}/>
            <CommonButton title={'Iniciar sesión'} onClick={goToAdmin} />
            <WhiteButton title={'Registrarse'} onClick={goToUser} />
            <CommonText>Volver atras</CommonText>
        </div>
    </div>
}
