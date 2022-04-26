import garbageIcon from '../../assets/svg/redGarbageIcom.svg'
import {FormItemValue} from '../FormItemValue'
import { AutoComplete } from 'rsuite'
import './styles.css'
import "rsuite/dist/rsuite-rtl.css";


/* TO DO me trabe aqui :c no se como mostrar el docente seleccionado
te dejo la documentacion: https://rsuitejs.com/components/auto-complete/
*/
export const FormItemValueAutoComplete = ({docentOptions}) =>{
    
    return <div >
        <div className={'form-item-value-autocomplete'}>
            <AutoComplete  data={docentOptions} onSelect={(item) => {
                console.log(typeof(item));
                
            }} />

        </div>
        
        <div className={'form-item-value-docents'}>
            <FormItemValue value={'Leticia Blanco'} icon={garbageIcon}/>

        </div>
        
          
    </div>
        
}