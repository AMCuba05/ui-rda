import { NotificationsSuccessful } from "../Successful"
import {NotificationsWarning} from "../warning"
import { NotificationsPending } from "../Pending"
import "./styles.css"
import { useNavigate } from "react-router-dom"

import { useEffect, useState } from "react"
import { obtenerNotificacionesDocentes } from "../../../api/obtenerNotificacionesDocente"

export const NotificationsLayout = () =>{
  const navigate = useNavigate()
  const [notificaciones, setNotificaciones] = useState([])
  
  const getNotificaciones = async () => {
      const data = await obtenerNotificacionesDocentes(JSON.parse(sessionStorage.user).id);//sessionStorage.user.id);
      console.log(data);
      setNotificaciones(data)
    }

    useEffect(() => {
        void getNotificaciones()
    },[])

  return (
    <div className={'notifications-layout'}>
    {notificaciones.map((item, index) => 
      <div>
        {item.mensaje.includes("aceptada") ? <NotificationsSuccessful date = {item.fecha}/>:
          item.mensaje.includes("exito") ? <NotificationsPending date = {item.fecha}/>:
        <NotificationsWarning date = {item.fecha}/>}     
        </div>
    )}
    </div>
    );
    
}
