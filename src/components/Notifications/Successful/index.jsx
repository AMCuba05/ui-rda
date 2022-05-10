import faceGrennIcon from '../../../assets/svg/face-green.svg'
import "./styles.css"

export const NotificationsSuccessful = () =>{

  return <div className={'notification-container hide'} id={'notifications-hide'}>
    <div className={'notification-color'}></div>
    <div className={'notification-content'}>
        <div className={'notification-content-icon'}>
          <img src={faceGrennIcon} alt="" />
        </div>
        <div className={'notification-content-text'}>
          <span className={'notification-title'}>Su reserva fue aprobada</span>
          <span className={'notification-description'}>Acaba de enviar satisfactoriamente una reserva </span>
          <span className={'notification-date'}>14:00 10/5/2022</span>
        </div>
    </div>
  </div>
}
