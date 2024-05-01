import ChequeaVerifica from "../../components/ChequeaComponents/ChequeaVerifica/ChequeaVerifica";
import ChequeaPresentacion from "../../components/ChequeaComponents/presentacion/ChequeaPresentacion";
import "./Chequea.scss";

const Chequea = () => {
  return (
      <>
        <div className="chequea">
          <ChequeaPresentacion/>
          <ChequeaVerifica/>
        </div>
      </>
  )
};

export default Chequea;