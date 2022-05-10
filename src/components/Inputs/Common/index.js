import {CommonText} from "../../CommonText";
import './styles.css'

export const CommonInput = ({label}) => {
    return<div className={'common-input-container'}>
        <CommonText>{label}</CommonText>
        <input className={'common-input'}/>
    </div>
}
