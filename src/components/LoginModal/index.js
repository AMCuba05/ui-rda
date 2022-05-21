import {CommonText} from "../CommonText";
import {CommonButton} from "../Buttons/Common";
import {WhiteButton} from "../Buttons/WhiteButton";
import {CommonInput} from "../Inputs/Common";
import { useState } from "react";
import { WarningText } from "../WarningText";
import './styles.css'
import {loginDocentes} from "../../api/loginDocentes";

export const LoginModal = ({onAction}) => {

    const onLogin = async () => {
        if(verifications()){
            try {
                const data = await loginDocentes(codSis, password)
                localStorage.setItem('role', 'admin')
                localStorage.setItem('logged', '1')
                localStorage.setItem('id', data.id)
                onAction()
            }
            catch ( e ) {
                alert('Código SIS o contraseña incorrectos')
            }


        }
    }

    const goToUser = () => {
      if(verifications()){
        localStorage.setItem('role', 'user')
        localStorage.setItem('logged', '1')
        onAction()
      }
    }

    const close = () => {
      onAction()
    }

    const verifications = () => {
      let validation = false;
      if (verificationPassword()){
        validation = true;
      }
      return validation;
    }

    const verificationPassword = () => {
      let validation= false;
      if(password === ""){
        handleShowPasswordChange(true);
        validation = false;
      }else{
        if(password.length >= 8){
          handleShowPasswordChange(false);
          validation = true;
        }else{
          handleShowPasswordChange(true);
          validation = false;
        }
      }
      return validation;
    }

    const verificationEmail = () => {
      let validation = false;
      let emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
      if(email === "" ){
        handleShowChange(true);
        validation = false;
      }else{
        if(emailPattern.test(email)){
          handleShowChange(false);
          validation = true;
        }else{
          handleShowChange(true);
          validation = false;
        }
      }
      return validation;
    }

    const [showPassword, setShowPassword] = useState(false)
    const handleShowPasswordChange = (newShowPassword) => {
      setShowPassword(newShowPassword);
    }

    const [showEmail, setShowEmail] = useState(false)
    const handleShowChange = (newShowEmail) => {
      setShowEmail(newShowEmail);
    }

    const [email, setEmail] = useState('')
    const handleEmailChange = (newEmail) => {
        setEmail(newEmail);
    }

    const [password, setPassword] = useState('')
    const handlePasswordChange = (newPassword) => {
      setPassword(newPassword);
    }

    const [codSis, setCodSis] = useState()
    const handleCodSis = (newCodSis) => {
        setCodSis(newCodSis)
    }


    return<div className={'fullscreen-login-modal'}>
        <div className={'login-modal-container'}>
            <CommonText>¡Hola nos alegra verte!</CommonText>
            {
                /*
                <CommonInput input={email} inputChange={handleEmailChange} label={'Correo'}/>
            {showEmail ?
               <WarningText text={'Introduce una dirección de correo electronico valido'}/> : null}
                */
            }
            <CommonInput input={codSis} inputChange={handleCodSis} label={'Código SIS'}/>
            <CommonInput type={'password'} input={password} inputChange={handlePasswordChange} label={'Contraseña'}/>
            {showPassword ?
               <WarningText text={'La contraseña es invalida '}/> : null}
            <CommonButton title={'Iniciar sesión'} onClick={onLogin} />
            <WhiteButton title={'Registrarse'} onClick={goToUser} />
            <a onClick={close}>Volver atras</a>
        </div>
    </div>
}
