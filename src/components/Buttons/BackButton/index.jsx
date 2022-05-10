import './styles.css'
import left from '../../../assets/svg/ChevronLeft.svg'

export const BackButton = ({title, onClick}) => {
    return<button onClick={onClick} className={'back-button-container'}>
        <img src={left}/>
        <text className={'back-button-text'}>{title}</text>
    </button>
}
