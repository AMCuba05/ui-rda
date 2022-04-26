import './styles.css'

export const CommonText = ({children, white}) => {
    return<text className={ white ? 'common-text-white' : 'common-text' } >{children}</text>
}
