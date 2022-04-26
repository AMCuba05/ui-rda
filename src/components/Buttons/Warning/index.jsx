import './styles.css'

export const WarningButton = ({title}) => {
    return<button className={'warning-container'}>
        <text className={'warning-text'}>{title}</text>
    </button>
}
