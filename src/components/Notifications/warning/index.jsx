import faceRedIcon from '../../../assets/svg/face-red.svg'
import "./styles.css"

export const NotificationsWarning = () =>{
  const dateNotification = new Date();

  return <div className={'notification-warning-container hide'} id={'notifications-warning-hide'}>
    <div className={'notification-warning-color'}></div>
    <div className={'notification-warning-content'}>
        <div className={'notification-warning-content-icon'}>
          <img src={faceRedIcon} alt="" />
        </div>
        <div className={'notification-warning-content-text'}>
          <span className={'notification-warning-title'}>Su reserva fue rechazada</span>
          <span className={'notification-warning-description'}>Se envio un correo al docente con las aulas sugeridas </span>
          <span className={'notification-warning-date'}>14:00 10/5/2022 </span>
        </div>
    </div>
  </div>
}
