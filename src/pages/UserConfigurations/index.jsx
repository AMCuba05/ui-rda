import { TitlePage } from '../../components/TitlePage';
import editIcon from '../../assets/svg/edit-icon.svg';
import './styles.css';
import { WhiteButton } from '../../components/Buttons/WhiteButton';
import { CommonButton } from '../../components/Buttons/Common';
import {CommonInput} from "../../components/Inputs/Common";
import {useEffect, useState} from "react";
import { actualizarDocente } from "../../api/modificarDocente";
import {currentUser} from "../../api/currentUser";

export const UserConfigurations = () => {
  const [inputName, setInputName] = useState(true);
  const [inputCodSis, setInputCodSis] = useState(true);
  const [inputEmail, setInputEmail] = useState(true);
  const [inputCellphone, setInputCellphone] = useState(true);
  const [inputPassword, setInputPassword] = useState(true);
  const [currentUserSaved, setCurrentUser] = useState(JSON.parse(sessionStorage.getItem("user")));
  /*const [currentEmail, setCurretEmail] = useState(currentUserSaved.email);
  const [currentContra, setCurretContra] = useState(currentUserSaved.contrasenia);
  const [current, setCurretCel] = useState(currentUserSaved.celular);*/
  const [newEmail, setEmail] = useState()
  const [newPassword, setPass] = useState()
  const [newCel, setCel] = useState()
  const handleEmail = (newEmail) => {
    setEmail(newEmail)
    console.log(newEmail)
  }
  const handlePass = (newPass) => {
    setPass(newPass)
    console.log(newPass)
  }
  const handleCel = (newCel) => {
    setCel(newCel)
    console.log(newCel)
  }
  const modificar = async () =>{
    const data = await actualizarDocente(currentUserSaved.id,newEmail,  newCel, newPassword);
    const token = sessionStorage.getItem("token")

    const user = await currentUser(token)
    console.log(user)
    sessionStorage.setItem('user', JSON.stringify(user))
    setCurrentUser(user)
    //window.location.reload(false);
    return data;
  }
  return (
    <div className={'user-configurations-page'}>
      <div>
        <TitlePage title={'Configuración de usuario'}></TitlePage>
      </div>
      <div className={'user-configurations-subtitle'}>
        <span>  Mis datos personales: </span>
      </div>
      <div className={'user-configurations-form'}>
        <div className={'user-configurations-inputs'}>
          <div className={'user-configuration-two-inputs'}>
            <div className={'user-configuration-input-label'}>
              <span>Nombre Completo</span>
              <div className={'user-configuration-input'}>
                <input type="text" disabled={inputName} placeholder = {currentUserSaved.nombre}/>

              </div>
            </div>
            <div className={'user-configuration-input-label'}>
              <span>Cod Sis</span>
              <div className={'user-configuration-input'}>
                <input type="text" disabled={inputCodSis} placeholder={currentUserSaved.cod_SIS}/>

              </div>
            </div>

          </div>
          <div className={'user-configuration-two-inputs'}>
            <div className={'user-configuration-input-label'}>
              <span>Correo</span>
              <div className={'user-configuration-input'}>
                <div>
                <CommonInput type="email" disabled={inputEmail} placeholder = {currentUserSaved.email} inputChange={handleEmail}/>
                </div>

                <img src={editIcon} onClick={() => setInputEmail(false)}/>
              </div>
            </div>
            <div className={'user-configuration-input-label'}>
              <span>Celular</span>
              <div className={'user-configuration-input'}>
                <div>
                <CommonInput type="number" disabled={inputCellphone} placeholder = {currentUserSaved.celular} inputChange={handleCel}/>
                </div>

                <img src={editIcon} onClick={() => setInputCellphone(false)}/>
              </div>
            </div>

          </div>
          <div className={'user-configuration-two-inputs'}>
            <div className={'user-configuration-input-label'}>
              <span>Constraseña</span>
              <div className={'user-configuration-input'}>
                <div>
                <CommonInput type="password" disabled={inputPassword} placeholder= "***************" inputChange={handlePass}/>
                </div>

                <img src={editIcon} onClick={() => setInputPassword(false)}/>
              </div>
            </div>
            <div className={'user-configuration-input-label'}>

            </div>

          </div>
          <div className={'user-configurations-buttons'}>
            <div>

            </div>
            <div>
            <CommonButton title={'Guardar cambios'} onClick={modificar}/>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
