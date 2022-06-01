import {CommonText} from "../CommonText";
import './styles.css'

export const UserCard = () => {
    const data = JSON.parse(sessionStorage.getItem('user'))
    return<div className={'user-card-container'} >
        <CommonText>{data.nombre }</CommonText>
        <CommonText>{data.email}</CommonText>
    </div>
}
