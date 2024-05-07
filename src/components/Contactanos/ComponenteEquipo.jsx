import React from "react";
import styled from "styled-components";

const StyledComponent = styled.div`
  justify-content: center;
  scroll-snap-align: start;

  @media (max-width: 1024px) {
    width: 50%;
    margin-top: 2%;
    margin-left: 1rem;
  }
  @media (max-width: 768px) {
    width: 50%;
    margin-top: 2%;
    margin-left: 1rem;
  }
  @media (max-width: 600px) {
    width: 50%;
    margin-left: 2rem;
  }
  @media (max-width: 414px) {
    width: 50%;
    margin-top: 2%;
    margin-left: 1rem;
  }
  @media (max-width: 375px) {
    width: 50%;
    margin-top: 2%;
    margin-left: 1rem;
  }
  @media (max-width: 320px) {
    width: 50%;
    margin-top: 2%;
    margin-left: 1rem;
  }
`;
const StyledImage = styled.img`
  max-width: 50%;
`;

const StyledTitulo = styled.h2`
  font-family: "Filson Pro";
  background-color: black;
  color: #ffffff;
  width: 11rem;
  margin-left: 2rem;
  text-align: center;
  margin-bottom: 0.5rem;

  @media (max-width: 1024px) {
    width: 43%;
    font-size: 92%;
    margin-left: 2%;
    margin-top: 1%;
  }
  @media (max-width: 768px) {
    width: 43%;
    font-size: 92%;
    margin-left: 2%;
    margin-top: 1%;
  }
  @media (max-width: 600px) {
    width: 50%;
    font-size: 88%;
    margin-left: -1%;
    margin-top: -1%;
  }
  @media (max-width: 414px) {
    width: 50%;
    font-size: 69%;
    margin-left: -1%;
    margin-top: -1%;
  }
  @media (max-width: 375px) {
    width: 50%;
    font-size: 69%;
    margin-left: -1%;
    margin-top: -1%;
  }
  @media (max-width: 320px) {
    width: 50%;
    font-size: 69%;
    margin-left: -1%;
    margin-top: -1%;
  }
`;

const StyledText = styled.p`
  font-family: "Filson Pro";
  background-color: black;
  color: #ffffff;
  width: 9rem;
  margin-left: 3rem;
  text-align: center;

  @media (max-width: 1024px) {
    width: 52%;
    font-size: 82%;
    margin-left: -2%;
    margin-top: -1%;
  }
  @media (max-width: 768px) {
    width: 52%;
    font-size: 82%;
    margin-left: -2%;
    margin-top: -1%;
  }
  @media (max-width: 600px) {
    width: 80%;
    font-size: 78%;
    margin-left: -14%;
  }
  @media (max-width: 414px) {
    width: 80%;
    font-size: 78%;
    margin-left: -14%;
  }
  @media (max-width: 375px) {
    width: 80%;
    font-size: 78%;
    margin-left: -14%;
  }
  @media (max-width: 320px) {
    width: 80%;
    font-size: 78%;
    margin-left: -14%;
  }
`;

function ComponenteEquipo({ imagen, titulo, texto }) {
  return (
    <StyledComponent className="card">
      <StyledImage src={imagen} alt={titulo} />
      <StyledTitulo>{titulo}</StyledTitulo>
      <StyledText>{texto}</StyledText>
    </StyledComponent>
  );
}

export default ComponenteEquipo;
