import { CommonText } from "../CommonText";
import { CommonButton } from "../Buttons/Common";
import { WhiteButton } from "../Buttons/WhiteButton";
import { CommonInput } from "../Inputs/Common";
import {FormTitle} from "../FormTitle"
import { useState, useEffect } from "react";
import { WarningText } from "../WarningText";
import { BoldText } from "../BoldText";
import { FormItemValueAutoCompleteOne } from "../FormItemValueAutoCompleteOne";
import "./styles.css";
import {registroDocentes} from "../../api/loginDocentes";
import {obtenerDocenteMaterias} from "../../api/docenteNoRegistrado";
import {setLoading} from "../../redux/reducers/loading";
import {useDispatch} from "react-redux";

export const RegisterModal = ({ onAction }) => {

  const [teachers, setTeachers] = useState('');
  const [teachersList, setTeachersList] = useState([])
  const [teachersNameList, setTeachersNameList] = useState([])
  const dispatch = useDispatch()

useEffect( () => {
  void teacherShow()
  },[])

  const teacherShow = async () => {

    dispatch(setLoading(true))
    const response = await obtenerDocenteMaterias();
    setTeachersList(response);

    const arrDocente = teachersList.flatMap((item) => (item.nombre));
    setTeachersNameList(arrDocente)
    dispatch(setLoading(false))
  }


  const close = () => {
    onAction();
  };

  const verifications = () => {
    let validation = false;
    if (verificationName() && verificationCodSis() && verificationEmail() && verificationCellphone() && verificationPassword() && verificationRepeatPassword()) {
      validation = true;
    }
    return validation;
  };

  const verificationPassword = () => {
    let validation = false;
    if (password === "") {
      handleShowPasswordErrorChange(true);
      validation = false;
    } else {
      if (password.length >= 8) {
        handleShowPasswordErrorChange(false);
        validation = true;
      } else {
        handleShowPasswordErrorChange(true);
        validation = false;
      }
    }
    return validation;
  };

  const verificationEmail = () => {
    let validation = false;
    let emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (email === "") {
      handleShowEmailErrorChange(true);
      validation = false;
    } else {
      if (emailPattern.test(email)) {
        handleShowEmailErrorChange(false);
        validation = true;
      } else {
        handleShowEmailErrorChange(true);
        validation = false;
      }
    }
    return validation;
  };

  const verificationCodSis = () => {
    let validation = false;
    let codSisPattern = /^#?([1-2]{1}[9|0]{1}[0-2|9]{1}[0-9]{6,6})$/;
    if(codSis === ""){
      handleShowCodSisErrorChange(true);
      validation = false
    }else{
      if(codSisPattern.test(codSis)){
        handleShowCodSisErrorChange(false);
        validation = true;
      }else{
        handleShowCodSisErrorChange(true);
        validation = false;
      }
    }
    return true;
  }

  const verificationCellphone = () => {
    let validation = false;
    let cellphonePattern = /^#?(([6|7]{1}[0-9]{7,7}))$/;
    if(cellphone === ""){
      validation = true;
    } else {
      if(cellphonePattern.test(cellphone)){
        handleShowCellphoneError(false);
        validation = true;
      }else{
        handleShowCellphoneError(true);
        validation = false;
      }
    }
    return validation;
  }

  const verificationRepeatPassword = () => {
    let validation = false;
    if(repeatPassword === "" ){
      handleShowPasswordRepeatErrorChange(true);
      validation = false;
    }else{
      if(password === repeatPassword){
        handleShowPasswordRepeatErrorChange(false);
        validation = true;
      }else{
        handleShowPasswordRepeatErrorChange(true);
        validation = false;
      }
    }
    return validation;
  }

  const verificationName = () => {
    let validation = false;
    if(teachers.length > 0){
      validation = true;
      handleShowNameError(false);
    }else{
      validation = false;
      handleShowNameError(true);
    }
    return validation;
  }

  const [showCodSisError, setShowCodSisError] = useState(false);
  const handleShowCodSisErrorChange = (newShowCodSisError) => {
    setShowCodSisError(newShowCodSisError);
  }

  const [showPasswordError, setShowPasswordError] = useState(false);
  const handleShowPasswordErrorChange = (newShowPasswordError) => {
    setShowPasswordError(newShowPasswordError);
  };

  const [showEmailError, setShowEmailError] = useState(false);
  const handleShowEmailErrorChange = (newShowEmailError) => {
    setShowEmailError(newShowEmailError);
  };

  const [showCellphoneError, setShowCellphoneError] = useState(false);
  const handleShowCellphoneError = (newShowCellphoneError) => {
    setShowCellphoneError(newShowCellphoneError);
  }

  const [showPasswordRepeatError, setShowPasswordRepeatError] = useState(false);
  const handleShowPasswordRepeatErrorChange = (newShowPasswordRepeatError) => {
    setShowPasswordRepeatError(newShowPasswordRepeatError);
  };


  const [showNameError, setShowNameError] = useState(false);
  const handleShowNameError = (newShowNameError) => {
    setShowNameError(newShowNameError);
  }

  const [codSis, setCodSis] = useState("");
  const handleCodSisChange = (newCodSis) => {
    setCodSis(newCodSis);
  }

  const [email, setEmail] = useState("");
  const handleEmailChange = (newEmail) => {
    setEmail(newEmail);
  };

  const [password, setPassword] = useState("");
  const handlePasswordChange = (newPassword) => {
    setPassword(newPassword);
  };

  const [repeatPassword, setRepeatPassword] = useState("");
  const handleRepeatPasswordChange = (newPassword) => {
    setRepeatPassword(newPassword);
  };

  const [cellphone, setCellphone] = useState("");
  const handleCellphoneChange = (newCellphone) => {
    setCellphone(newCellphone);
  }

  const [name, setName] = useState()
  const handleNameChange = (newName) => {
    setName(newName)
  }

  const onRegister = async () => {
    dispatch(setLoading(true))
    if (verifications()) {
      try {
        await registroDocentes(codSis, teachers, cellphone, email, password)
        alert('Solicitud de creacion de usuario enviada')
      } catch (e) {
        alert('Algo salió mal, inténtalo más tarde')
      }
    } else {
      alert('Debe llenar todos los campos')
    }
    dispatch(setLoading(false))
  }

  return (
    <div className={"fullscreen-register-modal"}>
      <div className={"register-modal-container"}>
        <div className={"register-modal-title"}>
          <FormTitle name={'Registrarse'}/>
        </div>
        <div className={'register-modal-content-flex'}>
          <div className={'register-modal-content-left'}>

            <div>
              <CommonText>Nombre: </CommonText>
              <FormItemValueAutoCompleteOne
                        items={teachers}
                        setItems={setTeachers}
                        docentOptions={teachersNameList}
                    />
              {showNameError ? (
                <WarningText
                  text={"Nombre de docente vacio"}
                />
              ) : null}
            </div>
            <div >
              <CommonInput
                input={email}
                inputChange={handleEmailChange}
                label={"Correo"}
                type={'email'}


              />
              {showEmailError ? (
                <WarningText
                  text={"Introduce una dirección de correo electronico valido"}
                />
              ) : null}
            </div>
            <div>
            <CommonInput input={password} inputChange={handlePasswordChange} label={'Contraseña'} type={"password"}/>

            {showPasswordError ?
               <WarningText text={'La contraseña es invalida '}/> : null}

            </div>
          </div>
          <div className={'register-modal-content-right'}>
            <div>
            <CommonInput input={codSis} inputChange={handleCodSisChange}  label={'Codigo Sis.'} type={'number'}/>
            {showCodSisError ?
                <WarningText text={'Codigo Sis invalido '}/> : null}

            </div>
            <br />
            <div>
            <CommonInput input={cellphone} inputChange={handleCellphoneChange}  label={'Celular'} type={'number'}/>
            {showCellphoneError?
              <WarningText text={'Numero de celular invalido '}/> : null}

            </div>
            <div>
            <CommonInput input={repeatPassword} inputChange={handleRepeatPasswordChange} label={'Repetir Contraseña'} type={"password"}/>

            {showPasswordRepeatError ?
               <WarningText text={'La contraseña no es igual '}/> : null}

            </div>
          </div>
        </div>
        <div className={'register-modal-footer'}>
          <div>
            <CommonButton onClick={onRegister} title={'Registrarse'} />
          </div>
          <div>
            <a onClick={close}>Volver atras</a>
          </div>

        </div>
      </div>
    </div>
  );
};
