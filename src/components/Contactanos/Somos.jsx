import styled from "styled-components";
import "../../../fonts/fonts.css";

const StyledSomos = styled.div`
  background-image: url("https://res.cloudinary.com/dvafjaqbd/image/upload/v1714336904/MONTAJE/SOMOS/22_bajxgg.png");
  height: 30rem;
`;
const StyledTitulo = styled.h1`
  font-family: "MADE Soulmaze";
  color: #ffffff;
  margin-top: 5rem;
  position: absolute;
  margin-left: 39%;
  font-size: 7rem;

  @media (min-width: 1024px) and (max-width: 1366px) {
    margin-left: 46%;
    font-size: 4rem;
    margin-top: 2%;
  }
  @media (max-width: 1024px) {
    margin-left: 46%;
    font-size: 4rem;
    margin-top: 2%;
  }
  @media (max-width: 768px) {
    margin-left: 19rem;
    font-size: 4rem;
  }
  @media (max-width: 600px) {
    margin-left: 12rem;
    font-size: 4rem;
  }
  @media (max-width: 414px) {
    margin-left: 7rem;
    font-size: 3rem;
  }
  @media (max-width: 375px) {
    margin-left: 5rem;
  }
  @media (max-width: 320px) {
    margin-left: 3rem;
    font-size: 3rem;
    margin-block: auto;
  }
`;
const StyledParrafo = styled.p`
  color: #ffffff;
  font-family: "Filson Pro";
  display: flex;
  width: 38rem;
  margin-top: 12rem;
  position: absolute;
  margin-left: 39%;
  font-size: 1.8rem;

  @media (min-width: 1024px) and (max-width: 1366px) {
    margin-left: 46%;
    font-size: 160%;
    margin-top: 13%;
    width: 44%;
  }
  @media (max-width: 1024px) {
    margin-left: 46%;
    font-size: 160%;
    margin-top: 13%;
    width: 44%;
  }
  @media (max-width: 768px) {
    margin-left: 42%;
    font-size: 173%;
    margin-top: 13%;
    width: 51%;
  }
  @media (max-width: 600px) {
    margin-left: 15%;
    font-size: 142%;
    margin-top: 17%;
    width: 76%;
  }
  @media (max-width: 414px) {
    margin-left: 2%;
    font-size: 126%;
    margin-top: 23%;
    width: 93%;
    text-align: center;
  }
  @media (max-width: 375px) {
    margin-left: 2%;
    font-size: 126%;
    margin-top: 23%;
    width: 93%;
    text-align: center;
  }
  @media (max-width: 320px) {
    margin-left: 2%;
    font-size: 126%;
    margin-top: 23%;
    width: 93%;
    text-align: center;
  }
`;
const StyledImgDog = styled.img`
  width: 35rem;
  height: 30rem;

  @media (min-width: 1024px) and (max-width: 1366px) {
    width: 40%;
    margin-top: 5.5%;
    height: 84.5%;
  }
  @media (max-width: 1024px) {
    width: 46%;
    margin-top: 3.1%;
    height: 93.5%;
  }
  @media (max-width: 768px) {
    height: 21rem;
    margin-top: 19.5%;
    width: 46%;
    margin-left: 0%;
  }
  @media (max-width: 600px) {
    height: 47%;
    margin-top: 44%;
    width: 35%;
    margin-left: 10%;
  }
  @media (max-width: 414px) {
    height: 14rem;
    margin-top: 64.5%;
    width: 54%;
    margin-left: 4%;
  }
  @media (max-width: 375px) {
    margin-left: 3%;
    height: 12rem;
    margin-top: 81%;
    width: 54%;
  }
  @media (max-width: 320px) {
    height: 9rem;
    margin-top: 111%;
  }
`;
const StyledLogo = styled.img`
  margin-left: 46rem;
  position: absolute;
  margin-top: 25rem;

  @media (min-width: 1024px) and (max-width: 1366px) {
    margin-top: 23rem;
    width: 18%;
    height: 10%;
    margin-left: 34rem;
  }
  @media (max-width: 1024px) {
    margin-left: 6%;
    width: 26%;
    height: 7%;
    margin-top: 37%;
  }
  @media (max-width: 768px) {
    margin-left: 6%;
    width: 32%;
    height: 7%;
    margin-top: 53%;
  }
  @media (max-width: 600px) {
    margin-left: 6%;
    width: 32%;
    height: 7%;
    margin-top: 69%;
  }
  @media (max-width: 414px) {
    margin-left: 6%;
    width: 32%;
    height: 7%;
    margin-top: 103%;
  }
  @media (max-width: 375px) {
    margin-left: 6%;
    width: 32%;
    height: 7%;
    margin-top: 111%;
  }
  @media (max-width: 320px) {
    margin-left: 6%;
    width: 32%;
    height: 7%;
    margin-top: 136%;
  }
`;
const Somos = () => {
  return (
    <StyledSomos>
      <StyledTitulo>SOMOS</StyledTitulo>
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
