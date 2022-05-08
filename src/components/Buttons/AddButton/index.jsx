import './styles.css'
import plus from "../../../assets/svg/PlusIcon.svg";

export const AddButton = ({title, onClick}) => {
    return<button onClick={onClick} className={'add-button-container'}>
        <img src={plus} alt={''}/>
        <text className={'add-button-text'}>{title}</text>
    </button>
}
