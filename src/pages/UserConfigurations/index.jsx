import { TitlePage } from '../../components/TitlePage';
import editIcon from '../../assets/svg/edit-icon.svg';
import './styles.css';
import { WhiteButton } from '../../components/Buttons/WhiteButton';
import { CommonButton } from '../../components/Buttons/Common';
import {CommonInput} from "../../components/Inputs/Common";
import {useEffect, useState} from "react";
import { actualizarDocente } from "../../api/modificarDocente";

export const UserConfigurations = () => {
  const [inputName, setInputName] = useState(true);
  const [inputCodSis, setInputCodSis] = useState(true);
  const [inputEmail, setInputEmail] = useState(true);
  const [inputCellphone, setInputCellphone] = useState(true);
  const [inputPassword, setInputPassword] = useState(true);
  const [currentUser, setCurrentUser] = useState(JSON.parse(sessionStorage.getItem("user")));
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
    if(newCel === undefined) {setCel(currentUser.celular)}
    if(newEmail === undefined) {setEmail(currentUser.email)}
    const data = await actualizarDocente(currentUser.id,newEmail,  newCel, newPassword);
    console.log("algo")
    console.log(data)
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
                <input type="text" disabled={inputName} placeholder = {currentUser.nombre}/>
              </div>
            </div>
            <div className={'user-configuration-input-label'}>
              <span>Cod Sis</span>
              <div className={'user-configuration-input'}>
                {console.log(currentUser)}
                <input type="text" disabled={inputCodSis} placeholder={currentUser.cod_SIS}/>
              </div>
            </div>

          </div>
          <div className={'user-configuration-two-inputs'}>
            <div className={'user-configuration-input-label'}>
              <span>Correo</span>
              <div className={'user-configuration-input'}>
                <CommonInput type="email" disabled={inputEmail} placeholder = {currentUser.email} inputChange={handleEmail}/>
                <img src={editIcon} onClick={() => setInputEmail(false)}/>
              </div>
            </div>
            <div className={'user-configuration-input-label'}>
              <span>Celular</span>
              <div className={'user-configuration-input'}>
                <CommonInput type="number" disabled={inputCellphone} placeholder = {currentUser.celular} inputChange={handleCel}/>
                <img src={editIcon} onClick={() => setInputCellphone(false)}/>
              </div>
            </div>

          </div>
          <div className={'user-configuration-two-inputs'}>
            <div className={'user-configuration-input-label'}>
              <span>Constraseña</span>
              <div className={'user-configuration-input'}>
                <CommonInput type="password" disabled={inputPassword} placeholder= "***************" inputChange={handlePass}/>
                <img src={editIcon} onClick={() => setInputPassword(false)}/>
              </div>
            </div>
            <div className={'user-configuration-input-label'}>

            </div>

          </div>
          <div className={'user-configurations-buttons'}>
            <div>
            <WhiteButton title={'Cancelar cambios'}/>
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
