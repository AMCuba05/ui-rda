import { NotificationsSuccessful } from "../Successful"
import {NotificationsWarning} from "../warning"
import { NotificationsPending } from "../Pending"
import "./styles.css"
import { useNavigate } from "react-router-dom"

import { useEffect, useState } from "react"
import { obtenerNotificacionesDocentes } from "../../../api/obtenerNotificacionesDocente"
import {setLoading} from "../../../redux/reducers/loading";
import {useDispatch} from "react-redux";

export const NotificationsLayout = () =>{
  const navigate = useNavigate()
  const [notificaciones, setNotificaciones] = useState([])
  const dispatch = useDispatch()

  const getNotificaciones = async () => {
      dispatch(setLoading(true))
      const data = await obtenerNotificacionesDocentes(JSON.parse(sessionStorage.user).id);//sessionStorage.user.id);
      setNotificaciones(data)
      dispatch(setLoading(false))
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
