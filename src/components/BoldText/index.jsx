import './styles.css'

export const BoldText = ({children, white}) => {
    return<text className={ white ? 'bold-text-white' : 'bold-text' } >{children}</text>
}
