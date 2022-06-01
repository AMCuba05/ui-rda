import { TitlePage } from "../../components/TitlePage";
import { BoldText } from "../../components/BoldText";
import { ColoredTag } from "../../components/ColoredTag";
import FilterIcon from "../../assets/svg/filter.svg";
import "./styles.css";

export const HistoryAdmin = () => {
  return (
    <div className={"history-admin-page"}>
      <div className={"history-admin-title"}>
        <TitlePage title={"Historial de reservas"} />
        <div className={"history-admin-title-filter"}>
        <img src={FilterIcon} alt="" />
        <span>Filtrar</span>

        </div>

      </div>
      <div className={"table-history-header"}>
        <div className={"align-flex"}>
          <BoldText white={true}>N°</BoldText>
        </div>
        <div className={"align-flex6"}>
          <BoldText white={true}>Docente(s)</BoldText>

        </div>
        <div className={"align-flex7"}>
          <BoldText white={true}>Aula</BoldText>
        </div>
        <div className={"align-flex5"}>
          <BoldText white={true}>Cantidad</BoldText>
        </div>
        <div className={"align-flex5"}>
          <BoldText white={true}>Horario</BoldText>
        </div>
        <div className={"align-flex5"}>
          <BoldText white={true}>Fecha</BoldText>
        </div>
        <div className={"align-flex5"}>
          <BoldText white={true}>Motivo</BoldText>
        </div>
        <div className={"align-flex5"}>
          <BoldText white={true}>Estado</BoldText>
        </div>

      </div>
      <div className={"table-history-item"}>
      <div className={"align-flex"}>
          <BoldText> 1</BoldText>
        </div>
        <div className={"align-flex6 history-docents"}>
          <BoldText> Esteban Quito R. </BoldText>
          <span>Leticia Blanco</span>
          <span>Vladimir Costas</span>
        </div>
        <div className={"history-class-list  align-flex7"}>
          <ColoredTag> AUDITORIO</ColoredTag>
          <ColoredTag> 696</ColoredTag>
          <ColoredTag> 696</ColoredTag>

        </div>
        <div className={"align-flex5"}>
          <ColoredTag> 900 est.</ColoredTag>
        </div>
        <div className={"align-flex5"}>
          <ColoredTag> 15:45 -17:15</ColoredTag>
        </div>
        <div className={"align-flex5"}>
          <ColoredTag> 20/05/2022</ColoredTag>
        </div>
        <div className={"align-flex5"}>
          <ColoredTag> Examen</ColoredTag>
        </div>

        <div className={"align-flex5"}>
          <ColoredTag state={3}> Rechazado</ColoredTag>
        </div>
      </div>
    </div>
  );
};
