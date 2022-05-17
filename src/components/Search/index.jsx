import searchIcon from '../../assets/svg/SearchIcon.svg'
import filterIcon from '../../assets/svg/filter.svg'
import arrowIcon from '../../assets/svg/whiteRightArrow.svg'
import './styles.css'
import {FormItemLabel} from "../FormItemLabel";
import {FormItemValueDynamic} from "../FormItemValueDynamic";

export const Search = () => {
    return<div className={'search-bar-container'}>
        <div className={'search-bar-content'}>
            <div className={'search-bar-input-content'}>
                <div className={'search-bar-input-container'}>
                    <img className={'search-icon'} src={searchIcon} alt={''}/>
                    <input className={'search-bar-input'} placeholder={"ej. 691B, vicerectorado, auditorio, etc. "}/>
                    <img className={'filter-icon'} src={filterIcon} alt={''}/>
                </div>
                <div className={'search-bar-button'}>
                    <text className={'search-bar-button-title'}>Buscar Aula</text>
                    <img className={'arrow-icon'} src={arrowIcon} alt={''}/>
                </div>
            </div>
            <div className={'search-bar-filters'}>
                <div>
                    <FormItemValueDynamic options={['Area', 'Sector Biología', 'Edificio Nuevo', 'Trencito', 'Laboratorios de Física']}/>
                </div>
                <div>
                    <FormItemValueDynamic options={['Cantidad', '10 - 30 est.', '30 - 50 est.', '50 - 70 est.', '70 - 100 est.'
                        , '100 - 150 est.', 'Más de 200 est.']}/>
                </div>
                <div>
                    <FormItemValueDynamic options={['Horario', '6:45 - 8:15', '8:15 - 9:45', '9:45 - 11:15',
                        '11:15 - 12:45', '12:45 - 14:15', '14:15 - 15:45', '15:45 - 17:15', '17:15 - 18:45',
                        '18:45 - 20:15', '20:15 - 21:45']}/>
                </div>
            </div>
        </div>
    </div>
}
