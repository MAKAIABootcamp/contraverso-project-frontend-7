import styled from "styled-components";

const StyledConfronta = styled.div`
  background-image: url("https://res.cloudinary.com/dvafjaqbd/image/upload/v1714336860/MONTAJE/CONFRONTA/13_k68ygl.png");
  background-repeat: no-repeat;
  background-size: 100% 100%;
  height: 80vh;
  display: flex;
  flex-direction: row;

  @media (max-width: 500px) {
    flex-direction: column;
    justify-content: space-between;
  }
`;
const StyledContainer = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  @media (max-width: 500px) {
    width: 100%;
    position: relative;
    height: 50%;
    flex-direction: column-reverse;
    justify-content: center;
    padding-top: 10%;
  }
`;
const StyledTexture = styled.img`
  width: 50%;
  max-height: 90%;
  filter: brightness(1) opacity(0.8);
  mix-blend-mode: color-burn;
  z-index: 1;
  bottom: 5vh;
  position: absolute;
  @media (max-width: 500px) {
    display: none;
  }
`;

const StyledTexto = styled.p`
  z-index: 2;
  width: 50%;
  margin: 5%;
  position: absolute;
  @media (max-width: 500px) {
    width: 100%;
    position: relative;
    margin: 0;
    padding: 5%;
  }

  @media (min-width: 501px) and (max-width: 1115px) {
    width: 100%;
    margin: 0;
    padding: 8%;
  }
`;

const StyledSpan = styled.span`
  color: #f1f1d8;
  background-color: #000000;
  font-family: "Filson Pro Book";
  font-size: 2.5vw;
  line-height: 1.5;

  @media (max-width: 500px) {
    font-size: 4vw;
  }

  @media (min-width: 501px) and (max-width: 700px) {
    font-size: 5vw;
  }
  @media (min-width: 701px) and (max-width: 900px) {
    font-size: 4vw;
  }
`;

const StyledTitle = styled.img`
  width: 100%;
  margin-top: auto;
  margin-bottom: 5%;
  z-index: 3;
  @media (max-width: 500px) {
    margin-bottom: 0%;
  }
`;
const StyledIcono = styled.img`
  width: 50%;
  max-height: 100%;
  align-self: flex-end;
  @media (max-width: 500px) {
    width: 80%;
    max-height: 45%;
    align-self: center;
  }
`;
const ConfrontaPresentacion = () => {
  return (
    <StyledConfronta>
      <StyledContainer>
        <StyledTexto>
          <StyledSpan>
            Encuentra diversos recursos útiles para cuestionar la información
            poco confiable, incluso si coincide tus creencias previas.
          </StyledSpan>
        </StyledTexto>
        <StyledTitle src="https://res.cloudinary.com/dvafjaqbd/image/upload/v1714336869/MONTAJE/CONFRONTA/3-confronta_nlzskb.png"></StyledTitle>
        <StyledTexture src="https://res.cloudinary.com/dvafjaqbd/image/upload/v1714336869/MONTAJE/CONFRONTA/3-TEXTU_heegu8.png"></StyledTexture>
      </StyledContainer>
      <StyledIcono src="https://res.cloudinary.com/dvafjaqbd/image/upload/v1714336880/MONTAJE/CONFRONTA/3-1_bbp8fh.png"></StyledIcono>
    </StyledConfronta>
  );
};

export default ConfrontaPresentacion;
