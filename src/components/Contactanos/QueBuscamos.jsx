import styled from "styled-components";
import "../../../fonts/fonts.css";



const StyledBuscamos = styled.div`
    background-image: ("https://res.cloudinary.com/dvafjaqbd/image/upload/v1714336891/MONTAJE/SOMOS/25_r4zlnb.png");
    height: 30rem;
`
const StyledBackgroundImage = styled.img`
margin-left: 37%;
    margin-top: 2rem;
    width: 30rem;
`
const StyledTitulo = styled.h1`
font-family: "MADE Soulmaze Brush";
font-size: 3rem;
    margin-top: -5rem;
    text-align: center;
    `
    const StyledTexto = styled.p`
        margin-top: 4rem;
        text-align: center;
    `
const StyledTextoSpan = styled.span`
  color: #ffffff;
  background-color: #000000;
  font-family: "Filson Pro Book";
  font-size: 19px;
    line-height: 29px;
  position: relative;
`
const StyledImagenLateralDerecha = styled.img `
  width: 12rem;
    position: absolute;
    margin-top: -16rem;
    margin-left: 106.5rem;
`
const StyledImagenLateralIzquierda = styled.img `
      width: 39rem;
    margin-top: -10rem;
    height: 24rem;
    opacity: 0.8;

`

const QueBuscamos = () => {
    return (
        <StyledBuscamos>

        <StyledBackgroundImage src="https://res.cloudinary.com/dvafjaqbd/image/upload/v1714336894/MONTAJE/SOMOS/6-SUBR_eyuuxc.png" alt="Fondo del texto"></StyledBackgroundImage>
       <StyledTitulo>¿QUÉ BUSCAMOS?</StyledTitulo>
        <StyledTexto>
       
<StyledTextoSpan>
            La verdad es un terreno en disputa que se construye y se reconstruye <br/> constantemente. Por eso, te acompañaremos con diferentes herramientas para <br/>empezar a confrontar la desinformación. Buscamos apoyarte en tu camino hacia una <br/> comunicación más activa, creativa y responsable, que le aporte a la construcción de <br/> un mejor futuro para la humanidad. 
           </StyledTextoSpan>
 </StyledTexto>
<StyledImagenLateralDerecha src="https://res.cloudinary.com/dvafjaqbd/image/upload/v1714336892/MONTAJE/SOMOS/6-FORM_peyy9n.png" alt="Imagen lateral derecha"></StyledImagenLateralDerecha>
<StyledImagenLateralIzquierda src="https://res.cloudinary.com/dvafjaqbd/image/upload/v1714336894/MONTAJE/SOMOS/6-TEXTU_gbmnzz.png" alt="Imagen lateral izquierda">

</StyledImagenLateralIzquierda>
        </StyledBuscamos>
    )
}

export default QueBuscamos