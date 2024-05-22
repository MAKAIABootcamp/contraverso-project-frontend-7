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
  padding: 2%;
  width: 15%;
  @media (max-width: 800px) {
    display: none;
  }
`;

const StyledFigure = styled.img`
  position: absolute;
  width: 20%;
  top: 0;
  margin-top: 5%;
  @media (max-width:800px) {
    display: none;
  }
`;

const StyledTexture = styled.img`
  filter: brightness(491%) opacity(0.4);
  width: 30%;
  bottom: 0;
  right: 0;
  position: absolute;
  @media (max-width: 500px) {
    display: none;
  }
  @media (min-width: 501px) and (max-width: 1115px) {
    display: none;
  }
`;
const StyledTitle = styled.div`
  width: 100%;
  height: 20%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 2%;
`;
const StyledBgTitle = styled.img`
  width: 40%;
  z-index:2;
  color: #161616;
  @media (max-width: 800px) {
    width: 90%;
  }
`;
const StyledTextTitle = styled.p`
  font-family: "MADE Soulmaze Brush";
  font-size: 4vw;
  position: absolute;
  z-index:3;
  @media (max-width: 800px) {
    font-size: 10vw;
  }
`;

const StyledContainer = styled.div`
  width: 100%;
  height: 80%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const StyledCardsContainer = styled.div`
  width: 80%;
  height: 60%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  @media (max-width: 800px) {
    width: 100%;
    height: 50%;
    margin-bottom: 5%;
  }

`;
const StyledCard = styled.div`
  width: 25%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media (max-width:500px) {
    width: 100%;
    height: 100%;
  }
  @media (min-width:501px) and (max-width:670px){
    width: 40%;
  }
  @media (min-width:671px) and (max-width:734px){
    width: 35%;
  }
  @media (min-width: 735px) and (max-width: 1115px) {
    width: 40%;
  }
`;

const StyledCardImg = styled.img`
  width: 50%;
  height: auto;
  border-radius: 50%;
  object-fit: cover;
  @media (max-width: 900px) {
    width: 60%;
  }
`;
const StyledText = styled.span`
  color: #ffffff;
  background-color: #161616;
  font-family: "Filson Pro Book";
  font-size: 1.5vw;
  line-height: 1.5;
  margin-top: 5%;
  z-index: 2;
  @media (max-width: 500px) {
    font-size: 4vw;
  }
  @media (min-width: 415px) and (max-width:734px) {
    font-size: 3vw;
  }
`;

const StyledDesarrollo = styled.div`
width: 80%;
height: 35%;
margin-top: 3%;
margin-bottom: 2%;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
@media (max-width: 800px) {
    width: 100%;
    height: 70%;
  }

`;

const StyledSecondTitle = styled.h2`
  font-family: 'MADE Soulmaze Outline';
  color: #4100D0;
  text-align: center;
  font-size: 2.5vw;
  z-index: 2;
  margin-bottom: 3vh;
  @media (max-width: 800px) {
    font-size: 5vw;
    margin-bottom: 5%;
  }
  @media (min-width:801px) and (max-width:1115px){
    font-size: 3vw;
  }
`

const StyledNames = styled.div`
width: 100%;
height: 80%;
display: flex;
flex-direction: row;
justify-content: center;
z-index:2;
@media (max-width: 800px) {

flex-wrap: wrap;
  }

figure{
  display: flex;
  flex-direction: column;
  justify-content: baseline;
  align-items: center;
  width: 20%;
  height: 100%;
  z-index:3;
  padding: 5px;
  @media (max-width: 415px) {
    width: 50%;
    height: 45%;
    margin-top:5%
  }
  @media (min-width: 415px) and (max-width:577px) {
    width: 35%;
    height: 45%;
  }
  @media (min-width:801px) and (max-width:1115px){
    width: 40%;
  }
}


p{
  font-family: "Filson Pro Book";
  font-size:1.2vw;
  margin-top:3%;
  text-align: center;
  word-wrap: break-word;
  margin-top: 2vh;
  color: #161616;
  @media (max-width: 800px) {
    font-size: 3vw;
  }
  @media (min-width:801px) and (max-width:1115px){
    font-size: 1.5vw;
  }
}
img{
  margin-top: 5%;
  width: 35%;
  object-fit: cover;
  z-index: 3;
  @media (max-width: 800px) {
    margin-top:0;
  }
  @media (min-width:801px) and (max-width:1115px){
    width: 45%;
  }
}
`
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
        <StyledCardsContainer>
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
        </StyledCardsContainer>
        <StyledDesarrollo>
          <StyledSecondTitle>Desarrollo Web</StyledSecondTitle>
          <StyledNames>
            <figure>
            <img src="https://res.cloudinary.com/dvafjaqbd/image/upload/v1716308232/MONTAJE/SOMOS/QR%20DESARROLLO%20FRONT/JulianaArgaez_zcpero.png" alt="QR info Juliana" />
            <p>Juliana Argaez</p>
            </figure>
            <figure>
            <img src="https://res.cloudinary.com/dvafjaqbd/image/upload/v1716308232/MONTAJE/SOMOS/QR%20DESARROLLO%20FRONT/gabrielaaguiarmarquez_abij7c.png" alt="QR info Gabriela" />
            <p>Gabriela Aguiar</p>
            </figure>
            <figure>
            <img src="https://res.cloudinary.com/dvafjaqbd/image/upload/v1716308232/MONTAJE/SOMOS/QR%20DESARROLLO%20FRONT/estefaniavillan_sppvx4.png" alt="QR info Estefania" />
            <p>Estefania Villan</p>
            </figure>
            <figure>
            <img src="https://res.cloudinary.com/dvafjaqbd/image/upload/v1716308233/MONTAJE/SOMOS/QR%20DESARROLLO%20FRONT/SofiaVitery_ehejeu.png" alt="QR info Sofia" />
            <p>Sofía Vitery</p>
            </figure>
          </StyledNames>
        </StyledDesarrollo>
      </StyledContainer>
    </StyledNuestroEquipo>
  );
};

export default NuestroEquipo;
