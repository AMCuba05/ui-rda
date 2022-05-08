import './styles.css'

export const SuccessfulButton = ({title}) => {
    return<button className={'button-container-success'}>
        <text className={'button-text-success'}>{title}</text>
    </button>
}
