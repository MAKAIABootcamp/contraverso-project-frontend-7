import styled from "styled-components";
import "../../../fonts/fonts.css";

const StyledSomos = styled.div`
  background-image: url("https://res.cloudinary.com/dvafjaqbd/image/upload/v1714336904/MONTAJE/SOMOS/22_bajxgg.png");
  height: 30rem;
`;
const StyledText = styled.h1`
  font-family: "MADE Soulmaze";
  color: #ffffff;
  margin-top: 5rem;
  position: absolute;
  margin-left: 39%;
  font-size: 7rem;
`;
const StyledParrafo = styled.p`
  color: #ffffff;
  font-family: "Filson Pro";
  display: flex;
  width: 38rem;
  margin-top: 12rem;
  position: absolute;
  margin-left: 41%;
  font-size: 1.8rem;
`;
const StyledImgDog = styled.img`
  width: 35rem;
  height: 30rem;
`;
const StyledLogo = styled.img`
  margin-left: 72rem;
`;
const Somos = () => {
  return (
    <StyledSomos>
      <StyledText>SOMOS</StyledText>
      <StyledParrafo>
        un proyecto de investigación creación que busca fomentar procesos de
        comunicación críticos, creativos y participativos. Nuestro objetivo es
        contrarrestar el impacto negativo de la desinformación y aportar a la
        transformación de la realidad.
      </StyledParrafo>
      <StyledImgDog src="https://res.cloudinary.com/dvafjaqbd/image/upload/v1714336897/MONTAJE/SOMOS/6-1_h6k3un.png"></StyledImgDog>
      <StyledLogo src="https://res.cloudinary.com/dvafjaqbd/image/upload/v1714336892/MONTAJE/SOMOS/6-2_wcgkbl.png"></StyledLogo>
    </StyledSomos>
  );
};

export default Somos;
