import './styles.css'

export const SuccessfulButton = ({title}) => {
    return<button className={'button-successful-container'}>
        <text className={'button-successful-text'}>{title}</text>
    </button>
}
