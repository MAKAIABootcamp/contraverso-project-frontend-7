import React from "react";
import styled from "styled-components";
import "../../../fonts/fonts.css";

const StyledFanzine = styled.div`
  background-image: url("https://res.cloudinary.com/dvafjaqbd/image/upload/v1714336876/MONTAJE/EXPRESA/17_iteslr.png");
  height: 30rem;
`;

const StyledBackgroundImg = styled.img`
 width: 50%;
    margin-top: 2rem;
`;

const StyledTextoImg = styled.img`
    width: 25rem;
    position: absolute;
    margin-top: 3rem;
    margin-left: -36rem;
`;

const StyledImgCat = styled.img`
 width: 17rem;
    position: absolute;
    margin-top: 13.5%;
    margin-left: -60rem;
`
const FanzinesExpresa = () => {
  return (
    <StyledFanzine>
       <StyledBackgroundImg src="https://res.cloudinary.com/dvafjaqbd/image/upload/v1714336877/MONTAJE/EXPRESA/4-3_SUBR_m8fbpa.png" alt="Fondo del texto" />
         <StyledTextoImg src="https://res.cloudinary.com/dvafjaqbd/image/upload/v1714336879/MONTAJE/EXPRESA/4-fanzines_gfpoqo.png"  alt="Texto en imagen" /> 
          <StyledImgCat src="https://res.cloudinary.com/dvafjaqbd/image/upload/v1714336881/MONTAJE/EXPRESA/4-3_jnxqiq.png" alt="Imagen Gato"></StyledImgCat>
    
    </StyledFanzine>
  );
};

export default FanzinesExpresa;
