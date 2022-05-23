import searchIcon from '../../assets/svg/SearchIcon.svg'
import filterIcon from '../../assets/svg/filter.svg'
import arrowIcon from '../../assets/svg/whiteRightArrow.svg'
import './styles.css'
import {FormItemValueDynamic} from '../FormItemValueDynamic';
import {useState} from 'react';
import {filtroGeneral} from "../../api/filtroGeneral";
import {useDispatch, useSelector} from "react-redux";
import {setFilter} from '../../redux/reducers/aulasFiltradas'

const AREAS = [
    'Area',
    'AREA VIRTUAL CERCADO',
    'BLOQUE ANTIGUO PROG. AGROQUIM.',
    'BLOQUE INGENIERIA INDUSTRIAL',
    'BLOQUE TALLERES CARPINT. PDTF',
    'BLOQUE TINGLADOS',
    'BLOQUE TRENCITO',
    'CAMPUS FCYT',
    'EDIF. ADMINISTRACION CENTRAL',
    'EDIF. FACULTATIVO LAB. BASICOS',
    'EDIF. NUEVO FCYT',
    'EDIFICIO ELEKTRO',
    'EDIFICIO MEMI',
    'NUEVO EDIF. ACADEMICO 2 (FCYT)',
    'NUEVO PDTF',
    'SECTOR BIOLOGIA',
    'SECTOR FISICA',
    'SECTOR INFORMATICA',
    'SECTOR QUIMICA'
]

export const Search = () => {
    const [ nombre, setNombre ] = useState()
    const [ capacidadMax, setCapacidadMax ] = useState(200)
    const [ capacidadMin, setCapacidadMin ] = useState(0)
    const [ periodos, setPeriodos ] = useState('')
    const [ area, setArea ] = useState('')
    const dispatch = useDispatch()

    const onFilter = async () => {
        const date = new Date()
        const data = {
            fecha: date.toISOString().substring(0,10),
            periodos: periodos,
            capacidadMin: capacidadMin,
            capacidadMax: capacidadMax,
            area: area
        }
        const response = await filtroGeneral(data)
        console.log(response)
        dispatch(setFilter(response))
    }

    const onChangeArea = e => {
        if (area === 'Area' ){
            setArea('')
        } else {
            setArea(e.target.value)
        }

    }

    const onChangePeriodo = e => {
        setPeriodos(e.target.value)
    }

    const onChangeCapacidad = e => {
        if (e.target.value == 'Cantidad') {
            setCapacidadMin(0)
            setCapacidadMax(200)
        } else {
            const capacidad = e.target.value
            const capacidades = capacidad.split(' ')
            setCapacidadMin(capacidades[0])
            setCapacidadMax(capacidades[2])
        }
    }

    return<div className={'search-bar-container'}>
        <div className={'search-bar-content'}>
            <div className={'search-bar-input-content'}>
                <div className={'search-bar-input-container'}>
                    <img className={'search-icon'} src={searchIcon} alt={''}/>
                    <input className={'search-bar-input'} placeholder={"ej. 691B, vicerectorado, auditorio, etc. "}/>
                    <img className={'filter-icon'} src={filterIcon} alt={''}/>
                </div>
                <div className={'search-bar-button'} onClick={onFilter}>
                    <text className={'search-bar-button-title'}>Buscar Aula</text>
                    <img className={'arrow-icon'} src={arrowIcon} alt={''}/>
                </div>
            </div>
            <div className={'search-bar-filters'}>
                <div>
                    <FormItemValueDynamic onChange={onChangeArea} options={AREAS}/>
                </div>
                <div>
                    <FormItemValueDynamic onChange={onChangeCapacidad} options={['Cantidad', '10 - 30 est.', '30 - 50 est.', '50 - 70 est.', '70 - 100 est.'
                        , '100 - 150 est.', 'Más de 200 est.']}/>
                </div>
                <div>
                    <FormItemValueDynamic onChange={onChangePeriodo} options={['Horario', '6:45 - 8:15', '8:15 - 9:45', '9:45 - 11:15',
                        '11:15 - 12:45', '12:45 - 14:15', '14:15 - 15:45', '15:45 - 17:15', '17:15 - 18:45',
                        '18:45 - 20:15', '20:15 - 21:45']}/>
                </div>
            </div>
        </div>
    </div>
}
