import { NotificationsSuccessful } from "../Successful"
import {NotificationsWarning} from "../warning"
import { NotificationsPending } from "../Pending"
import "./styles.css"

export const NotificationsLayout = () =>{

  return <div className={'notifications-layout'}>

    <NotificationsSuccessful/>
    <NotificationsWarning/>
    <NotificationsPending/>
    <NotificationsPending/>
    <NotificationsSuccessful/>
    <NotificationsWarning/>
  </div>
}
