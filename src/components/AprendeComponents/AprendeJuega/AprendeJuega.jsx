import React from "react";
import styled from "styled-components";
import Button from "../../Button/Button";

const SectionStyled = styled.section`
  background-image: url("https://res.cloudinary.com/dvafjaqbd/image/upload/v1714336853/MONTAJE/APRENDE/21_waoapm.png");
  width: 100%;
  height: 100vh;
  position: relative;
  scroll-snap-align: start;
`;

const ContainerStyled = styled.div`
  position: absolute;
  bottom: 63%;
  left: 7%;
  img {
    width: auto;
    height: 14vh;
  }
  h1 {
    font-size: 6rem;
    font-family: "MADE Soulmaze Brush";
    position: absolute;
    bottom: -4%;
    left: 23%;
  }
  @media (max-width: 768px) {
    bottom: 73%;
    left: 20%;
    img {
      width: auto;
      height: 7vh;
    }
    h1 {
      font-size: 5.5rem;
    }
  }
  @media (max-width: 414px) {
    bottom: 73%;
    left: 10%;
    img {
      width: auto;
      height: 6.8vh;
    }
    h1 {
      font-size: 4.5rem;
      left: 19%;
    }
  }
  @media (max-width: 375px) {
    h1 {
      font-size: 4rem;
    }
  }
  @media (max-width: 375px) {
    h1 {
      font-size: 3.5rem;
    }
  }
`;

const ButtonsStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  top: 49%;
  gap: 1.2rem;
  @media (max-width: 768px) {
    top: 37%;
  }
  @media (max-width: 414px) {
    top: 37%;
  }
  @media (max-width: 375px) {
    top: 35%;
  }
  @media (max-width: 320px) {
    top: 33%;
  }
`;

const PerroStyled = styled.img`
  widht: auto;
  height: 77vh;
  position: absolute;
  top: 23%;
  right: 0;
  z-index: 1;
  @media (max-width: 768px) {
    top: 53%;
    height: 47vh;
  }
`;

const TextureStyled = styled.figure`
  position: absolute;
  transform: translate(0, 39%);
  img {
    opacity: 0.5;
    width: auto;
    height: 60vh;
    z-index: 0;
  }
  @media (max-width: 768px) {
    img {
      height: 45vh;
    }
    transform: translate(0, 96.8%);
  }
`;

const AprendeJuega = () => {
  return (
    <SectionStyled>
      <ContainerStyled>
        <img
          src="https://res.cloudinary.com/dvafjaqbd/image/upload/v1714336835/MONTAJE/APRENDE/5-2_SUBR_lcbetg.png"
          alt="Decoración del titulo principal"
        />
        <h1>Juegos</h1>
      </ContainerStyled>
      <ButtonsStyled>
        <Button fondoColor="#1DF4C8">JUEGOS EN LÍNEA</Button>
        <Button fondoColor="#1DF4C8">JUEGOS DE MESA</Button>
      </ButtonsStyled>
      <PerroStyled
        src="https://res.cloudinary.com/dvafjaqbd/image/upload/v1714336848/MONTAJE/APRENDE/5-2_pisnsy.png"
        alt="Perro sentado en la mesa"
      />
      <TextureStyled>
        <img
          src="https://res.cloudinary.com/dvafjaqbd/image/upload/v1714336837/MONTAJE/APRENDE/5-2_TEXTU_pnnfs8.png"
          alt="Textura"
        />
      </TextureStyled>
    </SectionStyled>
  );
};

export default AprendeJuega;
