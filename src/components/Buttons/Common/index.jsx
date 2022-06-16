import './styles.css'

export const CommonButton = ({title, onClick, disabled = false}) => {
    return<button disabled={disabled} onClick={onClick} className={disabled ? 'button-container-disabled' : 'button-container'}>
        <text className={'button-text'}>{title}</text>
    </button>
}
