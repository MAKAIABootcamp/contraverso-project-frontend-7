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
  width: 45%;
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
   @media (max-width: 500px) {
    width: 100%;
    align-self: center;
    img {
      width:100%;
    }
    h1 {
      font-size: 3.5rem;
    }
  }

  @media (min-width: 501px)  and (max-width:560px){
    width: 100%;
    align-self: center;
    img {
      width:100%;
    }
    h1 {
      font-size: 5rem;
    }
  }

  @media (min-width: 561px)  and (max-width:800px){
    width: 100%;
    align-self: center;
    img {
      width:100%;
    }
    h1 {
      font-size: 6.5rem;
    }
  }
  @media (min-width: 801px)  and (max-width:1115px){
    width: 100%;
    align-self: center;
    img {
      width:100%;
    }
    h1 {
      font-size: 7.5rem;
    }
  }
  
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

  @media (max-width: 500px) {
    button{
      width: 12rem;
    }
    }
`;

const PerroStyled = styled.img`
  width: 50%;
  max-height: 100%;
  z-index: 1;
  align-self: flex-end;

  @media (max-width: 360px) {
    width: 100%;
    
  }
  @media (min-width: 361px) and (max-width:500px) {
    width: 100%;
    height: 65%;
  }
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

  @media (max-width: 500px) {
    display: none;
  }
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
