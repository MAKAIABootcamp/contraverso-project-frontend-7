import styled from "styled-components";
import "../../../fonts/fonts.css";
import ComponenteEquipo from "./ComponenteEquipo";

const StyledNuestroEquipo = styled.div`
  background-image: url("https://res.cloudinary.com/dvafjaqbd/image/upload/v1714336891/MONTAJE/SOMOS/24_x3fx6d.png");
  height: 30rem;
`;

const StyledLogo = styled.img`
  width: 6rem;
  margin-left: 105rem;
`;
const StyledBackground = styled.img`
  margin-left: 37%;
  margin-top: -1rem;
  width: 30rem;
`;
const StyledTitulo = styled.h1`
  font-family: "MADE Soulmaze Brush";
  font-size: 3rem;
  margin-top: -5rem;
  text-align: center;
`;

const StyledImagenLateralIzquierda = styled.img`
  width: 12rem;
  position: absolute;
  margin-top: -5rem;
`;

const StyledImagenLateralDerecha = styled.img`
  width: 25rem;
  margin-top: -1rem;
  opacity: 0.8;
  margin-left: 93.5rem;
`;

const StyledComponenteEquipoContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  margin-top: -24rem;
  margin-left: 12rem;
`;

const StyledComponenteEquipo = styled(ComponenteEquipo)`
  text-align: center;
`;

const StyledSubTitulo = styled.h2`
  font-family: "MADE Soulmaze Outline";
  color: #4100d0;
  font-style: italic;
  text-align: center;
`;
const StyledContribuyentes = styled.div`
  margin-left: 43rem;
  margin-top: 2rem;
`;

const StyledNombre = styled.span`
  margin-right: 2rem;
  font-family: "Filson Pro";
`;

const NuestroEquipo = () => {
  return (
    <StyledNuestroEquipo>
      <StyledLogo
        src="https://res.cloudinary.com/dvafjaqbd/image/upload/v1714336892/MONTAJE/SOMOS/6-2_wcgkbl.png"
        alt="Logo"
      />
      <StyledBackground src="https://res.cloudinary.com/dvafjaqbd/image/upload/v1714336894/MONTAJE/SOMOS/6-SUBR_eyuuxc.png" />
      <StyledTitulo>NUESTRO EQUIPO</StyledTitulo>
      <StyledImagenLateralIzquierda src="https://res.cloudinary.com/dvafjaqbd/image/upload/v1714336891/MONTAJE/SOMOS/6-2_FORM_uolhnl.png" />
      <StyledImagenLateralDerecha src="https://res.cloudinary.com/dvafjaqbd/image/upload/v1714336892/MONTAJE/SOMOS/6-2_TEXTU_ca8kre.png" />

      <StyledComponenteEquipoContainer>
        <StyledComponenteEquipo
          imagen="https://res.cloudinary.com/dvafjaqbd/image/upload/v1714336895/MONTAJE/SOMOS/6-3_hbbkgp.png"
          titulo="Sofía Vitery"
          texto="Diseñadora Gráfica"
        />
        <StyledComponenteEquipo
          imagen="https://res.cloudinary.com/dvafjaqbd/image/upload/v1714336895/MONTAJE/SOMOS/6-4_xdkktr.png"
          titulo="Samuel Coral"
          texto="Lic. Ciencias Sociales"
        />
      </StyledComponenteEquipoContainer>

      <StyledSubTitulo>DESARROLLO WEB</StyledSubTitulo>
      <StyledContribuyentes>
        <StyledNombre>ESTEFANÍA VILLÁN</StyledNombre>
        <StyledNombre>GABRIELA AGUIAR</StyledNombre>
        <StyledNombre>JULIANA ARGAEZ</StyledNombre>
        <StyledNombre>SOFIA VITERY</StyledNombre>
      </StyledContribuyentes>
    </StyledNuestroEquipo>
  );
};

export default NuestroEquipo;
