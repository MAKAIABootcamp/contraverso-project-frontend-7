import React from "react";
import styled from "styled-components";
import CarouselExpresa from "../Expresa/CarruselExpresa"; 
import "../../../fonts/fonts.css";

const StyledFanzine = styled.div`
  background-image: url("https://res.cloudinary.com/dvafjaqbd/image/upload/v1714336876/MONTAJE/EXPRESA/17_iteslr.png");
  height: 30rem;
`;

const StyledBackgroundImg = styled.img`
  width: auto;
  margin-top: 5rem;
`;

const StyledTextoImg = styled.img`
  width: 22rem;
  height: 8rem;
  margin-left: -32rem;
`;

const StyledImgCat = styled.img`
   width: 15rem;
    margin-top: 4.5rem;
`
const FanzinesExpresa = () => {
  return (
    <StyledFanzine>
      <StyledBackgroundImg src="https://res.cloudinary.com/dvafjaqbd/image/upload/v1714336877/MONTAJE/EXPRESA/4-3_SUBR_m8fbpa.png" alt="Fondo del texto" />
      <StyledTextoImg src="https://res.cloudinary.com/dvafjaqbd/image/upload/v1714336879/MONTAJE/EXPRESA/4-fanzines_gfpoqo.png" />
      
      <CarouselExpresa>
        <div>
          <span>1</span>
        </div>
      </CarouselExpresa>
      <StyledImgCat src="https://res.cloudinary.com/dvafjaqbd/image/upload/v1714336881/MONTAJE/EXPRESA/4-3_jnxqiq.png"></StyledImgCat>
    </StyledFanzine>
  );
};

export default FanzinesExpresa;
