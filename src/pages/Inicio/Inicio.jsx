import InicioChequea from "../../components/Inicio/InicioChequea";
import InicioSomos from "../../components/Inicio/InicioSomos";
import InicioUnirme from "../../components/Inicio/InicioUnirme";
import "./Inicio.scss";

const Inicio = () => {
  return (
      <>
        <div className="inicio">
        <InicioSomos id="inicio-unirme" />
        <InicioUnirme    />
        <InicioChequea />
        </div>
      </>
  );
};

export default Inicio;
