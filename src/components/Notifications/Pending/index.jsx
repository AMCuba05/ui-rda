import focusIcon from '../../../assets/svg/focus.svg'
import "./styles.css"

export const NotificationsPending = ({date}) =>{
  const dateNotification = new Date();

  return <div className={'notification-pending-container'}>
    <div className={'notification-pending-color'}></div>
    <div className={'notification-pending-content'}>
        <div className={'notification-pending-content-icon'}>
          <img src={focusIcon} alt="" />
        </div>
        <div className={'notification-pending-content-text'}>
          <span className={'notification-pending-title'}>Su reserva esta pendiente</span>
          <span className={'notification-pending-description'}> <b> Motivo: </b> Esperando respuesta del administrador</span>
          <span className={'notification-pending-date'}>{date}</span>
        </div>
    </div>
  </div>
}
