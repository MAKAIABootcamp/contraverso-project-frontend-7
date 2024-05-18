import { useDispatch } from 'react-redux';
import { getDataFiltered } from '../../../../app/features/filtersByButtons/filtersByButtonsActions';
import BusquedaInversa from "./ImagenCarousels/BusquedaInversa";
import { useEffect } from 'react';
import '../../../../../fonts/fonts.css';
import styled from 'styled-components';
import MetadatosImg from './ImagenCarousels/MetadatosImg';
import AnalisisDigital from './ImagenCarousels/AnalisisDigital';


const SectionStyled = styled.section`
  background-image: url("https://res.cloudinary.com/dvafjaqbd/image/upload/v1714336860/MONTAJE/CHEQUEA/8_bp66eb.png");
  background-size: cover;
  width: 100%;
  height: 95vh;
  scroll-snap-align: start;
  padding: 2% 6%;
  display: flex;
  flex-direction: column;
  gap: 4vh;

  h1 {
    font-family: 'MADE Soulmaze Outline';
    font-size: 3.5rem;
    font-style: italic;
  }

  @media screen and (max-width: 816px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

const DivStyled = styled.div`
  overflow-y: auto;
  padding: 0 4%;
  height: 65vh;
  
  &::-webkit-scrollbar {
    width: .8rem; 
  }

  &::-webkit-scrollbar-thumb {
    background-color: #4900DA;
    border-radius: 50px;
  }

  &::-webkit-scrollbar-track {
    background-color: #161616;
    border-radius: 50px;
    
}
`;




const Imagenes = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getDataFiltered({ collectionName: 'verificaImagenes', filterValue: 'metadatos' }));
    dispatch(getDataFiltered({ collectionName: 'verificaImagenes', filterValue: 'analisisDigital' }));
    dispatch(getDataFiltered({ collectionName: 'verificaImagenes', filterValue: 'busquedaInversa' }));
  }, [dispatch]);

  return (
    <SectionStyled>
      <h1>Imágenes</h1>
      <DivStyled>
        <BusquedaInversa />
        <MetadatosImg />
        <AnalisisDigital/>
      </DivStyled>
    </SectionStyled>
  );
}

export default Imagenes;