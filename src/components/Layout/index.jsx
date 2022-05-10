import logo from '../../assets/svg/Logo.svg'
import home from '../../assets/svg/Home.svg'
import search from '../../assets/svg/whiteSearchIcon.svg'
import plus from '../../assets/svg/PlusIcon.svg'
import calendar from '../../assets/svg/History.svg'
import settings from '../../assets/svg/Settings.svg'

import logout from '../../assets/svg/LogOut.svg'
import clipboard from '../../assets/svg/Clipboard.svg'

import notification from '../../assets/svg/bell-icon.svg'

import './styles.css'
import {Search} from "../Search";
import {LoginModal} from "../LoginModal";
import {useEffect, useState} from "react";
import { useNavigate } from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {obtenerMaterias} from "../../api/materias";
import {setMaterias} from "../../redux/reducers/materias";

export const Layout = ({children}) => {

    const [login, setLogin] = useState(localStorage.getItem("logged") != '1')
    const [logged, setLogged] = useState(localStorage.getItem("logged") === '1')
    const [user, setUser] = useState(localStorage.getItem('role'))
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const setup = async () => {
        const data = await obtenerMaterias()
        console.log(data)
        dispatch(setMaterias(data))
    }

    useEffect(()=> {
        void setup()
    },[user])

    const showModal = () => {
        setLogin(!login)
    }

    const onLogout = () => {
        localStorage.setItem('logged', '0')
        localStorage.setItem('role', 'none')
        setLogged(false)
        setLogin(true)
        navigate('/', {replace: true})
    }

    useEffect(()=> {
        setLogged(localStorage.getItem("logged") === '1')
        setUser(localStorage.getItem('role'))
    }, [login])

    return<div className={'layout-container'} >
        <div className={'layout-menu-container'}>
            {
                login ? <LoginModal onAction={showModal}/> : null
            }
            <div className={'layout-navbar-content'}>
               <img className={'layout-img'} src={logo} alt={''}/>

                <div className={'layout-navbar'}>
                    {
                        user === 'user' ?
                            <div className={window.location.pathname === '/' ? 'layout-navbar-item-active' :'layout-navbar-item' }
                                 onClick={() => navigate('/' , {replace: true})} >
                                <img src={home} alt={''}/>
                                <label> Inicio</label>
                            </div>
                        : user === 'admin' ?  <div className={window.location.pathname === '/admin/pendientes' ? 'layout-navbar-item-active' :'layout-navbar-item' }
                                    onClick={()=> navigate('/admin/pendientes' , {replace: true})} >
                                <img src={clipboard} alt={''}/>
                                <label> Ver Reservas </label>
                            </div> : null
                    }

                    {
                        user === 'admin' ?
                            <div className={window.location.pathname === '/admin/buscar' ? 'layout-navbar-item-active' :'layout-navbar-item' }
                                 onClick={() => navigate('/admin/buscar' , {replace: true})} >
                                <img src={search} alt={''}/>
                                <label> Buscar Aula</label>
                            </div> :
                            <div className={window.location.pathname === '/buscar' ? 'layout-navbar-item-active' :'layout-navbar-item' }
                                 onClick={() => navigate('/buscar' , {replace: true})} >
                                <img src={search} alt={''}/>
                                <label> Buscar Aula</label>
                            </div>

                    }
                    {
                        user === 'user' ?
                            <div className={(window.location.pathname === '/crear' || window.location.pathname === '/reservar' )
                                ? 'layout-navbar-item-active' :'layout-navbar-item' }
                                 onClick={() => navigate('/crear' , {replace: true})}>
                                <img src={plus} alt={''}/>
                                <label> Crear Reserva</label>
                            </div>
                            : null
                    }
                    <div className={'layout-navbar-item'}>
                        <img src={calendar} alt={''}/>
                        <label> Historial </label>
                    </div>
                    <div className={'layout-navbar-item'}>
                        <img src={settings} alt={''}/>
                        <label> Configurar </label>
                    </div>
                    {
                        logged ?
                            <div className={'layout-navbar-item'} onClick={onLogout}>
                                <img src={logout} alt={''}/>
                                <label> Cerrar Sesión </label>
                            </div>
                        : null
                    }
                </div>
            </div>
            <div className={'layout-navbar-footer'}>
                <label>Desarrollado por: ShibaTech SRL. </label>
            </div>


        </div>
        <div className={'layout-content'}>
            { logged ?
                <div className={'layout-header'}>
                    <Search/>
                </div>
                :
                null
            }
          <div className={'layout-header-with-icon'}>
            <div className={'layout-header-icon'}>
                  <img src={notification} alt={''}/>
            </div>
          </div>
            {children}
        </div>
    </div>
}
