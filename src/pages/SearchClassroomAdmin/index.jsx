import { TitlePage } from "../../components/TitlePage";
import { BoldText } from "../../components/BoldText";
import { ColoredTag } from "../../components/ColoredTag";
import { ToggleSwitch } from "../../components/ToggleSwitch";
import FilterIcon from "../../assets/svg/filter.svg";
import searchIcon from "../../assets/svg/SearchIcon.svg";
import arrowIcon from "../../assets/svg/whiteRightArrow.svg";
import "./styles.css";

export const SearchClassroomAdmin = () => {
  return (
    <div className={"search-admin-page"}>
      <div className={"search-admin-title"}>
        <TitlePage title={"Buscar Aula"} />
      </div>
      <div className={'search-admin-bar'}>
            <div className={'search-admin-bar-input-content'}>
                <div className={'search-admin-bar-input-container'}>
                    <img className={'search-admin-icon'} src={searchIcon} alt={''}/>
                    <input className={'search-admin-bar-input'} placeholder={"ej. 691B, vicerectorado, auditorio, etc. "}/>
                </div>
                <div className={'search-admin-bar-button'} >
                    <text className={'search-admin-bar-button-title'}>Buscar Aula</text>
                    <img className={'arrow-admin-icon'} src={arrowIcon} alt={''}/>
                </div>
            </div>

      <div className={"search-admin-title-filter"}>
          <img src={FilterIcon} alt="" />
          <span>Filtrar</span>
        </div>
      </div>

      <div className={"table-search-admin-header"}>
        <div className={"align-flex"}>
          <BoldText white={true}>Habilitar/Deshabilitar</BoldText>
        </div>
        <div className={"align-flex"}>
          <BoldText white={true}>Aula</BoldText>
        </div>
        <div className={"align-flex"}>
          <BoldText white={true}>Capacidad</BoldText>
        </div>
        <div className={"align-flex"}>
          <BoldText white={true}>Lugar</BoldText>
        </div>
        <div className={"align-flex"}>
          <BoldText white={true}>Estado</BoldText>
        </div>
      </div>
      <div className={"table-search-admin-item"}>
        <div className={"align-flex"}>
          <ToggleSwitch />
        </div>
        <div className={"align-flex"}>
          <ColoredTag> AUDITORIO</ColoredTag>
        </div>
        <div className={"align-flex"}>
          <ColoredTag> 150 estudiantes</ColoredTag>
        </div>
        <div className={"align-flex"}>
          <ColoredTag>Edificio Nuevo</ColoredTag>
        </div>
        <div className={"align-flex"}>
          <ColoredTag state={1}> Habilitado</ColoredTag>
        </div>
      </div>
    </div>
  );
};
