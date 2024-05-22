import styled from "styled-components";
import "../../../fonts/fonts.css";
import CarruselProceso from "./CarruselProceso/CarruselProceso";

const StyledNuestroProceso = styled.div`
  background-image: url("https://res.cloudinary.com/dvafjaqbd/image/upload/v1714336891/MONTAJE/SOMOS/24_x3fx6d.png");
  background-size: 100% 100%;
  width: 100%;
  height: 100vh;
  position: relative;
  scroll-snap-align: start;
  display: flex;
  flex-direction: column;
`;

const StyledTitle = styled.div`
  width: 100%;
  height: 30%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledImageBackground = styled.img`
  width: 50%;
  @media (max-width: 800px) {
    width: 90%;
  }
`;
const StyledTitulo = styled.h1`
  font-family: "MADE Soulmaze Brush";
  font-size: 5vw;
  position: absolute;
  color: #161616;
  @media (max-width: 800px) {
    font-size: 10vw;
  }
`;

const StyledContainer = styled.div`
  width: 100%;
  height: 70%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const NuestroProceso = () => {
  return (
    <StyledNuestroProceso>
      <StyledTitle>
        <StyledImageBackground
          src="https://res.cloudinary.com/dvafjaqbd/image/upload/v1714336891/MONTAJE/SOMOS/5-2_SUBR_ec4e6r.png"
          alt="Fondo del texto"
        ></StyledImageBackground>
        <StyledTitulo>NUESTRO PROCESO</StyledTitulo>
      </StyledTitle>
      <StyledContainer>
       <CarruselProceso></CarruselProceso>
      </StyledContainer>
    </StyledNuestroProceso>
  );
};

export default NuestroProceso;
