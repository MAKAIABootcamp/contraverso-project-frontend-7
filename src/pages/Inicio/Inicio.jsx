import InicioAprende from "../../components/Inicio/InicioAprende";
import InicioChequea from "../../components/Inicio/InicioChequea";
import InicioConfronta from "../../components/Inicio/InicioConfronta";
import InicioExpresa from "../../components/Inicio/InicioExpresa";
import InicioPodcast from "../../components/Inicio/InicioPodcast";
import InicioSomos from "../../components/Inicio/InicioSomos";
import InicioUnirme from "../../components/Inicio/InicioUnirme";
import "./Inicio.scss";

const Inicio = () => {
  return (
      <>
        <div className="inicio">
        <InicioSomos/>
        <InicioUnirme/>
        <InicioChequea/>
        <InicioConfronta />
        <InicioExpresa />
        <InicioAprende />
        <InicioPodcast />
        </div>
      </>
  );
};

export default Inicio;
