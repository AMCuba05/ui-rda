import './styles.css'

export const BlackButton = ({title, onClick}) => {
    return<button className={'button-container-black'} onClick={onClick}>
        <text className={'button-text-black'}>{title}</text>
    </button>
}
