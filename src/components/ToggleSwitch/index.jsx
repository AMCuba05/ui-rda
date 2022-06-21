import { useState } from "react";
import { cambiarEstadoAula } from "../../api/cambioEstadoAula";
import "./styles.css"

export const ToggleSwitch = ({id, color, getAulas}) => {
  const [toogle, setToogle] = useState(color)
  const handleToogle = () => {
    setToogle(!toogle)
  }
  return(<div onClick={()=> {
    handleToogle()
    cambiarEstadoAula(id)
    getAulas()
  }}>
    <span class="switch">
      <input type="checkbox" checked={toogle} />
      <span class="slider round"></span>
    </span>
    </div>
  );
}
