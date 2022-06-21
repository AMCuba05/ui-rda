import searchIcon from '../../assets/svg/SearchIcon.svg'
import filterIcon from '../../assets/svg/filter.svg'
import arrowIcon from '../../assets/svg/whiteRightArrow.svg'
import './styles.css'
import {FormItemValueDynamic} from '../FormItemValueDynamic';
import {useState} from 'react';
import {filtroGeneral} from "../../api/filtroGeneral";
import {useDispatch, useSelector} from "react-redux";
import {setFilter} from '../../redux/reducers/aulasFiltradas'
import {setLoading} from "../../redux/reducers/loading";
import {nombreAulas} from "../../api/aulasDisponibles";

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
    const [ capacidadMax, setCapacidadMax ] = useState(200)
    const [ capacidadMin, setCapacidadMin ] = useState(0)
    const [ periodos, setPeriodos ] = useState('')
    const [ area, setArea ] = useState('')
    const [name, setName] = useState()
    const [aulas, setAulas] = useState()
    const dispatch = useDispatch()

    const onFilter = async () => {
        dispatch(setLoading(true))
        const date = new Date()
        const data = {
            fecha: date.toISOString().substring(0,10),
            periodos: periodos,
            capacidadMin: capacidadMin,
            capacidadMax: capacidadMax,
            area: area
        }
        const response = await filtroGeneral(data)
        dispatch(setFilter(response))
        dispatch(setLoading(false))
    }

    const getSugerenciasNombre = async () => {
        const date = new Date()
        dispatch(setLoading(true))
        try {
            const response = await nombreAulas({
                fecha: date.toISOString().substring(0,10),
                nombreAula: name
            })
            if (Array.isArray(response)){
                dispatch(setFilter(response))
            } else {
                dispatch(setFilter([response]))
            }
        } catch (e) {
            console.log(e)
            alert('No se encontraron aulas para el número estimado')
        }
        dispatch(setLoading(false))
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
                    <input onChange={e => setName(e.target.value)} className={'search-bar-input'} placeholder={"ej. 691B, vicerectorado, auditorio, etc. "}/>
                    <img className={'filter-icon'} src={filterIcon} alt={''}/>
                </div>
                <div className={'search-bar-button'} onClick={getSugerenciasNombre}>
                    <text className={'search-bar-button-title'}>Buscar Aula</text>
                    <img className={'arrow-icon'} src={arrowIcon} alt={''}/>
                </div>
            </div>
        </div>
    </div>
}
