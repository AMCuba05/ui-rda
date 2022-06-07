import { useState } from "react";
import { cambiarEstadoAula } from "../../api/cambioEstadoAula";
import "./styles.css"

export const ToggleSwitch = () => {
  const [toogle, setToogle] = useState(false)
  const handleToogle = () => {
    setToogle(!toogle)
  }
  return(<div onClick={() => {cambiarEstadoAula(id) }}>
    <span class="switch">
      <input type="checkbox" checked={toogle} />
      <span class="slider round"></span>
    </span>
    </div>
  );
}
