import logo from '../../assets/svg/Logo.svg'
import home from '../../assets/svg/Home.svg'
import search from '../../assets/svg/whiteSearchIcon.svg'
import plus from '../../assets/svg/PlusIcon.svg'
import calendar from '../../assets/svg/Calendar.svg'
import settings from '../../assets/svg/Settings.svg'
import './styles.css'
import {Search} from "../Search";

export const Layout = ({children}) => {
    return<div className={'layout-container'} >
        <div className={'layout-menu-container'}>
            <div className={'layout-navbar-content'}>
               <img className={'layout-img'} src={logo}/>

                <div className={'layout-navbar'}>
                    <div className={'layout-navbar-item'}>
                        <img src={home}/>
                        <label> Inicio</label>
                    </div>
                    <div className={'layout-navbar-item'}>
                        <img src={search}/>
                        <label> Buscar Aula</label>
                    </div>
                    <div className={'layout-navbar-item'}>
                        <img src={plus}/>
                        <label> Crear Reserva</label>
                    </div>
                    <div className={'layout-navbar-item'}>
                        <img src={calendar}/>
                        <label> Historial </label>
                    </div>
                    <div className={'layout-navbar-item'}>
                        <img src={settings}/>
                        <label> Configurar </label>
                    </div>
                </div>
            </div>
            <div className={'layout-navbar-footer'}>
                <label>Desarrollado por: ShibaTech SRL. </label>
            </div>


        </div>
        <div className={'layout-content'}>
            <div className={'layout-header'}>
                <Search/>
            </div>
            {children}
        </div>
    </div>
}
