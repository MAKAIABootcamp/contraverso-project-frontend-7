import styled from "styled-components";
import "../../../fonts/fonts.css";
import InicioAprende from "../../components/Inicio/InicioAprende";
import InicioChequea from "../../components/Inicio/InicioChequea";
import InicioConfronta from "../../components/Inicio/InicioConfronta";
import InicioExpresa from "../../components/Inicio/InicioExpresa";
import InicioPodcast from "../../components/Inicio/InicioPodcast";
import InicioSomos from "../../components/Inicio/InicioSomos";
import InicioUnirme from "../../components/Inicio/InicioUnirme";

const StyledInicio = styled.div`
  background-color: #000000;
  display: flex;
  flex-direction: column;
  gap: 5vh;
`;

const Inicio = () => {
  return (
    <StyledInicio>
      <InicioSomos />
      <InicioUnirme />
      <InicioChequea />
      <InicioConfronta />
      <InicioExpresa />
      <InicioAprende />
      <InicioPodcast />
    </StyledInicio>
  );
};

export default Inicio;
