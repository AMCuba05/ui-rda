import './styles.css'

export const CommonButton = ({title}) => {
    return<button className={'button-container'}>
        <text className={'button-text'}>{title}</text>
    </button>
}
