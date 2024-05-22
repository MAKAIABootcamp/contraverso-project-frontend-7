import { useDispatch } from 'react-redux';
import { getDataFiltered } from '../../../../app/features/filtersByButtons/filtersByButtonsActions';
import { useEffect } from 'react';
import '../../../../../fonts/fonts.css';
import styled from 'styled-components';
import CarouselsCheck from '../../../CarouselsCheck/CarouselsCheck';
import { useSelector } from 'react-redux';

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
  @media(max-width: 1000px) {
    padding-top: 4%;
  }

  h1 {
    font-family: 'MADE Soulmaze Outline';
    font-size: 3.5rem;
    font-style: italic;
    color: #161616;
    @media(max-width: 1000px) {
      font-size: 2.9rem;
    }
    @media (max-width: 512px) {
      font-size: 1.9rem;
    }
  }

  h2 {
    font-family: 'Founders Grotesk Bold';
    text-transform: uppercase;
    font-size: 2.1rem;
    padding-bottom: 1rem;
    color: #161616;
    @media(max-width: 1000px) {
      font-size: 1.8rem;
    }
    @media (max-width: 512px) {
      font-size: 1.4rem;
    }
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

  const dataBusquedaInversa = useSelector((store) => store.filtersByButtons.data.busquedaInversa);
  const busquedaInversaData = dataBusquedaInversa.filter(item => item.category === 'busquedaInversa');

  const dataMetadatos = useSelector((store) => store.filtersByButtons.data.metadatos);
  const metadatosData = dataMetadatos.filter(item => item.category === 'metadatos');

  const dataAnalisisDigital = useSelector((store) => store.filtersByButtons.data.analisisDigital);
  const analisisDigitalData = dataAnalisisDigital.filter(item => item.category === 'analisisDigital');



  useEffect(() => {
    dispatch(getDataFiltered({ collectionName: 'verificaImagenes', filterValue: 'metadatos' }));
    dispatch(getDataFiltered({ collectionName: 'verificaImagenes', filterValue: 'analisisDigital'}));
    dispatch(getDataFiltered({ collectionName: 'verificaImagenes', filterValue: 'busquedaInversa' }));
  }, [dispatch]);

  return (
    <SectionStyled>
      <h1>Imágenes</h1>
      <DivStyled>
      <h2>Busqueda inversa de imágenes</h2>
      <CarouselsCheck getData={busquedaInversaData}/>

        <h2>Metadatos</h2>
        <CarouselsCheck getData={metadatosData}/>

        <h2>Analisis Digital</h2>
        <CarouselsCheck getData={analisisDigitalData}/>

      </DivStyled>
    </SectionStyled>
  );
}

export default Imagenes;