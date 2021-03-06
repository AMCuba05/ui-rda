import logo from "../../assets/svg/Logo.svg";
import home from "../../assets/svg/Home.svg";
import search from "../../assets/svg/whiteSearchIcon.svg";
import plus from "../../assets/svg/PlusIcon.svg";
import calendar from "../../assets/svg/History.svg";
import settings from "../../assets/svg/Settings.svg";
import userAdd from "../../assets/svg/user-add.svg";
import logout from "../../assets/svg/LogOut.svg";
import clipboard from "../../assets/svg/Clipboard.svg";

import notification from "../../assets/svg/bell-icon.svg";

import "./styles.css";
import { Search } from "../Search";
import { LoginModal } from "../LoginModal";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Title } from "../Title/indes";
import { WhiteButton } from "../Buttons/WhiteButton";
import { CommonButton } from "../Buttons/Common";
import { RegisterModal } from "../RegisterModal";
import {UserCard} from "../UserCard";
import {docenteMaterias} from "../../api/docenteMaterias";
import {setMaterias} from "../../redux/reducers/materias";
import {useDispatch, useSelector} from "react-redux";
import { NotificationsLayout } from "../Notifications/NotificationsLayout";
import {LoadingSpinner} from "../Loading";
import {setLoading} from "../../redux/reducers/loading";

