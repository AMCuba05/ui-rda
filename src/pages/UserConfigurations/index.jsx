import { TitlePage } from '../../components/TitlePage';
import editIcon from '../../assets/svg/edit-icon.svg';
import './styles.css';
import { WhiteButton } from '../../components/Buttons/WhiteButton';
import { CommonButton } from '../../components/Buttons/Common';
import {useEffect, useState} from "react";

export const UserConfigurations = () => {
  const [inputName, setInputName] = useState(true);
  const [inputCodSis, setInputCodSis] = useState(true);
  const [inputEmail, setInputEmail] = useState(true);
  const [inputCellphone, setInputCellphone] = useState(true);
  const [inputPassword, setInputPassword] = useState(true);

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
                <input type="text" disabled={inputName}/>
                <img src={editIcon} onClick={() => setInputName(false)} />
              </div>
            </div>
            <div className={'user-configuration-input-label'}>
              <span>Cod Sis</span>
              <div className={'user-configuration-input'}>
                <input type="text" disabled={inputCodSis}/>
                <img src={editIcon} onClick={() => setInputCodSis(false)}/>
              </div>
            </div>

          </div>
          <div className={'user-configuration-two-inputs'}>
            <div className={'user-configuration-input-label'}>
              <span>Correo</span>
              <div className={'user-configuration-input'}>
                <input type="email" disabled={inputEmail} />
                <img src={editIcon} onClick={() => setInputEmail(false)}/>
              </div>
            </div>
            <div className={'user-configuration-input-label'}>
              <span>Celular</span>
              <div className={'user-configuration-input'}>
                <input type="number" disabled={inputCellphone}/>
                <img src={editIcon} onClick={() => setInputCellphone(false)}/>
              </div>
            </div>

          </div>
          <div className={'user-configuration-two-inputs'}>
            <div className={'user-configuration-input-label'}>
              <span>Constraseña</span>
              <div className={'user-configuration-input'}>
                <input type="password" disabled={inputPassword} />
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
            <CommonButton title={'Guardar cambios'}/>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
