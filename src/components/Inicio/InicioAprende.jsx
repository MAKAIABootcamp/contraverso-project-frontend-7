import styled from "styled-components";
import "../../../fonts/fonts.css";
import { NavLink } from "react-router-dom";

const StyledInicioAprende = styled.div`
  background-image: url("https://res.cloudinary.com/dvafjaqbd/image/upload/v1714336891/MONTAJE/INICIO/6_osufe6.png");
  background-size: 100% 100%;
  width: 100%;
  height: 95vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  scroll-snap-align:start;

  @media screen and (max-width: 480px) {
    width: 100%;
    background-size: contain;
    justify-content: center;

    padding-top: 2rem;
    padding-bottom: 2rem;
  }
  @media (min-width: 481px) and (max-width: 768px) {
    padding-top: 10%;
    padding-bottom: 10%;
  }
`;

const StyledImgTitle = styled.img`
  width: 80%;
  padding-right: 20%;
`;

const StyledButtonAprende = styled(NavLink)`
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
    width: 30%;
    font-size: 50%;
    padding: 0.5rem;
  }

  @media (min-width: 481px) and (max-width: 768px) {
    width: 20%;
  }
`;
const StyledImgIcono = styled.img`
  width: 40%;
  align-self: flex-end;
  justify-content: flex-end;
  position: absolute;
`;

const InicioAprende = () => {
  return (
    <StyledInicioAprende>
      <StyledImgTitle
        src="https://res.cloudinary.com/dvafjaqbd/image/upload/v1714336882/MONTAJE/INICIO/1-aprende_canc8k.png"
        alt="Título Aprende"
      ></StyledImgTitle>
      <StyledButtonAprende to="aprende">JUEGOS</StyledButtonAprende>
      <StyledImgIcono
        src="https://res.cloudinary.com/dvafjaqbd/image/upload/v1714336883/MONTAJE/INICIO/1-6_cuinau.png"
        alt="Icono Aprende"
      ></StyledImgIcono>
    </StyledInicioAprende>
  );
};

export default InicioAprende;