export const Layout = ({ children }) => {
  const [login, setLogin] = useState(sessionStorage.getItem("logged") != "0");
  const [register, setRegister] = useState(false);
  const [logged, setLogged] = useState(
    sessionStorage.getItem("logged") === "1"
  );
  const [user, setUser] = useState(sessionStorage.getItem("role"));
  const [currentUser, setCurrentUser] = useState(JSON.parse(sessionStorage.getItem("user")));
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const {value} = useSelector((state) => state.loader);

  const showModalLogin = () => {
    setLogin(!login);
  };

  const showModalRegister = () => {
    setRegister(!register);
  };

  const onLogout = () => {
    sessionStorage.setItem("logged", "0");
    sessionStorage.setItem("role", "none");
    sessionStorage.setItem("token", '0');

    setLogged(false);
    navigate("/", { replace: true });
  };

  useEffect(() => {
    setLogged(sessionStorage.getItem("logged") === "1");
    setUser(sessionStorage.getItem("role"));
  }, [login]);

  const [openNotifications, setOpenNotifications] = useState(false);
  const handleOpenNotifications = () => setOpenNotifications(!openNotifications);

  return (
    <div className={"layout-container"}>
      { value ? <LoadingSpinner/> : null }
      <div className={"layout-menu-container"}>
        {login ? <LoginModal onAction={showModalLogin} registermodal={showModalRegister} /> : null}
        {register ? <RegisterModal onAction={showModalRegister} /> : null}
        <div className={"layout-navbar-content"}>
          <img className={"layout-img"} src={logo} alt={""} />
          <UserCard data={currentUser} />

          <div className={"layout-navbar"}>
            {user === "user" ? (
              <div
                className={
                  window.location.pathname === "/"
                    ? "layout-navbar-item-active"
                    : "layout-navbar-item"
                }
                onClick={() => navigate("/", { replace: true })}
              >
                <img src={home} alt={""} />
                <label> Inicio</label>
              </div>
            ) : user === "admin" ? (
              <div
                className={
                  window.location.pathname === "/admin/pendientes"
                    ? "layout-navbar-item-active"
                    : "layout-navbar-item"
                }
                onClick={() => navigate("/admin/pendientes", { replace: true })}
              >
                <img src={clipboard} alt={""} />
                <label> Ver Reservas </label>
              </div>
            ) : null}

            {user === "admin" ? (
              <div
                className={
                  window.location.pathname === "/admin/buscar"
                    ? "layout-navbar-item-active"
                    : "layout-navbar-item"
                }
                onClick={() => navigate("/admin/buscar", { replace: true })}
              >
                <img src={search} alt={""} />
                <label> Buscar Aula</label>
              </div>
            ) : (
              <div
                className={
                  window.location.pathname === "/buscar"
                    ? "layout-navbar-item-active"
                    : "layout-navbar-item"
                }
                onClick={() => navigate("/buscar", { replace: true })}
              >
                <img src={search} alt={""} />
                <label> Buscar Aula</label>
              </div>
            )}
            {user === "user" ? (
              <div
                className={
                  window.location.pathname === "/crear" ||
                  window.location.pathname === "/reservar"
                    ? "layout-navbar-item-active"
                    : "layout-navbar-item"
                }
                onClick={ async () =>{
                  dispatch(setLoading(true))
                  const user = JSON.parse(sessionStorage.getItem('user'))
                  const data = await docenteMaterias(user.id)
                  dispatch(setMaterias(data))
                  dispatch(setLoading(false))
                  navigate("/crear", { replace: true })}
                }
              >
                <img src={plus} alt={""} />
                <label> Crear Reserva</label>
              </div>
            ) : null}
            {user === "user" ? (
              <div
                className={
                  window.location.pathname === "/history"
                    ? "layout-navbar-item-active"
                    : "layout-navbar-item"
                }
                onClick={() => navigate("history", { replace: true })}
              >
                <img src={calendar} alt={""} />
                <label> Historial </label>
              </div>
            ) : user==="admin" ? (
              <div
                className={
                  window.location.pathname === "/admin/history"
                    ? "layout-navbar-item-active"
                    : "layout-navbar-item"
                }
                onClick={() => navigate("/admin/history", { replace: true })}
              >
                <img src={calendar} alt={""} />
                <label> Historial </label>
              </div>
            ): null}

{user === "user" ? (
              <div
                className={
                  window.location.pathname === "/perfil"
                    ? "layout-navbar-item-active"
                    : "layout-navbar-item"
                }
                onClick={ async () =>{
                  dispatch(setLoading(true))
                  const user = JSON.parse(sessionStorage.getItem('user'))
                  const data = await docenteMaterias(user.id)
                  dispatch(setMaterias(data))
                  dispatch(setLoading(false))
                  navigate("/perfil", { replace: true })}
                }
              >
                <img src={settings} alt={""} />
                <label> Configurar</label>
              </div>
            ) : null}

            {user === "admin" ? (
              <div
                className={
                  window.location.pathname === "/admin/solicitudRegistro"
                    ? "layout-navbar-item-active"
                    : "layout-navbar-item"
                }
                onClick={() =>
                  navigate("/admin/solicitudRegistro", { replace: true })
                }
              >
                <img src={userAdd} alt={""} />
                <label> Solicitudes </label>
              </div>
            ) : null}
            {/*<div className={"layout-navbar-item"}>
              <img src={settings} alt={""} />
              <label> Configurar </label>
              </div>*/}
            {logged ? (
              <div className={"layout-navbar-item"} onClick={onLogout}>
                <img src={logout} alt={""} />
                <label> Cerrar Sesi??n </label>
              </div>
            ) : null}
          </div>
        </div>
        <div className={"layout-navbar-footer"}>
          <label>Desarrollado por: ShibaTech SRL. </label>
        </div>
      </div>
      <div className={"layout-content"}>

          {logged ? (
            <div className={"layout-header"}>

              {user === "user" ? (
                <div className={"layout-header-icon"} onClick={handleOpenNotifications}>
                <img src={notification} alt={""} />
                </div>

              ) : (null)
              }
              {
                openNotifications ? (
                   <NotificationsLayout/>
                ): (null)
                }

            </div>
          ) : (
            <div className={"layout-header-home"}>
              <div className={"layout-buttons"}>
                <div>
                  <WhiteButton
                    title={"Registrarse"}
                    onClick={() => {
                      setRegister(true);
                    }}
                  />
                </div>
                <div>
                  <CommonButton
                    title={"Iniciar Sesion"}
                    onClick={() => {
                      setLogin(true);
                    }}
                  />
                </div>
              </div>
              {/*<div className={"layout-title"}>
                <Title title={"Que aula le gustaria reservar?"} />
                <Search />
              </div>*/}
            </div>
          )}

        {children}
      </div>
    </div>
  );
};
