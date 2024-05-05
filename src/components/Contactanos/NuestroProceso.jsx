import styled from "styled-components";
import "../../../fonts/fonts.css";

const StyledNuestroProceso = styled.div`
  background-image: url("https://res.cloudinary.com/dvafjaqbd/image/upload/v1714336891/MONTAJE/SOMOS/24_x3fx6d.png");
  height: 30rem;
`;
const StyledImageBackground = styled.img`
  margin-left: 37%;
  margin-top: 2rem;
  width: 30rem;

  @media (min-width: 1024px) and (max-width: 1366px) {
    width: 50%;
    margin-left: 26%;
    height: 16%;
    margin-top: 4rem;
  }
  @media (max-width: 1024px) {
    width: 60%;
    margin-left: 26%;
    height: 15%;
    margin-top: 3rem;
  }
  @media (max-width: 768px) {
    width: 87%;
    margin-left: 6%;
    height: 14%;
  }
  @media (max-width: 600px) {
    width: 87%;
    margin-left: 6%;
    height: 12%;
  }
  @media (max-width: 414px) {
    width: 87%;
    margin-left: 6%;
    height: 12%;
  }
  @media (max-width: 375px) {
    width: 87%;
    margin-left: 6%;
    height: 12%;
  }
  @media (max-width: 320px) {
    width: 91%;
  }
`;
const StyledTitulo = styled.h1`
  font-family: "MADE Soulmaze Brush";
  font-size: 3rem;
  margin-top: -5rem;
  text-align: center;
  @media (max-width: 1024px) {
    margin-top: -8%;
    font-size: 307%;
    margin-left: 14%;
  }
  @media (max-width: 768px) {
    margin-top: -10%;
    font-size: 308%;
    margin-left: 0%;
  }
  @media (max-width: 600px) {
    margin-top: -10%;
    font-size: 254%;
    margin-left: 2%;
  }
  @media (max-width: 414px) {
    margin-top: -15%;
    font-size: 171%;
    margin-left: 8%;
  }
  @media (max-width: 375px) {
    margin-top: -15%;
    font-size: 171%;
    margin-left: 13%;
  }
  @media (max-width: 320px) {
    margin-top: -15%;
    font-size: 171%;
    margin-left: 8%;
  }
`;

const NuestroProceso = () => {
  return (
    <StyledNuestroProceso>
      <StyledImageBackground
        src="https://res.cloudinary.com/dvafjaqbd/image/upload/v1714336891/MONTAJE/SOMOS/5-2_SUBR_ec4e6r.png"
        alt="Fondo del texto"
      ></StyledImageBackground>
      <StyledTitulo>NUESTRO PROCESO</StyledTitulo>
    </StyledNuestroProceso>
  );
};

export default NuestroProceso;
