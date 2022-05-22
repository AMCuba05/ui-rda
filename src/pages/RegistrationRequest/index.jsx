import "./styles.css";
import { BoldText } from "../../components/BoldText";
import { ColoredTag } from "../../components/ColoredTag";
import checkIcon from "../../assets/svg/Check.svg";
import xIcon from "../../assets/svg/x-red.svg";

export const RegistrationRequest = () => {
  return (
    <div>
      <div className={"registration-request-title"}>
        <div>Solicitud de registro al sistema</div>
      </div>
      <div className={"table-registration-header"}>
        <div className={'align-flex'}>
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
      <div className={'table-registration-item'}>
          <div className={'align-flex'}>
            <BoldText> Terry Baptista </BoldText>
          </div>
          <div className={'align-flex2'}>
            <ColoredTag>terry@gmail.com</ColoredTag>
          </div>
          <div className={'align-flex'}>
            <ColoredTag>201239152</ColoredTag>
          </div>
          <div className={'align-flex'}>
            <ColoredTag>60379123</ColoredTag>
          </div>
          <div className={'registration-response align-flex2'}>
            <span>¿Confirmar cuenta?</span>
            <img src={checkIcon} alt="" />
            <img src={xIcon} alt="" />
          </div>
      </div>
    </div>
  );
};
