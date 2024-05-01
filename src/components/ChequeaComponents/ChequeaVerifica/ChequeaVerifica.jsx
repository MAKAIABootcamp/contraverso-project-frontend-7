import React from "react";
import Button from "../../Button/Button";
import styled from "styled-components";

const SectionStyled = styled.section`
  background-image: url("https://res.cloudinary.com/dvafjaqbd/image/upload/v1714336860/MONTAJE/CHEQUEA/8_bp66eb.png");
  width: 100%;
  height: 100vh;
`;
const TitleStyled = styled.figure`
  width: 40%;
  position: absolute;
  top: 26%;
  left: 7%;
  img {
    position: relative;
    width: auto;
    height: 12vh;
  }
  h1 {
    position: absolute;
    top: -31%;
    left: 10%;
    font-size: 6rem;
    font-family: "MADE Soulmaze Brush";
  }
  @media (max-width: 1024px) {
    width: 70%;
    top: 20%;
    left: 10%;
    img {
      position: relative;
      width: auto;
      height: 12vh;
    }
    h1 {
      position: absolute;
      top: -35%;
      left: 10%;
      font-size: 5rem;
      font-family: "MADE Soulmaze Brush";
    }
  }
`;
const TextStyled = styled.div`
  position: absolute;
  top: 46%;
  left: 6%;
  width: 35%;
  p {
    font-family: "Filson Pro Book";
    font-size: 2rem;
  }
  @media (max-width: 1024px) {
    position: absolute;
    top: 35%;
    left: 12%;
    width: 40%;
    p {
        font-size: 1.7rem;
    }
  }
`;
const ImageStyled = styled.figure`
  position: relative;
  width: min-content;
  top: 13%;
  left: 40%;
  img {
    width: auto;
    height: 85vh;
  }
  @media (max-width: 1024px) {
    position: relative;
    width: min-content;
    top: 50%;
    left: 15%;
    img {
      width: auto;
      height: 48vh;
    }
  }
`;
const ContainerStyled = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  top: 50%;
  left: 60%;
  transform: translate(80%, -45%);
  @media (max-width: 1024px) {
    position: absolute;
    display: flex;
    flex-direction: column;
    gap: .5rem;
    top: 50%;
    left: 60%;
    transform: translate(8%, -20%);
  }
`;

const ChequeaVerifica = () => {
  return (
    <>
      <SectionStyled>
        <TitleStyled>
          <img
            src="https://res.cloudinary.com/dvafjaqbd/image/upload/v1714336852/MONTAJE/CHEQUEA/2-1_SUBR_k2tiua.png"
            alt="Decoración del título principal"
          />
          <h1>Verifica</h1>
        </TitleStyled>

        <TextStyled>
          <p>Comprueba por tu cuenta si lo que te han dicho es verdad. </p>
        </TextStyled>

        <ImageStyled>
          <img
            src="https://res.cloudinary.com/dvafjaqbd/image/upload/v1714336859/MONTAJE/CHEQUEA/2-2_svonxv.png"
            alt="Perro con lentes"
          />
        </ImageStyled>

        <ContainerStyled>
          <Button>IMÁGENES</Button>
          <Button>VÍDEOS</Button>
          <Button>DIRECCIONES IP</Button>
          <Button>REDES SOCIALES</Button>
        </ContainerStyled>
      </SectionStyled>
    </>
  );
};

export default ChequeaVerifica;
