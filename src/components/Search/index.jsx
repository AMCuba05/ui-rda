import searchIcon from '../../assets/svg/SearchIcon.svg'
import filterIcon from '../../assets/svg/filter.svg'
import arrowIcon from '../../assets/svg/whiteRightArrow.svg'
import './styles.css'

export const Search = () => {
    return<div className={'search-bar-container'}>
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
}
