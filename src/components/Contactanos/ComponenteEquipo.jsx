import React from "react";
import styled from "styled-components";

const StyledComponent = styled.div`
  justify-content: center;
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
`;

const StyledText = styled.p`
  font-family: "Filson Pro";
  background-color: black;
  color: #ffffff;
  width: 9rem;
  margin-left: 3rem;
  text-align: center;
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
