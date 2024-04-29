import InicioSomos from "../../components/Inicio/InicioSomos";
import InicioUnirme from "../../components/Inicio/InicioUnirme";
import "./Inicio.scss";

const Inicio = () => {
  return (
      <>
        <div className="inicio">
        <InicioSomos />
        <InicioUnirme />
        </div>
      </>
  );
};

export default Inicio;
