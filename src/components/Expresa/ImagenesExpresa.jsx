import styled from "styled-components";
import CarruselIMG from "./CarruselIMG/CarruselIMG";

const StyledImagenes = styled.div`
  background-image: url("https://res.cloudinary.com/dvafjaqbd/image/upload/v1714336875/MONTAJE/EXPRESA/18_txk2kg.png");
  height: 38rem;
  position: relative;
  scroll-snap-align: start;
  scroll-snap-align: start;

  .ContainerIMG{
    width: 98%;
    height: auto;
    @media(max-width: 735px) {
    width: 90%;
  }
    @media(max-width: 459px) {
    width: 80%;
  }
  @media(max-width: 316px) {
    width: 70%;
  }
  }

  .StyledBackground {
    width: 20%;
  margin-top: 2%;
  margin-left: 2%;
  position: absolute;
  @media (min-width: 1024px) and (max-width: 1366px) {
    width: 48%;
    margin-top: 4%;
    margin-left: 4%;
  }
  @media (max-width: 1024px) {
    width: 73%;
    margin-top: 4%;
    margin-left: 4%;
  }
  @media (max-width: 768px) {
    width: 73%;
    margin-top: 4%;
    margin-left: 4%;
  }
  @media (max-width: 600px) {
    margin-left: 0%;
    height: 14%;
  }
  @media (max-width: 414px) {
    margin-left: 0%;
    height: 10%;
  }
  @media (max-width: 375px) {
    width: 85%;
    margin-left: 0%;
    height: 10%;
  }
  @media (max-width: 320px) {
    width: 73%;
    margin-top: 4%;
    margin-left: 4%;
  }
  }

  .StyledTextoImg {
  position: absolute;
  width: 46%;
  margin-left: -1rem;
  margin-top: 6vh;
  @media (min-width: 1024px) and (max-width: 1366px) {
    width: 42%;
    margin-left: 9%;
  }
  @media (max-width: 1024px) {
    width: 52%;
    margin-top: 1%;
    margin-left: 17%;
  }
  @media (max-width: 768px) {
    width: 55%;
    margin-left: 16%;
  }
  @media (max-width: 600px) {
    width: 62%;
    margin-left: 8%;
    margin-top: 1%;
  }
  @media (max-width: 414px) {
    width: 61%;
    margin-left: 9%;
    margin-top: 2%;
  }
  @media (max-width: 375px) {
    width: 70%;
    margin-left: 10%;
  }
  @media (max-width: 320px) {
    width: 55%;
    margin-left: 16%;
  }
  }

  .StyledImgCat {
  width: 17rem;
  position: absolute;
  margin-top: 8rem;
  margin-left: 101rem;
  @media (min-width: 1024px) and (max-width: 1366px) {
    width: 21%;
    margin-top: 5rem;
    margin-left: 77%;
  }
  @media (max-width: 1024px) {
    width: 20%;
    margin-top: 14rem;
    margin-left: 78%;
  }
  @media (max-width: 768px) {
    width: 27%;
    margin-top: 13rem;
    margin-left: 68%;
  }
  @media (max-width: 600px) {
    width: 32%;
    margin-top: 15rem;
    margin-left: 63%;
  }
  @media (max-width: 414px) {
    margin-top: 16rem;
  }
  @media (max-width: 375px) {
    width: 46%;
    margin-top: 17rem;
    margin-left: 50%;
  }
  @media (max-width: 320px) {
    width: 46%;
    margin-top: 17rem;
    margin-left: 50%;
  }
  }

`;

  
const ImagenesExpresa = () => {
  return (
    <StyledImagenes>
      <div>
      <img src="https://res.cloudinary.com/dvafjaqbd/image/upload/v1714336877/MONTAJE/EXPRESA/4-4_SUBR_nnp6gv.png"
        alt="Backgroun de la imagen"className="StyledBackground"/>
      <img src="https://res.cloudinary.com/dvafjaqbd/image/upload/v1714336880/MONTAJE/EXPRESA/4-imagenes_v7jgsf.png"
        alt="Imagen texto" className="StyledTextoImg"/>
      <img src="https://res.cloudinary.com/dvafjaqbd/image/upload/v1714336879/MONTAJE/EXPRESA/4-4_gqrlzp.png"
        alt="Gato leyendo" className="StyledImgCat"/>
      </div>
      <div className="ContainerIMG"><CarruselIMG/></div>            
    </StyledImagenes>
  );
};

export default ImagenesExpresa;
