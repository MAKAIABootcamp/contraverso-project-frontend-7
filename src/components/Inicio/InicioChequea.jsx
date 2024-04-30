import styled from "styled-components";
import "../../../fonts/fonts.css";
import { NavLink } from "react-router-dom";

const StyledInicioChequea = styled.div`
  background-image: url("https://res.cloudinary.com/dvafjaqbd/image/upload/v1714336890/MONTAJE/INICIO/3_cypmoy.png");
  background-size: 100% 100%;
  width: 100%;
  height: 30rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  @media screen and (max-width: 480px) {
    flex-direction: column;
    width: 100%;
    background-size: contain;
    justify-content: center;
  }
  @media (min-width: 481px) and (max-width: 768px) {
    flex-direction: column;
    justify-content: center;
  }
`;

const StyledImgContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  width: 70%;
  position: relative;
  padding: 1rem;
  @media screen and (max-width: 480px) {
    width: 100%;
    height: 50%;
  }
  @media (min-width: 481px) and (max-width: 768px) {
    width: 100%;
    height: 50%;
  }
`;
const StyledImgTittle = styled.img`
  z-index: 1;
  max-width: 100%;
  max-height: 50%;
  padding-right: 25%;
  padding-left: 5%;
  position: relative;

  @media (min-width: 481px) and (max-width: 768px) {
    width: 100%;
    padding-right: 20%;
  }
`;
const StyledImgIcono = styled.img`
  z-index: 2;
  max-height: 100%;
  max-width: 35%;
  position: absolute;

  @media screen and (max-width: 480px) {
    align-self: center;
  }
`;

const StyledButtonsContainer = styled.div`
  width: 30%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;

  @media screen and (max-width: 480px) {
    width: 100%;
  }

  @media (min-width: 481px) and (max-width: 768px) {
    width: 100%;
  }
`;
const StyledButtonVerifica = styled(NavLink)`
  background-color: #1df4c8;
  color: #000000;
  padding: 0.8rem;
  font-family: "MADE Soulmaze";
  border: none;
  border-radius: 8px;
  text-decoration: none;
  width: 10rem;
  font-size: 1em;
  text-align: center;
  @media screen and (max-width: 480px) {
    width: 50%;
    font-size: 90%;
  }
`;

function InicioChequea() {
  return (
    <StyledInicioChequea>
      <StyledImgContainer>
        <StyledImgTittle
          src="https://res.cloudinary.com/dvafjaqbd/image/upload/v1714336883/MONTAJE/INICIO/1-chequea_mvrpdb.png"
          alt="Chequea"
        ></StyledImgTittle>
        <StyledImgIcono
          src="https://res.cloudinary.com/dvafjaqbd/image/upload/v1714336884/MONTAJE/INICIO/1-3_sugvai.png"
          alt="Icono"
        ></StyledImgIcono>
      </StyledImgContainer>
      <StyledButtonsContainer>
        <StyledButtonVerifica to="chequea">VERIFICA</StyledButtonVerifica>
        <StyledButtonVerifica to="chequea">VALORA</StyledButtonVerifica>
        <StyledButtonVerifica to="chequea">RECOMIENDA</StyledButtonVerifica>
      </StyledButtonsContainer>
    </StyledInicioChequea>
  );
}

export default InicioChequea;
