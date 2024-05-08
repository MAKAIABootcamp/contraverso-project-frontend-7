import styled from "styled-components";
import "../../../fonts/fonts.css";

const StyledSomos = styled.div`
  background-image: url("https://res.cloudinary.com/dvafjaqbd/image/upload/v1714336904/MONTAJE/SOMOS/22_bajxgg.png");
  height: 83vh;
  scroll-snap-align: start;
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  @media screen and (max-width: 500px) {
    flex-direction: column;
    justify-content: center;
  }

`;

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 60%;
  height: 100%;
  justify-content: center;

  @media screen and (max-width: 500px) {
    height: 50%;
    width: 100%;
  }
`;

const StyledTitulo = styled.h1`
  font-family: "MADE Soulmaze brush";
  color: #ffffff;
  font-size: 10em;

  @media (max-width:1300px){
    font-size: 8em;
  }

  @media screen and (max-width: 700px) {
    font-size: 3em;
    align-self: center;
  }
`;
const StyledParrafo = styled.p`
  color: #ffffff;
  font-family: "Filson Pro Book";
  display: flex;
  width: 100%;
  font-size: 2em;
  padding-left: 5%;
  padding-right: 5%;

  @media (max-width:1300px){
    font-size: 1.8em;
  }

  @media screen and (max-width: 800px) {
    font-size: 1em;
    align-self: center;
  }
`;

const StyledImgDog = styled.img`
  width: 40%;
  max-height: 100%;
  align-self: flex-end;
  
  @media (max-width:1300px){
    align-self: center;
  }
`;
const StyledLogo = styled.img`
width: 30%;
align-self: flex-end;
padding-right: 5%;
`;
const Somos = () => {
  return (
    <StyledSomos>
      <StyledImgDog src="https://res.cloudinary.com/dvafjaqbd/image/upload/v1714336897/MONTAJE/SOMOS/6-1_h6k3un.png"></StyledImgDog>
      <StyledContainer>
        <StyledTitulo>SOMOS</StyledTitulo>
        <StyledParrafo>
          un proyecto de investigación creación que busca fomentar procesos de
          comunicación críticos, creativos y participativos. Nuestro objetivo es
          contrarrestar el impacto negativo de la desinformación y aportar a la
          transformación de la realidad.
        </StyledParrafo>
        <StyledLogo src="https://res.cloudinary.com/dvafjaqbd/image/upload/v1714336892/MONTAJE/SOMOS/6-2_wcgkbl.png"></StyledLogo>
      </StyledContainer>
    </StyledSomos>
  );
};

export default Somos;
