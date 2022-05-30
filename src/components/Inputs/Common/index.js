import { render } from "@testing-library/react";
import {CommonText} from "../../CommonText";
import './styles.css'

export const CommonInput = ({label, input, inputChange, type='alfanumeric'}) => {

    return<div className={'common-input-container'}>
        <CommonText>{label}</CommonText>
        <input type={type} value={input} onChange = {(e) => {inputChange(e.target.value)}} className={'common-input'}/>
    </div>
}