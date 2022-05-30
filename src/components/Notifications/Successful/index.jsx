import faceGrennIcon from '../../../assets/svg/face-green.svg'
import "./styles.css"

export const NotificationsSuccessful = ({date}) =>{

  return <div className={'notification-container hide'} id={'notifications-hide'}>
    <div className={'notification-color'}></div>
    <div className={'notification-content'}>
        <div className={'notification-content-icon'}>
          <img src={faceGrennIcon} alt="" />
        </div>
        <div className={'notification-content-text'}>
          <span className={'notification-title'}>Su Solicitud de Reserva fue enviada</span>
          <span className={'notification-description'}>Acaba de enviar satisfactoriamente una solicitud de reserva </span>
          <span className={'notification-date'}>{date}</span>
        </div>
    </div>
  </div>
}