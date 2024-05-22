// import styled from "styled-components";
// import CarruselIMG from "./CarruselIMG/CarruselIMG";

// const StyledImagenes = styled.div`
//   background-image: url("https://res.cloudinary.com/dvafjaqbd/image/upload/v1714336875/MONTAJE/EXPRESA/18_txk2kg.png");
//   height: 38rem;
//   position: relative;
//   scroll-snap-align: start;
//   scroll-snap-align: start;

//   .ContainerIMG{
//     width: 98%;
//     height: auto;
//     @media(max-width: 735px) {
//     width: 90%;
//   }
//     @media(max-width: 459px) {
//     width: 80%;
//   }
//   @media(max-width: 316px) {
//     width: 70%;
//   }
//   }

//   .StyledBackground {
//     width: 20%;
//   margin-top: 2%;
//   margin-left: 2%;
//   position: absolute;
//   @media (min-width: 1024px) and (max-width: 1366px) {
//     width: 48%;
//     margin-top: 4%;
//     margin-left: 4%;
//   }
//   @media (max-width: 1024px) {
//     width: 73%;
//     margin-top: 4%;
//     margin-left: 4%;
//   }
//   @media (max-width: 768px) {
//     width: 73%;
//     margin-top: 4%;
//     margin-left: 4%;
//   }
//   @media (max-width: 600px) {
//     margin-left: 0%;
//     height: 14%;
//   }
//   @media (max-width: 414px) {
//     margin-left: 0%;
//     height: 10%;
//   }
//   @media (max-width: 375px) {
//     width: 85%;
//     margin-left: 0%;
//     height: 10%;
//   }
//   @media (max-width: 320px) {
//     width: 73%;
//     margin-top: 4%;
//     margin-left: 4%;
//   }
//   }

//   .StyledTextoImg {
//   position: absolute;
//   width: 46%;
//   margin-left: -1rem;
//   margin-top: 6vh;
//   @media (min-width: 1024px) and (max-width: 1366px) {
//     width: 42%;
//     margin-left: 9%;
//   }
//   @media (max-width: 1024px) {
//     width: 52%;
//     margin-top: 1%;
//     margin-left: 17%;
//   }
//   @media (max-width: 768px) {
//     width: 55%;
//     margin-left: 16%;
//   }
//   @media (max-width: 600px) {
//     width: 62%;
//     margin-left: 8%;
//     margin-top: 1%;
//   }
//   @media (max-width: 414px) {
//     width: 61%;
//     margin-left: 9%;
//     margin-top: 2%;
//   }
//   @media (max-width: 375px) {
//     width: 70%;
//     margin-left: 10%;
//   }
//   @media (max-width: 320px) {
//     width: 55%;
//     margin-left: 16%;
//   }
//   }

// `;

import React from "react";
import styled from "styled-components";
import CarruselIMG from "./CarruselIMG/CarruselIMG";

const StyledImagenes = styled.div`
  background-image: url("https://res.cloudinary.com/dvafjaqbd/image/upload/v1714336875/MONTAJE/EXPRESA/18_txk2kg.png");
  background-size: 100% 100%;
  background-repeat: no-repeat;
  height: 95vh;
  scroll-snap-align: start;
  display: flex;
  flex-direction: column;
`;
const StyledTitle = styled.div`
  width: 40%;
  height: 20%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 5%;
  margin-top: 2%;

  @media (max-width: 800px) {
    width: 100%;
    margin-left: 0;
    align-items: center;
  }
  @media (min-width: 801px) and (max-width: 1000px) {
    width: 60%;
    align-items: center;
  }
`;
const StyledBgTitle = styled.img`
  width: 100%;
`;
const StyledTextTitle = styled.p`
  font-size: 6vw;
  font-family: "MADE Soulmaze Brush";
  position: absolute;
  @media (max-width: 800px) {
    font-size: 12vw;
  }
  @media (min-width: 801px) and (max-width: 1000px) {
    font-size: 8vw;
  }
`;

const StyledContainer = styled.div`
  width: 100%;
  height: 80%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  @media (max-width: 800px) {
    align-items: flex-start;
  }
`;

const StyledIcono = styled.img`
  align-self: flex-start;
  bottom: 0;
  right: 0;
  width: 20%;
  position: absolute;
  z-index: 2;

  @media (max-width: 600px) {
    width: 30%;
  }
`;

const ImagenesExpresa = () => {
  return (
    <StyledImagenes>
      <StyledTitle>
        <StyledBgTitle
          src="https://res.cloudinary.com/dvafjaqbd/image/upload/v1714336877/MONTAJE/EXPRESA/4-4_SUBR_nnp6gv.png"
          alt="Background de la imagen"
        ></StyledBgTitle>
        <StyledTextTitle>IMÁGENES</StyledTextTitle>
      </StyledTitle>
      <StyledContainer>
        <CarruselIMG></CarruselIMG>
        <StyledIcono
          src="https://res.cloudinary.com/dvafjaqbd/image/upload/v1714336879/MONTAJE/EXPRESA/4-4_gqrlzp.png"
          alt="Gato leyendo"
        ></StyledIcono>
      </StyledContainer>
    </StyledImagenes>
  );
};

export default ImagenesExpresa;
