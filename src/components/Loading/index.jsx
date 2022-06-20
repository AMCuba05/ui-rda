import { TailSpin } from  'react-loader-spinner'
import './styles.css'

export const LoadingSpinner = () => {
    return<div className={'loading-container'}>
        <TailSpin
            height="100"
            width="100"
            color='#01498E'
            ariaLabel='loading'
        />
    </div>
}
