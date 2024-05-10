import styled from "styled-components";
import "../../../fonts/fonts.css";
import { NavLink } from "react-router-dom";

const StyledInicioExpresa = styled.div`
  background-image: url("https://res.cloudinary.com/dvafjaqbd/image/upload/v1714336890/MONTAJE/INICIO/5_px3dyj.png");
  background-size: 100% 100%;
  width: 100%;
  height: 95vh;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  scroll-snap-align:start;
  
  @media screen and (max-width: 768px) {
    width: 100%;

    flex-direction: column;
    justify-content:center;
    background-size: contain;
    padding-top: 1rem;
    padding-bottom: 1rem;
  }
`;

const StyledImgContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 80%;
  justify-content: flex-start;
  align-items: center;
  position: relative;
  padding-right: 1rem;
  height: 100%;
  @media screen and (max-width: 768px) {
    width: 80%;
    height: 15rem;
  }
`;

const StyledImgIcono = styled.img`
  width: 50%;
  position: absolute;
  z-index: 2;
  max-height: 100%;
`;

const StyledImgTittle = styled.img`
  width: 100%;
  z-index: 1;
  position: relative;
  margin-left: 10%;
`;
const StyledButtonExpresa = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-end;
  width: 20%;
  padding-bottom: 5rem;
  @media screen and (max-width: 768px) {
    width: 100%;
    position: absolute;
    justify-content: flex-end;
    padding-right: 1rem;
    padding-top: 60%;
  }
`;
const StyledButton = styled(NavLink)`
  background-color: #fff35f;
  color: #000000;
  padding: 1rem;
  font-family: "MADE Soulmaze";
  border: none;
  border-radius: 8px;
  text-decoration: none;
  text-align: center;
  width: 80%;
  @media screen and (max-width: 768px) {
    z-index: 3;
    padding: 0.8rem;
    width: 20%;
  }
`;

const InicioExpresa = () => {
  return (
    <StyledInicioExpresa>
      <StyledImgContainer>
        <StyledImgIcono
          src="https://res.cloudinary.com/dvafjaqbd/image/upload/v1714336884/MONTAJE/INICIO/1-5_zjezta.png"
          alt="Icono expresa"
        ></StyledImgIcono>
        <StyledImgTittle
          src="https://res.cloudinary.com/dvafjaqbd/image/upload/v1714336884/MONTAJE/INICIO/1-expresa_cdia9f.png"
          alt="Título expresa"
        ></StyledImgTittle>
      </StyledImgContainer>
      <StyledButtonExpresa>
        <StyledButton to="expresa">IR</StyledButton>
      </StyledButtonExpresa>
    </StyledInicioExpresa>
  );
};

export default InicioExpresa;
