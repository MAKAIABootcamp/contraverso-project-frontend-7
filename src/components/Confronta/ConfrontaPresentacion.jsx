import React from "react";
import styled from "styled-components";

const StyledConfronta = styled.div`
  background-image: url("https://res.cloudinary.com/dvafjaqbd/image/upload/v1714336860/MONTAJE/CONFRONTA/13_k68ygl.png");
  background-repeat: no-repeat;
  background-size: 100% 100%;
  height: 80vh;
  display: flex;
  flex-direction: row;
`;
const StyledContainer = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;

`;
const StyledTexture = styled.img`
  width: 50%;
  max-height: 90%;
  filter: brightness(1) opacity(0.8);
  mix-blend-mode: color-burn;
  z-index: 1;
  bottom: 5vh;
  position: absolute;
`;

const StyledTexto = styled.p`
  z-index: 2;
  width: 50%;
  margin: 5%;
  position: absolute;
`;

const StyledSpan = styled.span`
  color: #f1f1d8;
  background-color: #000000;
  font-family: "Filson Pro Book";
  font-size: 2.5vw;
  line-height: 1.5;
`;

const StyledTitle = styled.img`
width: 100%;
margin-top: auto;
margin-bottom: 5%;
z-index: 3;
`;
const StyledIcono = styled.img`
  width: 50%;
  max-height: 100%;
  align-self: flex-end;
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
