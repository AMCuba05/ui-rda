import faceRedIcon from '../../../assets/svg/face-red.svg'
import "./styles.css"

export const NotificationsWarning = ({date}) =>{
  const dateNotification = new Date();

  return <div className={'notification-warning-container'}>
    <div className={'notification-warning-color'}></div>
    <div className={'notification-warning-content'}>
        <div className={'notification-warning-content-icon'}>
          <img src={faceRedIcon} alt="" />
        </div>
        <div className={'notification-warning-content-text'}>
          <span className={'notification-warning-title'}>Su reserva esta fue rechazada</span>
          <span className={'notification-warning-description'}> <b> Motivo: </b> Aula no disponible </span>
          <span className={'notification-warning-date'}>{date} </span>
        </div>
    </div>
  </div>
}
