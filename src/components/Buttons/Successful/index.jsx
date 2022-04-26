import './styles.css'

export const SuccessfulButton = ({title}) => {
    return<button className={'button-container'}>
        <text className={'button-text'}>{title}</text>
    </button>
}