import './styles.css'

export const CommonButton = ({title, onClick}) => {
    return<button onClick={onClick} className={'button-container'}>
        <text className={'button-text'}>{title}</text>
    </button>
}
