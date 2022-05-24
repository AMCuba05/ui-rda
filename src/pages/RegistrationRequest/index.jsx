import "./styles.css";
import { BoldText } from "../../components/BoldText";
import { ColoredTag } from "../../components/ColoredTag";
import checkIcon from "../../assets/svg/Check.svg";
import xIcon from "../../assets/svg/x-red.svg";
import {useEffect, useState} from "react";
import {aceptarSolicitudesCreacion, getSolicitudesCreacion, rechazarSolicitudesCreacion} from "../../api/loginDocentes";

export const RegistrationRequest = () => {

    const [docentes, setDocentes] = useState([])
    const [update, setUpdate] = useState(true)

    useEffect(() => {
        void getRequests()
    },[update])

    const getRequests = async () => {
        const data = await getSolicitudesCreacion()
        console.log(data)
        setDocentes(data)
    }

    const onReject = async (id) => {
        try {
            await rechazarSolicitudesCreacion(id)
            alert('Se ha rechazado la solicitud de acceso al sitema')
            setUpdate(!update)
        } catch (e) {
            alert('Ha ocurrido un error')
            setUpdate(!update)
        }
    }

    const onAccept = async (id) => {
        try {
            await aceptarSolicitudesCreacion(id)
            alert('Se ha aceptado la solicitud de acceso al sitema')
            setUpdate(!update)
        } catch (e) {
            alert('Ha ocurrido un error')
            setUpdate(!update)
        }
    }

  return (
    <div className={'registration-request-page'}>
      <div className={"registration-request-title"}>
        <div>Solicitud de registro al sistema</div>
      </div>
      <div className={"table-registration-header"}>
        <div className={'align-flex2'}>
          <BoldText white={true}>Nombre docente</BoldText>
        </div>
        <div className={'align-flex2'}>
          <BoldText white={true}>Correo</BoldText>
        </div>
        <div className={'align-flex'}>
          <BoldText white={true}>Cod Sis</BoldText>
        </div>
        <div className={'align-flex'}>
          <BoldText white={true}>N° de celular</BoldText>
        </div>
        <div className={'align-flex2'}>

        </div>
      </div>
        {
            docentes.map( docente =>(
                <div className={'table-registration-item'}>
                    <div className={'align-flex2'}>
                        <BoldText> {docente.nombre} </BoldText>
                    </div>
                    <div className={'align-flex2'}>
                        <ColoredTag>{docente.email}</ColoredTag>
                    </div>
                    <div className={'align-flex'}>
                        <ColoredTag>{docente.cod_SIS}</ColoredTag>
                    </div>
                    <div className={'align-flex'}>
                        <ColoredTag>{docente.celular}</ColoredTag>
                    </div>
                    <div className={'registration-response align-flex2'}>
                        <span>¿Confirmar cuenta?</span>
                        <img src={checkIcon} alt="" onClick={()=> onAccept(docente.id)} />
                        <img src={xIcon} alt="" onClick={()=> onReject(docente.id)} />
                    </div>
                </div>
            ))
        }
    </div>
  );
};
