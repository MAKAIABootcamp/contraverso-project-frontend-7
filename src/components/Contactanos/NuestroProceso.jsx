import styled from "styled-components";
import "../../../fonts/fonts.css";

const StyledNuestroProceso = styled.div`
  background-image: url("https://res.cloudinary.com/dvafjaqbd/image/upload/v1714336891/MONTAJE/SOMOS/24_x3fx6d.png");
  height: 30rem;
`;
const StyledImageBaground = styled.img`
  margin-left: 37%;
  margin-top: 2rem;
  width: 30rem;
`;
const StyledTitulo = styled.h1`
  font-family: "MADE Soulmaze Brush";
  font-size: 3rem;
  margin-top: -5rem;
  text-align: center;
`;

const NuestroProceso = () => {
  return (
    <StyledNuestroProceso>
      <StyledImageBaground
        src="https://res.cloudinary.com/dvafjaqbd/image/upload/v1714336891/MONTAJE/SOMOS/5-2_SUBR_ec4e6r.png"
        alt="Fondo del texto"
      ></StyledImageBaground>
      <StyledTitulo>NUESTRO PROCESO</StyledTitulo>
    </StyledNuestroProceso>
  );
};

export default NuestroProceso;
