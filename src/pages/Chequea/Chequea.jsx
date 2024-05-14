import { useState } from "react";
import ChequeaVerifica from "../../components/ChequeaComponents/ChequeaVerifica/ChequeaVerifica";
import ChequeaPresentacion from "../../components/ChequeaComponents/presentacion/ChequeaPresentacion";
import Recomienda from "../../components/ChequeaComponents/Recomienda/RecomiendaCompo";
import DireccionesIP from "../../components/ChequeaComponents/ChequeaVerifica/verifica/DireccionesIP";
import Imagenes from "../../components/ChequeaComponents/ChequeaVerifica/verifica/Imagenes";
import Videos from "../../components/ChequeaComponents/ChequeaVerifica/verifica/Videos";
import RedesSociales from "../../components/ChequeaComponents/ChequeaVerifica/verifica/RedesSociales";
import "./Chequea.scss";

const Chequea = () => {
  const [componentToRender, setComponentToRender] = useState(null);

  const handleButtonClick = (componentName) => {
    setComponentToRender(componentName);
  };

  return (
    <>
      <div className="chequea">
        <ChequeaPresentacion />
        <ChequeaVerifica onButtonClick={handleButtonClick} />
        {componentToRender === 'Imagenes' && <Imagenes/>}
        {componentToRender === 'DireccionesIP' && <DireccionesIP/>}
        {componentToRender === 'Videos' && <Videos/>}
        {componentToRender === 'RedesSociales' && <RedesSociales/>}
        <Recomienda />
      </div>
    </>
  );
};

export default Chequea;
