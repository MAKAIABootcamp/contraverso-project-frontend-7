import styled from "styled-components";
import "../../../fonts/fonts.css";
import ComponenteEquipo from "./ComponenteEquipo";

const StyledNuestroEquipo = styled.div`
  background-image: url(
    "https://res.cloudinary.com/dvafjaqbd/image/upload/v1714336891/MONTAJE/SOMOS/24_x3fx6d.png"
  );
  height: 30rem;
  scroll-snap-align: start;
`;

const StyledLogo = styled.img`
  width: 6rem;
  margin-left: 105rem;
  @media (min-width: 1024px) and (max-width: 1366px) {
    margin-left: 67rem;
  }
  @media (max-width: 1024px) {
    margin-left: 53rem;
  }
  @media (max-width: 768px) {
    margin-left: 36rem;
  }
  @media (max-width: 600px) {
    margin-left: 28rem;
  }
  @media (max-width: 414px) {
    margin-left: 16rem;
  }
  @media (max-width: 375px) {
    margin-left: 12rem;
  }
  @media (max-width: 320px) {
    margin-left: 12rem;
  }
`;
const StyledBackground = styled.img`
  max-width: 31rem;
  margin-left: 44rem;
  width: 30rem;
  @media (min-width: 1024px) and (max-width: 1366px) {
    width: 22rem;
    margin-left: 21rem;
  }
  @media (max-width: 1024px) {
    width: 22rem;
    margin-left: 21rem;
  }
  @media (max-width: 768px) {
    width: 22rem;
    margin-left: 7rem;
  }
  @media (max-width: 600px) {
    width: 22rem;
    margin-left: 7rem;
  }
  @media (max-width: 414px) {
    width: 19rem;
    margin-left: 3rem;
  }
  @media (max-width: 375px) {
    width: 17rem;
    margin-left: 1rem;
    margin-top: 1rem;
  }
  @media (max-width: 320px) {
    width: 17rem;
    margin-left: 1rem;
    margin-top: 1rem;
  }
`;
const StyledTitulo = styled.h1`
  font-family: "MADE Soulmaze Brush";
  font-size: 3rem;
  margin-top: -5rem;
  text-align: center;
  @media (max-width: 1024px) {
    font-size: 196%;
    margin-top: -5%;
  }
  @media (max-width: 768px) {
    font-size: 196%;
    margin-top: -9%;
  }
  @media (max-width: 600px) {
    font-size: 196%;
    margin-top: -9%;
  }
  @media (max-width: 414px) {
    margin-right: 0rem;
    font-size: 148%;
    margin-top: -12%;
  }
  @media (max-width: 375px) {
    margin-right: 3rem;
    font-size: 148%;
    margin-top: -12%;
  }
  @media (max-width: 320px) {
    margin-left: 2rem;
    font-size: 148%;
    margin-top: -15%;
  }
`;

const StyledImagenLateralIzquierda = styled.img`
  width: 12rem;
  position: absolute;
  margin-top: -5rem;
  @media (max-width: 1024px) {
    width: 19%;
    margin-left: 0%;
  }
  @media (max-width: 768px) {
    width: 19%;
    margin-left: 0%;
  }
  @media (max-width: 600px) {
    width: 19%;
    margin-left: 0%;
  }
  @media (max-width: 414px) {
    display: none;
  }
  @media (max-width: 375px) {
    display: none;
  }
  @media (max-width: 320px) {
    display: none;
  }
`;

const StyledImagenLateralDerecha = styled.img`
  width: 25rem;
  margin-top: -1.7rem;
  opacity: 0.8;
  margin-left: 93.5rem;
  position: absolute;

  filter: brightness(491%) opacity(0.8);
  @media (min-width: 1024px) and (max-width: 1366px) {
    margin-left: 64%;
    width: 36%;
    margin-top: -7.2%;
  }
  @media (max-width: 1024px) {
    margin-left: 64%;
    width: 36%;
    margin-top: 2%;
  }
  @media (max-width: 768px) {
    margin-top: 17.3%;
    margin-left: 64%;
    width: 36%;
  }
  @media (max-width: 600px) {
    margin-top: 31%;
    margin-left: 64%;
    width: 36%;
  }
  @media (max-width: 414px) {
    display: none;
  }
  @media (max-width: 375px) {
    display: none;
  }
  @media (max-width: 320px) {
    display: none;
  }
`;

const StyledComponenteEquipoContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  margin-top: 2rem;
  margin-left: 12rem;
  @media (max-width: 1024px) {
    margin-top: 4%;
    width: 35rem;
    margin-left: 19rem;
  }
  @media (max-width: 768px) {
    margin-top: 9%;
    width: 35rem;
    margin-left: 10rem;
  }
  @media (max-width: 600px) {
    margin-top: 8%;
    width: 31rem;
    margin-left: 5rem;
  }
  @media (max-width: 414px) {
    margin-top: 9%;
    width: 23rem;
    margin-left: 16%;
  }
  @media (max-width: 375px) {
    margin-top: 9%;
    width: 23rem;
    margin-left: 1rem;
  }
  @media (max-width: 320px) {
    margin-top: 9%;
    width: 20rem;
    margin-left: 1rem;
  }
`;

const StyledComponenteEquipo = styled(ComponenteEquipo)`
  text-align: center;
  @media (max-width: 1024px) {
    margin-top: 3%;
    font-size: 171%;
    margin-left: 8%;
  }
  @media (max-width: 768px) {
    margin-top: 3%;
    font-size: 171%;
    margin-left: 8%;
  }
  @media (max-width: 600px) {
    margin-top: 3%;
    font-size: 171%;
    margin-left: 8%;
  }
  @media (max-width: 414px) {
    margin-top: 3%;
    font-size: 171%;
    margin-left: 8%;
  }
  @media (max-width: 375px) {
    margin-top: 2%;
  }
  @media (max-width: 320px) {
    margin-top: 2rem;
  }
`;

const StyledSubTitulo = styled.h2`
  font-family: "MADE Soulmaze Outline";
  color: #4100d0;
  font-style: italic;
  text-align: center;

  @media (max-width: 1024px) {
    margin-top: 3%;
    font-size: 163%;
    margin-right: -3%;
  }
  @media (max-width: 768px) {
    margin-top: 3%;
    font-size: 163%;
    margin-right: 1%;
  }
  @media (max-width: 600px) {
    margin-top: 3%;
    font-size: 163%;
    margin-right: 2%;
  }
  @media (max-width: 414px) {
    margin-top: 6%;
    font-size: 171%;
    margin-right: -2%;
  }
  @media (max-width: 375px) {
    margin-top: 11%;
    margin-left: 12%;
  }
  @media (max-width: 320px) {
    font-size: 127%;
    margin-left: 15%;
    margin-top: 11%;
  }
`;
const StyledContribuyentes = styled.div`
  margin-left: 43rem;
  margin-top: 2rem;
  @media (min-width: 1024px) and (max-width: 1366px) {
    margin-left: 16rem;
    font-size: 50%;
    display: flex;
    margin-top: -3%;
  }
  @media (max-width: 1024px) {
    margin-left: 8rem;
    font-size: 50%;
    display: flex;
    margin-top: 0%;
  }
  @media (max-width: 768px) {
    margin: auto;
    font-size: 50%;
    display: flex;
  }
  @media (max-width: 600px) {
    margin: auto;
    font-size: 50%;
    display: flex;
  }
  @media (max-width: 414px) {
    margin-left: 27%;
    font-size: 50%;
    display: grid;
  }
  @media (max-width: 375px) {
    margin-left: 15%;
    font-size: 50%;
    display: grid;
  }
  @media (max-width: 320px) {
    margin-left: 15%;
    font-size: 50%;
    display: grid;
  }
`;

const StyledNombre = styled.span`
  margin-right: 2rem;
  font-family: "Filson Pro";
  @media (min-width: 1024px) and (max-width: 1366px) {
    font-size: 192%;
    margin-top: 6%;
    margin-left: 2rem;
  }
  @media (max-width: 1024px) {
    font-size: 192%;
    margin-top: 6%;
    margin-left: 2rem;
  }
  @media (max-width: 768px) {
    font-size: 192%;
    margin-top: 6%;
    margin-left: 2rem;
  }
  @media (max-width: 600px) {
    font-size: 192%;
    margin-top: 6%;
    margin-left: 2rem;
  }
  @media (max-width: 414px) {
    font-size: 192%;
    margin-top: 6%;
    margin-left: 2rem;
  }
  @media (max-width: 375px) {
    font-size: 192%;
    margin-top: 6%;
    margin-left: 2rem;
  }
  @media (max-width: 320px) {
    font-size: 192%;
    margin-top: 6%;
    margin-left: 2rem;
  }
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
