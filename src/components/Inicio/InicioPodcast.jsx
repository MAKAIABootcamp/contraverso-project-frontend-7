import styled from "styled-components";
import "../../../fonts/fonts.css";
import { NavLink } from "react-router-dom";

const StyledInicioPodcast = styled.div`
  background-image: url("https://res.cloudinary.com/dvafjaqbd/image/upload/v1714336890/MONTAJE/INICIO/7_mz8jo7.png");
  background-repeat: no-repeat;
  background-size: 100% 100%;
  height: 95vh;
  display: flex;
  flex-direction: row;
  margin-bottom: 5vh;
  scroll-snap-align:start;

  @media screen and (max-width: 600px) {
    flex-direction: column-reverse;
    align-items: center;
    justify-content: center;
    width: 100%;
  }
`;

const StyledImgIcono = styled.img`
  max-width: 50%;
  max-height: 80%;
  align-self: flex-end;

  @media screen and (max-width: 600px) {
    align-self: center;
    max-width: 100%;
  }
`;

const StyledTextContainer = styled.div`
  width: 60%;
  display: flex;
  flex-direction: column;

  @media screen and (max-width: 480px) {
    align-self: center;
    width: 100%;
    padding: 1rem;
  }
`;

const StyledLogo = styled.img`
  align-self: flex-end;
  width: 50%;
  padding: 2rem;
  @media screen and (max-width: 480px) {
    width: 60%;
  }
`;

const StyledText = styled.img`
  align-self: flex-end;
  width: 100%;
`;
const StyledButtonEscuchar = styled(NavLink)`
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
  margin: 2rem;

  @media screen and (max-width: 480px) {
    align-self: center;
  }
`;

const InicioPodcast = () => {
  return (
    <StyledInicioPodcast>
      <StyledImgIcono
        src="https://res.cloudinary.com/dvafjaqbd/image/upload/v1714336884/MONTAJE/INICIO/1-7_1_gxrogt.png"
        alt="Icono Podcast"
      ></StyledImgIcono>
      <StyledTextContainer>
        <StyledLogo
          src="https://res.cloudinary.com/dvafjaqbd/image/upload/v1714336881/MONTAJE/INICIO/1-7-2_lbpqjx.png"
          alt="Logo contraverso"
        ></StyledLogo>
        <StyledText
          src="https://res.cloudinary.com/dvafjaqbd/image/upload/v1714336884/MONTAJE/INICIO/1-disfruta-podcast_qwavks.png"
          alt="Texto podcast"
        ></StyledText>
        <StyledButtonEscuchar to="https://discord.gg/tCqfzHWGCV">ESCUCHAR</StyledButtonEscuchar>
      </StyledTextContainer>
    </StyledInicioPodcast>
  );
};

export default InicioPodcast;
