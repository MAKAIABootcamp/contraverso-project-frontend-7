import ChequeaVerifica from "../../components/ChequeaComponents/ChequeaVerifica/ChequeaVerifica";
import ChequeaPresentacion from "../../components/ChequeaComponents/presentacion/ChequeaPresentacion";
import "./Chequea.scss";
import Recomienda from "../../components/ChequeaComponents/Recomienda/RecomiendaCompo";

const Chequea = () => {
  return (
      <>
        <div className="chequea">
          <ChequeaPresentacion/>
          <ChequeaVerifica/>
          <Recomienda/>
        </div>
      </>
  )
};

export default Chequea;