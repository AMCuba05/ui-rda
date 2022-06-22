import { TitlePage } from "../../components/TitlePage";
import { BoldText } from "../../components/BoldText";
import { ColoredTag } from "../../components/ColoredTag";
import { ToggleSwitch } from "../../components/ToggleSwitch";
import FilterIcon from "../../assets/svg/filter.svg";
import searchIcon from "../../assets/svg/SearchIcon.svg";
import arrowIcon from "../../assets/svg/whiteRightArrow.svg";
import "./styles.css";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { obtenerAulas } from "../../api/cambioEstadoAula";
import {useDispatch} from "react-redux";
import {setLoading} from "../../redux/reducers/loading";

export const SearchClassroomAdmin = () => {
  const navigate = useNavigate()
  const [aulas, setAulas] = useState([])
  const [filtro, setFiltro] = useState()
  const [aulaDisponible, setAulaDisponible] = useState(-1)
  const handleAulaDisponible = (newDisponible) => {
    setAulaDisponible(newDisponible);
  }

  const dispatch = useDispatch()
  const goToOptions = (item) => {
      localStorage.setItem('pendingItem', JSON.stringify(item))
      navigate('/admin/reserva', {replace: true});
    }

    const getAulas = async () => {
      dispatch(setLoading(true))
      const data = await obtenerAulas()
      setAulas(data)
      dispatch(setLoading(false))
    }

    const filter = async () => {
        if (filtro === '') {
            console.log('entro')
            await getAulas()
        } else {
          const result = aulas.filter(aula => aula.nombre === filtro );
            setAulas(result)
        }
    }

    const changeStatus =  (id) => {
      let divButton = document.getElementById(id);
      let tagName = divButton.childNodes[0].className;
      if (tagName === "tag-1"){
        divButton.childNodes[0].classList.remove('tag-1');
        divButton.childNodes[0].classList.add('tag-3');
        divButton.childNodes[0].textContent = "Deshabilitado";
      }else{
        divButton.childNodes[0].classList.remove('tag-3');
        divButton.childNodes[0].classList.add('tag-1');
        divButton.childNodes[0].textContent = "Habilitado";
      }
    }

    useEffect(() => {
        if (filtro === ''){
            void getAulas()
        }
    },[filtro])

    useEffect(() => {
      console.log("entra aqui")
        void getAulas()
    },[])

  return (
    <div className={"search-admin-page"}>
      <div className={"search-admin-title"}>
        <TitlePage title={"Buscar Aula"} />
      </div>
      <div className={'search-admin-bar'}>
            <div className={'search-admin-bar-input-content'}>
                <div className={'search-admin-bar-input-container'}>
                    <img className={'search-admin-icon'} src={searchIcon} alt={''}/>
                    <input onChange={e => setFiltro(e.target.value)} className={'search-admin-bar-input'} placeholder={"ej. 691B, vicerectorado, auditorio, etc. "}/>
                </div>
                <div className={'search-admin-bar-button'} onClick={filter} >
                    <text className={'search-admin-bar-button-title'}>Buscar Aula</text>
                    <img className={'arrow-admin-icon'} src={arrowIcon} alt={''}/>
                </div>
            </div>

      <div className={"search-admin-title-filter"}>
          
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
      {aulas.map((item) =>
        <div className={"table-search-admin-item"}>
        <div className={"align-flex" } onClick={() => changeStatus(item.id)}>
          <ToggleSwitch id = {item.id} color={item.disponible_para_uso === 1} />
        </div>
        <div className={"align-flex"}>
          <ColoredTag> {item.nombre}</ColoredTag>
        </div>
        <div className={"align-flex"}>
          <ColoredTag> {item.capacidad} estudiantes</ColoredTag>
        </div>
        <div className={"align-flex"}>
          <ColoredTag>{item.ubicacion}</ColoredTag>
        </div>
        <div className={"align-flex"} id={item.id} >
          {

          item.disponible_para_uso === 1?
          <ColoredTag state={1}> Habilitado</ColoredTag>
          :
          <ColoredTag state={3}> Deshabilitado</ColoredTag>
          }
        </div>
      </div>
      )}

    </div>
  );
};
