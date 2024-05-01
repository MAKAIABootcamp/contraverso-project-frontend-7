import AprendeBienvenida from "../../components/AprendeComponents/AprendeBienvenida/AprendeBienvenida";
import AprendeJuega from "../../components/AprendeComponents/AprendeJuega/AprendeJuega";
import "./Aprende.scss";

const Aprende = () => {
  return (
      <>
        <div className="aprende">
          <AprendeBienvenida/>
          <AprendeJuega/>
        </div>
      </>
  )
};

export default Aprende;