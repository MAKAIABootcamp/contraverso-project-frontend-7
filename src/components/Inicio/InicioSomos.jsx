import styled from "styled-components";
import "../../../fonts/fonts.css";

const StyledInicioSomos = styled.div`
  background-image: url("https://res.cloudinary.com/dvafjaqbd/image/upload/v1714336889/MONTAJE/INICIO/1_yykjgh.png");
  background-repeat: no-repeat;
  background-size: 100% 100%;
  height: 60%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  padding-left: 5%;
  padding-right: 5%;
  padding-bottom: 5%;
`;

const StyledButtonSomos = styled.button`
  background-color: #1df4c8;
  color: #000000;
  padding: 1rem;
  font-family: "MADE Soulmaze";
  border: none;
  border-radius: 8px;
`;

const InicioSomos = () => {
  return (
    <StyledInicioSomos>
      <StyledButtonSomos>¿QUIÉNES SOMOS?</StyledButtonSomos>
    </StyledInicioSomos>
  );
};

export default InicioSomos;
