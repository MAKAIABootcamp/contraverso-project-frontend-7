import styled from "styled-components";
import "../../../fonts/fonts.css";
import "./Contacto.scss";
import Somos from "../../components/Contactanos/Somos";
import QueBuscamos from "../../components/Contactanos/QueBuscamos";
import NuestroProceso from "../../components/Contactanos/NuestroProceso";
import NuestroEquipo from "../../components/Contactanos/NuestroEquipo";


const StyledContacto = styled.div`
  display: flex;
  flex-direction: column;
`;

const Contacto = () => {
  return (
    <StyledContacto>
      <Somos />
      <QueBuscamos />
      <NuestroProceso />
      <NuestroEquipo />
    </StyledContacto>
  );
};

export default Contacto;
