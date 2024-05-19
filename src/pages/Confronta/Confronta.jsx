import styled from "styled-components";
import "../../../fonts/fonts.css";
import ConfrontaPresentacion from "../../components/Confronta/ConfrontaPresentacion"
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
      </StyledConfronta>
  )
};

export default Confronta;