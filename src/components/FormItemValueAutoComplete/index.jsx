import garbageIcon from '../../assets/svg/redGarbageIcom.svg'
import {FormItemValue} from '../FormItemValue'
import { AutoComplete } from 'rsuite'
import './styles.css'
import "rsuite/dist/rsuite-rtl.css";

export const FormItemValueAutoComplete = ({docentOptions, items, setItems}) =>{

    return <div >
        <div className={'form-item-value-autocomplete'}>
            <AutoComplete  data={docentOptions} onSelect={(item) => {
                const newArr = [...items]
                newArr.push(item)
                setItems(newArr)
            }} />

        </div>

        <div className={'form-item-value-docents'}>
            {
                items.length !== 0 ? items.map( (item) =><FormItemValue icon={garbageIcon} value={item} />) : null
            }
        </div>
    </div>
}
