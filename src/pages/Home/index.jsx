import './styles.css'
import homeImg from "../../assets/svg/homeImg.svg"
export const Home = () => {
    return(<div className={'home-page'}>
    <div className={'home-page-layout'}>
      <div className={'home-title-page'}>
        Que aula le gustaria <span> reservar</span>?
      </div>
      <div className={'home-page-info'}>
        <span>Reserva o consulta un espacio disponible, para actividades
          como cursos, <br /> seminarios, recuperación de clases, etc.</span>
      </div>
      <div className={'home-page-img'}>
        <img src={homeImg} alt="home-img" />
      </div>

    </div>
    </div>
    )

}
