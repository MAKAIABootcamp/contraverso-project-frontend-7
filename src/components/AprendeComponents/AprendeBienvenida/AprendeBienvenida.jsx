import React from "react";
import styled from "styled-components";

const SectionStyled = styled.section`
  background-image: url("https://res.cloudinary.com/dvafjaqbd/image/upload/v1714336853/MONTAJE/APRENDE/21_waoapm.png");
  width: 100%;
  height: 100vh;
  scroll-snap-align: start;
`;

const TextStyled = styled.p`
    color: #F1F1D8;
    font-size: 2.3rem;
    font-family: "Filson Pro Book";
    line-height: 1;
    width: 55%;
    transform: translate(8%, 9.3rem);
    span {
        background-color: #161616;
    }
    @media (max-width: 1024px) {
      font-size: 2rem;
      width: 54%;
      transform: translate(8%, 9.8rem);
  }
    @media (max-width: 768px) {
      font-size: 2rem;
      width: 85%;
      transform: translate(8%, 7rem);
  }
    @media (max-width: 600px) {
      font-size: 1.9rem;
      width: 89%;
      transform: translate(8%, 6.5rem);
  }
    @media (max-width: 414px) {
      font-size: 1.7rem;
      width: 84%;
      transform: translate(8%, 6.5rem);
  }
    @media (max-width: 375px) {
      font-size: 1.7rem;
      width: 88%;
      transform: translate(8%, 7rem);
  }
    @media (max-width: 320px) {
      font-size: 1.3rem;
  }
`;

const AprendeStyled = styled.img`
    width: auto;
    height: 34vh;
    position: relative;
    top: 36%;
    @media (max-width: 1024px) {
      height: 24vh;
  }
    @media (max-width: 768px) {
      height: 18vh;
      top: 19%;
  }
    @media (max-width: 600px) {
      height: 16vh;
      top: 17%;
  }
    @media (max-width: 414px) {
      height: 14vh;
      top: 19%;
  }
    @media (max-width: 375px) {
      height: 12vh;
      top: 22%;
  }
    @media (max-width: 320px) {
      top: 26%;
  }
    `;

const GatoStyled = styled.img`
    width: auto;
    height: 80vh;
    position: absolute;
    right: 0%;
    top: 37.6%;
    @media (max-width: 1024px) {
        height: 70vh;
        top: 49%;
    }
    @media (max-width: 768px) {
        height: 50vh;
        top: 60.4%;
    }
    @media (max-width: 600px) {
        top: 63.5%;
    }
    @media (max-width: 414px) {
      height: 43vh;
        top: 73.2%;
    }
    @media (max-width: 375px) {
      height: 38vh;
        top: 76.8%;
    }
    @media (max-width: 320px) {
      height: 38vh;
        top: 83.5%;
    }
`;

const AprendeBienvenida = () => {
  return (
    <SectionStyled>
      <TextStyled>
        <span>Apóyate en estos artefactos educativos y </span>
        <span>comunicativos para ampliar tu conocimiento sobre el </span>
        <span>problema de la desinformación.</span>
      </TextStyled>
      <AprendeStyled
        src="https://res.cloudinary.com/dvafjaqbd/image/upload/v1714336840/MONTAJE/APRENDE/5-aprende_hol8pk.png"
        alt="Aprende"
      />
      <GatoStyled
        src="https://res.cloudinary.com/dvafjaqbd/image/upload/v1714336843/MONTAJE/APRENDE/5-1_vauxy6.png"
        alt="Gato pensando"
      />
    </SectionStyled>
  );
};

export default AprendeBienvenida;
