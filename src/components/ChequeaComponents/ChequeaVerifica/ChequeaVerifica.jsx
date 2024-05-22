import { useState, useEffect } from "react";
import { setSelectedComponent } from "../../../app/features/filtersByButtons/filtersByButtonsSlice";
import { useDispatch } from "react-redux";
import Button from "../../Button/Button";
import styled from "styled-components";

const SectionStyled = styled.section`
  background-image: url("https://res.cloudinary.com/dvafjaqbd/image/upload/v1714336860/MONTAJE/CHEQUEA/8_bp66eb.png");
  background-repeat: no-repeat;
  background-size: cover;
  width: 100%;
  height: 95vh;
  scroll-snap-align: start;
  display: flex;
  flex-direction: row;
  padding: 2%;

  @media screen and (max-width: 816px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

const StyledContainerText = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 40%;
  gap: 5%;
  padding-left: 5%;

  @media screen and (max-width: 500px) {
    width: 100%;
    padding-right: 5%;
  }
  @media (min-width: 501px) and (max-width: 816px) {
    width: 100%;
    padding-right: 5%;
  }
`;
const TitleStyled = styled.figure`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  img {
    position: relative;
    width: 100%;
  }
  h1 {
    color: #161616;
    position: absolute;
    font-size: 8vw;
    font-family: "MADE Soulmaze Brush";
  }

  @media screen and (max-width: 500px) {
    h1 {
      font-size: 20vw;
    }
  }

  @media (min-width: 501px) and (max-width: 816px) {
    margin-top: 5%;
    h1 {
      font-size: 15vw;
    }
  }
`;

const TextStyled = styled.div`
  width: 100%;
  padding-left: 10%;
  p {
    font-family: "Filson Pro Book";
    font-size: 2vw;
  }
  @media screen and (max-width: 500px) {
    p {
      margin-top: 5%;
      font-size: 5vw;
    }
  }
  @media (min-width: 501px) and (max-width: 816px) {
    p {
      margin-top: 3%;
      font-size: 3vw;
      padding-left: 0;
    }
  }
`;

const ImageStyled = styled.figure`
  width: 40%;
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    max-width: 100%;
  }

  @media screen and (max-width: 816px) {
    width: 50%;
  }
`;

const ContainerStyled = styled.div`
  width: 20%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  padding-right: 5%;
  @media (min-width: 501px) and (max-width: 816px) {
    width: 100%;
    flex-direction: row;
    flex-wrap: wrap;
    padding-right: 0;
  }

  @media screen and (max-width: 500px) {
    padding-right: 0;
  }
`;

const ChequeaVerifica = ({ onButtonClick }) => {
  const [buttonWidth, setButtonWidth] = useState(14);
  const dispatch = useDispatch();

  useEffect(() => {
    const handleButtonWidth = () => {
      const screenWidth = window.innerWidth;

      if (screenWidth < 1200) {
        setButtonWidth(10);
      } else if (screenWidth > 1800) {
        setButtonWidth(18);
      } else {
        setButtonWidth(14);
      }
    };

    handleButtonWidth();

    window.addEventListener("resize", handleButtonWidth);

    return () => {
      window.removeEventListener("resize", handleButtonWidth);
    };
  }, []);

  return (
    <>
      <SectionStyled>
        <StyledContainerText>
          <TitleStyled>
            <img
              src="https://res.cloudinary.com/dvafjaqbd/image/upload/v1714336852/MONTAJE/CHEQUEA/2-1_SUBR_k2tiua.png"
              alt="Decoración del título principal"
            />
            <h1>Verifica</h1>
          </TitleStyled>

          <TextStyled>
            <p>Comprueba por tu cuenta si lo que te han dicho es verdad. </p>
          </TextStyled>
        </StyledContainerText>

        <ImageStyled>
          <img
            src="https://res.cloudinary.com/dvafjaqbd/image/upload/v1714336859/MONTAJE/CHEQUEA/2-2_svonxv.png"
            alt="Perro con lentes"
          />
        </ImageStyled>

        <ContainerStyled>
          <Button
            fondoColor="#1DF4C8"
            width={buttonWidth}
            handleClick={() => {
              onButtonClick('Imagenes');
              dispatch(setSelectedComponent('Imagenes'));
            }}
          >
            IMÁGENES
          </Button>
          <Button
            fondoColor="#1DF4C8"
            width={buttonWidth}
            handleClick={() => {onButtonClick("Videos");
            dispatch(setSelectedComponent('Videos'));}
            }
          >
            VÍDEOS
          </Button>
          <Button
            fondoColor="#1DF4C8"
            width={buttonWidth}
            handleClick={() => {onButtonClick("DireccionesIP")
              dispatch(setSelectedComponent('DireccionesIP'));
            }}
          >
            DIRECCIONES IP
          </Button>
          <Button
            fondoColor="#1DF4C8"
            width={buttonWidth}
            handleClick={() => {onButtonClick("RedesSociales");
              dispatch(setSelectedComponent('RedesSociales'));
            }}
          >
            REDES SOCIALES
          </Button>
        </ContainerStyled>
      </SectionStyled>
    </>
  );
};

export default ChequeaVerifica;
