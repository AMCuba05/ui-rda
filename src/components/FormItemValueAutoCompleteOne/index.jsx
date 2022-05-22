import garbageIcon from '../../assets/svg/redGarbageIcom.svg'
import {FormItemValue} from '../FormItemValue'
import { AutoComplete, Button } from 'rsuite'
import './styles.css'
import "rsuite/dist/rsuite-rtl.css";
import {useState} from "react";

export const FormItemValueAutoCompleteOne = ({docentOptions, items, setItems}) =>{

    const [value, setValue] = useState()
    const [disable, setDisable] = useState(false);

    return <div >
        <div className={'form-item-value-autocomplete-one'}>
            <AutoComplete className={'form-item-value-autocomplete-one-input'} disabled={disable} value={value} data={docentOptions} onSelect={ (item, label) => {
                const newArr = [...items]
                newArr.push(label.label)
                setItems(newArr)
            }} onChange={value => setValue(value)} onClose={() => setDisable(true)}
            />
            <div className={'form-item-value-autocomplete-clear'} onClick={() => setDisable(false)}>
              <img src={garbageIcon} alt={'eliminar'}/>
            </div>

        </div>


    </div>
}
