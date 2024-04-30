import InicioAprende from "../../components/Inicio/InicioAprende";
import InicioChequea from "../../components/Inicio/InicioChequea";
import InicioConfronta from "../../components/Inicio/InicioConfronta";
import InicioExpresa from "../../components/Inicio/InicioExpresa";
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
        </div>
      </>
  );
};

export default Inicio;
