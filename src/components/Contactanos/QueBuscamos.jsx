import styled from "styled-components";
import "../../../fonts/fonts.css";

const StyledBuscamos = styled.div`
  background-image: url("https://res.cloudinary.com/dvafjaqbd/image/upload/v1714336890/MONTAJE/SOMOS/23_okdk9v.png");
  height: 30rem;
  position: relative;
  scroll-snap-align: start;
`;
const StyledBackgroundImage = styled.img`
  margin-left: 37%;
  margin-top: 2rem;
  width: 30rem;

  @media (min-width: 1024px) and (max-width: 1366px) {
    width: 39%;
    margin-left: 26%;
    height: 15%;
  }
  @media (max-width: 1024px) {
    width: 63%;
    margin-left: 15%;
    height: 15%;
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
  margin-left: 38%;
  @media (min-width: 1024px) and (max-width: 1366px) {
    margin-top: -6%;
    font-size: 333%;
    margin-left: 27%;
  }
  @media (max-width: 1024px) {
    margin-top: -7%;
    font-size: 333%;
    margin-left: 19%;
  }
  @media (max-width: 768px) {
    margin-top: -10%;
    font-size: 333%;
    margin-left: 15%;
  }
  @media (max-width: 600px) {
    margin-top: -12%;
    font-size: 278%;
    margin-left: 15%;
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
const StyledTexto = styled.p`
  margin-top: 4rem;
  text-align: center;

  @media (min-width: 1024px) and (max-width: 1366px) {
    margin-left: 5rem;
    width: 64rem;
    margin-top: 5rem;
  }
  @media (max-width: 1024px) {
    margin-left: 5rem;
    width: 44rem;
    margin-top: 5rem;
  }
  @media (max-width: 768px) {
    margin-left: 9rem;
    width: 24rem;
    margin-top: 1rem;
  }
  @media (max-width: 600px) {
    margin-left: 11rem;
    width: 16rem;
    margin-top: 1rem;
  }
  @media (max-width: 414px) {
    margin-left: 2rem;
    width: 16rem;
    margin-top: 2rem;
  }
  @media (max-width: 375px) {
    margin-left: 2rem;
    width: 16rem;
    margin-top: 2rem;
  }
  @media (max-width: 320px) {
    margin-left: 1rem;
    width: 16rem;
  }
`;
const StyledTextoSpan = styled.span`
  color: #ffffff;
  background-color: #000000;
  font-family: "Filson Pro Book";
  font-size: 19px;
  line-height: 29px;
  position: relative;
  z-index: 1;

  @media (min-width: 1024px) and (max-width: 1366px) {
    font-size: 103%;
    line-height: 131%;
  }
  @media (max-width: 1024px) {
    font-size: 103%;
    line-height: 131%;
  }
  @media (max-width: 768px) {
    font-size: 127%;
    line-height: 132%;
  }
  @media (max-width: 600px) {
    font-size: 112%;
    line-height: 132%;
  }
  @media (max-width: 414px) {
    font-size: 99%;
    line-height: 147%;
  }
  @media (max-width: 375px) {
    font-size: 99%;
    line-height: 147%;
  }
  @media (max-width: 320px) {
    font-size: 99%;
    line-height: 147%;
  }
`;

const StyledImagenLateralDerecha = styled.img`
  width: 12rem;
  position: absolute;
  margin-top: -16rem;
  margin-left: 106.5rem;

  @media (min-width: 1024px) and (max-width: 1366px) {
    margin-left: 84%;
    width: 16%;
    margin-top: -18%;
  }
  @media (max-width: 1024px) {
    margin-left: 85%;
    width: 15%;
    margin-top: -16%;
  }
  @media (max-width: 768px) {
    margin-left: 80%;
    width: 20%;
    margin-top: -46%;
  }
  @media (max-width: 600px) {
    margin-left: 80%;
    width: 20%;
    margin-top: -58%;
  }
  @media (max-width: 414px) {
    display: none;
  }
  @media (max-width: 375px) {
    display: none;
  }
  @media (max-width: 320px) {
    display: none;
  }
`;
const StyledImagenLateralIzquierda = styled.img`
  margin-top: -12.5rem;
  height: 24rem;
  filter: brightness(491%) opacity(0.8);
  position: absolute;

  @media (min-width: 1024px) and (max-width: 1366px) {
    height: 62%;
    margin-left: 0rem;
    margin-top: -8%;
    width: 44%;
  }
  @media (max-width: 1024px) {
    height: 62%;
    margin-left: 0rem;
    margin-top: -12%;
    width: 44%;
  }
  @media (max-width: 768px) {
    height: 62%;
    margin-left: 0rem;
    margin-top: -35%;
    width: 55%;
  }
  @media (max-width: 600px) {
    height: 62%;
    margin-left: 0rem;
    margin-top: -49%;
    width: 55%;
  }
  @media (max-width: 414px) {
    height: 62%;
    margin-left: 0rem;
    margin-top: -68%;
    width: 90%;
  }
  @media (max-width: 375px) {
    height: 62%;
    margin-left: 0rem;
    margin-top: -76%;
    width: 90%;
  }
  @media (max-width: 320px) {
    height: 62%;
    margin-left: 0rem;
    margin-top: -93%;
    width: 90%;
  }
`;

const QueBuscamos = () => {
  return (
    <StyledBuscamos>
      <StyledBackgroundImage
        src="https://res.cloudinary.com/dvafjaqbd/image/upload/v1714336894/MONTAJE/SOMOS/6-SUBR_eyuuxc.png"
        alt="Fondo del texto"
      ></StyledBackgroundImage>
      <StyledTitulo>¿QUÉ BUSCAMOS?</StyledTitulo>
      <StyledTexto>
        <StyledTextoSpan>
          La verdad es un terreno en disputa que se construye y se reconstruye{" "}
          <br /> constantemente. Por eso, te acompañaremos con diferentes
          herramientas para <br />
          empezar a confrontar la desinformación. Buscamos apoyarte en tu camino
          hacia una <br /> comunicación más activa, creativa y responsable, que
          le aporte a la construcción de <br /> un mejor futuro para la
          humanidad.
        </StyledTextoSpan>
      </StyledTexto>
      <StyledImagenLateralDerecha
        src="https://res.cloudinary.com/dvafjaqbd/image/upload/v1714336892/MONTAJE/SOMOS/6-FORM_peyy9n.png"
        alt="Imagen lateral derecha"
      ></StyledImagenLateralDerecha>
      <StyledImagenLateralIzquierda
        src="https://res.cloudinary.com/dvafjaqbd/image/upload/v1714336894/MONTAJE/SOMOS/6-TEXTU_gbmnzz.png"
        alt="Imagen lateral izquierda"
      ></StyledImagenLateralIzquierda>
    </StyledBuscamos>
  );
};

export default QueBuscamos;
