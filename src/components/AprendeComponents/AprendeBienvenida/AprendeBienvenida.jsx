import styled from "styled-components";

const SectionStyled = styled.section`
  background-image: url("https://res.cloudinary.com/dvafjaqbd/image/upload/v1714336853/MONTAJE/APRENDE/21_waoapm.png");
  background-repeat: no-repeat;
  background-size: 100% 100%;
  width: 100%;
  height: 80vh;
  scroll-snap-align: start;
  display: flex;
  flex-direction: row;

  @media screen and (max-width: 700px) {
    flex-direction: column;
    justify-content: space-between;
    padding-top: 20%;
  }
`;

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 60%;
  height: 100%;
  padding-top: 5%;
  padding-bottom: 5%;
  justify-content: center;
  align-items: center;
  gap: 5%;

  @media screen and (max-width: 700px) {
    width: 100%;
    height: 50%;
    flex-direction: column-reverse;
    gap: 0;
  }
`;

const TextStyled = styled.p`
  color: #f1f1d8;
  font-size: 2.3rem;
  font-family: "Filson Pro Book";
  line-height: 1;
  width: 100%;
  padding-left: 5%;
  span {
    background-color: #161616;
  }

  @media screen and (max-width: 500px) {
    font-size: 1.3rem;
    width: 100%;
    padding-right: 5%;
  }

  @media (min-width: 501px) and (max-width: 700px) {
    font-size: 1.7rem;
    width: 100%;
    padding-right: 5%;
  }
`;

const AprendeStyled = styled.img`
  width: 80%;
  align-self: flex-start;
  @media screen and (max-width: 700px) {
    width: 90%;
  }
`;

const GatoStyled = styled.img`
  width: 40%;
  max-height: 100%;
  align-self: flex-end;

  @media screen and (max-width: 500px) {
    width: 60%;
    max-height: 45%;
  }
  @media (min-width: 501px) and (max-width: 700px) {
    width: auto;
    max-height: 45%;
  }
`;

const AprendeBienvenida = () => {
  return (
    <SectionStyled>
      <StyledContainer>
        <TextStyled>
          <span>
            Apóyate en estos artefactos educativos y comunicativos para ampliar
            tu conocimiento sobre el problema de la desinformación.
          </span>
        </TextStyled>
        <AprendeStyled
          src="https://res.cloudinary.com/dvafjaqbd/image/upload/v1714336840/MONTAJE/APRENDE/5-aprende_hol8pk.png"
          alt="Aprende"
        />
      </StyledContainer>
      <GatoStyled
        src="https://res.cloudinary.com/dvafjaqbd/image/upload/v1714336843/MONTAJE/APRENDE/5-1_vauxy6.png"
        alt="Gato pensando"
      />
    </SectionStyled>
  );
};

export default AprendeBienvenida;
