import { useState } from "react";
import garbageIcon from "../../assets/svg/redGarbageIcom.svg";
import { FormItemValue } from "../FormItemValue";
import "./styles.css";
import {FormOption} from "../FormOption";

export const FormItemValueDynamic = ({options, onChange, includes = () => {} }) => {

  return (

    <div>
      <select id="select-hours" /*onChange={handleSetItems}*/ onChange={onChange}  className={"form-item-value-dynamic"}>
        {
            options.map(
                item => <FormOption multipleOption={item.value ? includes(item.value) : false} value={item.value ? item.value : item}>{item.label ? item.label : item}</FormOption>
            )
        }
      </select>

      </div>
  );
};
