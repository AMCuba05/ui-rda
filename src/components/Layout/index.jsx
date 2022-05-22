import logo from "../../assets/svg/Logo.svg";
import home from "../../assets/svg/Home.svg";
import search from "../../assets/svg/whiteSearchIcon.svg";
import plus from "../../assets/svg/PlusIcon.svg";
import calendar from "../../assets/svg/History.svg";
import settings from "../../assets/svg/Settings.svg";
import userAdd from "../../assets/svg/user-add.svg"
import logout from "../../assets/svg/LogOut.svg";
import clipboard from "../../assets/svg/Clipboard.svg";

import notification from "../../assets/svg/bell-icon.svg";

import "./styles.css";
import { Search } from "../Search";
import { LoginModal } from "../LoginModal";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { obtenerMaterias } from "../../api/materias";
import { setMaterias } from "../../redux/reducers/materias";
import { Title } from "../Title/indes";
import { WhiteButton } from "../Buttons/WhiteButton";
import { CommonButton } from "../Buttons/Common";
import { RegisterModal } from "../RegisterModal";

export const Layout = ({ children }) => {
  const [login, setLogin] = useState(localStorage.getItem("logged") != "0");
  const [register, setRegister] = useState(false);
  const [logged, setLogged] = useState(localStorage.getItem("logged") === "1");
  const [user, setUser] = useState(localStorage.getItem("role"));
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const setup = async () => {
    const data = await obtenerMaterias();
    console.log(data);
    dispatch(setMaterias(data));
  };

  useEffect(() => {
    void setup();
  }, [user]);

  const showModalLogin = () => {
    setLogin(!login);
  };

  const showModalRegister = () =>{
    setRegister(!register);
  }

  const onLogout = () => {
    localStorage.setItem("logged", "0");
    localStorage.setItem("role", "none");
    setLogged(false);
    navigate("/", { replace: true });
  };

  useEffect(() => {
    setLogged(localStorage.getItem("logged") === "1");
    setUser(localStorage.getItem("role"));
  }, [login]);

  return (
    <div className={"layout-container"}>
      <div className={"layout-menu-container"}>
        {login ? <LoginModal onAction={showModalLogin} /> : null}
        {register ? <RegisterModal onAction={showModalRegister}/> : null}
        <div className={"layout-navbar-content"}>
          <img className={"layout-img"} src={logo} alt={""} />

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
                onClick={() => navigate("/crear", { replace: true })}
              >
                <img src={plus} alt={""} />
                <label> Crear Reserva</label>
              </div>
            ) : null}
            <div className={"layout-navbar-item"}>
              <img src={calendar} alt={""} />
              <label> Historial </label>
            </div>
            <div className={
                  window.location.pathname === "/admin/solicitudRegistro"
                    ? "layout-navbar-item-active"
                    : "layout-navbar-item"
                }
              onClick={() => navigate("/admin/solicitudRegistro", { replace: true })}>
              <img src={userAdd} alt={""} />
              <label> Solicitudes </label>
            </div>
            <div className={"layout-navbar-item"}>
              <img src={settings} alt={""} />
              <label> Configurar </label>
            </div>
            {logged ? (
              <div className={"layout-navbar-item"} onClick={onLogout}>
                <img src={logout} alt={""} />
                <label> Cerrar Sesión </label>
              </div>
            ) : null}
          </div>
        </div>
        <div className={"layout-navbar-footer"}>
          <label>Desarrollado por: ShibaTech SRL. </label>
        </div>
      </div>
      <div className={"layout-content"}>
        <div className={"layout-header-with-icon"}>
          {logged ? (
            <div className={"layout-header"}>
              <Search />

              <div className={"layout-header-icon"}>
                <img src={notification} alt={""} />
              </div>
            </div>
          ) : (
            <div className={"layout-header-home"}>
              <div className={"layout-buttons"}>
                <div>
                  <WhiteButton title={"Registrarse"}
                  onClick= {() => {
                    setRegister(true);
                  }}/>
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
              <div className={"layout-title"}>
                <Title title={"Que aula le gustaria reservar?"} />
                <Search />
              </div>
            </div>
          )}
        </div>
        {children}
      </div>
    </div>
  );
};
