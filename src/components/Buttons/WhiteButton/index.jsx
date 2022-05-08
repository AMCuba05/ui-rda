import './styles.css'

export const WhiteButton = ({title}) => {
    return<button className={'button-container-white'}>
        <text className={'button-text-white'}>{title}</text>
    </button>
}
