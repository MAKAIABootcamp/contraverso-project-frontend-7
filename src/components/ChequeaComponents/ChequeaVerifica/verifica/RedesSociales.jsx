import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getDataFiltered } from '../../../../app/features/filtersByButtons/filtersByButtonsActions';
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
    color: #161616;
    font-family: 'Founders Grotesk Bold';
    text-transform: uppercase;
    font-size: 2.1rem;
    padding-bottom: 1rem;
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

const RedesSociales = () => {
  const dataAnalisisDeCuentasTwitter = useSelector((store) => store.filtersByButtons.data.analisisDeCuentasTwitter);
  const analisisDeCuentasTwitterData = dataAnalisisDeCuentasTwitter.filter(item => item.category === 'analisisDeCuentasTwitter');

  const dataAnalisisDeCuentasMeta = useSelector((store) => store.filtersByButtons.data.analisisDeCuentasMeta);
  const analisisDeCuentasMetaData = dataAnalisisDeCuentasMeta.filter(item => item.category === 'analisisDeCuentasMeta');

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getDataFiltered({ collectionName: 'verificaRedesSociales', filterValue: 'analisisDeCuentasMeta' }));
    dispatch(getDataFiltered({ collectionName: 'verificaRedesSociales', filterValue: 'analisisDeCuentasTwitter' }));
  }, [dispatch]);

  return (
    <SectionStyled>
      <h1>Redes Sociales</h1>
      <DivStyled>
      <h2>Analisis De Cuentas Meta</h2>
      <CarouselsCheck getData={analisisDeCuentasMetaData}/>

      <h2>Analisis De Cuentas Twitter/X</h2>
      <CarouselsCheck getData={analisisDeCuentasTwitterData}/>

      </DivStyled>
    </SectionStyled>
  );
}

export default RedesSociales;
