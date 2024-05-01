import React, { useState, useEffect } from "react";
import Button from "../../Button/Button";
import styled from "styled-components";

const SectionStyled = styled.section`
  background-image: url("https://res.cloudinary.com/dvafjaqbd/image/upload/v1714336860/MONTAJE/CHEQUEA/8_bp66eb.png");
  width: 100%;
  height: 100vh;
`;
const TitleStyled = styled.figure`
  width: 40%;
  position: absolute;
  top: 26%;
  left: 7%;
  img {
    position: relative;
    width: auto;
    height: 12vh;
  }
  h1 {
    position: absolute;
    top: -31%;
    left: 10%;
    font-size: 6rem;
    font-family: "MADE Soulmaze Brush";
  }
  @media (max-width: 1024px) {
    width: 70%;
    top: 20%;
    left: 10%;
    h1 {
      top: -35%;
      font-size: 5rem;
    }
  }
  @media (max-width: 768px) {
    width: 70%;
    top: 14%;
    left: 18%;
    img {
      height: 8vh;
    }
    h1 {
      top: -25%;
      left: 22%;
      font-size: 5rem;
    }
  }
  @media (max-width: 600px) {
    top: 25%;
    left: 14%;
    img {
      left: 4%;
    }
    h1 {
      font-size: 4.6rem;
    }
  }
  @media (max-width: 414px) {
    top: 25%;
    left: 9%;
    img {
      left: 13%;
      height: 6vh;
    }
    h1 {
      top: -33%;
      font-size: 3.8rem;
    }
  }
  @media (max-width: 375px) {
    top: 30%;
    img {
      height: 5.6vh;
    }
  }
  @media (max-width: 320px) {
    top: 18%;
    left: 8%;
    img {
      left: 3.4%;
      height: 6.7vh;
    }
    h1 {
      top: -33%;
      font-size: 3.2rem;
    }
  }
`;

const TextStyled = styled.div`
  position: absolute;
  top: 46%;
  left: 6%;
  width: 35%;
  p {
    font-family: "Filson Pro Book";
    font-size: 2rem;
  }
  @media (max-width: 1024px) {
    top: 35%;
    left: 12%;
    width: 40%;
    p {
      font-size: 1.7rem;
    }
  }
  @media (max-width: 768px) {
    top: 29%;
    left: 12%;
    width: 80%;
    p {
      text-align: justify;
      font-size: 2rem;
    }
  }
  @media (max-width: 600px) {
    top: 38%;
    left: 11%;
    p {
      text-align: center;
      font-size: 1.8rem;
    }
  }
  @media (max-width: 414px) {
    top: 36%;
    left: 17%;
    width: 68%;
    p {
      text-align: justify;
      font-size: 1.5rem;
    }
  }
  @media (max-width: 375px) {
    top: 41%;
    left: 14%;
    width: 75%;
  }
  @media (max-width: 320px) {
    top: 31%;
    left: 13.2%;
    width: 73%;
    p {
      text-align: justify;
      font-size: 1.44rem;
    }
  }
`;

const ImageStyled = styled.figure`
  position: relative;
  width: min-content;
  top: 13%;
  left: 40%;
  img {
    width: auto;
    height: 85vh;
  }
  @media (max-width: 1024px) {
    top: 50%;
    left: 15%;
    img {
      height: 48vh;
    }
  }
  @media (max-width: 768px) {
    left: 1%;
    top: 42%;
    img {
      height: 42vh;
    }
  }
  @media (max-width: 600px) {
    top: 15%;
    left: 10%;
    img {
      width: auto;
      height: 15vh;
    }
  }
  @media (max-width: 414px) {
    top: 6%;
    img {
      width: auto;
      height: 18vh;
    }
  }
  @media (max-width: 375px) {
    top: 10%;
    left: 10%;
  }
  @media (max-width: 320px) {
    display: none;
  }
`;

const ContainerStyled = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  top: 50%;
  left: 60%;
  transform: translate(80%, -45%);
  @media (max-width: 1024px) {
    gap: 0.5rem;
    transform: translate(8%, -20%);
  }
  @media (max-width: 768px) {
    gap: 0.8rem;
    transform: translate(-10%, 30%);
  }
  @media (max-width: 600px) {
    transform: translate(-64%, 20%);
  }
  @media (max-width: 414px) {
    transform: translate(-62%, 13%);
  }
  @media (max-width: 375px) {
    transform: translate(-62%, 30%);
  }
  @media (max-width: 320px) {
    transform: translate(-62%, 5%);
  }
`;

const ChequeaVerifica = () => {
  const [buttonWidth, setButtonWidth] = useState(16.875);

  useEffect(() => {
    const handleButtonWidth = () => {
      const screenWidth = window.innerWidth;

      if (screenWidth < 321) {
        setButtonWidth(15);
      } else if (screenWidth < 376) {
        setButtonWidth(18);
      } else if (screenWidth < 415) {
        setButtonWidth(18);
      } else if (screenWidth < 768) {
        setButtonWidth(25);
      } else {
        setButtonWidth(16.875);
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

        <ImageStyled>
          <img
            src="https://res.cloudinary.com/dvafjaqbd/image/upload/v1714336859/MONTAJE/CHEQUEA/2-2_svonxv.png"
            alt="Perro con lentes"
          />
        </ImageStyled>

        <ContainerStyled>
          <Button width={buttonWidth}>IMÁGENES</Button>
          <Button width={buttonWidth}>VÍDEOS</Button>
          <Button width={buttonWidth}>DIRECCIONES IP</Button>
          <Button width={buttonWidth}>REDES SOCIALES</Button>
        </ContainerStyled>
      </SectionStyled>
    </>
  );
};

export default ChequeaVerifica;
