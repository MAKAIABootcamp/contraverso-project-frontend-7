import React from "react";
import styled from "styled-components";
import BotonExpresa from "./BotonExpresa";

const StyledExpresa = styled.div`
  background-image: url("https://res.cloudinary.com/dvafjaqbd/image/upload/v1714336876/MONTAJE/EXPRESA/16_wsdajl.png");
  height: 30rem;
  display: flex;
`;

const StyledImgRight = styled.img`
  position: absolute;
  width: 36%;
  height: 50%;
  margin-left: 64%;
  filter: brightness(491%) opacity(0.8);

  @media (min-width: 480px) and (max-width: 1366px) {
    width: 65%;
    margin-left: 35%;
    margin-top: 0%;
  }
  @media screen and (max-width: 480px) {
    width: 69%;
    height: 41%;
    margin-left: 8.9rem;
  }
  @media (min-width: 481px) and (max-width: 768px) {
    width: 69%;
    height: 41%;
    margin-left: 31%;
  }
  @media (min-width: 769px) and (max-width: 1365px) {
    width: 67%;
    height: 41%;
    margin-left: 33%;
  }
`;

const StyledImg = styled.img`
  margin-top: 3rem;
  width: 30%;
  position: relative;
  z-index: 3;
  @media screen and (max-width: 480px) {
    margin-top: 5rem;
    width: 59%;
    margin-bottom: 5rem;
  }
  @media (min-width: 481px) and (max-width: 768px) {
    margin-top: 0;
    width: 60%;
    margin-bottom: 5rem;
  }
  @media (min-width: 768px) and (max-width: 1365px) {
    margin-top: 0;
    width: 50%;
    margin-bottom: 5rem;
  }
`;

const StyledTextoContainer = styled.p`
  margin-top: 4rem;
  @media screen and (max-width: 480px) {
    margin-left: -4rem;
    width: 13rem;
  }
  @media (min-width: 481px) and (max-width: 768px) {
    margin-left: -5rem;
    width: 17rem;
  }
  @media (min-width: 768px) and (max-width: 1365px) {
    margin-left: -4rem;
    width: 22rem;
  }
`;

const StyledTextoSpan = styled.span`
  color: #f1f1d8;
  background-color: #000000;
  font-family: "Filson Pro Book";
  font-size: 30px;
  line-height: 40px;
  position: relative;
  @media screen and (max-width: 480px) {
    font-size: 17px;
    line-height: 17px;
  }
  @media (min-width: 481px) and (max-width: 768px) {
    font-size: 20px;
    line-height: 28px;
  }
  @media (min-width: 768px) and (max-width: 1375px) {
    font-size: 27px;
    line-height: 37px;
  }
`;

const StyledImgText = styled.img`
  margin-left: 12%;
  height: 14rem;
  width: 50%;
  align-self: flex-end;
  margin-bottom: 1%;
  position: absolute;
  @media screen and (max-width: 480px) {
    margin-left: 0rem;
    z-index: 10;
    width: 42%;
  }
  @media (min-width: 480px) and (max-width: 768px) {
    margin-left: 0rem;
    z-index: 10;
    width: 42%;
  }
  @media (min-width: 768px) and (max-width: 1365px) {
    margin-left: 0rem;
    z-index: 10;
    width: 35%;
  }
`;

const StyledBotonExpresa = styled(BotonExpresa)`
  background-color: #fff35f;
  color: #000000;
  padding: 0.5rem;
  font-family: "MADE Soulmaze";
  font-size: 20px;
  align-self: flex-end;
  margin-bottom: 5rem;
  text-decoration: none;
  position: relative;
  border: none;
  font-weight: bold;
  box-shadow: 0px 1px 3px #1c1c21;
  cursor: pointer;

  @media screen and (max-width: 480px) {
    margin-left: -12rem;
    margin-bottom: 7rem;
  }
  @media (min-width: 481px) and (max-width: 768px) {
    margin-left: -17rem;
  }
  @media (min-width: 768px) and (max-width: 1575px) {
    margin-left: -15rem;
    margin-bottom: 2rem;
  }
`;

const InicioExpresa = () => {
  const handleClick = () => {
    console.log("click");
  };

  return (
    <StyledExpresa>
      <StyledImg
        src="https://res.cloudinary.com/dvafjaqbd/image/upload/v1714336875/MONTAJE/EXPRESA/4-1_no0oii.png"
        alt="Icon"
      ></StyledImg>
      <StyledImgRight
        src="https://res.cloudinary.com/dvafjaqbd/image/upload/v1714336881/MONTAJE/EXPRESA/4-TEXTU_jhes8z.png"
        alt=""
      ></StyledImgRight>
      <StyledImgText
        src="https://res.cloudinary.com/dvafjaqbd/image/upload/v1714336879/MONTAJE/EXPRESA/4-expresa_gwsluu.png"
        alt="textoImagen"
      ></StyledImgText>
      <StyledTextoContainer>
        <StyledTextoSpan>
          Interactúa con nuestra colección creativa sobre el problema de la
          <br /> desinformación. Pregunta, propone y manifiéstate abiertamente.
          El
          <br /> debate es central para comprender y transformar la realidad.
        </StyledTextoSpan>
      </StyledTextoContainer>

      <StyledBotonExpresa onClick={handleClick}>
        ENVIAR APORTE
      </StyledBotonExpresa>
    </StyledExpresa>
  );
};

export default InicioExpresa;
