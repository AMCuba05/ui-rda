import {CommonText} from "../CommonText";
import './styles.css'
import {CommonButton} from "../Buttons/Common";
import {WhiteButton} from "../Buttons/WhiteButton";
import {CommonInput} from "../Inputs/Common";
import { useState } from "react";
import { WarningText } from "../WarningText";

export const LoginModal = ({onAction}) => {

    const goToAdmin = () => {
        if(verifications()){

        localStorage.setItem('role', 'admin')
        localStorage.setItem('logged', '1')
        onAction()
        }
    }

    const goToUser = () => {
      if(verifications()){
        localStorage.setItem('role', 'user')
        localStorage.setItem('logged', '1')
        onAction()
      }
    }

    const verifications = () => {
      let validation = false;
      if (verificationEmail() && verificationPassword()){
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


    return<div className={'fullscreen-login-modal'}>
        <div className={'login-modal-container'}>
            <CommonText>¡Hola nos alegra verte!</CommonText>
            <CommonInput input={email} inputChange={handleEmailChange} label={'Correo'}/>
            {showEmail ?
               <WarningText text={'Introduce una dirección de correo electronico valido'}/> : null}

            <CommonInput input={password} inputChange={handlePasswordChange} label={'Contraseña'}/>
            {showPassword ?
               <WarningText text={'La contraseña es invalida '}/> : null}
            <CommonButton title={'Iniciar sesión'} onClick={goToAdmin} />
            <WhiteButton title={'Registrarse'} onClick={goToUser} />
            <CommonText>Volver atras</CommonText>
        </div>
    </div>
}
