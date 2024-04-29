import styled from "styled-components";
import "../../../fonts/fonts.css";

const StyledInicioUnirme = styled.div`
  background-image: url("https://res.cloudinary.com/dvafjaqbd/image/upload/v1714336886/MONTAJE/INICIO/2_duvvti.png");
  background-repeat: no-repeat;
  background-size: 100% 100%;
  height: 30rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  @media screen and (max-width: 480px) {
    flex-direction: column-reverse;
    align-items: center;
  }

`;

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 60%;
  padding-right: 5%;
  
`;
const StyledContainerText = styled.div`
  display: flex;
  flex-direction: column;
`;

const StyledButtonUnirme = styled.button`
  background-color: #1df4c8;
  color: #000000;
  padding: 1rem;
  font-family: "MADE Soulmaze";
  border: none;
  border-radius: 8px;
  align-self: center;
`;

const StyledImgIcono = styled.img`
width: 40%;
height: auto;
`;

const StyledImgLogo = styled.img`

align-self: flex-end;
`;

const StyledTexto = styled.p`
  color: #f1f1d8;
  background-color: #000000;
  
  font-size: x-large;

margin-bottom: 4%;
  
`;


const InicioUnirme = () => {
    return (
        <StyledInicioUnirme>
            <StyledImgIcono
                src="https://res.cloudinary.com/dvafjaqbd/image/upload/v1714336882/MONTAJE/INICIO/1-2_on2umt.png"
                alt="icono"
            ></StyledImgIcono>

            <StyledContainer>
                <StyledContainerText>
                    <StyledTexto>
                        ¡Aprende, exprésate y ayúdanos a
                    </StyledTexto>
                    <StyledTexto>
                        combatir la desinformación!

                    </StyledTexto>
                    <StyledButtonUnirme>Unirme</StyledButtonUnirme>
                </StyledContainerText>
                <StyledImgLogo src="https://res.cloudinary.com/dvafjaqbd/image/upload/v1714336881/MONTAJE/INICIO/1-7-2_lbpqjx.png" alt="logo"></StyledImgLogo>
            </StyledContainer>
        </StyledInicioUnirme>
    );
};

export default InicioUnirme;
