import './styles.css'

export const WhiteButton = ({title, onClick}) => {
    return<button className={'button-container-white'} onClick={onClick}>
        <text className={'button-text-white'}>{title}</text>
    </button>
}
