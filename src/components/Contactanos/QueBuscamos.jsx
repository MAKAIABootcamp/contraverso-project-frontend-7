import styled from "styled-components";
import "../../../fonts/fonts.css";

const StyledBuscamos = styled.div`
  background-image: url("https://res.cloudinary.com/dvafjaqbd/image/upload/v1714336890/MONTAJE/SOMOS/23_okdk9v.png");
  background-size: 100% 100%;
  width: 100%;
  height: 100vh;
  position: relative;
  scroll-snap-align: start;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const StyledTitle = styled.div`
  width: 100%;
  height: 20%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 5%;
`;
const StyledBackgroundImage = styled.img`
  width: 50%;
  @media (max-width:800px){
    width: 90%;
  }
`;
const StyledTitulo = styled.h1`
  font-family: "MADE Soulmaze Brush";
  font-size: 5vw;
  position: absolute;

  @media (max-width:800px){
    font-size: 10vw;
  }
`;
const StyledTexto = styled.p`
  text-align: center;
  padding-top: 10%;
  height: 70%;
  @media (max-width:1000px){
    padding-left: 5%;
    padding-right: 5%;
  }
`;
const StyledTextoSpan = styled.span`
  color: #ffffff;
  background-color: #000000;
  font-family: "Filson Pro Book";
  font-size: 1.5vw;
  line-height: 1.5;
  position: relative;
  z-index: 1;
  @media (max-width:600px){
    font-size: 3.5vw;
  }
  @media (min-width: 601px) and (max-width:800px){
   font-size: 3vw;
  }
  @media (min-width: 801px) and (max-width:1000px){
   font-size: 2.2vw;
  }
`;

const StyledFigure = styled.img`
  right: 0;
  width: 20%;
  position: absolute;
  @media (max-width:800px){
    display: none;
  }
`;

const StyledTexture = styled.img`
  filter: brightness(491%) opacity(0.8);
  width: 40%;
  bottom: 0;
  position: absolute;
  @media (max-width:500px){
    width: 80%;
  }
  @media (min-width: 501px) and (max-width:800px){
    width: 50%
  }
`;

const QueBuscamos = () => {
  return (
    <StyledBuscamos>
      <StyledTitle>
        <StyledBackgroundImage
          src="https://res.cloudinary.com/dvafjaqbd/image/upload/v1714336894/MONTAJE/SOMOS/6-SUBR_eyuuxc.png"
          alt="Fondo del texto"
        ></StyledBackgroundImage>
        <StyledTitulo>¿QUÉ BUSCAMOS?</StyledTitulo>
      </StyledTitle>

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
      <StyledFigure
        src="https://res.cloudinary.com/dvafjaqbd/image/upload/v1714336892/MONTAJE/SOMOS/6-FORM_peyy9n.png"
        alt="Imagen lateral derecha"
      ></StyledFigure>
      <StyledTexture
        src="https://res.cloudinary.com/dvafjaqbd/image/upload/v1714336894/MONTAJE/SOMOS/6-TEXTU_gbmnzz.png"
        alt="Imagen lateral izquierda"
      ></StyledTexture>
    </StyledBuscamos>
  );
};

export default QueBuscamos;
