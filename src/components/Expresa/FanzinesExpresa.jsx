import React from "react";
import styled from "styled-components";
import "../../../fonts/fonts.css";

const StyledFanzine = styled.div`
  background-image: url("https://res.cloudinary.com/dvafjaqbd/image/upload/v1714336876/MONTAJE/EXPRESA/17_iteslr.png");
  background-size: 100% 100%;
  width: 100%;
  height: 95vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  scroll-snap-align: start;
`;

const StyledTitle = styled.div`
width: 50%;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
padding: 4%;
position: relative;

@media (max-width:800px) {
    align-self: center;
    width: 100%;
  }

@media (min-width:801px) and (max-width:1111px){
  width: 70%;
}
`
const StyledBackgroundImg = styled.img`
  width: 100%;
  z-index: 1;
`;

const StyledTextoImg = styled.img`
  width: 70%;
  z-index: 2;
  position: absolute;
`;

const StyledImgCat = styled.img`
  width: 25%;
  margin-top: auto;
  z-index: 3;
  @media (max-width:950px) {
    width: 35%;
  }
`;
const FanzinesExpresa = () => {
  return (
    <StyledFanzine>
      <StyledTitle>
      <StyledBackgroundImg
        src="https://res.cloudinary.com/dvafjaqbd/image/upload/v1714336877/MONTAJE/EXPRESA/4-3_SUBR_m8fbpa.png"
        alt="Fondo del texto"
      />
      <StyledTextoImg
        src="https://res.cloudinary.com/dvafjaqbd/image/upload/v1714336879/MONTAJE/EXPRESA/4-fanzines_gfpoqo.png"
        alt="Texto en imagen"
      />
      </StyledTitle>
      
      <StyledImgCat
        src="https://res.cloudinary.com/dvafjaqbd/image/upload/v1714336881/MONTAJE/EXPRESA/4-3_jnxqiq.png"
        alt="Imagen Gato"
      ></StyledImgCat>
    </StyledFanzine>
  );
};

export default FanzinesExpresa;
