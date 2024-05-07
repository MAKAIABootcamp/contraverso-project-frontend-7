import styled from "styled-components";
import "../../../fonts/fonts.css";
import { NavLink } from "react-router-dom";

const StyledInicioConfronta = styled.div`
  background-image: url("https://res.cloudinary.com/dvafjaqbd/image/upload/v1714336891/MONTAJE/INICIO/4_inynqe.png");
  background-size: 100% 100%;
  width: 100%;
  height: 95vh;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  scroll-snap-align:start;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    width: 100%;
    background-size: contain;
    justify-content: flex-end;
    gap: 1rem;
  }
`;

const StyledButtonContainer = styled.div`
  width: 40%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 2rem;
  @media screen and (max-width: 780px) {
    width: 100%;
    justify-content: center;
  }
`;

const StyledButtonArticulos = styled(NavLink)`
  background-color: #1df4c8;
  color: #000000;
  padding: 1rem;
  font-family: "MADE Soulmaze";
  border: none;
  border-radius: 8px;
  text-decoration: none;
  text-align: center;
`;

const StyledImgContainer = styled.div`
  width: 60%;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  position: relative;
  @media screen and (max-width: 780px) {
    width: 100%;
    justify-content: center;
  }
`;
const StyledImgIcono = styled.img`
  max-width: 100%;
  max-height: 100%;
  position: relative;
`;
const StyledImgTittle = styled.img`
  width: 90%;
  position: absolute;
`;

const InicioConfronta = () => {
  return (
    <StyledInicioConfronta>
      <StyledButtonContainer>
        <StyledButtonArticulos to="confronta">ARTÍCULOS</StyledButtonArticulos>
      </StyledButtonContainer>
      <StyledImgContainer>
        <StyledImgIcono
          src="https://res.cloudinary.com/dvafjaqbd/image/upload/v1714336884/MONTAJE/INICIO/1-4_bp67fx.png"
          alt="Icono confronta"
        ></StyledImgIcono>
        <StyledImgTittle
          src="https://res.cloudinary.com/dvafjaqbd/image/upload/v1714336884/MONTAJE/INICIO/1-confronta_xunfin.png"
          alt="Título confronta"
        ></StyledImgTittle>
      </StyledImgContainer>
    </StyledInicioConfronta>
  );
};

export default InicioConfronta;
