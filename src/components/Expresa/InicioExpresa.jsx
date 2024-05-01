import styled from "styled-components";
import "../../../fonts/fonts.css";
import { NavLink } from "react-router-dom";

const StyledExpresa = styled.div`
  background-image: url("https://res.cloudinary.com/dvafjaqbd/image/upload/v1714336876/MONTAJE/EXPRESA/16_wsdajl.png");
  height: 30rem;
  display: flex;
`;

const StyledImgRight = styled.img`
  position: absolute;
  margin-left: 65rem;
  width: 54rem;
  height: 50%;
  opacity: 0.8;
  overflow-x: hidden;

  @media (min-width: 480px) and (max-width: 1370px) {
    margin-left: 10rem;
    width: 88%;
    height: 23rem;
    
  }
`;

const StyledImg = styled.img`
  margin-top: 3rem;
  width: 30%;
  position: relative;
  z-index: 3;
  @media screen and (max-width: 480px) {
    margin-top: 5rem;
    width: 59%;
    margin-bottom: 5rem;
  }
  @media (min-width: 481px) and (max-width: 768px) {
    margin-top: 0;
    width: 60%;
    margin-bottom: 4rem;
  }
  @media (min-width: 768px) and (max-width: 1365px) {
    margin-top: 0;
    width: 50%;
    margin-bottom: 4rem;
  }
`;

const StyledTextoContainer = styled.p`
  margin-top: 4rem;
  @media screen and (max-width: 480px) {
    text-align: center;
    margin-left: -4rem;
    width: 13rem;
  }
  @media (min-width: 481px) and (max-width: 768px) {
    margin-left: -5rem;
    width: 19rem;
  }
  @media (min-width: 768px) and (max-width: 1365px) {
    margin-left: -3rem;
        width: 38rem;
        height: 9rem;
  }
`;

const StyledTextoSpan = styled.span`
  color: #f1f1d8;
  background-color: #000000;
  font-family: "Filson Pro Book";
  font-size: 30px;
  line-height: 40px;
  position: relative;
  @media screen and (max-width: 480px) {
    font-size: 17px;
    line-height: 17px;
  }
  @media (min-width: 481px) and (max-width: 768px) {
    font-size: 21px;
    line-height: 31px;
  }
  @media (min-width: 768px) and (max-width: 1375px) {
    font-size: 27px;
    line-height: 37px;
  }
`;

const StyledImgText = styled.img`
  margin-left: 10%;
   height: 12rem;
  width: 50%;
  align-self: flex-end;
  margin-bottom: 1%;
  position: absolute;
  @media screen and (max-width: 480px) {
    margin-left: 0rem;
    z-index: 10;
    width: 42%;
  }
  @media (min-width: 480px ) and (max-width: 768px) {
    margin-left: 0rem;
    z-index: 10;
    width: 42%;
  }
    @media (min-width: 768px) and (max-width: 1365px) {
    margin-left: 0rem;
    z-index: 10;
    width:  35%;
  } 
`;

const StyledButtonExpresa = styled(NavLink)`
  background-color: #fff35f;
  color: #000000;
  padding: 0.5rem;
  font-family: "MADE Soulmaze";
  font-weight: 400;
  font-size: 20px;
  line-height: 23px;
  border-radius: 3px;
  font-weight: bold;
  align-self: flex-end;
  margin-bottom: 5rem;
  text-decoration: none;
  position: relative;
  
  @media screen and (max-width: 480px) {
    margin-left: -12rem;
    margin-bottom: 7rem;
  }
  @media (min-width: 481px) and (max-width: 768px) {
    margin-left: -17rem;
  }
  @media (min-width: 768px) and (max-width: 1575px) {
    margin-left: -31rem;
    margin-bottom: 2rem;
  }
`;

const InicioExpresa = () => {
  return (
    <StyledExpresa>
      <StyledImg
        src="https://res.cloudinary.com/dvafjaqbd/image/upload/v1714336875/MONTAJE/EXPRESA/4-1_no0oii.png"
        alt="Icon"
      ></StyledImg>
      <StyledImgRight
        src="https://res.cloudinary.com/dvafjaqbd/image/upload/v1714336881/MONTAJE/EXPRESA/4-TEXTU_jhes8z.png"
        alt=""
      ></StyledImgRight>
      <StyledImgText
        src="https://res.cloudinary.com/dvafjaqbd/image/upload/v1714336879/MONTAJE/EXPRESA/4-expresa_gwsluu.png"
        alt="textoImagen"
      ></StyledImgText>
      <StyledTextoContainer>
        <StyledTextoSpan>
          Interactúa con nuestra colección creativa sobre el problema de la
          <br/> desinformación. Pregunta, propone y manifiéstate abiertamente.
          El<br/> debate es central para comprender y transformar la realidad.
        </StyledTextoSpan>
      </StyledTextoContainer>
      <StyledButtonExpresa> ENVIAR APORTE</StyledButtonExpresa>
    </StyledExpresa>
  );
};

export default InicioExpresa;
