import { cambiarEstadoAula } from "../../api/cambioEstadoAula";
import "./styles.css"

export const ToggleSwitch = ({id}) => {
  return(<div>
    <span class="switch" onClick={()=>cambiarEstadoAula(id) }>
      <input type="checkbox"/>
      <span class="slider round" ></span>
    </span>
    </div>
  );
}
