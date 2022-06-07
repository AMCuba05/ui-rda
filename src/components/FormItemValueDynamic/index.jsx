import { useState } from "react";
import garbageIcon from "../../assets/svg/redGarbageIcom.svg";
import { FormItemValue } from "../FormItemValue";
import "./styles.css";

export const FormItemValueDynamic = ({options, onChange, addOption}) => {
  /*let array = [];
  const [items, setItems] = useState([]);


  const handleSetItems = () => {
    let selection = document.getElementById("select-hours");
    array.push(selection.options[selection.selectedIndex].value);
    setItems(array);
    console.log(array);
  }
  const removeItem = (item) =>{

  }
  */
  return (

    <div>
      <select id="select-hours" /*onChange={handleSetItems}*/ onChange={onChange}  className={"form-item-value-dynamic"}>
        {
            options.map(
                item => <option value={item.value ? item.value : item}>{item.label ? item.label : item}</option>
                //item => <option value={item.value ? item.label : item}>{item.label ? item.label : item}</option>
            )
        }
      </select>
      {/*addOption ?
      <div className={'form-item-value-hours'}>
            {
                items.length !== 0 ? items.map( (item) =><FormItemValue icon={garbageIcon} value={item} onClickIcon={()=> removeItem(item)} />) : null
            }
        </div>
          : null*/}
      </div>
  );
};
