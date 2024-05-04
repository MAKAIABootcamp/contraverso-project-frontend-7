import React from "react";
import styled from "styled-components";
import "../../../fonts/fonts.css";

const StyledFanzine = styled.div`
  background-image: url("https://res.cloudinary.com/dvafjaqbd/image/upload/v1714336876/MONTAJE/EXPRESA/17_iteslr.png");
  background-size: 100% 100%;
  width: 100%;
  height: 30rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
`;
const StyledBackgroundImg = styled.img`
  width: 37%;
  margin-bottom: 18%;
  margin-right: 50%;
  position: absolute;
  @media (min-width: 1024px) and (max-width: 1366px) {
    width: 65%;
    margin-bottom: 21rem;
    margin-right: 33%;
  }
  @media (max-width: 1024px) {
    width: 72%;
    margin-bottom: 22rem;
    margin-right: 26%;
  }
  @media (max-width: 768px) {
    width: 76%;
    margin-bottom: 24rem;
    margin-right: 25%;
  }
  @media (max-width: 600px) {
    margin-bottom: 23rem;
    margin-right: 5%;
  }
  @media (max-width: 414px) {
    width: 111%;
    margin-right: 6%;
  }
  @media (max-width: 375px) {
    width: 98%;
    margin-right: 12%;
  }
  @media (max-width: 320px) {
    width: 103%;
    margin-bottom: 25rem;
    margin-right: 7%;
  }
`;

const StyledTextoImg = styled.img`
  position: absolute;
  width: 34rem;
  margin-bottom: 21rem;
  margin-right: 58rem;
  @media (min-width: 1024px) and (max-width: 1366px) {
    width: 31rem;
    margin-bottom: 20rem;
    margin-right: 20rem;
  }
  @media (max-width: 1024px) {
    width: 28rem;
    margin-bottom: 35%;
    margin-right: 18%;
  }
  @media (max-width: 768px) {
    width: 23rem;
    margin-bottom: 24rem;
    margin-right: 11rem;
  }
  @media (max-width: 600px) {
    width: 22rem;
    margin-bottom: 23rem;
    margin-right: 0rem;
  }
  @media (max-width: 414px) {
    width: 18rem;
    margin-right: 1rem;
  }
  @media (max-width: 375px) {
    margin-left: 1rem;
  }
  @media (max-width: 320px) {
    width: 14rem;
    margin-bottom: 25rem;
    margin-right: 1rem;
  }
`;

const StyledImgCat = styled.img`
  width: 17%;
  margin-top: 11.5%;
  margin-right: 83%;
  position: absolute;
  @media (min-width: 1024px) and (max-width: 1366px) {
    width: 14rem;
    margin-right: 79%;
    margin-top: 29%;
  }
  @media (max-width: 1024px) {
    width: 16rem;
    margin-right: 75%;
    margin-top: 27%;
  }
  @media (max-width: 768px) {
    margin-right: 66%;
    margin-top: 36%;
  }
  @media (max-width: 600px) {
    margin-right: 56%;
    margin-top: 47%;
  }
  @media (max-width: 414px) {
    margin-right: 35%;
    margin-top: 69%;
  }
  @media (max-width: 375px) {
    margin-right: 29%;
    margin-top: 76%;
  }
  @media (max-width: 320px) {
    width: 10rem;
    margin-right: 47%;
    margin-top: 116%;
  }
`;
const FanzinesExpresa = () => {
  return (
    <StyledFanzine>
      <StyledBackgroundImg
        src="https://res.cloudinary.com/dvafjaqbd/image/upload/v1714336877/MONTAJE/EXPRESA/4-3_SUBR_m8fbpa.png"
        alt="Fondo del texto"
      />
      <StyledTextoImg
        src="https://res.cloudinary.com/dvafjaqbd/image/upload/v1714336879/MONTAJE/EXPRESA/4-fanzines_gfpoqo.png"
        alt="Texto en imagen"
      />
      <StyledImgCat
        src="https://res.cloudinary.com/dvafjaqbd/image/upload/v1714336881/MONTAJE/EXPRESA/4-3_jnxqiq.png"
        alt="Imagen Gato"
      ></StyledImgCat>
    </StyledFanzine>
  );
};

export default FanzinesExpresa;
