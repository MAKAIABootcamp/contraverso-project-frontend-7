import styled from "styled-components";
import "../../../fonts/fonts.css";
import BotonExpresa from "./BotonExpresa";

const StyledPodcast = styled.div`
  background-image: url("https://res.cloudinary.com/dvafjaqbd/image/upload/v1714336876/MONTAJE/EXPRESA/16_wsdajl.png");
  height: 95vh;
  scroll-snap-align: start;
  display: flex;
  flex-direction: column;
`;

const StyledTitle = styled.div`
  width: 80%;
  height: 20%;
  padding-left: 2%;
  padding-top: 5%;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 2;

  @media (max-width: 800px) {
    width: 100%;
    padding-left: 0%;
    padding-top: 0%;
  }
  @media (min-width: 801px) and (max-width: 1115px) {
    width: 100%;
    padding-left: 0%;
  }
`;
const StyledBackgroundImg = styled.img`
  width: 60%;
  position: absolute;
  @media (min-width: 601px) and (max-width: 1115px) {
    width: 80%;
  }
`;

const StyledText = styled.h1`
  font-family: "MADE Soulmaze Brush";
  font-size: 7rem;
  position: absolute;
  color: #161616;

  @media (max-width: 400px) {
    font-size: 2rem;
  }

  @media (min-width: 401px) and (max-width: 600px) {
    font-size: 3rem;
  }
  @media (min-width: 601px) and (max-width: 800px) {
    font-size: 4rem;
  }
  @media (min-width: 801px) and (max-width: 1115px) {
    font-size: 5rem;
  }
`;

const StyledContainer = styled.div`
  width: 100%;
  height: 80%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  @media (max-width: 800px) {
    flex-direction: column;
  }
`;

const StyledImgLeft = styled.img`
  width: 35%;
  max-height: 100%;
  z-index: 1;
  align-self: flex-end;
  mix-blend-mode: difference; 
  @media (max-width: 800px) {
    display: none;
  }
`;
const StyledBtnContainer = styled.div`
  width: 25%;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  align-self: center;
  margin-top: 5%;
  @media (max-width: 500px) {
    width: 80%;
  }
  @media (min-width: 501px) and (max-width: 800px){
    width: 60%;
    height: 25%;
  }
`;
const StyleSpotifyImg = styled.img`
  width: 100%;
  margin-bottom: 5%;
  @media (min-width: 601px) and (max-width: 800px) {
    width: 80%;
  }
`;

const StyledBotonExpresa = styled(BotonExpresa)`
  width: 60%;
  background-color: #dd77cc;
  color: #000000;
  padding: 0.5rem;
  font-family: "MADE Soulmaze";
  font-size: 20px;
  text-decoration: none;
  border: none;
  font-weight: bold;
  box-shadow: 0px 1px 3px #1c1c21;
  cursor: pointer;
  align-self: center;
  border-radius: 5px;

  @media (max-width: 400px) {
    font-size: 0.8rem;
  }
  @media (min-width: 801px) and (max-width: 950px){
    width: 70%;
  }
`;
const StyledImgDog = styled.img`
  max-width: 40%;
  align-self: flex-end;
  position: relative;
  @media (max-width: 600px) {
    width: 80%;
  }
`;

const PodcastExpresa = () => {
  const handleClick = () => {
    console.log("click");
  };
  return (
    <StyledPodcast>
      <StyledTitle>
        <StyledBackgroundImg
          src="https://res.cloudinary.com/dvafjaqbd/image/upload/v1714336876/MONTAJE/EXPRESA/4-2_SUBR_mtcbu7.png"
          alt="Fondo de texto"
        />
        <StyledBackgroundImg />
        <StyledText>Nuestro podcast</StyledText>
      </StyledTitle>

      <StyledContainer>
        <StyledImgLeft
          src="https://res.cloudinary.com/dvafjaqbd/image/upload/v1714336877/MONTAJE/EXPRESA/4-2_TEXTU_hf0vgk.png"
          alt="Imagen lateral"
        />
        <StyledBtnContainer>
          <StyleSpotifyImg
            src="https://res.cloudinary.com/dvafjaqbd/image/upload/v1714336876/MONTAJE/EXPRESA/4-2_SPOTI_xhfnyj.png"
            alt="Imagen spotify"
          ></StyleSpotifyImg>
          <StyledBotonExpresa onClick={handleClick}>
            ESCUCHAR
          </StyledBotonExpresa>
        </StyledBtnContainer>

        <StyledImgDog
          src="https://res.cloudinary.com/dvafjaqbd/image/upload/v1714336877/MONTAJE/EXPRESA/4-2_wcdtgx.png"
          alt="Imagen perro"
        ></StyledImgDog>
      </StyledContainer>
    </StyledPodcast>
  );
};

export default PodcastExpresa;
