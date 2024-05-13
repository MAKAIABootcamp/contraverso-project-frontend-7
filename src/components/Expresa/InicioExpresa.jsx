import styled from "styled-components";
import BotonExpresa from "./BotonExpresa";

const StyledExpresa = styled.div`
  background-image: url("https://res.cloudinary.com/dvafjaqbd/image/upload/v1714336876/MONTAJE/EXPRESA/16_wsdajl.png");
  height: 80vh;
  display: flex;
  flex-direction: row;
  scroll-snap-align: start;
`;

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  align-self: flex-start;
  z-index: 4;
  position: absolute;
  padding-left: 30%;
  padding-right: 5%;
  padding-top: 5%;

  @media (max-width: 570px) {
    padding-left: 5%;
  }
  @media (min-width: 571px) and (max-width: 800px) {
    padding-left: 40%;
  }
`;

const StyledImgTexture = styled.img`
  width: 40%;
  height: auto;
  z-index: 1;
  align-self: flex-start;
  margin-left: auto;
  margin-bottom: auto;

  filter: brightness(491%) opacity(0.8);
`;

const StyledImgIcono = styled.img`
  width: 40%;
  max-height: 100%;
  z-index: 3;
  align-self: flex-end;

  @media (max-width: 800px) {
    width: 60%;
  }
`;

const StyledTextoContainer = styled.p`
  @media (max-width: 800px) {
    margin-bottom: 5%;
  }
`;

const StyledTextoSpan = styled.span`
  color: #f1f1d8;
  background-color: #000000;
  font-family: "Filson Pro Book";
  font-size: 2rem;
  @media screen and (max-width: 800px) {
    font-size: 1.3rem;
  }
`;

const StyledImgTitle = styled.img`
  width: 55%;
  align-self: flex-end;
  margin-left: 20%;
  position: absolute;
  z-index: 2;
  @media (max-width: 800px) {
    width: 80%;
  }
`;

const StyledBotonExpresa = styled(BotonExpresa)`
  background-color: #fff35f;
  color: #000000;
  padding: 0.5rem;
  font-family: "MADE Soulmaze";
  font-size: 20px;
  text-decoration: none;
  border: none;
  font-weight: bold;
  box-shadow: 0px 1px 3px #1c1c21;
  cursor: pointer;

  align-self: flex-end;

  margin-top: auto;
  margin-bottom: auto;
  z-index: 4;
  @media (max-width: 800px) {
    align-self: center;
    margin-top: 0;
  }
`;

const InicioExpresa = () => {
  const handleClick = () => {
    console.log("click");
  };

  return (
    <StyledExpresa>
      <StyledImgIcono
        src="https://res.cloudinary.com/dvafjaqbd/image/upload/v1714336875/MONTAJE/EXPRESA/4-1_no0oii.png"
        alt="Icon"
      ></StyledImgIcono>
      <StyledImgTitle
        src="https://res.cloudinary.com/dvafjaqbd/image/upload/v1714336879/MONTAJE/EXPRESA/4-expresa_gwsluu.png"
        alt="textoImagen"
      ></StyledImgTitle>

      <StyledContainer>
        <StyledTextoContainer>
          <StyledTextoSpan>
            Interactúa con nuestra colección creativa sobre el problema de la
            desinformación. Pregunta, propone y manifiéstate abiertamente. El
            debate es central para comprender y transformar la realidad.
          </StyledTextoSpan>
        </StyledTextoContainer>
        <StyledBotonExpresa onClick={handleClick}>
          ENVIAR APORTE
        </StyledBotonExpresa>
      </StyledContainer>
      <StyledImgTexture
        src="https://res.cloudinary.com/dvafjaqbd/image/upload/v1714336881/MONTAJE/EXPRESA/4-TEXTU_jhes8z.png"
        alt=""
      ></StyledImgTexture>
    </StyledExpresa>
  );
};

export default InicioExpresa;
