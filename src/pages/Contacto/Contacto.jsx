import "./Contacto.scss";
import Contactanos from "../../components/Contactanos/Somos";
import QueBuscamos from "../../components/Contactanos/QueBuscamos";

const Contacto = () => {
  return (
      <>
        <div className="contacto">Contacto</div>
        <Contactanos/>
        <QueBuscamos/>
      </>
  )
};

export default Contacto;