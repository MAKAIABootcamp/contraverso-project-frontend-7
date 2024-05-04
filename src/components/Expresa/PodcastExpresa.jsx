import styled from "styled-components";
import "../../../fonts/fonts.css";
import BotonExpresa from "./BotonExpresa";

const StyledPotcast = styled.div`
  background-image: url("https://res.cloudinary.com/dvafjaqbd/image/upload/v1714336876/MONTAJE/EXPRESA/16_wsdajl.png");
  height: 30rem;
`;
const StyledBackgroundImg = styled.img`
  margin-left: 5rem;
  width: 50rem;
  position: absolute;
  @media (max-width: 1024px) {
    width: 35rem;
    margin-top: 2rem;
    margin-left: 1rem;
  }
  @media (max-width: 768px) {
    width: 32rem;
    margin-left: 2rem;
  }
  @media (max-width: 600px) {
    width: 26rem;
    margin-left: 0rem;
  }
  @media (max-width: 414px) {
    width: 21rem;
    margin-left: 0rem;
    height: 6rem;
  }
  @media (max-width: 375px) {
    width: 19rem;
    margin-left: 0rem;
    height: 6rem;
  }
  @media (max-width: 320px) {
    width: 17rem;
    margin-left: 1rem;
    height: 8rem;
  }
`;

const StyledText = styled.h1`
  font-family: "MADE Soulmaze Brush";
  font-size: 7rem;
  margin-top: -1rem;
  margin-left: 6rem;
  position: absolute;
  @media (max-width: 1024px) {
    font-size: 439%;
    margin-top: 2rem;
    margin-left: 3rem;
  }
  @media (max-width: 768px) {
    font-size: 354%;
    margin-top: 2rem;
  }
  @media (max-width: 600px) {
    font-size: 289%;
    margin-top: 2rem;
    margin-left: 3rem;
  }
  @media (max-width: 414px) {
    font-size: 272%;
    margin-top: 3rem;
    margin-left: 1rem;
  }
  @media (max-width: 375px) {
    font-size: 256%;
  }
  @media (max-width: 320px) {
    font-size: 225%;
    margin-top: 5rem;
    margin-left: 2rem;
  }
`;
const StyleSpotifyImg = styled.img`
  width: 24rem;
  display: block;
  margin-left: 25rem;
  margin-top: 11rem;
  position: absolute;
  @media (max-width: 1024px) {
    width: 18rem;
    margin-left: 10rem;
  }
  @media (max-width: 768px) {
    width: 19rem;
    margin-left: 8rem;
    margin-top: 8rem;
  }
  @media (max-width: 600px) {
    width: 16rem;
    margin-left: 4rem;
    margin-top: 8rem;
  }
  @media (max-width: 414px) {
    margin-left: 4rem;
  }
  @media (max-width: 375px) {
    margin-top: 9rem;
    margin-left: 1rem;
  }
  @media (max-width: 320px) {
    width: 13rem;
    margin-left: 2rem;
    margin-top: 11rem;
  }
`;

const StyledBotonExpresa = styled(BotonExpresa)`
  background-color: #dd77cc;
  color: #000000;
  padding: 0.5rem;
  font-family: "MADE Soulmaze";
  font-size: 20px;
  align-self: flex-end;
  margin-bottom: 5rem;
  text-decoration: none;
  border: none;
  font-weight: bold;
  box-shadow: 0px 1px 3px #1c1c21;
  cursor: pointer;
  margin-left: 29%;
  margin-top: 20rem;
  position: absolute;
  @media (min-width: 1024px) and (max-width: 1366px) {
    margin-left: 36rem;
    margin-top: 19rem;
  }
  @media (max-width: 1024px) {
    width: 8rem;
    margin-top: 18rem;
    font-size: 1rem;
    margin-left: 28%;
  }
  @media (max-width: 768px) {
    margin-left: 16rem;
  }
  @media (max-width: 600px) {
    margin-top: 15rem;
    margin-left: 10rem;
  }
  @media (max-width: 414px) {
    margin-top: 15rem;
    margin-left: 8rem;
  }
  @media (max-width: 375px) {
    margin-left: 5rem;
  }
  @media (max-width: 320px) {
    margin-left: 5rem;
  }
`;
const StyledImgDog = styled.img`
  position: absolute;
  width: 25%;
  margin-left: 75%;
  margin-top: 0.1%;

  @media (min-width: 1024px) and (max-width: 1366px) {
    width: 36%;
    margin-left: 64%;
    margin-top: -0.5%;
  }

  @media (max-width: 1024px) {
    width: 22rem;
    margin-left: 40.9rem;
    margin-top: 8rem;
  }

  @media (max-width: 768px) {
    width: 13rem;
    margin-left: 33.8rem;
    margin-top: 17rem;
  }
  @media (max-width: 600px) {
    width: 11rem;
    margin-left: 25.4rem;
    margin-top: 19rem;
  }

  @media (max-width: 414px) {
    margin-left: 14rem;
  }

  @media (max-width: 375px) {
    width: 9rem;
    margin-left: 13rem;
    margin-top: 21rem;
  }

  @media (max-width: 320px) {
    width: 9rem;
    margin-left: 10rem;
    margin-top: 21rem;
  }
`;
const StyledImgLeft = styled.img`
  margin-top: 1.5rem;
  width: 29rem;
  filter: brightness(491%) opacity(0.8);
  position: absolute;
  @media (max-width: 1024px) {
    width: 21rem;
    margin-top: 9.5rem;
  }
  @media (max-width: 768px) {
    width: 18.5rem;
    margin-top: 12rem;
  }
  @media (max-width: 600px) {
    width: 16rem;
    margin-top: 14rem;
  }
  @media (max-width: 414px) {
    width: 12rem;
    margin-top: 18rem;
  }
  @media (max-width: 375px) {
    width: 12rem;
    margin-top: 18rem;
  }
  @media (max-width: 320px) {
    width: 12rem;
    margin-top: 18rem;
  }
`;
const PodcastExpresa = () => {
  const handleClick = () => {
    console.log("click");
  };
  return (
    <StyledPotcast>
      <StyledBackgroundImg
        src="https://res.cloudinary.com/dvafjaqbd/image/upload/v1714336876/MONTAJE/EXPRESA/4-2_SUBR_mtcbu7.png"
        alt="Fondo de texto"
      />
      <StyledBackgroundImg />
      <StyledText>Nuestro podcast</StyledText>
      <StyleSpotifyImg
        src="https://res.cloudinary.com/dvafjaqbd/image/upload/v1714336876/MONTAJE/EXPRESA/4-2_SPOTI_xhfnyj.png"
        alt="Imagen spotify"
      ></StyleSpotifyImg>
      <StyledBotonExpresa onClick={handleClick}>ESCUCHAR</StyledBotonExpresa>
      <StyledImgDog
        src="https://res.cloudinary.com/dvafjaqbd/image/upload/v1714336877/MONTAJE/EXPRESA/4-2_wcdtgx.png"
        alt="Imagen perro"
      ></StyledImgDog>
      <StyledImgLeft
        src="https://res.cloudinary.com/dvafjaqbd/image/upload/v1714336877/MONTAJE/EXPRESA/4-2_TEXTU_hf0vgk.png"
        alt="Imagen lateral"
      ></StyledImgLeft>
    </StyledPotcast>
  );
};

export default PodcastExpresa;
