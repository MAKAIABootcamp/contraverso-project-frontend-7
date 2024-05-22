import { useDispatch, useSelector } from "react-redux";
import { setSelectedComponent } from "../../app/features/filtersByButtons/filtersByButtonsSlice";
import ChequeaVerifica from "../../components/ChequeaComponents/ChequeaVerifica/ChequeaVerifica";
import ChequeaPresentacion from "../../components/ChequeaComponents/presentacion/ChequeaPresentacion";
import Recomienda from "../../components/ChequeaComponents/Recomienda/RecomiendaCompo";
import DireccionesIP from "../../components/ChequeaComponents/ChequeaVerifica/verifica/DireccionesIP";
import Imagenes from "../../components/ChequeaComponents/ChequeaVerifica/verifica/Imagenes";
import Videos from "../../components/ChequeaComponents/ChequeaVerifica/verifica/Videos";
import RedesSociales from "../../components/ChequeaComponents/ChequeaVerifica/verifica/RedesSociales";
import Valora from "../../components/ChequeaComponents/valora/Valora";
import "./Chequea.scss";

const Chequea = () => {
  const dispatch = useDispatch();

  const componentToRender = useSelector((store) => store.filtersByButtons.selectedComponent);


  const handleButtonClick = (componentName) => {
    dispatch(setSelectedComponent(componentName));
  };

  return (
    <>
      <div className="chequea">
        <ChequeaPresentacion />
        <ChequeaVerifica onButtonClick={handleButtonClick} />
        {componentToRender === 'Imagenes' && <Imagenes/>}
        {componentToRender === 'Videos' && <Videos/>}
        {componentToRender === 'DireccionesIP' && <DireccionesIP/>}
        {componentToRender === 'RedesSociales' && <RedesSociales/>}
        <Valora />
        <Recomienda />
      </div>
    </>
  );
};

export default Chequea;
