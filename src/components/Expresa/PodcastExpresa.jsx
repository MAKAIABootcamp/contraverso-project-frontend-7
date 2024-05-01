import styled from "styled-components";
import "../../../fonts/fonts.css";
import { NavLink } from "react-router-dom";


const StyledPotcast = styled.div`
  background-image: url("https://res.cloudinary.com/dvafjaqbd/image/upload/v1714336876/MONTAJE/EXPRESA/16_wsdajl.png");
  height: 30rem;
`;
const StyledBackgroundImg = styled.img`
 display: block;
  margin-left: auto;
  margin-right: auto;
`;

const StyleSpotifyImg = styled.img`
display: block;
  margin-left: auto;
  margin-right: auto;
 `;
const StyledText = styled.h1`
      position: absolute;
      margin-top: -7rem;
      margin-left: 45%;
      font-family: "MADE Soulmaze Brush";
      font-size: 50px;
      line-height: 23px;
`;
const StyledButton = styled(NavLink)`
  background-color: #DD77CC;
  color: #000000;
  padding: 0.5rem;
  font-family: "MADE Soulmaze";
  font-size: 20px;
  font-weight: bold;
  text-decoration: none;
  margin-left: 50%;

`;
const StyledImgDog = styled.img `
    width: 25rem;
    position: absolute;
    margin-left: 27rem;
    margin-top: -17rem;
`
const StyledImgLeft = styled.img `
    margin-left: -70rem;
    position: absolute;
    margin-top: -14.5rem;
    width: 23rem;
    opacity: 0.8;
`
const PodcastExpresa = () => {
  return (
    <StyledPotcast>
      <StyledBackgroundImg src="https://res.cloudinary.com/dvafjaqbd/image/upload/v1714336876/MONTAJE/EXPRESA/4-2_SUBR_mtcbu7.png" alt ="Fondo de texto"/><StyledBackgroundImg/>
      <StyledText>
      Nuestro podcast
      </StyledText>
      <StyleSpotifyImg src="https://res.cloudinary.com/dvafjaqbd/image/upload/v1714336876/MONTAJE/EXPRESA/4-2_SPOTI_xhfnyj.png" alt="Imagen spotify"></StyleSpotifyImg>
      <StyledButton >
        ESCUCHAR
      </StyledButton>
      <StyledImgDog src="https://res.cloudinary.com/dvafjaqbd/image/upload/v1714336877/MONTAJE/EXPRESA/4-2_wcdtgx.png" alt="Imagen perro"></StyledImgDog>
    <StyledImgLeft src="https://res.cloudinary.com/dvafjaqbd/image/upload/v1714336877/MONTAJE/EXPRESA/4-2_TEXTU_hf0vgk.png" alt="Imagen lateral"></StyledImgLeft>
    </StyledPotcast>
  );
};

export default PodcastExpresa;
