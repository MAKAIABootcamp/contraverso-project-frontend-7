import styled from "styled-components";
import "../../../fonts/fonts.css";
import ConfrontaPresentacion from "../../components/Confronta/ConfrontaPresentacion"
import Articulos from "../../components/Confronta/Articulos";
const StyledConfronta= styled.div`
  background-color: #000000;
  display: flex;
  flex-direction: column;
  gap: 5vh;
`;

const Confronta = () => {
  return (
      <StyledConfronta>
        <ConfrontaPresentacion />
        <Articulos></Articulos>
      </StyledConfronta>
  )
};

export default Confronta;