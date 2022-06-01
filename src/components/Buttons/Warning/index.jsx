import './styles.css'

export const WarningButton = ({title, onClick}) => {
    return<button className={'warning-container'} onClick={onClick}>
        <text className={'warning-text'}>{title}</text>
    </button>
}
