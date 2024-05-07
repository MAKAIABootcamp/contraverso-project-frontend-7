import styled from "styled-components";
import "../../../fonts/fonts.css";
import { NavLink } from "react-router-dom";

const StyledInicioUnirme = styled.div`
  background-image: url("https://res.cloudinary.com/dvafjaqbd/image/upload/v1714336886/MONTAJE/INICIO/2_duvvti.png");
  background-repeat: no-repeat;
  background-size: 100% 100%;
  height: 95vh;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  scroll-snap-align:start;
  

  @media screen and (max-width: 500px) {
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;

  }
`;

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 60%;

  @media screen and (max-width: 500px) {
    width: 100%;
    padding-left: 5%;
  }
`;

const StyledTexto = styled.p`
  margin-top: 8rem;
  @media screen and (max-width: 500px) {
    margin-top: 0;
    text-align: center;
  }
`;

const StyledSpan = styled.span`
  color: #f1f1d8;
  background-color: #000000;
  font-family: "Filson Pro Book";
  font-size: 3.5vw;
  line-height: 1.5;
  margin-bottom: 4%;

  @media screen and (max-width: 500px) {
    font-size: 5vw;
  }
`;

const StyledButtonUnirme = styled(NavLink)`
  background-color: #1df4c8;
  color: #000000;
  padding: 0.8rem;
  font-family: "MADE Soulmaze";
  border: none;
  border-radius: 8px;
  align-self: flex-start;
  margin-top: 1rem;
  margin-left: 30%;
  text-decoration: none;

  @media screen and (max-width: 500px) {
    margin-left: 0;
    align-self: center;
  }
`;

const StyledImgIcono = styled.img`
  width: 40%;
  height: 90%;
  align-self: flex-end;

  @media screen and (max-width: 500px) {
    width: 60%;
    height: auto;
    align-self: center;
  }
`;

const StyledImgLogo = styled.img`
  width: 36%;
  align-self: flex-end;
  margin-bottom: 2%;
  margin-right: 4%;

  @media screen and (max-width: 480px) {
    width: 30%;
    justify-content: flex-end;
    margin-top: 5%;
  }
`;

const InicioUnirme = () => {
  return (
    <StyledInicioUnirme>
      <StyledImgIcono
        src="https://res.cloudinary.com/dvafjaqbd/image/upload/v1714336882/MONTAJE/INICIO/1-2_on2umt.png"
        alt="icono"
      ></StyledImgIcono>

      <StyledContainer>
        <StyledTexto>
          <StyledSpan>
            ¡Aprende, exprésate y ayúdanos a combatir la desinformación!
          </StyledSpan>
        </StyledTexto>
        <StyledButtonUnirme to="https://discord.gg/tCqfzHWGCV">
          UNIRME
        </StyledButtonUnirme>
        <StyledImgLogo
          src="https://res.cloudinary.com/dvafjaqbd/image/upload/v1714336881/MONTAJE/INICIO/1-7-2_lbpqjx.png"
          alt="logo"
        ></StyledImgLogo>
      </StyledContainer>
    </StyledInicioUnirme>
  );
};

export default InicioUnirme;
