import garbageIcon from '../../assets/svg/redGarbageIcom.svg'
import {FormItemValue} from '../FormItemValue'
import { AutoComplete } from 'rsuite'
import './styles.css'
import "rsuite/dist/rsuite-rtl.css";
import {useState} from "react";

export const FormItemValueAutoComplete = ({docentOptions, items, setItems}) =>{

    const [value, setValue] = useState()

    return <div >
        <div className={'form-item-value-autocomplete'}>
            <AutoComplete value={value} data={docentOptions} onSelect={ (item, label) => {
                const newArr = [...items]
                newArr.push(label.label)
                setItems(newArr)
            }} onChange={value => setValue(value)} onClose={() => setValue('')}
            />

        </div>

        <div className={'form-item-value-docents'}>
            {
                items.length !== 0 ? items.map( (item) =><FormItemValue icon={garbageIcon} value={item} />) : null
            }
        </div>
    </div>
}
