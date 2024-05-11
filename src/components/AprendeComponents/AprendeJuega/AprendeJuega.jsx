import styled from "styled-components";
import Button from "../../Button/Button";

const SectionStyled = styled.section`
  background-image: url("https://res.cloudinary.com/dvafjaqbd/image/upload/v1714336853/MONTAJE/APRENDE/21_waoapm.png");
  background-repeat: no-repeat;
  background-size: 100% 100%;
  width: 100%;
  height: 95vh;
  position: relative;
  scroll-snap-align: start;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const ContainerStyled = styled.div`
  width: 40%;
  height: 30%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 5%;
  

  img {
    position: relative;
    width: 100%;
    padding: 5%;
    
  }
  h1 {
    font-size: 6rem;
    font-family: "MADE Soulmaze Brush";
    position: absolute;
  }
  /* @media (max-width: 768px) {
    bottom: 73%;
    left: 20%;
    img {
      width: auto;
      height: 7vh;
    }
    h1 {
      font-size: 5.5rem;
    }
  }
  @media (max-width: 414px) {
    bottom: 73%;
    left: 10%;
    img {
      width: auto;
      height: 6.8vh;
    }
    h1 {
      font-size: 4.5rem;
      left: 19%;
    }
  }
  @media (max-width: 375px) {
    h1 {
      font-size: 4rem;
    }
  }
  @media (max-width: 375px) {
    h1 {
      font-size: 3.5rem;
    }
  } */
`;

const StyledContainer = styled.div`
  width: 100%;
  height: 70%;
  display: flex;
  flex-direction: row;
  position: relative;
`;

const ButtonsStyled = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: absolute;
  gap: 1.2rem;
  width: 100%;
  height: 100%;
  /* @media (max-width: 768px) {
    top: 37%;
  }
  @media (max-width: 414px) {
    top: 37%;
  }
  @media (max-width: 375px) {
    top: 35%;
  }
  @media (max-width: 320px) {
    top: 33%;
  } */
`;

const PerroStyled = styled.img`
  width: 50%;
  max-height: 100%;
  z-index: 1;
  align-self: flex-end;

  /* @media (max-width: 768px) {
    top: 53%;
    height: 47vh;
  } */
`;

const TextureStyled = styled.figure`
  display: flex;
  width: 50%;
  padding-right: 10%;
  max-height: 80%;
  align-self: flex-end;
  img {
    opacity: 0.5;
    width: 100%;
    z-index: 0;
  }
  /* @media (max-width: 768px) {
    img {
      height: 45vh;
    }
    transform: translate(0, 96.8%);
  } */
`;

const AprendeJuega = () => {
  return (
    <SectionStyled>
      <ContainerStyled>
        <img
          src="https://res.cloudinary.com/dvafjaqbd/image/upload/v1714336835/MONTAJE/APRENDE/5-2_SUBR_lcbetg.png"
          alt="Decoración del titulo principal"
        />
        <h1>Juegos</h1>
      </ContainerStyled>
      <ButtonsStyled>
        <Button>JUEGOS EN LÍNEA</Button>
        <Button>JUEGOS DE MESA</Button>
      </ButtonsStyled>

      <StyledContainer>
        <TextureStyled>
          <img
            src="https://res.cloudinary.com/dvafjaqbd/image/upload/v1714336837/MONTAJE/APRENDE/5-2_TEXTU_pnnfs8.png"
            alt="Textura"
          />
        </TextureStyled>
        <PerroStyled
          src="https://res.cloudinary.com/dvafjaqbd/image/upload/v1714336848/MONTAJE/APRENDE/5-2_pisnsy.png"
          alt="Perro sentado en la mesa"
        ></PerroStyled>
      </StyledContainer>
    </SectionStyled>
  );
};

export default AprendeJuega;
