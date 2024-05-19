import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getDataFiltered } from '../../../../app/features/filtersByButtons/filtersByButtonsActions';
import RevisarVideosCuadroPorCuadro from './VideosCarousels/RevisarVideosCuadroPorCuadro';
import AutenticidadDeLosVideos from './VideosCarousels/AutenticidadDeLosVideos';
import '../../../../../fonts/fonts.css';
import styled from 'styled-components';

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

  h2 {
    font-family: 'Founders Grotesk Bold';
    text-transform: uppercase;
    font-size: 2.1rem;
    padding-bottom: 1rem;
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

const Videos = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getDataFiltered({ collectionName: 'verificaVideos', filterValue: 'revisarVideosCuadroPorCuadro' }));
    dispatch(getDataFiltered({ collectionName: 'verificaVideos', filterValue: 'autenticidadDeLosVideos' }));
    dispatch(getDataFiltered({ collectionName: 'verificaVideos', filterValue: 'visorDeDatosDeYoutube' }));
  }, [dispatch]);

  return (
    <SectionStyled>
      <h1>Videos</h1>
      <DivStyled>
      <h2>Revisar Videos Cuadro Por Cuadro</h2>
        <RevisarVideosCuadroPorCuadro />
        <h2>Autenticidad De Los Videos</h2>
        <AutenticidadDeLosVideos />
      </DivStyled>
    </SectionStyled>
  );
}

export default Videos;
