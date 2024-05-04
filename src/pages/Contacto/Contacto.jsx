import "./Contacto.scss";
import Contactanos from "../../components/Contactanos/Somos";
import QueBuscamos from "../../components/Contactanos/QueBuscamos";
import NuestroProceso from "../../components/Contactanos/NuestroProceso";
import NuestroEquipo from "../../components/Contactanos/NuestroEquipo";

const Contacto = () => {
  return (
      <>
        <div className="contacto"></div>
        <Contactanos/>
        <QueBuscamos/>
        <NuestroProceso/>
        <NuestroEquipo/>
      </>
  )
};

export default Contacto;