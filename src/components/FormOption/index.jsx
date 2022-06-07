import {useState} from "react";
import './styles.css'

export const FormOption = ({value, children, multipleOption}) => {
    const [activated, setActivated] = useState(false)
    const handleOption = () => {
        console.log(value)
    }
    return<option value={value} onClick={handleOption}>{children} {multipleOption ? '✅' : null }</option>
}
