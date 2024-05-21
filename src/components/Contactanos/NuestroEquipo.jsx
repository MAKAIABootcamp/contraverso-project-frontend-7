import styled from "styled-components";
import "../../../fonts/fonts.css";

const StyledNuestroEquipo = styled.div`
  background-image: url("https://res.cloudinary.com/dvafjaqbd/image/upload/v1714336891/MONTAJE/SOMOS/24_x3fx6d.png");
  background-size: 100% 100%;
  width: 100%;
  height: 100vh;
  position: relative;
  scroll-snap-align: start;
`;

const StyledLogo = styled.img`
  position: absolute;
  right: 0;
  padding: 5%;
  width: 20%;
  @media (max-width:500px){
    width: 25%;
  }
`;

const StyledFigure = styled.img`
  position: absolute;
  width: 20%;
  top: 0;
  margin-top: 5%;
  @media (max-width:500px){
    display: none;
  }
`;

const StyledTexture = styled.img`
  filter: brightness(491%) opacity(0.8);
  width: 30%;
  bottom: 0;
  right: 0;
  position: absolute;
  @media (max-width: 500px) {
    width: 80%;
  }
  @media (min-width: 501px) and (max-width: 800px) {
    width: 50%;
  }
`;
const StyledTitle = styled.div`
  width: 100%;
  height: 25%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 5%;
`;
const StyledBgTitle = styled.img`
  width: 50%;
  @media (max-width: 800px) {
    width: 90%;
  }
`;
const StyledTextTitle = styled.p`
  font-family: "MADE Soulmaze Brush";
  font-size: 5vw;
  position: absolute;

  @media (max-width: 800px) {
    font-size: 10vw;
  }
`;

const StyledContainer = styled.div`
  width: 100%;
  height: 75%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding-left: 5%;
  padding-right: 5%;
  @media (max-width:500px){
flex-direction: column;
  }
`;
const StyledCard = styled.div`
  width: 40%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const StyledCardImg = styled.img`
  width: 50%;
  height: auto;
  border-radius: 50%;
  object-fit: cover;
`;
const StyledText = styled.span`
  color: #ffffff;
  background-color: #000000;
  font-family: "Filson Pro Book";
  font-size: 1.5vw;
  line-height: 1.5;
  margin-top: 5%;
  z-index:2;
`;

const NuestroEquipo = () => {
  return (
    <StyledNuestroEquipo>
      <StyledLogo
        src="https://res.cloudinary.com/dvafjaqbd/image/upload/v1714336892/MONTAJE/SOMOS/6-2_wcgkbl.png"
        alt="Logo"
      />
      <StyledFigure src="https://res.cloudinary.com/dvafjaqbd/image/upload/v1714336891/MONTAJE/SOMOS/6-2_FORM_uolhnl.png"></StyledFigure>
      <StyledTexture src="https://res.cloudinary.com/dvafjaqbd/image/upload/v1714336892/MONTAJE/SOMOS/6-2_TEXTU_ca8kre.png"></StyledTexture>
      <StyledTitle>
        <StyledBgTitle src="https://res.cloudinary.com/dvafjaqbd/image/upload/v1714336894/MONTAJE/SOMOS/6-SUBR_eyuuxc.png"></StyledBgTitle>
        <StyledTextTitle>NUESTRO EQUIPO</StyledTextTitle>
      </StyledTitle>
      <StyledContainer>
        <StyledCard>
          <StyledCardImg src="https://res.cloudinary.com/dvafjaqbd/image/upload/v1714336895/MONTAJE/SOMOS/6-3_hbbkgp.png"></StyledCardImg>
          <StyledText>Sofía Vitery</StyledText>
          <StyledText>Diseñadora gráfica</StyledText>
        </StyledCard>
        <StyledCard>
          <StyledCardImg src="https://res.cloudinary.com/dvafjaqbd/image/upload/v1714336895/MONTAJE/SOMOS/6-4_xdkktr.png"></StyledCardImg>
          <StyledText>Samuel Coral</StyledText>
          <StyledText>Lic. Ciencias Sociales</StyledText>
        </StyledCard>
      </StyledContainer>
    </StyledNuestroEquipo>
  );
};

export default NuestroEquipo;
